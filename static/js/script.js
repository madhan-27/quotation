// Smooth page transitions
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in effect to all cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s`;
        card.style.opacity = '0';
        card.style.animationFillMode = 'forwards';
    });
    
    // Add hover effect to table rows
    const tableRows = document.querySelectorAll('.table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.01)';
            this.style.transition = 'all 0.3s ease';
        });
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Animate numbers counting up
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.innerText);
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.innerText = target;
                clearInterval(timer);
            } else {
                stat.innerText = Math.floor(current);
            }
        }, 20);
    });
});

// Form validation with animation
function validateForm(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
        if (!input.value) {
            input.style.border = '2px solid #f5576c';
            input.style.animation = 'shake 0.5s ease';
            setTimeout(() => {
                input.style.animation = '';
            }, 500);
        } else {
            input.style.border = '2px solid #4facfe';
        }
    });
}

// Shake animation for errors
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// Auto-save draft functionality
let autoSaveTimer;
function autoSave() {
    clearTimeout(autoSaveTimer);
    autoSaveTimer = setTimeout(() => {
        console.log('Auto-saving draft...');
        // Implement auto-save logic here
    }, 30000); // Auto-save every 30 seconds
}

// Add event listeners for auto-save
if (document.querySelector('#quoteForm')) {
    const form = document.querySelector('#quoteForm');
    form.addEventListener('input', autoSave);
}

// Print optimization
function optimizeForPrint() {
    const style = document.createElement('style');
    style.textContent = `
        @media print {
            body {
                background: white !important;
            }
            .no-print {
                display: none !important;
            }
        }
    `;
    document.head.appendChild(style);
}

// Tooltip initialization
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});