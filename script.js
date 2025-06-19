document.addEventListener('DOMContentLoaded', function() {
    const book = document.querySelector('.book');
    const bookLoader = document.getElementById('bookLoader');
    const mainContent = document.getElementById('mainContent');
    

    book.addEventListener('click', function() {

        book.classList.add('open');
        
        setTimeout(function() {
            bookLoader.classList.add('zoom-out');

            setTimeout(function() {
                bookLoader.style.display = 'none';
                mainContent.style.display = 'block';
                
                mainContent.style.animation = 'fadeIn 1s ease';
            }, 1500);
        }, 1500);
    });
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
});
