<script setup lang="ts">
import { onMounted, ref } from "vue";

const images = ref<string[]>([]);

onMounted(() => {
  images.value = [
    'projects/concorde.png',
    'projects/icon_petitbach.png',
    'projects/LOGO PALI KAO.png',
    'projects/lookup.png',
    'projects/suki4.png',
    'projects/mask8.png',
    'projects/saveTheExam.png',
  ];
});
</script>

<template>
  <div class="hero-section">
    <!-- Floating musical notes -->
    <div class="musical-notes">
      <div class="note note-1">♪</div>
      <div class="note note-2">♫</div>
      <div class="note note-3">♪</div>
      <div class="note note-4">♫</div>
    </div>
    
    <div class="hero-content">
      <div class="profile-section">
        <div class="profile-container">
          <div class="profile-image-wrapper">
            <img src="../assets/image.png" alt="Ilan Darmon" class="profile-image">
            <div class="profile-ring"></div>
            <div class="profile-ring-2"></div>
          </div>
          <div class="greeting-bubble glass">
            <span class="wave-emoji">👋</span>
            <span class="name gradient-text">Ilan Darmon</span>
          </div>
        </div>

        <div class="title-section">
          <h1 class="main-title">
            <span class="title-line">Développeur Web</span>
            <span class="title-line gradient-text">Fullstack</span>
          </h1>
          <div class="sound-visualizer">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </div>

        <button class="cta-button btn-musical sound-wave">
          <span>🎵 Découvrir mes projets</span>
        </button>
      </div>
    </div>

    <!-- Projects carousel with musical theme -->
    <div class="projects-showcase glass">
      <div class="showcase-header">
        <h3 class="showcase-title gradient-text">Mes Créations</h3>
        <div class="frequency-bars">
          <div class="freq-bar"></div>
          <div class="freq-bar"></div>
          <div class="freq-bar"></div>
        </div>
      </div>
      
      <div class="carousel-container">
        <div class="carousel">
          <img
              class="project-icon"
              v-for="(image, index) in [...images, ...images]"
              :key="index"
              :src="image"
              alt="Project"
          />
        </div>
      </div>
    </div>

    <!-- About section with musical styling -->
    <div class="about-section">
      <h2 class="about-title">
        <span class="musical-symbol">🎼</span>
        À propos de moi
      </h2>
      
      <div class="about-content glass">
        <div class="about-text">
          <p class="intro-text">
            Salut ! Je suis <strong class="gradient-text">Ilan Darmon</strong>, 
            un passionné d'informatique qui compose du code comme on compose de la musique.
          </p>
          
          <div class="description-grid">
            <div class="desc-item">
              <span class="desc-icon">🎯</span>
              <p>Ce portfolio vous offre un aperçu détaillé de mes compétences et de mon parcours académique.</p>
            </div>
            
            <div class="desc-item">
              <span class="desc-icon">🚀</span>
              <p>Découvrez les projets informatiques auxquels j'ai participé et mes réalisations techniques.</p>
            </div>
            
            <div class="desc-item">
              <span class="desc-icon">🤝</span>
              <p>Si vous cherchez à collaborer ou discuter d'opportunités, n'hésitez pas à me contacter.</p>
            </div>
          </div>
          
          <p class="closing-text gradient-text">
            Je vous souhaite une agréable visite et j'espère que mes réalisations sauront captiver votre intérêt !
          </p>
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

.musical-notes {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.note {
  position: absolute;
  font-size: 2rem;
  color: rgba(120, 119, 198, 0.3);
  animation: floatNote 6s ease-in-out infinite;
}

.note-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.note-2 {
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.note-3 {
  top: 80%;
  left: 20%;
  animation-delay: 4s;
}

.note-4 {
  top: 40%;
  right: 30%;
  animation-delay: 1s;
}

@keyframes floatNote {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
    opacity: 0.6;
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
  border: 4px solid rgba(255, 255, 255, 0.2);
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
  animation: rotate 10s linear infinite;
}

.profile-ring {
  width: 220px;
  height: 220px;
  border-color: rgba(120, 119, 198, 0.4);
  animation-direction: normal;
}

.profile-ring-2 {
  width: 260px;
  height: 260px;
  border-color: rgba(255, 119, 198, 0.3);
  animation-direction: reverse;
  animation-duration: 15s;
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
  border-radius: 25px;
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
}

.title-line {
  display: block;
}

.sound-visualizer {
  display: flex;
  gap: 4px;
  align-items: end;
  height: 40px;
}

.bar {
  width: 4px;
  background: linear-gradient(to top, #7877c6, #ff77c6);
  border-radius: 2px;
  animation: soundBars 1.5s ease-in-out infinite;
}

.bar:nth-child(1) { animation-delay: 0s; }
.bar:nth-child(2) { animation-delay: 0.2s; }
.bar:nth-child(3) { animation-delay: 0.4s; }
.bar:nth-child(4) { animation-delay: 0.6s; }
.bar:nth-child(5) { animation-delay: 0.8s; }

@keyframes soundBars {
  0%, 100% {
    height: 10px;
  }
  50% {
    height: 35px;
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
  border-radius: 30px;
  margin-bottom: 4rem;
}

.showcase-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.showcase-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.frequency-bars {
  display: flex;
  gap: 2px;
  align-items: end;
}

.freq-bar {
  width: 3px;
  background: linear-gradient(to top, #7877c6, #78dbff);
  border-radius: 1px;
  animation: freqBars 2s ease-in-out infinite;
}

.freq-bar:nth-child(1) { height: 15px; animation-delay: 0s; }
.freq-bar:nth-child(2) { height: 25px; animation-delay: 0.3s; }
.freq-bar:nth-child(3) { height: 20px; animation-delay: 0.6s; }

@keyframes freqBars {
  0%, 100% {
    opacity: 0.5;
    transform: scaleY(0.7);
  }
  50% {
    opacity: 1;
    transform: scaleY(1.3);
  }
}

.carousel-container {
  overflow: hidden;
  height: 100px; /* Reduced height to match new icon size */
  display: flex;
  align-items: center;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.02);
  padding: 10px 0; /* Add vertical padding */
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.carousel {
  display: flex;
  width: max-content;
  animation: scroll 30s linear infinite;
  align-items: center; /* Ensure vertical alignment */
  height: 100%; /* Take full container height */
}

.project-icon {
  width: 80px;
  height: 80px;
  margin-right: 2rem;
  border-radius: 15px;
  object-fit: contain; /* Changed from cover to contain */
  transition: transform 0.3s ease;
  filter: grayscale(0.3);
  background: rgba(255, 255, 255, 0.05);
  padding: 8px; /* Add padding for better spacing */
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0; /* Prevent shrinking */
}

.project-icon:hover {
  transform: scale(1.05); /* Reduced scale to prevent overflow */
  filter: grayscale(0);
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.musical-symbol {
  font-size: 2rem;
}

.about-content {
  padding: 2.5rem;
  border-radius: 25px;
  text-align: left;
}

.intro-text {
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
}

.description-grid {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.desc-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.03);
  transition: transform 0.3s ease;
}

.desc-item:hover {
  transform: translateX(10px);
}

.desc-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.desc-item p {
  margin: 0;
  line-height: 1.5;
}

.closing-text {
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  margin: 0;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 1rem;
  }
  
  .profile-image {
    width: 140px;
    height: 140px;
  }
  
  .profile-ring {
    width: 180px;
    height: 180px;
  }
  
  .profile-ring-2 {
    width: 220px;
    height: 220px;
  }
  
  .main-title {
    font-size: 2.5rem;
  }
  
  .projects-showcase,
  .about-content {
    padding: 1.5rem;
  }
  
  .about-title {
    font-size: 2rem;
  }
}
</style>