// Blog JavaScript - Inspired by Going Zero Waste

class BlogApp {
    constructor() {
        this.init();
    }

    init() {
        this.loadData();
        this.setupEventListeners();
        this.loadPosts();
    }

    // Load data from localStorage
    loadData() {
        const data = this.getData();
        
        if (data.profile) {
            const blogName = document.getElementById('blog-name');
            const heroName = document.getElementById('hero-name');
            const heroTagline = document.getElementById('hero-tagline');
            const aboutDescription = document.getElementById('about-description');

            if (blogName && data.profile.blogName) {
                blogName.textContent = data.profile.blogName;
            }
            if (heroName && data.profile.authorName) {
                heroName.textContent = data.profile.authorName;
            }
            if (heroTagline && data.profile.tagline) {
                heroTagline.textContent = data.profile.tagline;
            }
            if (aboutDescription && data.profile.aboutDescription) {
                aboutDescription.textContent = data.profile.aboutDescription;
            }
        }
    }

    // Get data from localStorage
    getData() {
        const data = localStorage.getItem('blogData');
        return data ? JSON.parse(data) : {
            profile: {},
            posts: []
        };
    }

    // Setup event listeners
    setupEventListeners() {
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', this.toggleMobileMenu);
        }

        // Smooth scrolling
        this.setupSmoothScrolling();

        // Newsletter form
        const newsletterForms = document.querySelectorAll('form');
        newsletterForms.forEach(form => {
            form.addEventListener('submit', this.handleNewsletterSubmit.bind(this));
        });
    }

    // Toggle mobile menu
    toggleMobileMenu() {
        const nav = document.querySelector('nav');
        nav.classList.toggle('mobile-menu-open');
    }

    // Setup smooth scrolling
    setupSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Load all posts
    loadPosts() {
        this.loadFeaturedPosts();
        this.loadPopularPosts();
        this.loadCategoryPosts();
    }

    // Load featured posts
    loadFeaturedPosts() {
        const container = document.getElementById('featured-posts');
        if (!container) return;

        const data = this.getData();
        const posts = data.posts && data.posts.length > 0 ? data.posts.slice(0, 3) : this.getDefaultFeaturedPosts();

        container.innerHTML = '';
        posts.forEach(post => {
            const postElement = this.createFeaturedPostCard(post);
            container.appendChild(postElement);
        });
    }

    // Load popular posts
    loadPopularPosts() {
        const container = document.getElementById('popular-posts');
        if (!container) return;

        const posts = this.getDefaultPopularPosts();

        container.innerHTML = '';
        posts.forEach(post => {
            const postElement = this.createPopularPostCard(post);
            container.appendChild(postElement);
        });
    }

    // Load category posts
    loadCategoryPosts() {
        this.loadSidebarPosts('beginners-posts', this.getDefaultBeginnersPosts());
        this.loadSidebarPosts('minimalism-posts', this.getDefaultMinimalismPosts());
        this.loadSidebarPosts('new-posts', this.getDefaultNewPosts());
    }

    // Load sidebar posts
    loadSidebarPosts(containerId, posts) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';
        posts.forEach(post => {
            const postElement = this.createSidebarPost(post);
            container.appendChild(postElement);
        });
    }

    // Create featured post card
    createFeaturedPostCard(post) {
        const div = document.createElement('div');
        div.className = 'post-card bg-white rounded-lg shadow-lg overflow-hidden';
        
        div.innerHTML = `
            <div class="image-overlay">
                <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover">
            </div>
            <div class="p-6">
                <span class="category-badge">${post.category}</span>
                <h3 class="text-xl font-serif font-bold mt-3 mb-2">${post.title}</h3>
                <p class="text-gray-600 mb-4">${post.excerpt}</p>
                <div class="flex items-center justify-between">
                    <span class="post-meta">${post.date}</span>
                    <a href="#" class="read-more">Read More →</a>
                </div>
            </div>
        `;

        return div;
    }

    // Create popular post card
    createPopularPostCard(post) {
        const div = document.createElement('div');
        div.className = 'post-card bg-white rounded-lg shadow overflow-hidden';
        
        div.innerHTML = `
            <div class="image-overlay">
                <img src="${post.image}" alt="${post.title}" class="w-full h-32 object-cover">
            </div>
            <div class="p-4">
                <h4 class="font-semibold mb-2 text-sm">${post.title}</h4>
                <span class="post-meta text-xs">${post.date}</span>
            </div>
        `;

        return div;
    }

    // Create sidebar post
    createSidebarPost(post) {
        const div = document.createElement('div');
        div.className = 'sidebar-post';
        
        div.innerHTML = `
            <a href="#" class="block hover:text-green-600 transition">
                <h4 class="font-semibold text-sm mb-1">${post.title}</h4>
                <span class="post-meta text-xs">${post.date}</span>
            </a>
        `;

        return div;
    }

    // Handle newsletter submit
    handleNewsletterSubmit(e) {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        
        if (email) {
            alert('Thank you for subscribing! 🌱');
            e.target.reset();
        }
    }

    // Default featured posts
    getDefaultFeaturedPosts() {
        return [
            {
                title: '10 Tips Hidup Minimalis untuk Pemula',
                excerpt: 'Mulai perjalanan minimalis Anda dengan tips sederhana yang mudah diterapkan dalam kehidupan sehari-hari.',
                image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop',
                category: 'Minimalism',
                date: 'March 1, 2024'
            },
            {
                title: 'Panduan Lengkap Zero Waste Living',
                excerpt: 'Pelajari cara mengurangi sampah dan hidup lebih berkelanjutan dengan panduan praktis ini.',
                image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop',
                category: 'Lifestyle',
                date: 'February 28, 2024'
            },
            {
                title: 'Resep Makanan Sehat & Ramah Lingkungan',
                excerpt: 'Kumpulan resep lezat yang baik untuk kesehatan dan planet kita.',
                image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
                category: 'Food',
                date: 'February 25, 2024'
            }
        ];
    }

    // Default popular posts
    getDefaultPopularPosts() {
        return [
            {
                title: 'Cara Membuat Kompos di Rumah',
                image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=200&fit=crop',
                date: 'Feb 20, 2024'
            },
            {
                title: 'DIY Natural Cleaning Products',
                image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300&h=200&fit=crop',
                date: 'Feb 18, 2024'
            },
            {
                title: 'Sustainable Fashion Guide',
                image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=300&h=200&fit=crop',
                date: 'Feb 15, 2024'
            },
            {
                title: 'Plastic-Free Kitchen Essentials',
                image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=300&h=200&fit=crop',
                date: 'Feb 12, 2024'
            }
        ];
    }

    // Default beginners posts
    getDefaultBeginnersPosts() {
        return [
            { title: 'Getting Started with Zero Waste', date: 'March 5, 2024' },
            { title: 'First Steps to Minimalism', date: 'March 3, 2024' },
            { title: 'Eco-Friendly Swaps for Beginners', date: 'March 1, 2024' }
        ];
    }

    // Default minimalism posts
    getDefaultMinimalismPosts() {
        return [
            { title: 'Decluttering Your Home', date: 'March 4, 2024' },
            { title: 'Minimalist Wardrobe Guide', date: 'March 2, 2024' },
            { title: 'Digital Minimalism Tips', date: 'February 28, 2024' }
        ];
    }

    // Default new posts
    getDefaultNewPosts() {
        return [
            { title: 'Latest Sustainable Living Trends', date: 'March 6, 2024' },
            { title: 'New Eco-Friendly Products Review', date: 'March 5, 2024' },
            { title: 'Recent Zero Waste Success Stories', date: 'March 4, 2024' }
        ];
    }
}

// Initialize the blog app
document.addEventListener('DOMContentLoaded', () => {
    new BlogApp();
});