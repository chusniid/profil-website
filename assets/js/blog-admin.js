// Blog Admin Panel JavaScript

class BlogAdmin {
    constructor() {
        this.currentTab = 'profile';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadData();
        this.showTab('profile');
    }

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

        // Post form
        const postForm = document.getElementById('post-form');
        if (postForm) {
            postForm.addEventListener('submit', (e) => this.handlePostSubmit(e));
        }

        // Add post button
        const addPostBtn = document.getElementById('add-post-btn');
        if (addPostBtn) {
            addPostBtn.addEventListener('click', () => this.showPostForm());
        }

        // Cancel post button
        const cancelPostBtn = document.getElementById('cancel-post-btn');
        if (cancelPostBtn) {
            cancelPostBtn.addEventListener('click', () => this.hidePostForm());
        }

        // Preview blog button
        const previewBlogBtn = document.getElementById('preview-blog-btn');
        if (previewBlogBtn) {
            previewBlogBtn.addEventListener('click', () => this.openPreview());
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
    }

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
        if (tabName === 'posts') {
            this.loadPostsList();
        }
    }

    loadData() {
        const data = this.getData();
        
        // Load profile data
        if (data.profile) {
            document.getElementById('blog-name').value = data.profile.blogName || '';
            document.getElementById('author-name').value = data.profile.authorName || '';
            document.getElementById('tagline').value = data.profile.tagline || '';
            document.getElementById('about-desc').value = data.profile.aboutDescription || '';
        }
    }

    getData() {
        const data = localStorage.getItem('blogData');
        return data ? JSON.parse(data) : {
            profile: {},
            posts: []
        };
    }

    saveData(data) {
        localStorage.setItem('blogData', JSON.stringify(data));
    }

    handleProfileSubmit(e) {
        e.preventDefault();
        
        const data = this.getData();
        
        data.profile = {
            blogName: document.getElementById('blog-name').value,
            authorName: document.getElementById('author-name').value,
            tagline: document.getElementById('tagline').value,
            aboutDescription: document.getElementById('about-desc').value
        };

        this.saveData(data);
        this.showAlert('Profile saved successfully! Refresh the blog to see changes.', 'success');
    }

    handlePostSubmit(e) {
        e.preventDefault();
        
        const data = this.getData();
        const post = {
            id: Date.now(),
            title: document.getElementById('post-title').value,
            excerpt: document.getElementById('post-excerpt').value,
            category: document.getElementById('post-category').value,
            image: document.getElementById('post-image').value,
            date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        };

        if (!data.posts) {
            data.posts = [];
        }

        data.posts.unshift(post); // Add to beginning
        this.saveData(data);
        
        this.hidePostForm();
        this.loadPostsList();
        this.showAlert('Post added successfully!', 'success');
    }

    showPostForm() {
        document.getElementById('post-form-container').classList.remove('hidden');
        document.getElementById('post-form').reset();
    }

    hidePostForm() {
        document.getElementById('post-form-container').classList.add('hidden');
    }

    loadPostsList() {
        const data = this.getData();
        const postsList = document.getElementById('posts-list');
        
        if (!postsList) return;

        postsList.innerHTML = '';

        if (data.posts && data.posts.length > 0) {
            data.posts.forEach(post => {
                const postItem = this.createPostListItem(post);
                postsList.appendChild(postItem);
            });
        } else {
            postsList.innerHTML = '<p class="text-gray-500">No posts yet. Add your first post!</p>';
        }
    }

    createPostListItem(post) {
        const div = document.createElement('div');
        div.className = 'flex items-center justify-between p-4 bg-gray-50 rounded-lg border';
        
        div.innerHTML = `
            <div class="flex items-center space-x-4">
                <img src="${post.image}" alt="${post.title}" class="w-20 h-20 object-cover rounded">
                <div>
                    <h3 class="font-semibold">${post.title}</h3>
                    <p class="text-gray-600 text-sm">${post.excerpt.substring(0, 60)}...</p>
                    <div class="flex items-center space-x-4 mt-2">
                        <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">${post.category}</span>
                        <span class="text-xs text-gray-500">${post.date}</span>
                    </div>
                </div>
            </div>
            <div class="flex space-x-2">
                <button onclick="blogAdmin.deletePost(${post.id})" class="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">
                    Delete
                </button>
            </div>
        `;

        return div;
    }

    deletePost(id) {
        if (!confirm('Are you sure you want to delete this post?')) {
            return;
        }

        const data = this.getData();
        data.posts = data.posts.filter(post => post.id !== id);
        this.saveData(data);
        
        this.loadPostsList();
        this.showAlert('Post deleted successfully!', 'success');
    }

    openPreview() {
        window.open('index.html', '_blank');
    }

    downloadBackup() {
        const data = this.getData();
        const dataStr = JSON.stringify(data, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `blog-backup-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        this.showAlert('Backup downloaded successfully!', 'success');
    }

    resetData() {
        if (!confirm('Are you sure you want to delete all data? This action cannot be undone.')) {
            return;
        }

        localStorage.removeItem('blogData');
        
        // Reset forms
        document.getElementById('profile-form').reset();
        this.loadPostsList();
        
        this.showAlert('All data has been reset!', 'success');
    }

    logout() {
        if (confirm('Are you sure you want to logout?')) {
            sessionStorage.removeItem('blogAdminAuthenticated');
            window.location.href = 'index.html';
        }
    }

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
}

// Initialize admin panel
let blogAdmin;
document.addEventListener('DOMContentLoaded', () => {
    blogAdmin = new BlogAdmin();
});

// Simple authentication
document.addEventListener('DOMContentLoaded', () => {
    const isAuthenticated = sessionStorage.getItem('blogAdminAuthenticated');
    if (!isAuthenticated) {
        const password = prompt('Enter admin password:');
        if (password === 'admin123') {
            sessionStorage.setItem('blogAdminAuthenticated', 'true');
        } else {
            alert('Wrong password!');
            window.location.href = 'index.html';
        }
    }
});