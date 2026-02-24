// Basic interactivity for Design System Showcase

document.addEventListener('DOMContentLoaded', () => {
    console.log('Design System Foundation Loaded.');

    // Helper for "Copy" buttons in the prompt box
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const originalText = btn.innerText;
            const textToCopy = btn.parentElement.innerText.replace('Copy', '').trim();
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                btn.innerText = 'Copied!';
                btn.style.backgroundColor = 'var(--color-success)';
                btn.style.color = 'white';
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                }, 2000);
            });
        });
    });

    // Handle dummy form submissions
    const primaryButton = document.querySelector('.secondary-panel .btn-primary');
    if (primaryButton) {
        primaryButton.addEventListener('click', () => {
            alert('Design System Phase Finalized. Ready for product features.');
        });
    }
});
