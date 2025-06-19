document.addEventListener('DOMContentLoaded', function() {
    const book = document.querySelector('.book');
    const bookLoader = document.getElementById('bookLoader');
    const mainContent = document.getElementById('mainContent');
    const ambientLight = document.querySelector('.ambient-light');
    
    // Add spine to the book for 3D effect
    const spine = document.createElement('div');
    spine.className = 'spine';
    book.appendChild(spine);

    book.addEventListener('click', function() {
        // Disable further clicks during animation
        book.style.pointerEvents = 'none';
        
        // Add gold shimmer effect on click
        const shimmer = document.createElement('div');
        shimmer.style.position = 'absolute';
        shimmer.style.width = '100%';
        shimmer.style.height = '100%';
        shimmer.style.top = '0';
        shimmer.style.left = '0';
        shimmer.style.background = 'radial-gradient(circle at center, rgba(201, 167, 105, 0.8) 0%, transparent 70%)';
        shimmer.style.opacity = '0';
        shimmer.style.transition = 'opacity 0.5s ease';
        book.appendChild(shimmer);
        
        // Trigger shimmer
        setTimeout(() => {
            shimmer.style.opacity = '1';
            setTimeout(() => {
                shimmer.style.opacity = '0';
                setTimeout(() => shimmer.remove(), 500);
            }, 300);
        }, 50);

        // Open book animation
        book.classList.add('open');
        
        // Ambient light animation
        ambientLight.style.transform = 'scale(1.5)';
        ambientLight.style.opacity = '0';
        
        // Content reveal sequence
        setTimeout(function() {
            bookLoader.classList.add('zoom-out');

            setTimeout(function() {
                bookLoader.style.display = 'none';
                mainContent.style.display = 'block';
                
                // Add fade-in effect to content
                setTimeout(() => {
                    mainContent.classList.add('fade-in');
                }, 50);
            }, 1500);
        }, 1500);
    });
    
    // Add hover effect
    book.addEventListener('mouseenter', function() {
        book.style.transform = 'translateZ(20px)';
        ambientLight.style.transform = 'scale(1.1)';
    });
    
    book.addEventListener('mouseleave', function() {
        if (!book.classList.contains('open')) {
            book.style.transform = 'translateZ(0)';
            ambientLight.style.transform = 'scale(1)';
        }
    });
    
    // Add keyframe animations dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

       
