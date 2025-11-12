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
    link: "https://github.com/votre-username/game-jam-2023"
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
    <!-- Code decoration -->
    <div class="projects-decoration">
      <div class="code-lines">
        <div class="code-line" v-for="i in 5" :key="i">
          <span class="line-number">{{ i }}</span>
          <span class="code-content">{{ i === 1 ? 'function createProject() {' : i === 5 ? '}' : '  // code...' }}</span>
        </div>
      </div>
      <div class="floating-symbols">
        <span class="symbol">&lt;/&gt;</span>
        <span class="symbol">{}</span>
        <span class="symbol">[]</span>
      </div>
    </div>

    <div class="section-header">
      <h2 class="projects-title">
        <span class="code-gradient">Mes Créations</span>
      </h2>
      <p class="projects-subtitle">Une liste de projets développés avec passion</p>
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

    <!-- Development project counter -->
    <div class="project-counter terminal-glass">
      <div class="counter-content">
        <span class="counter-icon">&lt;/&gt;</span>
        <span class="counter-text">
          {{ filteredProjects.length }} projet{{ filteredProjects.length > 1 ? 's' : '' }} 
          {{ selectedType ? `(${selectedType})` : '' }}
        </span>
      </div>
    </div>
  </div>

  <!-- Enhanced overlay -->
  <div id="overlay" :class="{ show: isActive }" @click="getProjectActive(null)">
    <div class="overlay-content terminal-glass" @click.stop>
      <div class="overlay-header">
        <div class="terminal-controls">
          <div class="control red"></div>
          <div class="control yellow"></div>
          <div class="control green"></div>
        </div>
        <h3 class="overlay-title code-gradient">{{ activeProject?.name }}</h3>
        <button class="close-btn" @click="getProjectActive(null)">✕</button>
      </div>
      
      <div class="overlay-body">
        <div class="project-image-container" v-if="activeProject?.src">
          <img :src="`projects/${activeProject.src}`" :alt="activeProject.name" class="project-image">
        </div>
        
        <div class="project-details">
          <div class="detail-section">
            <h4 class="detail-title">Description</h4>
            <p class="project-description">{{ activeProject?.description }}</p>
          </div>
          
          <div class="detail-section">
            <h4 class="detail-title">Technologies</h4>
            <div class="tech-stack">
              <span 
                v-for="tech in activeProject?.technologies" 
                :key="tech" 
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
          </div>
          
          <div class="detail-section">
            <h4 class="detail-title">Année</h4>
            <span class="project-year">{{ activeProject?.years }}</span>
          </div>
          
          <div class="detail-section" v-if="activeProject?.link">
            <h4 class="detail-title">Lien</h4>
            <a :href="activeProject.link" target="_blank" class="project-link btn-dev">
              Voir le projet
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.projects-section {
  position: relative;
  padding: 4rem 2rem;
  max-width: 1200px;
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
  z-index: 1;
}

.code-lines {
  position: absolute;
  top: 10%;
  left: 5%;
  opacity: 0.1;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: #40e0d0;
}

.code-line {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.line-number {
  color: #6e7681;
  min-width: 20px;
}

.code-content {
  color: #40e0d0;
}

.floating-symbols {
  position: absolute;
  width: 100%;
  height: 100%;
}

.symbol {
  position: absolute;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.2rem;
  color: rgba(64, 224, 208, 0.15);
  animation: floatCode 10s ease-in-out infinite;
}

.symbol:nth-child(1) {
  top: 20%;
  right: 10%;
  animation-delay: 0s;
}

.symbol:nth-child(2) {
  top: 60%;
  left: 8%;
  animation-delay: 3s;
}

.symbol:nth-child(3) {
  top: 80%;
  right: 15%;
  animation-delay: 6s;
}

@keyframes floatCode {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.15;
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
    opacity: 0.3;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
  z-index: 2;
  position: relative;
}

.projects-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
}

.projects-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.filter-section {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  z-index: 2;
  position: relative;
}

.filter-buttons {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 12px;
}

.filter-btn {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 12px 24px;
  background: transparent;
  border: 2px solid rgba(64, 224, 208, 0.3);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    border-color: rgba(64, 224, 208, 0.6);
    color: #40e0d0;
    transform: translateY(-2px);
  }

  &.active {
    background: rgba(64, 224, 208, 0.1);
    border-color: #40e0d0;
    color: #40e0d0;
  }
}

.btn-icon {
  font-size: 1.1rem;
}

.btn-code-flow {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #40e0d0, transparent);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.filter-btn:hover .btn-code-flow,
.filter-btn.active .btn-code-flow {
  transform: translateX(0);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  z-index: 2;
  position: relative;
}

.project-wrapper {
  transition: transform 0.3s ease;
}

.project-wrapper:hover {
  transform: translateY(-5px);
}

.project-counter {
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 12px;
  margin: 0 auto;
  max-width: 300px;
  z-index: 2;
  position: relative;
}

.counter-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: #40e0d0;
}

.counter-icon {
  font-size: 1.2rem;
  font-family: 'JetBrains Mono', monospace;
}

#overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;

  &.show {
    opacity: 1;
    visibility: visible;
  }
}

.overlay-content {
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  border-radius: 12px;
  overflow: hidden;
  transform: scale(0.9);
  transition: transform 0.3s ease;
}

#overlay.show .overlay-content {
  transform: scale(1);
}

.overlay-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(64, 224, 208, 0.2);
}

.terminal-controls {
  display: flex;
  gap: 8px;
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.control.red {
  background-color: #ff5f56;
}

.control.yellow {
  background-color: #ffbd2e;
}

.control.green {
  background-color: #27ca3f;
}

.overlay-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    color: #ff5f56;
    background: rgba(255, 95, 86, 0.1);
  }
}

.overlay-body {
  padding: 2rem;
  max-height: 70vh;
  overflow-y: auto;
}

.project-image-container {
  text-align: center;
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  padding: 1rem;
  border: 1px solid rgba(64, 224, 208, 0.1);
}

.project-image {
  max-width: 100%;
  max-height: 300px;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  border: 2px solid rgba(64, 224, 208, 0.2);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(64, 224, 208, 0.4);
    transform: scale(1.02);
  }
}

.project-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.detail-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.detail-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #40e0d0;
  margin: 0;
  font-family: 'JetBrains Mono', monospace;
}

.project-description {
  color: #c9d1d9;
  line-height: 1.6;
  margin: 0;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(64, 224, 208, 0.1);
  color: #40e0d0;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(64, 224, 208, 0.3);
}

.project-year {
  color: #00ff7f;
  font-weight: 600;
  font-family: 'JetBrains Mono', monospace;
}

.project-link {
  display: inline-block;
  text-decoration: none;
  margin-top: 0.5rem;
  max-width: 150px;
}

@media (max-width: 768px) {
  .projects-section {
    padding: 2rem 1rem;
  }

  .filter-buttons {
    flex-direction: column;
    gap: 0.5rem;
  }

  .filter-btn {
    justify-content: center;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .overlay-content {
    width: 95%;
    margin: 1rem;
  }

  .overlay-body {
    padding: 1rem;
  }

  .tech-stack {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .overlay-header {
    padding: 1rem;
  }

  .overlay-title {
    font-size: 1.2rem;
  }

  .terminal-controls {
    display: none;
  }
}
</style>