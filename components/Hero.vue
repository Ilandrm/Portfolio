<script setup lang="ts">
import {getProjects} from "~/services/getProject";
import {computed, ref} from "vue";

const projects = getProjects();
const pinned = computed(() => (projects.value || []).filter(p => p?.pin));
const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
const scrollToCreation = () => {
  const creationSection = document.getElementById('project');
  if (creationSection) {
    creationSection.scrollIntoView({ behavior: 'smooth' });
  }
};
const isActive = ref(false);

const activeProject = ref<any>(null);

const getProjectActive = (project: any) => {
  if (project === null) {
    isActive.value = false;
    activeProject.value = null;
  } else {
    isActive.value = true;
    activeProject.value = project;
  }
};

</script>

<template>
  <div class="hero-section">
    <div class="code-symbols">
      <div class="symbol symbol-1">&lt;/&gt;</div>
      <div class="symbol symbol-2">{}</div>
      <div class="symbol symbol-3">[]</div>
      <div class="symbol symbol-4">()</div>
      <div class="symbol symbol-5">;</div>
      <div class="symbol symbol-6">#</div>
    </div>

    <div class="hero-content mt-4">
      <div class="profile-section">
        <div class="profile-container">
          <div class="profile-image-wrapper">
            <img src="../assets/image.png" alt="Ilan Darmon - Développeur Web & Mobile Fullstack" class="profile-image">
            <div class="profile-ring"></div>
            <div class="profile-ring-2"></div>
          </div>
          <div class="greeting-bubble terminal-glass">
            <span class="wave-emoji">👋</span>
            <span class="name code-gradient">Ilan Darmon</span>
          </div>
        </div>

        <div class="title-section">
          <h1 class="main-title">
            <span class="title-line">Développeur Web & Mobile</span>
            <span class="title-line code-gradient">Fullstack</span>
          </h1>
          <p class="subtitle-services">Création de sites web et applications sur mesure</p>
          <div class="code-visualizer">
            <div class="code-bar"></div>
            <div class="code-bar"></div>
            <div class="code-bar"></div>
            <div class="code-bar"></div>
            <div class="code-bar"></div>
          </div>
        </div>

        <div class="cta-buttons">
          <button @click="scrollToContact" class="cta-button btn-dev code-flow primary">
            <span>Demander un devis</span>
          </button>
          <button @click="scrollToCreation" class="cta-button btn-dev code-flow secondary">
            <span>Voir mes réalisations</span>
          </button>
        </div>
      </div>
    </div>

    <div class="projects-showcase terminal-glass">
      <div class="showcase-header">
        <h3 class="showcase-title code-gradient">Réalisations epinglé</h3>
        <div class="terminal-indicators">
          <div class="indicator red"></div>
          <div class="indicator yellow"></div>
          <div class="indicator green"></div>
        </div>
      </div>
      <div class="pin">
        <ProjectIcon
            v-for="project in pinned"
            :key="project.id"
            :project="project"
            @active="getProjectActive"
        />
      </div>

    </div>

    <div class="about-section">
      <h2 class="about-title code-gradient">
        À propos de moi
      </h2>

      <div class="about-content terminal-glass">
        <div class="about-text">
          <p class="intro-text">
            Salut ! Je suis <strong class="code-gradient">Ilan Darmon</strong>,
            développeur web et mobile. Je transforme vos idées en solutions performantes et sur mesure.
          </p>

          <div class="description-grid">
            <div class="desc-item">
              <span class="desc-icon">🌐</span>
              <div>
                <h4>Sites Web Professionnels</h4>
                <p>Sites vitrines, e-commerce, landing pages optimisés pour le référencement (SEO).</p>
              </div>
            </div>

            <div class="desc-item">
              <span class="desc-icon">📱</span>
              <div>
                <h4>Applications Mobile</h4>
                <p>Développement d'applications iOS et Android </p>
              </div>
            </div>

            <div class="desc-item">
              <span class="desc-icon">⚙️</span>
              <div>
                <h4>Solutions Sur Mesure</h4>
                <p>Applications web métier, dashboards, API ...</p>
              </div>
            </div>

            <div class="desc-item">
              <span class="desc-icon">🎯</span>
              <div>
                <h4>Accompagnement Complet</h4>
                <p>De l'analyse de vos besoins à la mise en production, je vous accompagne à chaque étape de votre projet.</p>
              </div>
            </div>

            <div class="desc-item">
              <span class="desc-icon">🤝</span>
              <div>
                <h4>Disponible & Réactif</h4>
                <p>Freelance disponible pour vos projets, maintenance et support technique. Devis sous 48h.</p>
              </div>
            </div>
          </div>

          <p class="closing-text code-gradient">
            Prêt à donner vie à votre projet ? Contactez-moi pour un devis personnalisé !
          </p>
        </div>
      </div>
    </div>
  </div>
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
          <img :src="`projects/${activeProject.src}`" :alt="activeProject.name" class="project-image" />
        </div>

        <div class="project-details">
          <div class="detail-section">
            <h4 class="detail-title">Description</h4>
            <p class="project-description">{{ activeProject?.description }}</p>
          </div>

          <div class="detail-section">
            <h4 class="detail-title">Technologies</h4>
            <div class="tech-stack">
            <span v-for="tech in activeProject?.technologies" :key="tech" class="tech-tag">
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
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  overflow: hidden;
}
.pin {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  flex-wrap: wrap;
}
.code-symbols {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.symbol {
  position: absolute;
  font-size: 1.5rem;
  font-family: 'JetBrains Mono', monospace;
  color: rgba(64, 224, 208, 0.2);
  animation: floatSymbol 8s ease-in-out infinite;
}

.symbol-1 {
  top: 15%;
  left: 8%;
  animation-delay: 0s;
}

.symbol-2 {
  top: 25%;
  right: 12%;
  animation-delay: 1.5s;
}

.symbol-3 {
  top: 45%;
  left: 15%;
  animation-delay: 3s;
}

.symbol-4 {
  top: 65%;
  right: 20%;
  animation-delay: 4.5s;
}

.symbol-5 {
  top: 80%;
  left: 25%;
  animation-delay: 6s;
}

.symbol-6 {
  top: 35%;
  right: 35%;
  animation-delay: 2s;
}

@keyframes floatSymbol {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.2;
  }
  50% {
    transform: translateY(-15px) rotate(5deg);
    opacity: 0.4;
  }
}

.hero-content {
  z-index: 2;
  text-align: center;
  margin-bottom: 4rem;
}

.profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.profile-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.profile-image-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-image {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 4px solid rgba(64, 224, 208, 0.3);
  object-fit: cover;
  z-index: 3;
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
}

.profile-ring, .profile-ring-2 {
  position: absolute;
  border-radius: 50%;
  border: 2px solid;
  animation: rotate 12s linear infinite;
}

.profile-ring {
  width: 220px;
  height: 220px;
  border-color: rgba(64, 224, 208, 0.3);
  animation-direction: normal;
}

.profile-ring-2 {
  width: 260px;
  height: 260px;
  border-color: rgba(0, 255, 127, 0.2);
  animation-direction: reverse;
  animation-duration: 18s;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.greeting-bubble {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
}

.wave-emoji {
  font-size: 1.3rem;
  animation: wave 2s ease-in-out infinite;
}

@keyframes wave {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(20deg);
  }
  75% {
    transform: rotate(-10deg);
  }
}

.title-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.main-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  text-align: center;
  margin: 0;
  font-family: 'Inter', sans-serif;
}

.title-line {
  display: block;
}

.code-visualizer {
  display: flex;
  gap: 4px;
  align-items: end;
  height: 40px;
}

.code-bar {
  width: 4px;
  background: linear-gradient(to top, #40e0d0, #00ff7f);
  border-radius: 2px;
  animation: codeBars 2s ease-in-out infinite;
}

.code-bar:nth-child(1) { animation-delay: 0s; }
.code-bar:nth-child(2) { animation-delay: 0.3s; }
.code-bar:nth-child(3) { animation-delay: 0.6s; }
.code-bar:nth-child(4) { animation-delay: 0.9s; }
.code-bar:nth-child(5) { animation-delay: 1.2s; }

@keyframes codeBars {
  0%, 100% {
    height: 8px;
  }
  50% {
    height: 32px;
  }
}

.cta-button {
  font-size: 1.1rem;
  padding: 16px 32px;
  margin-top: 1rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}

.projects-showcase {
  width: 90%;
  max-width: 1000px;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 4rem;
}

.showcase-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.showcase-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
}

.terminal-indicators {
  display: flex;
  gap: 8px;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.indicator.red {
  background-color: #ff5f56;
}

.indicator.yellow {
  background-color: #ffbd2e;
}

.indicator.green {
  background-color: #27ca3f;
}

.carousel-container {
  overflow: hidden;
  border-radius: 8px;
}

.carousel {
  display: flex;
  animation: scroll 20s linear infinite;
  gap: 1rem;
}

.project-icon {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
  border: 2px solid rgba(64, 224, 208, 0.2);
  transition: transform 0.3s ease;
}

.project-icon:hover {
  transform: scale(1.1);
  border-color: rgba(64, 224, 208, 0.5);
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.about-section {
  width: 90%;
  max-width: 800px;
  text-align: center;
}

.about-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #ffffff;
}

.about-content {
  padding: 2.5rem;
  border-radius: 12px;
}

.about-text {
  text-align: left;
}

.intro-text {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #e6edf3;
}

.description-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.desc-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: rgba(64, 224, 208, 0.05);
  border-radius: 8px;
  border-left: 3px solid #40e0d0;
}

.desc-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.desc-item p {
  margin: 0;
  line-height: 1.5;
  color: #c9d1d9;
}

.desc-item h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #40e0d0;
}

.subtitle-services {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0.5rem 0 0 0;
  font-weight: 400;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.cta-button {
  font-size: 1.1rem;
  padding: 16px 32px;
  margin-top: 1rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &.primary {
    background: linear-gradient(135deg, #40e0d0, #00ff7f);
    color: #0d1117;
    font-weight: 700;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(64, 224, 208, 0.4);
    }
  }

  &.secondary {
    background: rgba(64, 224, 208, 0.1);
    border: 2px solid #40e0d0;
    color: #40e0d0;

    &:hover {
      background: rgba(64, 224, 208, 0.2);
    }
  }
}

.closing-text {
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  margin: 0;
}

@media (min-width: 768px) {
  .description-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 1rem;
  }

  .profile-image {
    width: 150px;
    height: 150px;
  }

  .profile-ring {
    width: 180px;
    height: 180px;
  }

  .profile-ring-2 {
    width: 210px;
    height: 210px;
  }

  .projects-showcase,
  .about-content {
    padding: 1.5rem;
  }
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

</style>