        document.addEventListener('DOMContentLoaded', function() {
            // Mobile Menu Toggle
            const mobileToggle = document.querySelector('.mobile-toggle');
            const navMenu = document.querySelector('.nav-menu');
            
            mobileToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                this.querySelector('i').classList.toggle('fa-bars');
                this.querySelector('i').classList.toggle('fa-times');
            });
            
            // Search Toggle
            const searchButton = document.querySelector('.search-form button');
            const searchForm = document.querySelector('.search-form');
            
            searchButton.addEventListener('click', function(e) {
                e.preventDefault();
                searchForm.classList.toggle('active');
            });
            
            // Smooth Scrolling for Navigation Links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        if (navMenu.classList.contains('active')) {
                            navMenu.classList.remove('active');
                            mobileToggle.querySelector('i').classList.add('fa-bars');
                            mobileToggle.querySelector('i').classList.remove('fa-times');
                        }
                    }
                });
            });
            
            // Category Filtering
            const filterButtons = document.querySelectorAll('.filter-btn');
            const postCards = document.querySelectorAll('.post-card');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    const filterValue = this.getAttribute('data-filter');
                    
                    postCards.forEach(card => {
                        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
            
            // Theme Toggle
            const themeToggle = document.querySelector('.theme-toggle');
            const themeIcon = themeToggle.querySelector('i');
            
            themeToggle.addEventListener('click', function() {
                document.body.classList.toggle('dark-theme');
                
                if (document.body.classList.contains('dark-theme')) {
                    document.body.setAttribute('data-theme', 'dark');
                    themeIcon.classList.remove('fa-moon');
                    themeIcon.classList.add('fa-sun');
                } else {
                    document.body.removeAttribute('data-theme');
                    themeIcon.classList.remove('fa-sun');
                    themeIcon.classList.add('fa-moon');
                }
            });
            
            // Simulate Search Functionality
            const searchInputs = document.querySelectorAll('input[type="text"]');
            
            searchInputs.forEach(input => {
                input.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        alert('Search functionality would show results for: ' + this.value);
                        this.value = '';
                    }
                });
            });
        });
