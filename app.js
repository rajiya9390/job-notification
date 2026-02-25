/**
 * Job Notification App - Design System Foundation
 * Strictly follows the specified SaaS design philosophy.
 */

const App = {
    init() {
        this.renderDesignSystemPreview();
        this.setupInteractions();
    },

    renderDesignSystemPreview() {
        const root = document.getElementById('app-root');
        
        root.innerHTML = `
            <!-- CONTEXT HEADER -->
            <header class="context-header">
                <h1>Design System Foundation</h1>
                <p class="subtext">A calm, intentional, and confident visual language built for serious B2C applications. No noise, just clarity.</p>
            </header>

            <!-- MAIN GRID -->
            <div class="main-grid">
                <!-- PRIMARY WORKSPACE (70%) -->
                <section class="primary-workspace">
                    
                    <!-- TYPOGRAPHY CARD -->
                    <div class="card">
                        <h2 class="card-title">Typography & Spacing</h2>
                        <p>This body text uses <strong>Inter</strong> at 18px with a 1.7 line-height. Maximum text width is constrained to 720px to ensure optimal readability and a generous, confident feel.</p>
                        <p>Whitespace is intentional, utilizing a strict 8px-64px scale. This ensures a coherent rhythm across the entire interface without the clutter of random values.</p>
                    </div>

                    <!-- FORM COMPONENTS CARD -->
                    <div class="card">
                        <h2 class="card-title">Base Components</h2>
                        <div style="display: flex; flex-direction: column; gap: 24px;">
                            <div>
                                <label style="display: block; font-size: 14px; font-weight: 600; margin-bottom: 8px;">Primary Input Field</label>
                                <input type="text" placeholder="Enter your email address..." />
                            </div>
                            <div style="display: flex; gap: 16px;">
                                <button class="btn btn-primary">Primary Action</button>
                                <button class="btn btn-secondary">Secondary Action</button>
                            </div>
                        </div>
                    </div>

                    <!-- ERROR STATE EXAMPLE -->
                    <div class="card">
                        <h2 class="card-title">Error & Empty States</h2>
                        <div class="error-message">
                            <strong>Unable to save preferences.</strong> 
                            Please check your network connection and try again. We couldn't reach the secure notification server.
                        </div>
                        
                        <div class="empty-state mt-24">
                            <h3>No Notifications Yet</h3>
                            <p>Once you start tracking jobs, your updates will appear here in a clean, chronological feed.</p>
                            <button class="btn btn-secondary">Add Your First Job</button>
                        </div>
                    </div>

                </section>

                <!-- SECONDARY PANEL (30%) -->
                <aside class="secondary-panel">
                    
                    <div class="card">
                        <h2 class="card-title" style="font-size: 18px;">Implementation Guide</h2>
                        <p style="font-size: 15px; color: rgba(17,17,17,0.7);">Use these tokens to maintain consistency across the application.</p>
                        
                        <div class="mt-16">
                            <label style="display: block; font-size: 12px; font-weight: 600; text-transform: uppercase; color: rgba(17,17,17,0.4); margin-bottom: 4px;">Primary Accent</label>
                            <div class="prompt-box">
                                color: #8B0000;
                                <span class="copy-hint">Click to copy hex code</span>
                            </div>
                        </div>

                        <div class="mt-16">
                            <label style="display: block; font-size: 12px; font-weight: 600; text-transform: uppercase; color: rgba(17,17,17,0.4); margin-bottom: 4px;">Background Tone</label>
                            <div class="prompt-box">
                                background: #F7F6F3;
                                <span class="copy-hint">Click to copy hex code</span>
                            </div>
                        </div>

                        <div class="mt-24">
                            <button class="btn btn-primary" style="width: 100%;">Export Tokens</button>
                        </div>
                    </div>

                    <div class="card" style="background: rgba(74, 93, 78, 0.05); border-color: var(--color-success);">
                        <h3 style="font-size: 16px; color: var(--color-success); margin-bottom: 8px;">✓ System Validated</h3>
                        <p style="font-size: 14px; line-height: 1.5; margin: 0;">All components comply with the strict design philosophy and spacing constraints.</p>
                    </div>

                </aside>
            </div>
        `;
    },

    setupInteractions() {
        // Simple copy-to-clipboard simulation for the preview
        document.querySelectorAll('.prompt-box').forEach(box => {
            box.addEventListener('click', () => {
                const text = box.innerText.split('\n')[0].replace('color: ', '').replace('background: ', '').replace(';', '');
                navigator.clipboard.writeText(text).then(() => {
                    const hint = box.querySelector('.copy-hint');
                    const originalText = hint.innerText;
                    hint.innerText = 'Copied!';
                    hint.style.color = '#4A5D4E';
                    setTimeout(() => {
                        hint.innerText = originalText;
                        hint.style.color = 'rgba(17,17,17,0.4)';
                    }, 2000);
                });
            });
        });

        // Update top bar state for demonstration
        const statusBadge = document.getElementById('status-badge');
        if (statusBadge) {
            statusBadge.innerText = 'In Progress';
            statusBadge.classList.add('active');
        }

        const progressIndicator = document.getElementById('progress-indicator');
        if (progressIndicator) {
            progressIndicator.innerText = 'Design Phase: 1 / 1';
        }
    }
};

// Start the application
document.addEventListener('DOMContentLoaded', () => App.init());
