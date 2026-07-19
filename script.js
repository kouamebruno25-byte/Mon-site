// On sélectionne tous les éléments cibles
const elements = document.querySelectorAll('.nav-links a, .cta-button');

elements.forEach(el => {
    el.addEventListener('click', function() {
        // Ajoute la classe CSS pour l'animation
        this.classList.add('clique-effet');
        
        // Retire la classe après 200ms pour que l'effet disparaisse
        setTimeout(() => {
            this.classList.remove('clique-effet');
        }, 200);
    });
});

