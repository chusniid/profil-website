// Main JavaScript for portfolio website

class PortfolioApp {
    constructor() {
        this.init();
    }

    init() {
        this.loadData();
        this.setupEventListeners();
        this.setupSmoothScrolling();
        this.loadPortfolio();
    }

    // Load data from localStorage
    loadData() {
        const data = this.getData();
        
        // Update profile information
        if (data.profile) {
            const navName = document.getElementById('nav-name');
            const heroTitle = document.getElementById('hero-title');
            const heroSubtitle = document.getElementById('hero-subtitle');
            const aboutDescription = document.getElementById('about-description');

            if (navName && data.profile.name) {
                navName.textContent = data.profile.name;
            }
            if (heroTitle && data.profile.heroTitle) {
                heroTitle.textContent = data.profile.heroTitle;
            }
            if (heroSubtitle && data.profile.heroSubtitle) {
                heroSubtitle.textContent = data.profile.heroSubtitle;
            }
            if (aboutDescription && data.profile.aboutDescription) {
                aboutDescription.textContent = data.profile.aboutDescription;
            }
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

    // Setup event listeners
    setupEventListeners() {
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', this.toggleMobileMenu);
        }

        // Contact form
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', this.handleContactForm.bind(this));
        }

        // Hero button - Lihat Karya Saya
        const heroButton = document.querySelector('#home a[href="#portfolio"]');
        if (heroButton) {
            heroButton.addEventListener('click', (e) => {
                e.preventDefault();
                const portfolioSection = document.getElementById('portfolio');
                if (portfolioSection) {
                    const offsetTop = portfolioSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // Navigation active state
        this.setupNavigationHighlight();
    }

    // Toggle mobile menu
    toggleMobileMenu() {
        const nav = document.querySelector('nav');
        nav.classList.toggle('mobile-menu-open');
    }

    // Setup smooth scrolling for navigation
    setupSmoothScrolling() {
        const navLinks = document.querySelectorAll('nav a[href^="#"], a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Add visual feedback
                    targetElement.style.transform = 'scale(1.02)';
                    setTimeout(() => {
                        targetElement.style.transform = 'scale(1)';
                    }, 300);
                }
            });
        });
    }

    // Setup navigation highlight on scroll
    setupNavigationHighlight() {
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('nav a[href^="#"]');
            
            let currentSection = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('nav-active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('nav-active');
                }
            });
        });
    }

    // Load portfolio items
    loadPortfolio() {
        const data = this.getData();
        const portfolioGrid = document.getElementById('portfolio-grid');
        
        if (!portfolioGrid) return;

        portfolioGrid.innerHTML = '';

        if (data.portfolio && data.portfolio.length > 0) {
            data.portfolio.forEach(item => {
                const portfolioItem = this.createPortfolioItem(item);
                portfolioGrid.appendChild(portfolioItem);
            });
        } else {
            // Default portfolio items
            const defaultItems = [
                {
                    title: 'Website E-commerce Modern',
                    description: 'Platform jual beli online dengan fitur keranjang, pembayaran, dan dashboard admin yang lengkap',
                    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
                    demo: '#'
                },
                {
                    title: 'Aplikasi Mobile React Native',
                    description: 'Aplikasi mobile cross-platform untuk manajemen tugas dengan sinkronisasi cloud',
                    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
                    demo: '#'
                },
                {
                    title: 'Dashboard Analytics',
                    description: 'Dashboard real-time untuk monitoring data bisnis dengan visualisasi chart interaktif',
                    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
                    demo: '#'
                },
                {
                    title: 'Website Company Profile',
                    description: 'Website perusahaan dengan design modern, responsive, dan SEO optimized',
                    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
                    demo: '#'
                },
                {
                    title: 'Sistem Manajemen Sekolah',
                    description: 'Platform digital untuk mengelola data siswa, guru, dan administrasi sekolah',
                    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop',
                    demo: '#'
                },
                {
                    title: 'API Backend Node.js',
                    description: 'RESTful API dengan authentication, database integration, dan dokumentasi lengkap',
                    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
                    demo: '#'
                }
            ];

            defaultItems.forEach(item => {
                const portfolioItem = this.createPortfolioItem(item);
                portfolioGrid.appendChild(portfolioItem);
            });
        }
    }

    // Create portfolio item element
    createPortfolioItem(item) {
        const div = document.createElement('div');
        div.className = 'portfolio-card bg-white rounded-lg shadow-lg overflow-hidden';
        
        div.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${item.title}</h3>
                <p class="text-gray-600 mb-4">${item.description}</p>
                <a href="${item.demo}" class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Lihat Demo
                </a>
            </div>
        `;

        return div;
    }

    // Handle contact form submission
    handleContactForm(e) {
        e.preventDefault();
        
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;

        // Validasi form
        if (!name || !email || !message) {
            this.showNotification('Mohon lengkapi semua field!', 'error');
            return;
        }

        // Format pesan untuk WhatsApp
        const whatsappMessage = `Halo! Saya ${name}%0A%0AEmail: ${email}%0A%0APesan:%0A${message}%0A%0ATerima kasih!`;
        
        // Nomor WhatsApp (tanpa +62 dan tanpa 0 di depan)
        const phoneNumber = '6285106655664';
        
        // URL WhatsApp
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
        
        // Buka WhatsApp
        window.open(whatsappURL, '_blank');
        
        // Reset form dan tampilkan notifikasi
        e.target.reset();
        this.showNotification('Pesan akan dikirim melalui WhatsApp!', 'success');
    }

    // Utility function to show notifications
    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 p-4 rounded-lg text-white z-50 ${
            type === 'success' ? 'bg-green-500' : 'bg-red-500'
        }`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@master/src/smoothscroll.js';
    document.head.appendChild(script);
}