/**
 * Job Notification Tracker - Premium App Skeleton
 * Strictly follows the premium design system.
 */

const App = {
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
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link && link.getAttribute('href') && link.getAttribute('href').startsWith('/')) {
                e.preventDefault();
                const path = link.getAttribute('href');
                this.navigate(path);
            }
        });

        window.addEventListener('popstate', () => {
            this.renderRoute(window.location.pathname);
        });

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
        if (this.navMenu) this.navMenu.classList.remove('show');
    },

    renderRoute(path) {
        this.updateActiveNav(path);
        window.scrollTo(0, 0);

        switch (path) {
            case '/':
                this.renderLanding();
                break;
            case '/dashboard':
                this.renderDashboard();
                break;
            case '/settings':
                this.renderSettings();
                break;
            case '/saved':
                this.renderSaved();
                break;
            case '/digest':
                this.renderDigest();
                break;
            case '/proof':
                this.renderProof();
                break;
            default:
                this.render404();
                break;
        }
    },

    renderLanding() {
        this.root.innerHTML = `
            <section class="hero-section">
                <div class="text-max-width" style="margin: 0 auto;">
                    <h1>Stop Missing The Right Jobs.</h1>
                    <p class="subtext">Precision-matched job discovery delivered daily at 9AM.</p>
                    <a href="/settings" class="btn btn-primary" style="padding: 16px 40px; font-size: 18px;">Start Tracking</a>
                </div>
            </section>
            
            <div class="main-grid" style="margin-top: -32px;">
                <section class="primary-workspace">
                    <div class="card" style="text-align: center; padding: var(--space-xl);">
                        <h2 class="card-title">Calm. Intentional. Efficient.</h2>
                        <p>Our tracker doesn't spam you. It waits, analyzes, and notifies you only when a perfect match appears.</p>
                    </div>
                </section>
                <aside class="secondary-panel">
                    <div class="card">
                        <h3 style="font-size: 16px; margin-bottom: 8px;">System Status</h3>
                        <p style="font-size: 14px; color: var(--color-success);">Ready for configuration</p>
                    </div>
                </aside>
            </div>
        `;
    },

    renderDashboard() {
        this.root.innerHTML = `
            <header class="context-header">
                <h1>Dashboard</h1>
                <p class="subtext">Overview of your current job matches and tracking status.</p>
            </header>
            <div class="main-grid">
                <section class="primary-workspace">
                    <div class="empty-state">
                        <h3>No jobs yet.</h3>
                        <p>In the next step, you will load a realistic dataset.</p>
                        <a href="/settings" class="btn btn-secondary">Configure Preferences</a>
                    </div>
                </section>
                <aside class="secondary-panel">
                    <div class="card">
                        <h3 style="font-size: 16px; margin-bottom: 16px;">Quick Stats</h3>
                        <p style="font-size: 14px; color: rgba(17,17,17,0.5);">Matches Found: 0</p>
                        <p style="font-size: 14px; color: rgba(17,17,17,0.5);">Days Tracking: 0</p>
                    </div>
                </aside>
            </div>
        `;
    },

    renderSettings() {
        this.root.innerHTML = `
            <header class="context-header">
                <h1>Settings</h1>
                <p class="subtext">Define your ideal role, location, and working style to fine-tune your notifications.</p>
            </header>
            <div class="main-grid">
                <section class="primary-workspace">
                    <div class="card">
                        <h2 class="card-title">Tracking Preferences</h2>
                        
                        <div class="form-group">
                            <label class="form-label">Role Keywords</label>
                            <input type="text" placeholder="e.g. Senior Frontend Engineer, Product Designer" />
                            <span style="font-size: 12px; color: rgba(17,17,17,0.4);">Use commas to separate multiple roles.</span>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Preferred Locations</label>
                            <input type="text" placeholder="e.g. San Francisco, London, Bangalore" />
                        </div>

                        <div class="form-group">
                            <label class="form-label">Work Mode</label>
                            <div class="radio-group mt-8">
                                <label class="radio-option">
                                    <input type="checkbox" name="mode" value="remote"> Remote
                                </label>
                                <label class="radio-option">
                                    <input type="checkbox" name="mode" value="hybrid"> Hybrid
                                </label>
                                <label class="radio-option">
                                    <input type="checkbox" name="mode" value="onsite"> Onsite
                                </label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Experience Level</label>
                            <select>
                                <option value="">Select level...</option>
                                <option value="entry">Entry Level (0-2 years)</option>
                                <option value="mid">Mid Level (2-5 years)</option>
                                <option value="senior">Senior Level (5+ years)</option>
                                <option value="lead">Staff / Lead / Management</option>
                            </select>
                        </div>

                        <div class="mt-24">
                            <button class="btn btn-primary">Save Preferences</button>
                        </div>
                    </div>
                </section>
                <aside class="secondary-panel">
                    <div class="card" style="background: rgba(139, 0, 0, 0.02);">
                        <h3 style="font-size: 16px; margin-bottom: 8px;">Confidence Score</h3>
                        <p style="font-size: 14px; color: rgba(17,17,17,0.6);">Complete your profile to see how well we can match roles to your intent.</p>
                    </div>
                </aside>
            </div>
        `;
    },

    renderSaved() {
        this.root.innerHTML = `
            <header class="context-header">
                <h1>Saved Jobs</h1>
                <p class="subtext">Your curated list of roles worth following up on.</p>
            </header>
            <div class="main-grid">
                <section class="primary-workspace">
                    <div class="empty-state">
                        <h3>No saved jobs.</h3>
                        <p>Browse your dashboard matches and save roles you are interested in for future reference.</p>
                        <a href="/dashboard" class="btn btn-secondary">Go to Dashboard</a>
                    </div>
                </section>
            </div>
        `;
    },

    renderDigest() {
        this.root.innerHTML = `
            <header class="context-header">
                <h1>Daily Digest</h1>
                <p class="subtext">Your 9AM summary of the best-matched opportunities found in the last 24 hours.</p>
            </header>
            <div class="main-grid">
                <section class="primary-workspace">
                    <div class="empty-state">
                        <h3>Your digest is empty.</h3>
                        <p>This feature will generate a daily summary once your tracking preferences are active and jobs are detected.</p>
                    </div>
                </section>
                <aside class="secondary-panel">
                    <div class="card">
                        <h3 style="font-size: 16px; margin-bottom: 8px;">Delivery Schedule</h3>
                        <p style="font-size: 14px; color: rgba(17,17,17,0.6);">Daily at 09:00 AM</p>
                    </div>
                </aside>
            </div>
        `;
    },

    renderProof() {
        this.root.innerHTML = `
            <header class="context-header">
                <h1>Artifact Proof</h1>
                <p class="subtext">Collection of development milestones and system validation reports.</p>
            </header>
            <div class="main-grid">
                <section class="primary-workspace">
                    <div class="card">
                        <h2 class="card-title">Milestone 1: Structure</h2>
                        <p style="color: rgba(17,17,17,0.6);">Clean app skeleton and routing complete.</p>
                    </div>
                </section>
            </div>
        `;
    },

    render404() {
        this.root.innerHTML = `
            <header class="context-header">
                <h1>Page Not Found</h1>
                <p class="subtext">The location you requested does not exist within our secure environment.</p>
            </header>
            <div class="main-grid">
                <section class="primary-workspace">
                    <div class="empty-state">
                        <a href="/" class="btn btn-secondary">Return to Safety</a>
                    </div>
                </section>
            </div>
        `;
    },

    updateActiveNav(path) {
        this.navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === path || (path === '/' && href === '/')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());
