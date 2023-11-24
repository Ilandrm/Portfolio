function deplacerNom() {
    const nom = document.getElementById('nom');
    let marginLeftActuel = parseFloat(getComputedStyle(nom).marginLeft);

    function animationNom() {
        if (marginLeftActuel > 800) {
            marginLeftActuel -= 2; // Décrémente la valeur progressivement
            nom.style.marginLeft = `${marginLeftActuel}px`; // Applique la nouvelle valeur de marginLeft
            requestAnimationFrame(animationNom);
        }
    }

    // Appel initial de l'animation pour déplacer l'élément
    animationNom();
}

function deplacertitre() {
    const titre = document.getElementById('titre');
    let marginLeftActuel2 = parseFloat(getComputedStyle(titre).marginLeft);

    function animationtitre() {
        if (marginLeftActuel2 > 830) {
            marginLeftActuel2 -= 2; // Décrémente la valeur progressivement
            titre.style.marginLeft = `${marginLeftActuel2}px`; // Applique la nouvelle valeur de marginLeft
            requestAnimationFrame(animationtitre);
        }
    }

    // Appel initial de l'animation pour déplacer l'élément titre
    animationtitre();
}

function deplacerNav() {
    const nav = document.getElementById('nav');
    let marginLeftActuel3 = parseFloat(getComputedStyle(nav).marginLeft);

    function animationNav() {
        if (marginLeftActuel3 > 570) {
            marginLeftActuel3 -= 1.5; // Décrémente la valeur progressivement
            nav.style.marginLeft = `${marginLeftActuel3}px`; // Applique la nouvelle valeur de marginLeft
            requestAnimationFrame(animationNav);
        }
    }

    // Appel initial de l'animation pour déplacer l'élément titre
    animationNav();
}

function deplacerEns() {
    const ens = document.getElementById('ens');
    let marginTopActu = parseFloat(getComputedStyle(ens).marginTop);

    function animationEns() {
        if (marginTopActu > 40) {
            marginTopActu -= 1; // Décrémente la valeur progressivement
            ens.style.marginTop = `${marginTopActu}px`; // Applique la nouvelle valeur de marginLeft
            requestAnimationFrame(animationEns);
        }
    }

    // Appel initial de l'animation pour déplacer l'élément titre
    animationEns();
}
function fadeInImages() {
    const images = document.querySelectorAll('.logo-img');

    images.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = '1'; // Change progressivement l'opacité pour les rendre visibles
        }, 500 * index); // Délai progressif basé sur l'index de l'image
    });
}

// Appel de la fonction pour rendre les images visibles avec une animation
fadeInImages();



// Appels initiaux des fonctions pour déplacer les éléments
deplacerNom();
deplacertitre();
deplacerNav();
deplacerEns();
