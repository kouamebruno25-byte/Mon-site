// On sélectionne tous les liens du menu ET le bouton principal
const tousLesBoutons = document.querySelectorAll('.nav-links a, .cta-button');

tousLesBoutons.forEach(bouton => {
    bouton.addEventListener('click', function() {
        // Applique l'effet de couleur
        this.style.color = "#007bff"; 
        
        // Applique une petite animation de réduction (effet "clic")
        this.style.transform = "scale(0.95)";
        
        // Remet tout à la normale après 300ms
        setTimeout(() => {
            this.style.color = ""; // "" permet de revenir à la couleur définie dans le CSS
            this.style.transform = "scale(1)";
        }, 300);
    });
});

