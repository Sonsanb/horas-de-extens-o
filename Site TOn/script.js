document.addEventListener('DOMContentLoaded', () => {
    // Função para rolagem suave (smooth scrolling) quando clicar nos links do menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Rola suavemente para a seção
                window.scrollTo({
                    top: targetElement.offsetTop - document.getElementById('header').offsetHeight, // Ajuste para o menu fixo
                    behavior: 'smooth'
                });
            }
        });
    });
});