const images = document.querySelectorAll('.logo-img');
images.forEach((img, index) => {
    setTimeout(() => {
        img.style.opacity = '1'; 
    }, 500 * index); 
});

const nom = document.getElementById('nom');
nom.style.marginLeft = '800px';
const titre = document.getElementById('titre');
titre.style.marginLeft = '830px';
const nav = document.getElementById('nav');
nav.style.marginLeft = '570px';

const ensButton = document.getElementById('ensbutton');
let marginLeftActuelens = parseFloat(getComputedStyle(ensButton).marginLeft);

const buttonB = document.getElementById('back');
buttonB.addEventListener('click', AfficheBack);
const bacKTxt = document.getElementById('txtb');

const buttonF = document.getElementById('front');
buttonF.addEventListener('click', AfficheFront);
const frontTxt = document.getElementById('txtf');

const buttonDB = document.getElementById('DB');
buttonDB.addEventListener('click', AfficheDB);
const dbTxt = document.getElementById('txtDB');

const buttonO = document.getElementById('outil');
buttonO.addEventListener('click', AfficheO);
const otxt = document.getElementById('txto');

function AfficheBack() {
    if (marginLeftActuelens > 295) {
        marginLeftActuelens -= 15;
        ensButton.style.marginLeft = `${marginLeftActuelens}px`;
        requestAnimationFrame(AfficheBack);
    }
    if (marginLeftActuelens <= 295) {
        buttonB.style.color = 'gray';
        buttonF.style.color = 'rgb(105, 166, 168)';
        buttonDB.style.color = 'rgb(75, 1, 109)';
        buttonO.style.color = 'black';
        otxt.style.opacity = '0';
        frontTxt.style.opacity = '0';
        bacKTxt.style.opacity = '1';
        dbTxt.style.opacity = '0';
    }
}

function AfficheFront() {
    if (marginLeftActuelens > 295) {
        marginLeftActuelens -= 15;
        ensButton.style.marginLeft = `${marginLeftActuelens}px`;
        requestAnimationFrame(AfficheFront);
    }
    if (marginLeftActuelens <= 295) {
        buttonF.style.color = 'gray';
        buttonB.style.color = 'rgb(255, 136, 0)';
        buttonDB.style.color = 'rgb(75, 1, 109)';
        buttonO.style.color = 'black';

        otxt.style.opacity = '0';
        frontTxt.style.opacity = '1';
        bacKTxt.style.opacity = '0';
        dbTxt.style.opacity = '0';
    }
}
function AfficheDB() {
    if (marginLeftActuelens > 295) {
        marginLeftActuelens -= 15;
        ensButton.style.marginLeft = `${marginLeftActuelens}px`;
        requestAnimationFrame(AfficheDB);
    }
    if (marginLeftActuelens <= 295) {
        buttonF.style.color = 'rgb(105, 166, 168)';
        buttonB.style.color = 'rgb(255, 136, 0)';
        buttonDB.style.color = "gray";
        buttonO.style.color = 'black';

        otxt.style.opacity = '0';
        dbTxt.style.opacity = '1';
        frontTxt.style.opacity = '0';
        bacKTxt.style.opacity = '0';
    }
}

function AfficheO() {
    if (marginLeftActuelens > 295) {
        marginLeftActuelens -= 15;
        ensButton.style.marginLeft = `${marginLeftActuelens}px`;
        requestAnimationFrame(AfficheO);
    }
    if (marginLeftActuelens <= 295) {
        buttonF.style.color = 'rgb(105, 166, 168)';
        buttonB.style.color = 'rgb(255, 136, 0)';
        buttonO.style.color = "gray";
        buttonDB.style.color = "rgb(75, 1, 109)";

        otxt.style.opacity = '1'
        dbTxt.style.opacity = '0';
        frontTxt.style.opacity = '0';
        bacKTxt.style.opacity = '0';
    }
}
const timelineItems = document.querySelectorAll('.timeline-item');

// Fonction pour animer les éléments de la timeline
function animateTimelineItems() {
    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < window.innerHeight - 100) {
            item.classList.add('show');
        }
    });
}

// Événement de scroll pour déclencher l'animation
window.addEventListener('scroll', animateTimelineItems);

// Lance l'animation au chargement de la page
animateTimelineItems();