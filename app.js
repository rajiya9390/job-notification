/**
 * Job Notification App - Core Router & Navigation
 */

const routes = {
    '/': 'Dashboard',
    '/dashboard': 'Dashboard',
    '/saved': 'Saved',
    '/digest': 'Digest',
    '/settings': 'Settings',
    '/proof': 'Proof'
};

const appContent = document.getElementById('app-content');
const navMenu = document.getElementById('nav-menu');
const mobileToggle = document.getElementById('mobile-toggle');

/**
 * Renders the page content based on the current path
 * @param {string} path 
 */
function renderPage(path) {
    // Normalize path (handle root and trailing slashes)
    let normalizedPath = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;

    // Check if route exists
    const pageTitle = routes[normalizedPath];

    if (pageTitle) {
        appContent.innerHTML = `
            <section class="context-header">
                <h1>${pageTitle}</h1>
                <p class="subtext">This section will be built in the next step.</p>
            </section>
            <main class="main-layout">
                <div class="primary-workspace">
                    <div class="card" style="min-height: 300px; display: flex; align-items: center; justify-content: center; border-style: dashed;">
                        <p style="color: rgba(17,17,17,0.4);">Content Placeholder</p>
                    </div>
                </div>
                <aside class="secondary-panel">
                    <div class="card">
                        <h3>About ${pageTitle}</h3>
                        <p style="font-size: 16px; color: rgba(17,17,17,0.6);">
                            This workspace is reserved for ${pageTitle.toLowerCase()} features. 
                            The layout follows the strict 70/30 split enforced by the design system.
                        </p>
                    </div>
                </aside>
            </main>
        `;
    } else {
        // 404 Page
        appContent.innerHTML = `
            <section class="context-header">
                <h1>Page Not Found</h1>
                <p class="subtext">The page you are looking for does not exist.</p>
            </section>
            <main class="main-layout" style="display: block; text-align: center; padding-top: 64px;">
                <a href="/dashboard" class="btn btn-primary nav-link">Return to Dashboard</a>
            </main>
        `;
    }

    updateActiveLink(normalizedPath);
    window.scrollTo(0, 0);
}

/**
 * Updates the active state in the navigation bar
 * @param {string} path 
 */
function updateActiveLink(path) {
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === path || (path === '/' && href === '/dashboard')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Handle navigation clicks
 */
document.addEventListener('click', (e) => {
    const link = e.target.closest('.nav-link');
    if (link) {
        e.preventDefault();
        const url = link.getAttribute('href');

        // Only push state if it's a new path
        if (window.location.pathname !== url) {
            window.history.pushState({}, '', url);
            renderPage(url);
        }

        // Close mobile menu if open
        navMenu.classList.remove('open');
    }
});

/**
 * Handle back/forward buttons
 */
window.addEventListener('popstate', () => {
    renderPage(window.location.pathname);
});

/**
 * Mobile Menu Toggle
 */
if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
}

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    // Basic support for local file testing (if needed, though usually served via server)
    const initialPath = window.location.pathname;
    renderPage(initialPath === '' ? '/' : initialPath);
});
