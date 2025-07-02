<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  project: {
    src?: string;
    name: string;
    type: 'scolaire' | 'professionnel' | 'personnel';
    years: number;
    description?: string;
    technologies?: string[];
    link?: string;
  };
}>();

const icons = {
  scolaire: '🎓',
  professionnel: '💼',
  personnel: '🌱',
};

const isHovered = ref(false);
</script>

<template>
  <div 
    class="project-card glass sound-wave" 
    @click="$emit('active', props.project)"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Musical note decoration -->
    <div class="musical-decoration">
      <div class="note-float">♪</div>
      <div class="note-float">♫</div>
    </div>
    
    <!-- Project type badge -->
    <div class="project-badge" :class="props.project.type">
      <span class="badge-icon">{{ icons[props.project.type] }}</span>
      <span class="badge-text">{{ props.project.type }}</span>
    </div>
    
    <!-- Project image section with fixed dimensions -->
    <div class="image-section">
      <div class="image-container">
        <div class="image-wrapper">
          <img
              v-if="props.project.src"
              :src="'projects/' + props.project.src"
              :alt="props.project.name"
              class="project-image"
          />
          <img
              v-else
              src="projects/placeholder.png"
              :alt="props.project.name"
              class="project-image"
          />
        </div>
        
        <!-- Hover overlay -->
        <div class="image-overlay" :class="{ active: isHovered }">
          <div class="overlay-content">
            <span class="view-text">Voir le projet</span>
            <div class="overlay-waves">
              <div class="overlay-wave"></div>
              <div class="overlay-wave"></div>
              <div class="overlay-wave"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Sound visualizer -->
      <div class="sound-visualizer" :class="{ active: isHovered }">
        <div class="sound-bar" v-for="i in 5" :key="i"></div>
      </div>
    </div>
    
    <!-- Project info section with fixed height -->
    <div class="project-info">
      <h3 class="project-title">{{ props.project.name }}</h3>
      <div class="project-year">{{ props.project.years }}</div>
    </div>
    
    <!-- Interactive wave at bottom -->
    <div class="card-wave">
      <div class="wave-line"></div>
      <div class="wave-line"></div>
      <div class="wave-line"></div>
    </div>
    
    <!-- Glow effect -->
    <div class="card-glow" :class="props.project.type"></div>
  </div>
</template>

<style scoped lang="scss">
.project-card {
  width: 280px;
  height: 380px; /* Increased height for better proportions */
  border-radius: 20px;
  padding: 1.5rem;
  position: relative;
  cursor: pointer;
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: 0 25px 50px rgba(120, 119, 198, 0.3);
}

.project-card.scolaire:hover {
  box-shadow: 0 25px 50px rgba(120, 119, 198, 0.4);
}

.project-card.professionnel:hover {
  box-shadow: 0 25px 50px rgba(255, 119, 198, 0.4);
}

.musical-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.note-float {
  position: absolute;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.1);
  animation: noteFloat 4s ease-in-out infinite;
}

.note-float:nth-child(1) {
  top: 20%;
  right: 15%;
  animation-delay: 0s;
}

.note-float:nth-child(2) {
  bottom: 30%;
  left: 10%;
  animation-delay: 2s;
}

@keyframes noteFloat {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.1;
  }
  50% {
    transform: translateY(-10px) rotate(15deg);
    opacity: 0.3;
  }
}

.project-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  z-index: 3;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.project-badge.scolaire {
  background: rgba(120, 119, 198, 0.3);
  color: #7877c6;
}

.project-badge.professionnel {
  background: rgba(255, 119, 198, 0.3);
  color: #ff77c6;
}

.project-badge.personnel {
  background: rgba(120, 219, 255, 0.3);
  color: #78dbff;
}

.badge-icon {
  font-size: 1rem;
}

.badge-text {
  text-transform: capitalize;
}

.image-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
  min-height: 0; /* Important for flex child */
}

.image-container {
  position: relative;
  flex: 1;
  border-radius: 15px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.02);
  min-height: 180px; /* Fixed minimum height */
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.project-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain; /* Changed from cover to contain for better centering */
  transition: transform 0.4s ease;
  border-radius: 8px;
}

.project-card:hover .project-image {
  transform: scale(1.05); /* Reduced scale to prevent overflow */
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(120, 119, 198, 0.8), rgba(255, 119, 198, 0.8));
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s ease;
  border-radius: 15px;
}

.image-overlay.active {
  opacity: 1;
}

.overlay-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: white;
  text-align: center;
  transform: translateY(10px);
  transition: transform 0.4s ease;
}

.image-overlay.active .overlay-content {
  transform: translateY(0);
}

.view-text {
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.5px;
}

.overlay-waves {
  display: flex;
  gap: 4px;
  align-items: end;
  height: 20px;
}

.overlay-wave {
  width: 3px;
  background: linear-gradient(to top, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 1));
  border-radius: 2px;
  height: 6px;
  animation: overlayWave 1.5s ease-in-out infinite;
}

.overlay-wave:nth-child(1) {
  animation-delay: 0s;
}

.overlay-wave:nth-child(2) {
  animation-delay: 0.2s;
}

.overlay-wave:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes overlayWave {
  0%, 100% {
    height: 6px;
    opacity: 0.6;
  }
  50% {
    height: 18px;
    opacity: 1;
  }
}

.sound-visualizer {
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 3px;
  height: 30px;
  padding: 0 1rem;
  flex-shrink: 0; /* Prevent shrinking */
}

.sound-bar {
  width: 3px;
  background: linear-gradient(to top, #7877c6, #ff77c6);
  border-radius: 2px;
  transition: height 0.3s ease;
  height: 8px;
}

.sound-visualizer.active .sound-bar {
  animation: soundBars 1s ease-in-out infinite;
}

.sound-bar:nth-child(1) { animation-delay: 0s; }
.sound-bar:nth-child(2) { animation-delay: 0.1s; }
.sound-bar:nth-child(3) { animation-delay: 0.2s; }
.sound-bar:nth-child(4) { animation-delay: 0.3s; }
.sound-bar:nth-child(5) { animation-delay: 0.4s; }

@keyframes soundBars {
  0%, 100% {
    height: 8px;
  }
  50% {
    height: 25px;
  }
}

.project-info {
  z-index: 2;
  position: relative;
  flex-shrink: 0; /* Prevent shrinking */
  height: 80px; /* Fixed height for uniformity */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.project-title {
  font-size: 1.1rem; /* Standardized font size */
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  line-height: 1.3;
  text-align: center;
  font-family: 'Inter', sans-serif; /* Consistent font family */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  min-height: 2.6rem; /* Reserve space for 2 lines */
}

.project-year {
  font-size: 0.85rem; /* Standardized font size */
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 4px 12px;
  border-radius: 12px;
  font-weight: 500;
  font-family: 'Inter', sans-serif; /* Consistent font family */
  white-space: nowrap;
}

.card-wave {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  overflow: hidden;
  border-radius: 0 0 20px 20px;
}

.wave-line {
  position: absolute;
  bottom: 0;
  left: -100%;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #7877c6, #ff77c6, transparent);
  animation: cardWave 3s linear infinite;
}

.wave-line:nth-child(2) {
  animation-delay: 1s;
  background: linear-gradient(90deg, transparent, #ff77c6, #78dbff, transparent);
}

.wave-line:nth-child(3) {
  animation-delay: 2s;
  background: linear-gradient(90deg, transparent, #78dbff, #7877c6, transparent);
}

@keyframes cardWave {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.card-glow {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: 22px;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.project-card:hover .card-glow {
  opacity: 1;
}

.card-glow.scolaire {
  background: linear-gradient(135deg, #7877c6, #9896d4);
  filter: blur(10px);
}

.card-glow.professionnel {
  background: linear-gradient(135deg, #ff77c6, #ff99d4);
  filter: blur(10px);
}

.card-glow.personnel {
  background: linear-gradient(135deg, #78dbff, #99e5ff);
  filter: blur(10px);
}

@media (max-width: 768px) {
  .project-card {
    width: 250px;
    height: 350px;
    padding: 1.2rem;
  }
  
  .image-container {
    min-height: 160px;
  }
  
  .project-info {
    height: 70px;
  }
  
  .project-title {
    font-size: 1rem;
    min-height: 2.4rem;
  }
  
  .sound-visualizer {
    height: 25px;
  }
}

@media (max-width: 480px) {
  .project-card {
    width: 100%;
    max-width: 280px;
    height: 320px;
    padding: 1rem;
  }
  
  .image-container {
    min-height: 140px;
  }
  
  .project-info {
    height: 60px;
  }
  
  .project-title {
    font-size: 0.95rem;
    min-height: 2.2rem;
  }
  
  .project-badge {
    top: 0.8rem;
    right: 0.8rem;
    padding: 4px 8px;
    font-size: 0.7rem;
  }
  
  .badge-text {
    display: none;
  }
}
</style>