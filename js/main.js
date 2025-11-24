     1	// ==========================================
     2	// Quantum Fengshui - Main JavaScript
     3	// ==========================================
     4	
     5	// Articles Data
     6	const articles = [
     7	    {
     8	        id: 1,
     9	        title: "量子糾纏與風水能量場的科學解讀",
    10	        category: "量子科學",
    11	        excerpt: "探索量子糾纏現象如何解釋風水中的能量共振原理，從科學角度理解環境與人的微妙連結。",
    12	        date: "2025-01-15"
    13	    },
    14	    {
    15	        id: 2,
    16	        title: "易經八卦與現代空間規劃",
    17	        category: "易經智慧",
    18	        excerpt: "深入剖析易經八卦的智慧，如何應用於現代居家與辦公空間的規劃設計。",
    19	        date: "2025-01-12"
    20	    },
    21	    {
    22	        id: 3,
    23	        title: "身心靈共振：打造個人能量磁場",
    24	        category: "身心靈",
    25	        excerpt: "學習如何透過冥想、呼吸與意識調整，提升個人能量頻率，創造正向磁場。",
    26	        date: "2025-01-10"
    27	    },
    28	    {
    29	        id: 4,
    30	        title: "居家風水的五大黃金法則",
    31	        category: "風水實務",
    32	        excerpt: "掌握這五個關鍵原則，讓您的居家環境成為滋養生命能量的理想空間。",
    33	        date: "2025-01-08"
    34	    },
    35	    {
    36	        id: 5,
    37	        title: "辦公室風水：提升事業運的秘訣",
    38	        category: "事業發展",
    39	        excerpt: "從座位選擇到空間布局，全面優化辦公環境，為事業發展注入正能量。",
    40	        date: "2025-01-05"
    41	    },
    42	    {
    43	        id: 6,
    44	        title: "色彩能量學：用顏色改變磁場",
    45	        category: "能量調整",
    46	        excerpt: "不同顏色擁有不同的振動頻率，學習如何運用色彩能量提升生活品質。",
    47	        date: "2025-01-03"
    48	    }
    49	];
    50	
    51	// Render Articles Function
    52	function renderArticles() {
    53	    const container = document.getElementById('articles-container');
    54	    if (!container) return;
    55	
    56	    container.innerHTML = articles.map(article => `
    57	        <div class="article-card">
    58	            <div class="article-category">${article.category}</div>
    59	            <h3 class="article-title">${article.title}</h3>
    60	            <p class="article-excerpt">${article.excerpt}</p>
    61	            <div class="article-date">${article.date}</div>
    62	        </div>
    63	    `).join('');
    64	}
    65	
    66	// Smooth Scroll Function
    67	function initSmoothScroll() {
    68	    // Smooth scroll for anchor links
    69	    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    70	        anchor.addEventListener('click', function (e) {
    71	            e.preventDefault();
    72	            const target = document.querySelector(this.getAttribute('href'));
    73	            if (target) {
    74	                target.scrollIntoView({
    75	                    behavior: 'smooth',
    76	                    block: 'start'
    77	                });
    78	            }
    79	        });
    80	    });
    81	
    82	    // Active nav link on scroll
    83	    window.addEventListener('scroll', () => {
    84	        let current = '';
    85	        const sections = document.querySelectorAll('section[id]');
    86	        
    87	        sections.forEach(section => {
    88	            const sectionTop = section.offsetTop;
    89	            const sectionHeight = section.clientHeight;
    90	            if (scrollY >= (sectionTop - 200)) {
    91	                current = section.getAttribute('id');
    92	            }
    93	        });
    94	
    95	        document.querySelectorAll('.nav-links a').forEach(link => {
    96	            link.classList.remove('active');
    97	            if (link.getAttribute('href') === '#' + current) {
    98	                link.classList.add('active');
    99	            }
   100	        });
   101	    });
   102	}
   103	
   104	// Initialize on DOM Ready
   105	if (document.readyState === 'loading') {
   106	    document.addEventListener('DOMContentLoaded', () => {
   107	        renderArticles();
   108	        initSmoothScroll();
   109	    });
   110	} else {
   111	    renderArticles();
   112	    initSmoothScroll();
   113	}
   114	
