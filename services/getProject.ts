import {ref} from "vue";

export const getProjects =  () => {
    return ref([
        {
            name: "Order Book",
            src: "OrderBook.png",
            type: "desktop",
            pin: true,
            years: 2026,
            description: "Ce projet consiste à développer un moteur de trading ultra-rapide capable de traiter des millions de transactions avec une réactivité quasi instantanée. Grâce à une architecture optimisée, il garantit une exécution des ordres fluide et une précision maximale, répondant aux exigences de performance les plus strictes de la finance moderne.",
            technologies: ["C++"],
            link: "https://github.com/Ilandrm/Order_adress_book"
        },
        {
            name: "OnAPlate",
            src: "OnAPlate.png",
            type: "web",
            etat:"IP",
            pin:true,
            years: 2026,
            description: "OnAPlate est un générateur de SaaS modulaire qui permet aux développeurs d'assembler leur stack technique et leurs fonctionnalités (Stripe, Auth, i18n) pour obtenir un boilerplate prêt pour la production",
            technologies: ["Nuxt", "Laravel"],
        },
        {
            name: "Index inversé",
            type: "web",
            years: 2024,
            description: "Conception d'un algorithme d'index inversé pour moteur de recherche\n" +
                "\n",
            technologies: ["Php"],
            link: "https://github.com/Ilandrm/InvertedIndex"
        },
        {
            name: "Petit Bach",
            src: "icon_petitbach.png",
            type: "web",
            years: 2023,
            description: "Application web ludique pour aider les collegiens dans les matières musicale.",
            technologies: ["Symfony","JS"],
            link: "https://github.com/Ilandrm/petitBach"
        },
        {
            name: "Game Jam 2024",
            src: "concorde.png",
            type: "desktop",
            years: 2024,
            description: "Jeu développé lors d'une Game Jam qui avait comme contrainte imposé les thèmes paix et competition entre les nations.",
            technologies: ["Python", "Pygame"],
            link: "https://github.com/Yaniissou/JamJam2024"
        },
        {
            name: "Pali Kao Capital",
            src: "LOGO PALI KAO.png",
            type: "web",
            years: 2025,
            description: "Site vitrine pour l'entreprise Pali kao capital",
            technologies: ["Nuxt.js", "Vite"],
            link: "https://palikao-capital.com"
        },
        {
            name: "MMAPI",
            type: "api",
            years: 2025,
            description: "API dedié au monde du MMA",
            technologies: ["Node.js", "Express", "PostgreSQL", "Docker"],
            link: "https://github.com/Ilandrm/MMAPI"
        },
        {
            name: "Kosmos",
            src: "earth.jpg",
            type: "web",
            years: 2025,
            description: "Jeu developpé autours du theme de l'espace dans le cadre d'une missions que j'ai eu en entreprise",
            technologies: ["Vue.js", "Three.js"],
            link: "https://github.com/Ilandrm/Kosmos"
        },
        {
            name: "Infox",
            src: "INFOX-ecriture.png",
            type: "mobile",
            years: 2025,
            description: "Application pour la lutte contre la desinformation sur les reseaux sociaux",
            etat:"IP",
            technologies: ["React native"],
            link: "https://github.com/Ilandrm/Infox"
        }
    ]);
}
