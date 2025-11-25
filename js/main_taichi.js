// ==========================================
// Quantum Fengshui - Main JavaScript (Updated)
// ==========================================

// Articles Data
const articles = [
    {
        id: 1,
        title: "量子糾纏與風水能量場的科學解讀",
        category: "量子科學",
        excerpt: "探索量子糾纏現象如何解釋風水中的能量共振原理，從科學角度理解環境與人的微妙連結。",
        date: "2025-01-15"
    },
    {
        id: 2,
        title: "易經八卦與現代空間規劃",
        category: "易經智慧",
        excerpt: "深入剖析易經八卦的智慧，如何應用於現代居家與辦公空間的規劃設計。",
        date: "2025-01-12"
    },
    {
        id: 3,
        title: "身心靈共振：打造個人能量磁場",
        category: "整合身心靈",
        excerpt: "學習如何透過冥想、呼吸與意識調整，提升個人能量頻率，創造正向磁場。",
        date: "2025-01-10"
    },
    {
        id: 4,
        title: "居家風水的五大黃金法則",
        category: "風水實務",
        excerpt: "掌握這五個關鍵原則，讓您的居家環境成為滋養生命能量的理想空間。",
        date: "2025-01-08"
    },
    {
        id: 5,
        title: "辦公室風水：提升事業運的秘訣",
        category: "事業發展",
        excerpt: "從座位選擇到空間布局，全面優化辦公環境，為事業發展注入正能量。",
        date: "2025-01-05"
    },
    {
        id: 6,
        title: "色彩能量學：用顏色改變磁場",
        category: "能量調整",
        excerpt: "不同顏色擁有不同的振動頻率，學習如何運用色彩能量提升生活品質。",
        date: "2025-01-03"
    }
];

// Render Articles Function
function renderArticles() {
    const container = document.getElementById('articles-grid');
    if (!container) return;

    container.innerHTML = articles.map(article => `
        <div class="article-card">
            <div class="article-category">${article.category}</div>
            <h3 class="article-title">${article.title}</h3>
            <p class="article-excerpt">${article.excerpt}</p>
            <div class="article-date">
                <i class="far fa-calendar-alt"></i>
                ${article.date}
            </div>
        </div>
    `).join('');
}

// Mobile Menu Toggle
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.nav-menu');
    
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            const icon = toggle.querySelector('i');
            if (menu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                const icon = toggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
}

// Smooth Scroll Function
function initSmoothScroll() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Navbar Background on Scroll
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 15, 35, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(15, 15, 35, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        }
    });
}

// Intersection Observer for Fade-in Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards
    document.querySelectorAll('.article-card, .about-card, .service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// WhatsApp Button Interaction
function initWhatsAppButton() {
    const whatsappButton = document.querySelector('.whatsapp-float');
    if (!whatsappButton) return;

    // Add title/tooltip
    whatsappButton.setAttribute('title', 'WhatsApp 即時咨詢');

    // Track clicks (optional - for analytics)
    whatsappButton.addEventListener('click', () => {
        console.log('WhatsApp button clicked');
        // You can add analytics tracking here
    });
}

// Initialize All Functions
function init() {
    renderArticles();
    initMobileMenu();
    initSmoothScroll();
    initNavbarScroll();
    initScrollAnimations();
    initWhatsAppButton();
    
    console.log('Quantum Fengshui website initialized successfully!');
}

// Initialize on DOM Ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            const menu = document.querySelector('.nav-menu');
            const toggle = document.querySelector('.mobile-menu-toggle');
            if (menu) menu.classList.remove('active');
            if (toggle) {
                const icon = toggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }
    }, 250);
});
