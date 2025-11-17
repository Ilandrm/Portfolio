<template>
  <div class="experience-section">
    <!-- Code timeline decoration -->
    <div class="timeline-decoration">
      <div class="code-line"></div>
      <div class="floating-symbols">
        <span class="code-symbol">&lt;/&gt;</span>
        <span class="code-symbol">{}</span>
        <span class="code-symbol">[]</span>
      </div>
    </div>
    
    <div class="section-header">
      <h2 class="experience-title">
        <span class="code-gradient">Expériences & Formations</span>
      </h2>
      <p class="experience-subtitle">Mon parcours professionnel et academique</p>
    </div>

    <div class="timeline-container">
      <div class="timeline-track"></div>
      
      <div class="timeline-items">
        <div 
          v-for="(event, index) in events" 
          :key="index" 
          class="timeline-item"
          :class="{ 'timeline-item-reverse': index % 2 === 1 }"
        >
          <!-- Timeline marker with code symbol -->
          <div class="timeline-marker">
            <div class="marker-outer">
              <div class="marker-inner">
                <span class="marker-symbol">&lt;/&gt;</span>
              </div>
            </div>
            <div class="marker-pulse"></div>
          </div>

          <!-- Experience card -->
          <div class="experience-card terminal-glass code-flow">
            <div class="card-header">
              <div class="company-info">
                <img class="company-logo" :src="'xp/' + event.src" :alt="event.title">
                <div class="title-section">
                  <h3 class="experience-title-text">{{ event.title }}</h3>
                  <span class="experience-date">{{ event.date }}</span>
                </div>
              </div>
              
              <!-- Tech stack with development styling -->
              <div class="tech-stack">
                <div class="tech-label">
                  <span class="tech-icon">⚡</span>
                  <span>Stack</span>
                </div>
                <div class="tech-icons">
                  <div 
                    v-for="(tech, techIndex) in event.img" 
                    :key="techIndex"
                    class="tech-item"
                  >
                    <img :src="'icon/' + tech" :alt="tech" class="tech-image">
                  </div>
                </div>
              </div>
            </div>

            <div class="card-content">
              <p class="experience-description">{{ event.description }}</p>
            </div>

            <!-- Code flow decoration -->
            <div class="card-code-flow">
              <div class="flow-line"></div>
              <div class="flow-line"></div>
              <div class="flow-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  events: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>

<style scoped lang="scss">
.experience-section {
  position: relative;
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
  overflow: hidden;
}

.timeline-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.code-line {
  position: absolute;
  top: 20%;
  left: 10%;
  width: 200px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #40e0d0, transparent);
  opacity: 0.3;
  animation: codePulse 4s ease-in-out infinite;
}

@keyframes codePulse {
  0%, 100% {
    opacity: 0.2;
    transform: scaleX(0.8);
  }
  50% {
    opacity: 0.5;
    transform: scaleX(1.2);
  }
}

.floating-symbols {
  position: absolute;
  width: 100%;
  height: 100%;
}

.code-symbol {
  position: absolute;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.2rem;
  color: rgba(64, 224, 208, 0.2);
  animation: symbolFloat 8s ease-in-out infinite;
}

.code-symbol:nth-child(1) {
  top: 15%;
  right: 10%;
  animation-delay: 0s;
}

.code-symbol:nth-child(2) {
  top: 50%;
  left: 5%;
  animation-delay: 3s;
}

.code-symbol:nth-child(3) {
  top: 80%;
  right: 15%;
  animation-delay: 6s;
}

@keyframes symbolFloat {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.2;
  }
  50% {
    transform: translateY(-15px) rotate(5deg);
    opacity: 0.4;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;
}

.experience-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 1rem;
}

.experience-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.timeline-container {
  position: relative;
  z-index: 2;
}

.timeline-track {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, #40e0d0, #00ff7f, #1e90ff);
  transform: translateX(-50%);
  border-radius: 2px;
}

.timeline-items {
  position: relative;
}

.timeline-item {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  
  &:last-child {
    margin-bottom: 0;
  }
}

.timeline-item-reverse {
  flex-direction: row-reverse;
  
  .experience-card {
    margin-right: 0;
    margin-left: 2rem;
  }
}

.timeline-marker {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}

.marker-outer {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(13, 17, 23, 0.9);
  border: 3px solid #40e0d0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.marker-inner {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, #40e0d0, #00ff7f);
  display: flex;
  align-items: center;
  justify-content: center;
}

.marker-symbol {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: #0d1117;
  font-weight: bold;
}

.marker-pulse {
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 50%;
  border: 2px solid rgba(64, 224, 208, 0.3);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}

.experience-card {
  flex: 1;
  max-width: 400px;
  margin-right: 2rem;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(64, 224, 208, 0.2);
  }
}

.card-header {
  padding: 1.5rem;
  border-bottom: 1px solid rgba(64, 224, 208, 0.2);
}

.company-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.company-logo {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  object-fit: cover;
  border: 2px solid rgba(64, 224, 208, 0.3);
}

.title-section {
  flex: 1;
}

.experience-title-text {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: #ffffff;
}

.experience-date {
  font-size: 0.9rem;
  color: #40e0d0;
  font-weight: 500;
  font-family: 'JetBrains Mono', monospace;
}

.tech-stack {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.tech-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #00ff7f;
  font-weight: 500;
}

.tech-icon {
  font-size: 1rem;
}

.tech-icons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tech-item {
  width: 30px;
  height: 30px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid rgba(64, 224, 208, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    border-color: rgba(64, 224, 208, 0.6);
  }
}

.tech-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem;
}

.experience-description {
  color: #c9d1d9;
  line-height: 1.6;
  margin: 0;
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
  animation: flowMove 4s linear infinite;
}

.flow-line:nth-child(2) {
  animation-delay: 1.3s;
  background: linear-gradient(90deg, transparent, #00ff7f, transparent);
}

.flow-line:nth-child(3) {
  animation-delay: 2.6s;
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

@media (max-width: 768px) {
  .experience-section {
    padding: 2rem 1rem;
  }
  
  .timeline-track {
    left: 30px;
    transform: none;
  }
  
  .timeline-item,
  .timeline-item-reverse {
    flex-direction: row;
    padding-left: 80px;
  }
  
  .timeline-marker {
    left: 30px;
    transform: translateX(-50%);
  }
  
  .experience-card {
    margin-right: 0;
    margin-left: 0;
    max-width: none;
  }
  
  .company-info {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
  
  .tech-stack {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}

@media (max-width: 480px) {
  .timeline-item,
  .timeline-item-reverse {
    padding-left: 60px;
  }
  
  .timeline-marker {
    left: 20px;
  }
  
  .timeline-track {
    left: 20px;
  }
  
  .marker-outer {
    width: 30px;
    height: 30px;
  }
  
  .marker-inner {
    width: 18px;
    height: 18px;
  }
  
  .marker-symbol {
    font-size: 0.6rem;
  }
}
</style>