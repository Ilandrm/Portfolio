let texte = document.getElementById("monTexte");
let positionX = 800;


function deplacerTexte() {
    positionX += 5;


    const limiteX = 512; // Limite spécifique en X
    

    if (positionX <= limiteX ) {
        return; // Arrête le déplacement si les limites sont atteintes
    }

    texte.style.left = positionX + "px";


    requestAnimationFrame(deplacerTexte);
}

deplacerTexte();
