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

const btnTop = document.getElementById('btn-top');

// Afficher/Cacher le bouton selon le scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
});

// Action au clic : remonter en haut
btnTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

