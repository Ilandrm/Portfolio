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
    class="project-card terminal-glass code-flow" 
    @click="$emit('active', props.project)"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Code decoration -->
    <div class="code-decoration">
      <div class="code-symbol">&lt;/&gt;</div>
      <div class="code-symbol">{}</div>
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
            <div class="overlay-code-lines">
              <div class="code-line"></div>
              <div class="code-line"></div>
              <div class="code-line"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Code visualizer -->
      <div class="code-visualizer" :class="{ active: isHovered }">
        <div class="code-bar" v-for="i in 5" :key="i"></div>
      </div>
    </div>
    
    <!-- Project info section with fixed height -->
    <div class="project-info">
      <h3 class="project-title">{{ props.project.name }}</h3>
      <div class="project-year">{{ props.project.years }}</div>
    </div>
    
    <!-- Interactive code flow at bottom -->
    <div class="card-code-flow">
      <div class="flow-line"></div>
      <div class="flow-line"></div>
      <div class="flow-line"></div>
    </div>
    
    <!-- Glow effect -->
    <div class="card-glow" :class="props.project.type"></div>
  </div>
</template>

<style scoped lang="scss">
.project-card {
  width: 280px;
  height: 320px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  border: 1px solid rgba(64, 224, 208, 0.2);
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: rgba(64, 224, 208, 0.5);
    box-shadow: 0 15px 35px rgba(64, 224, 208, 0.2);
  }
}

.code-decoration {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  opacity: 0.3;
}

.code-symbol {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: #40e0d0;
  margin-bottom: 2px;
  animation: codeFloat 4s ease-in-out infinite;
}

.code-symbol:nth-child(2) {
  animation-delay: 2s;
}

@keyframes codeFloat {
  0%, 100% {
    opacity: 0.3;
    transform: translateX(0);
  }
  50% {
    opacity: 0.6;
    transform: translateX(3px);
  }
}

.project-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  z-index: 3;
  backdrop-filter: blur(10px);
  
  &.scolaire {
    background: rgba(64, 224, 208, 0.2);
    color: #40e0d0;
    border: 1px solid rgba(64, 224, 208, 0.3);
  }
  
  &.professionnel {
    background: rgba(0, 255, 127, 0.2);
    color: #00ff7f;
    border: 1px solid rgba(0, 255, 127, 0.3);
  }
  
  &.personnel {
    background: rgba(30, 144, 255, 0.2);
    color: #1e90ff;
    border: 1px solid rgba(30, 144, 255, 0.3);
  }
}

.badge-icon {
  font-size: 1rem;
}

.image-section {
  position: relative;
  height: 200px;
  overflow: hidden;
  background: rgba(13, 17, 23, 0.5);
  border-radius: 8px 8px 0 0;
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
}

.project-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
  border-radius: 4px;
}

.project-card:hover .project-image {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(13, 17, 23, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  &.active {
    opacity: 1;
  }
}

.overlay-content {
  text-align: center;
  color: #40e0d0;
}

.view-text {
  font-weight: 600;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 1rem;
}

.overlay-code-lines {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
}

.code-line {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #40e0d0, transparent);
  animation: codePulse 1.5s ease-in-out infinite;
}

.code-line:nth-child(2) {
  animation-delay: 0.3s;
  width: 80px;
}

.code-line:nth-child(3) {
  animation-delay: 0.6s;
  width: 50px;
}

@keyframes codePulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

.code-visualizer {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 3px;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  &.active {
    opacity: 1;
  }
}

.code-bar {
  width: 3px;
  height: 20px;
  background: linear-gradient(to top, #40e0d0, #00ff7f);
  border-radius: 2px;
  animation: codeVisualize 1.2s ease-in-out infinite;
}

.code-bar:nth-child(1) { animation-delay: 0s; }
.code-bar:nth-child(2) { animation-delay: 0.2s; }
.code-bar:nth-child(3) { animation-delay: 0.4s; }
.code-bar:nth-child(4) { animation-delay: 0.6s; }
.code-bar:nth-child(5) { animation-delay: 0.8s; }

@keyframes codeVisualize {
  0%, 100% {
    height: 8px;
  }
  50% {
    height: 25px;
  }
}

.project-info {
  padding: 20px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  color: #ffffff;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-year {
  font-size: 0.9rem;
  color: #40e0d0;
  font-weight: 500;
  font-family: 'JetBrains Mono', monospace;
}

.card-code-flow {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  overflow: hidden;
}

.flow-line {
  position: absolute;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #40e0d0, transparent);
  animation: flowMove 3s linear infinite;
}

.flow-line:nth-child(2) {
  animation-delay: 1s;
  background: linear-gradient(90deg, transparent, #00ff7f, transparent);
}

.flow-line:nth-child(3) {
  animation-delay: 2s;
  background: linear-gradient(90deg, transparent, #1e90ff, transparent);
}

@keyframes flowMove {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.card-glow {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: -1;
  
  &.scolaire {
    background: linear-gradient(45deg, rgba(64, 224, 208, 0.3), rgba(64, 224, 208, 0.1));
  }
  
  &.professionnel {
    background: linear-gradient(45deg, rgba(0, 255, 127, 0.3), rgba(0, 255, 127, 0.1));
  }
  
  &.personnel {
    background: linear-gradient(45deg, rgba(30, 144, 255, 0.3), rgba(30, 144, 255, 0.1));
  }
}

.project-card:hover .card-glow {
  opacity: 1;
}

@media (max-width: 768px) {
  .project-card {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
}
</style>