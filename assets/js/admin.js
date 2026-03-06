// Admin panel JavaScript

class AdminPanel {
    constructor() {
        this.currentTab = 'profile';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadData();
        this.showTab('profile');
    }

    // Setup all event listeners
    setupEventListeners() {
        // Tab navigation
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tab = e.target.getAttribute('data-tab');
                this.showTab(tab);
            });
        });

        // Profile form
        const profileForm = document.getElementById('profile-form');
        if (profileForm) {
            profileForm.addEventListener('submit', (e) => this.handleProfileSubmit(e));
        }

        // Portfolio form
        const portfolioForm = document.getElementById('portfolio-form');
        if (portfolioForm) {
            portfolioForm.addEventListener('submit', (e) => this.handlePortfolioSubmit(e));
        }

        // Add portfolio button
        const addPortfolioBtn = document.getElementById('add-portfolio-btn');
        if (addPortfolioBtn) {
            addPortfolioBtn.addEventListener('click', () => this.showPortfolioForm());
        }

        // Cancel portfolio button
        const cancelPortfolioBtn = document.getElementById('cancel-portfolio-btn');
        if (cancelPortfolioBtn) {
            cancelPortfolioBtn.addEventListener('click', () => this.hidePortfolioForm());
        }

        // Backup button
        const backupBtn = document.getElementById('backup-btn');
        if (backupBtn) {
            backupBtn.addEventListener('click', () => this.downloadBackup());
        }

        // Reset button
        const resetBtn = document.getElementById('reset-btn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetData());
        }

        // Logout button
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.logout());
        }

        // Preview button
        const previewBtn = document.getElementById('preview-btn');
        if (previewBtn) {
            previewBtn.addEventListener('click', () => this.openPreview());
        }
    }

    // Show specific tab
    showTab(tabName) {
        // Hide all tabs
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.add('hidden');
        });

        // Remove active class from all buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Show selected tab
        const selectedTab = document.getElementById(`${tabName}-tab`);
        if (selectedTab) {
            selectedTab.classList.remove('hidden');
        }

        // Add active class to selected button
        const selectedBtn = document.querySelector(`[data-tab="${tabName}"]`);
        if (selectedBtn) {
            selectedBtn.classList.add('active');
        }

        this.currentTab = tabName;

        // Load tab-specific data
        if (tabName === 'portfolio') {
            this.loadPortfolioList();
        }
    }

    // Load data from localStorage
    loadData() {
        const data = this.getData();
        
        // Load profile data
        if (data.profile) {
            document.getElementById('profile-name').value = data.profile.name || '';
            document.getElementById('hero-title-input').value = data.profile.heroTitle || '';
            document.getElementById('hero-subtitle-input').value = data.profile.heroSubtitle || '';
            document.getElementById('about-desc-input').value = data.profile.aboutDescription || '';
        }
    }

    // Get data from localStorage
    getData() {
        const data = localStorage.getItem('portfolioData');
        return data ? JSON.parse(data) : {
            profile: {},
            portfolio: []
        };
    }

    // Save data to localStorage
    saveData(data) {
        localStorage.setItem('portfolioData', JSON.stringify(data));
    }

    // Handle profile form submission
    handleProfileSubmit(e) {
        e.preventDefault();
        
        const data = this.getData();
        
        data.profile = {
            name: document.getElementById('profile-name').value,
            heroTitle: document.getElementById('hero-title-input').value,
            heroSubtitle: document.getElementById('hero-subtitle-input').value,
            aboutDescription: document.getElementById('about-desc-input').value
        };

        this.saveData(data);
        this.showAlert('Profil berhasil disimpan! Refresh halaman utama untuk melihat perubahan.', 'success');
        
        // Update preview in admin if elements exist
        this.updatePreview(data.profile);
    }

    // Handle portfolio form submission
    handlePortfolioSubmit(e) {
        e.preventDefault();
        
        const data = this.getData();
        const portfolioItem = {
            id: Date.now(),
            title: document.getElementById('project-title').value,
            description: document.getElementById('project-description').value,
            image: document.getElementById('project-image').value,
            demo: document.getElementById('project-demo').value
        };

        if (!data.portfolio) {
            data.portfolio = [];
        }

        data.portfolio.push(portfolioItem);
        this.saveData(data);
        
        this.hidePortfolioForm();
        this.loadPortfolioList();
        this.showAlert('Proyek berhasil ditambahkan!', 'success');
    }

    // Show portfolio form
    showPortfolioForm() {
        document.getElementById('portfolio-form-container').classList.remove('hidden');
        document.getElementById('portfolio-form').reset();
    }

    // Hide portfolio form
    hidePortfolioForm() {
        document.getElementById('portfolio-form-container').classList.add('hidden');
    }

    // Load portfolio list in admin
    loadPortfolioList() {
        const data = this.getData();
        const portfolioList = document.getElementById('portfolio-list');
        
        if (!portfolioList) return;

        portfolioList.innerHTML = '';

        if (data.portfolio && data.portfolio.length > 0) {
            data.portfolio.forEach(item => {
                const portfolioItem = this.createPortfolioListItem(item);
                portfolioList.appendChild(portfolioItem);
            });
        } else {
            portfolioList.innerHTML = '<p class="text-gray-500">Belum ada proyek yang ditambahkan.</p>';
        }
    }

    // Create portfolio list item for admin
    createPortfolioListItem(item) {
        const div = document.createElement('div');
        div.className = 'portfolio-item flex items-center justify-between p-4 bg-white rounded-lg border';
        
        div.innerHTML = `
            <div class="flex items-center space-x-4">
                <img src="${item.image}" alt="${item.title}" class="w-16 h-16 object-cover rounded">
                <div>
                    <h3 class="font-semibold">${item.title}</h3>
                    <p class="text-gray-600 text-sm">${item.description}</p>
                </div>
            </div>
            <div class="flex space-x-2">
                <button onclick="adminPanel.editPortfolioItem(${item.id})" class="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
                    Edit
                </button>
                <button onclick="adminPanel.deletePortfolioItem(${item.id})" class="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">
                    Hapus
                </button>
            </div>
        `;

        return div;
    }

    // Edit portfolio item
    editPortfolioItem(id) {
        const data = this.getData();
        const item = data.portfolio.find(p => p.id === id);
        
        if (item) {
            document.getElementById('project-title').value = item.title;
            document.getElementById('project-description').value = item.description;
            document.getElementById('project-image').value = item.image;
            document.getElementById('project-demo').value = item.demo;
            
            this.showPortfolioForm();
            
            // Remove the item so it will be re-added when form is submitted
            this.deletePortfolioItem(id, false);
        }
    }

    // Delete portfolio item
    deletePortfolioItem(id, showAlert = true) {
        if (showAlert && !confirm('Apakah Anda yakin ingin menghapus proyek ini?')) {
            return;
        }

        const data = this.getData();
        data.portfolio = data.portfolio.filter(item => item.id !== id);
        this.saveData(data);
        
        this.loadPortfolioList();
        
        if (showAlert) {
            this.showAlert('Proyek berhasil dihapus!', 'success');
        }
    }

    // Download backup
    downloadBackup() {
        const data = this.getData();
        const dataStr = JSON.stringify(data, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `portfolio-backup-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        this.showAlert('Backup berhasil diunduh!', 'success');
    }

    // Reset all data
    resetData() {
        if (!confirm('Apakah Anda yakin ingin menghapus semua data? Tindakan ini tidak dapat dibatalkan.')) {
            return;
        }

        localStorage.removeItem('portfolioData');
        
        // Reset forms
        document.getElementById('profile-form').reset();
        this.loadPortfolioList();
        
        this.showAlert('Semua data berhasil dihapus!', 'success');
    }

    // Logout
    logout() {
        if (confirm('Apakah Anda yakin ingin logout?')) {
            window.location.href = 'index.html';
        }
    }

    // Show alert message
    showAlert(message, type = 'success') {
        // Remove existing alerts
        const existingAlerts = document.querySelectorAll('.alert');
        existingAlerts.forEach(alert => alert.remove());

        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.textContent = message;
        
        // Insert at the top of the main content
        const mainContent = document.querySelector('.max-w-7xl');
        if (mainContent) {
            mainContent.insertBefore(alert, mainContent.firstChild);
        }

        // Auto remove after 5 seconds
        setTimeout(() => {
            alert.remove();
        }, 5000);
    }

    // Open preview in new tab
    openPreview() {
        window.open('index.html', '_blank');
    }

    // Update preview (for future use)
    updatePreview(profileData) {
        // This function can be used to show live preview in admin
        console.log('Profile updated:', profileData);
    }

    // Utility function to validate form
    validateForm(formElement) {
        const inputs = formElement.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('form-error');
                isValid = false;
            } else {
                input.classList.remove('form-error');
            }
        });

        return isValid;
    }
}

// Initialize admin panel when DOM is loaded
let adminPanel;
document.addEventListener('DOMContentLoaded', () => {
    adminPanel = new AdminPanel();
});

// Simple authentication check (in real app, use proper authentication)
document.addEventListener('DOMContentLoaded', () => {
    const isAuthenticated = sessionStorage.getItem('adminAuthenticated');
    if (!isAuthenticated) {
        const password = prompt('Masukkan password admin:');
        if (password === 'admin123') {
            sessionStorage.setItem('adminAuthenticated', 'true');
        } else {
            alert('Password salah!');
            window.location.href = 'index.html';
        }
    }
});