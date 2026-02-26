/**
 * Job Notification App - Route Skeleton & Shared Shell
 * Implements a clean, client-side router following the premium design system.
 */

const App = {
    routes: {
        '/': 'Home',
        '/dashboard': 'Dashboard',
        '/saved': 'Saved',
        '/digest': 'Digest',
        '/settings': 'Settings',
        '/proof': 'Proof'
    },

    init() {
        this.cacheDOM();
        this.bindEvents();
        this.handleInitialRoute();
    },

    cacheDOM() {
        this.root = document.getElementById('app-root');
        this.mobileToggle = document.getElementById('mobile-toggle');
        this.navMenu = document.getElementById('nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
    },

    bindEvents() {
        // Intercept all link clicks for client-side routing
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link && link.getAttribute('href') && link.getAttribute('href').startsWith('/')) {
                e.preventDefault();
                const path = link.getAttribute('href');
                this.navigate(path);
            }
        });

        // Handle browser back/forward buttons
        window.addEventListener('popstate', () => {
            this.renderRoute(window.location.pathname);
        });

        // Mobile menu toggle
        if (this.mobileToggle) {
            this.mobileToggle.addEventListener('click', () => {
                this.navMenu.classList.toggle('show');
            });
        }
    },

    handleInitialRoute() {
        this.renderRoute(window.location.pathname);
    },

    navigate(path) {
        if (window.location.pathname === path) return;

        window.history.pushState({}, '', path);
        this.renderRoute(path);

        // Close mobile menu if open
        if (this.navMenu) {
            this.navMenu.classList.remove('show');
        }
    },

    renderRoute(path) {
        const pageName = this.routes[path];

        if (pageName) {
            this.renderPlaceholder(pageName);
            this.updateActiveNav(path);
        } else {
            this.render404();
            this.updateActiveNav(null);
        }

        // Always scroll to top on navigation
        window.scrollTo(0, 0);
    },

    renderPlaceholder(name) {
        this.root.innerHTML = `
            <header class="context-header">
                <h1>${name}</h1>
                <p class="subtext">This section will be built in the next step.</p>
            </header>
            <div class="main-grid">
                <section class="primary-workspace">
                    <div class="empty-state">
                        <p>No content available yet.</p>
                    </div>
                </section>
                <aside class="secondary-panel">
                    <div class="card">
                        <h2 class="card-title" style="font-size: 16px;">Next Phase</h2>
                        <p style="font-size: 14px; color: rgba(17,17,17,0.6);">
                            Implementation of core business logic and data persistence strategies.
                        </p>
                    </div>
                </aside>
            </div>
        `;
    },

    render404() {
        this.root.innerHTML = `
            <header class="context-header">
                <h1>Page Not Found</h1>
                <p class="subtext">The page you are looking for does not exist.</p>
            </header>
            <div class="main-grid">
                <section class="primary-workspace">
                    <div class="empty-state">
                        <p>We couldn't find the location you requested.</p>
                        <a href="/" class="btn btn-secondary mt-16">Return Home</a>
                    </div>
                </section>
            </div>
        `;
    },

    updateActiveNav(path) {
        this.navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === path) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => App.init());
