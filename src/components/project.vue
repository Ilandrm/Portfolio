<script setup lang="ts">
import ProjectIcon from "@/components/ProjectIcon.vue";
import { computed, onMounted, ref } from "vue";

const isActive = ref(false);
const selectedType = ref<string | null>(null);
const activeProject = ref<any>(null);

const toggleType = (type: string) => {
  selectedType.value = selectedType.value === type ? null : type;
};

const projects = ref([
  {
    name: "Game Jam 2023",
    src: "saveTheExam.png",
    type: "scolaire",
    years: 2023,
    description: "Jeu développé lors d'une Game Jam qui avait comme contrainte imposé les thèmes horreur et musique.",
    technologies: ["Python", "Pygame"],
    link: "https://github.com/votre-username/game-jam-2023" // Remplacez par le vrai lien
  },
  {
    name: "Petit Bach",
    src: "icon_petitbach.png",
    type: "scolaire",
    years: 2023,
    description: "Application musicale interactive pour l'apprentissage du solfège et de la composition.",
    technologies: ["Symfony", "JavaScript", "PostgreSQL"],
    link: "https://github.com/votre-username/petit-bach"
  },
  {
    name: "Game Jam 2024",
    src: "concorde.png",
    type: "scolaire",
    years: 2024,
    description: "Jeu développé lors d'une Game Jam qui avait comme contrainte imposé les thèmes paix et competition entre les nations.",
    technologies: ["Python", "Pygame"],
    link: "https://github.com/votre-username/game-jam-2024"
  },
  {
    name: "Pali Kao Capital",
    src: "LOGO PALI KAO.png",
    type: "professionnel",
    years: 2025,
    description: "Site vitrine pour l'entreprise Pali kao capital",
    technologies: ["Nuxt.js", "Vite"],
    link: "https://palikao-capital.com"
  },
  {
    name: "Tower of Heroes",
    src: "mask8.png",
    type: "scolaire",
    years: 2025,
    description: "Jeu de création de heros et d'armes",
    technologies: ["Angular", "Firebase"],
    link: "https://github.com/votre-username/tower-of-heroes"
  },
  {
    name: "MMAPI",
    type: "scolaire",
    years: 2025,
    description: "API dedié au monde du MMA",
    technologies: ["Node.js", "Express", "PostgreSQL", "Docker"],
    link: "https://github.com/votre-username/mmapi"
  },
  {
    name: "Lookup",
    src: "lookup.png",
    type: "scolaire",
    years: 2024,
    description: "Moteur de recherche detaillé de pokemon.",
    technologies: ["JavaScript"],
    link: "https://github.com/votre-username/lookup"
  },
  {
    name: "App-Stage",
    src: "stage.jpg",
    type: "scolaire",
    years: 2024,
    description: "Application de gestion des stages étudiants et suivi des entreprises.",
    technologies: ["Symfony","Java","PostgreSQL"],
    link: "https://github.com/votre-username/app-stage"
  },
  {
    name: "Suki",
    src: "suki4.png",
    type: "scolaire",
    years: 2023,
    description: "Application de gestion de sortie de ski.",
    technologies: ["Java"],
    link: "https://github.com/votre-username/suki"
  },
  {
    name: "Kosmos",
    src: "earth.jpg",
    type: "professionnel",
    years: 2025,
    description: "Jeu developpé dans le cadre d'une missions que j'ai eu en entreprise, entierment réalisé en vibe coding.",
    technologies: ["Vue.js", "Three.js"],
    link: "https://github.com/votre-username/kosmos"
  }
]);

const filteredProjects = computed(() =>
    !selectedType.value
        ? projects.value
        : projects.value.filter((p) => p.type === selectedType.value)
);

const getProjectActive = (project: any) => {
  if (project === null) {
    isActive.value = false;
    activeProject.value = null;
  } else {
    isActive.value = true;
    activeProject.value = project;
  }
};

onMounted(() => {
  projects.value = projects.value.sort((a, b) => b.years - a.years);
});
</script>

<template>
  <div class="projects-section">
    <!-- Musical decoration -->
    <div class="projects-decoration">
      <div class="music-staff">
        <div class="staff-line" v-for="i in 5" :key="i"></div>
      </div>
      <div class="floating-symbols">
        <span class="symbol">🎵</span>
        <span class="symbol">🎶</span>
        <span class="symbol">🎼</span>
      </div>
    </div>

    <div class="section-header">
      <h2 class="projects-title">
        <span class="gradient-text">Mes Créations</span>
      </h2>
      <p class="projects-subtitle">Une liste de projets développés avec passion</p>
    </div>

    <!-- Filter buttons with musical styling -->
    <div class="filter-section">
      <div class="filter-buttons glass">
        <button
            :class="['filter-btn', selectedType === 'scolaire' ? 'active' : '']"
            @click="toggleType('scolaire')"
        >
          <span class="btn-icon">🎓</span>
          <span>Académique</span>
          <div class="btn-wave"></div>
        </button>
        <button
            :class="['filter-btn', selectedType === 'professionnel' ? 'active' : '']"
            @click="toggleType('professionnel')"
        >
          <span class="btn-icon">💼</span>
          <span>Professionnel</span>
          <div class="btn-wave"></div>
        </button>
        <button
            :class="['filter-btn', selectedType === null ? 'active' : '']"
            @click="toggleType('')"
        >
          <span class="btn-icon">🎯</span>
          <span>Tous</span>
          <div class="btn-wave"></div>
        </button>
      </div>
    </div>

    <!-- Projects grid -->
    <div class="projects-grid">
      <div 
        v-for="project in filteredProjects" 
        :key="project.name"
        class="project-wrapper"
      >
        <ProjectIcon :project="project" @active="getProjectActive" />
      </div>
    </div>

    <!-- Musical project counter -->
    <div class="project-counter glass">
      <div class="counter-content">
        <span class="counter-icon">🎼</span>
        <span class="counter-text">
          {{ filteredProjects.length }} projet{{ filteredProjects.length > 1 ? 's' : '' }} 
          {{ selectedType ? `(${selectedType})` : '' }}
        </span>
      </div>
    </div>
  </div>

  <!-- Enhanced overlay -->
  <div id="overlay" :class="{ show: isActive }" @click="getProjectActive(null)">
    <div class="overlay-pattern"></div>
  </div>

  <!-- Enhanced modal -->
  <div class="project-modal glass" :class="{ show: isActive }">
    <div class="modal-header">
      <div class="modal-title-section">
        <h3 class="modal-title gradient-text">{{ activeProject?.name }}</h3>
        <span class="modal-year">{{ activeProject?.years }}</span>
      </div>
      <button class="close-btn" @click="getProjectActive(null)">
        <span>✕</span>
      </button>
    </div>
    
    <div class="modal-content">
      <div class="project-image-section" v-if="activeProject?.src">
        <a
          v-if="activeProject?.link"
          :href="activeProject.link"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link"
        >
          <img
            :src="'projects/' + activeProject.src"
            :alt="activeProject.name"
            class="modal-project-image clickable"
          >
          <div class="link-overlay">
            <span class="link-icon">🔗</span>
            <span class="link-text">Voir le projet</span>
          </div>
        </a>
        <img
          v-else
          :src="'projects/' + activeProject.src"
          :alt="activeProject.name"
          class="modal-project-image"
        >
      </div>

      <div class="project-details">
        <div class="project-type-badge" :class="activeProject?.type">
          <span v-if="activeProject?.type === 'scolaire'">🎓 Académique</span>
          <span v-else-if="activeProject?.type === 'professionnel'">💼 Professionnel</span>
          <span v-else>🌱 Personnel</span>
        </div>

        <p class="project-description">
          {{ activeProject?.description || 'Description du projet à venir...' }}
        </p>

        <!-- Technologies section -->
        <div class="technologies-section" v-if="activeProject?.technologies && activeProject.technologies.length > 0">
          <h4 class="technologies-title">
            <span class="tech-icon">⚡</span>
            Technologies utilisées
          </h4>
          <div class="technologies-grid">
            <span
              v-for="tech in activeProject.technologies"
              :key="tech"
              class="technology-tag"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Project link button -->
        <div class="project-actions" v-if="activeProject?.link">
          <a
            :href="activeProject.link"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link-btn"
          >
            <span class="btn-icon">🚀</span>
            <span>Voir le projet</span>
            <div class="btn-glow"></div>
          </a>
        </div>
      </div>
    </div>
    
    <!-- Modal wave decoration -->
    <div class="modal-waves">
      <div class="wave-line"></div>
      <div class="wave-line"></div>
      <div class="wave-line"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.projects-section {
  position: relative;
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  overflow: hidden;
}

.projects-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.music-staff {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 300px;
  height: 60px;
  opacity: 0.1;
}

.staff-line {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #7877c6, transparent);
  margin: 12px 0;
  animation: staffPulse 6s ease-in-out infinite;
}

.staff-line:nth-child(odd) {
  animation-delay: 1s;
}

@keyframes staffPulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.8;
  }
}

.floating-symbols {
  position: absolute;
  width: 100%;
  height: 100%;
}

.symbol {
  position: absolute;
  font-size: 2rem;
  color: rgba(120, 119, 198, 0.2);
  animation: symbolFloat 8s ease-in-out infinite;
}

.symbol:nth-child(1) {
  top: 20%;
  right: 15%;
  animation-delay: 0s;
}

.symbol:nth-child(2) {
  top: 60%;
  left: 10%;
  animation-delay: 3s;
}

.symbol:nth-child(3) {
  top: 80%;
  right: 30%;
  animation-delay: 6s;
}

@keyframes symbolFloat {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.2;
  }
  50% {
    transform: translateY(-20px) rotate(15deg);
    opacity: 0.4;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;
}

.projects-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.title-icon {
  font-size: 2.5rem;
  animation: iconSpin 4s ease-in-out infinite;
}

@keyframes iconSpin {
  0%, 100% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(10deg) scale(1.1);
  }
}

.projects-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-style: italic;
}

.filter-section {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;
}

.filter-buttons {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 12px 20px;
  border: none;
  border-radius: 20px;
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.filter-btn:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.filter-btn.active {
  background: linear-gradient(135deg, #7877c6, #ff77c6);
  color: #ffffff;
  box-shadow: 0 8px 25px rgba(120, 119, 198, 0.3);
}

.btn-icon {
  font-size: 1.2rem;
}

.btn-wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #7877c6, transparent);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.filter-btn:hover .btn-wave,
.filter-btn.active .btn-wave {
  transform: scaleX(1);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;
}

.project-wrapper {
  display: flex;
  justify-content: center;
}

.project-counter {
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 25px;
  margin: 0 auto;
  width: fit-content;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.counter-content {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.counter-icon {
  font-size: 1.5rem;
  animation: counterPulse 2s ease-in-out infinite;
}

@keyframes counterPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.counter-text {
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}

#overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(15, 15, 35, 0.8);
  backdrop-filter: blur(10px);
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease;
}

#overlay.show {
  opacity: 1;
  visibility: visible;
}

.overlay-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(255, 119, 198, 0.1) 0%, transparent 50%);
  animation: overlayPulse 4s ease-in-out infinite;
}

@keyframes overlayPulse {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
}

.project-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  padding: 2rem;
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 101;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease;
  overflow-y: auto;
}

.project-modal.show {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, -50%);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.modal-title-section {
  flex: 1;
}

.modal-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.modal-year {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  background: rgba(120, 119, 198, 0.2);
  padding: 4px 12px;
  border-radius: 15px;
  display: inline-block;
}

.close-btn {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  transform: scale(1.1);
}

.modal-content {
  margin-bottom: 1rem;
}

.project-image-section {
  margin-bottom: 1.5rem;
  text-align: center;
}

.modal-project-image {
  max-width: 100%;
  max-height: 200px;
  object-fit: contain;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
}

.project-details {
  text-align: left;
}

.project-type-badge {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.project-type-badge.scolaire {
  background: rgba(120, 119, 198, 0.2);
  color: #7877c6;
}

.project-type-badge.professionnel {
  background: rgba(255, 119, 198, 0.2);
  color: #ff77c6;
}

.project-description {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  font-size: 1rem;
}

/* Clickable project link styles */
.project-link {
  position: relative;
  display: inline-block;
  text-decoration: none;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.project-link:hover {
  transform: scale(1.02);
}

.modal-project-image.clickable {
  cursor: pointer;
  transition: all 0.3s ease;
}

.modal-project-image.clickable:hover {
  filter: brightness(1.1);
}

.link-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 15px;
}

.project-link:hover .link-overlay {
  opacity: 1;
}

.link-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.link-text {
  color: white;
  font-weight: 500;
  font-size: 1rem;
}

/* Technologies section styles */
.technologies-section {
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(120, 119, 198, 0.2);
}

.technologies-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #7877c6;
}

.tech-icon {
  font-size: 1.2rem;
}

.technologies-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.technology-tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, rgba(120, 119, 198, 0.2), rgba(255, 119, 198, 0.2));
  border: 1px solid rgba(120, 119, 198, 0.3);
  border-radius: 20px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.technology-tag:hover {
  background: linear-gradient(135deg, rgba(120, 119, 198, 0.3), rgba(255, 119, 198, 0.3));
  border-color: rgba(120, 119, 198, 0.5);
  transform: translateY(-2px);
}

/* Project actions styles */
.project-actions {
  margin-top: 2rem;
  text-align: center;
}

.project-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #7877c6, #ff77c6);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.project-link-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(120, 119, 198, 0.4);
  color: white;
  text-decoration: none;
}

.project-link-btn .btn-icon {
  font-size: 1.2rem;
}

.btn-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.project-link-btn:hover .btn-glow {
  left: 100%;
}

.modal-waves {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  overflow: hidden;
  border-radius: 0 0 25px 25px;
}

.wave-line {
  position: absolute;
  bottom: 0;
  left: -100%;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #7877c6, #ff77c6, transparent);
  animation: modalWave 4s linear infinite;
}

.wave-line:nth-child(2) {
  animation-delay: 1.3s;
  background: linear-gradient(90deg, transparent, #ff77c6, #78dbff, transparent);
}

.wave-line:nth-child(3) {
  animation-delay: 2.6s;
  background: linear-gradient(90deg, transparent, #78dbff, #7877c6, transparent);
}

@keyframes modalWave {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

@media (max-width: 768px) {
  .projects-section {
    padding: 2rem 1rem;
  }
  
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .filter-buttons {
    flex-direction: column;
    gap: 0.8rem;
    padding: 1rem;
  }
  
  .filter-btn {
    justify-content: center;
  }
  
  .project-modal {
    width: 95%;
    padding: 1.5rem;
  }
  
  .modal-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .projects-title {
    font-size: 2rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .modal-header {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
  
  .close-btn {
    align-self: flex-end;
  }
}
</style>