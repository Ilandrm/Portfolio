<template>
  <div class="experience-section">
    <!-- Musical timeline decoration -->
    <div class="timeline-decoration">
      <div class="music-line"></div>
      <div class="floating-notes">
        <span class="note-symbol">♪</span>
        <span class="note-symbol">♫</span>
        <span class="note-symbol">♪</span>
      </div>
    </div>
    
    <div class="section-header">
      <h2 class="experience-title">
        <span class="gradient-text">Expériences & Formations</span>
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
          <!-- Timeline marker with musical note -->
          <div class="timeline-marker">
            <div class="marker-outer">
              <div class="marker-inner">
                <span class="marker-note">♪</span>
              </div>
            </div>
            <div class="marker-pulse"></div>
          </div>

          <!-- Experience card -->
          <div class="experience-card glass sound-wave">
            <div class="card-header">
              <div class="company-info">
                <img class="company-logo" :src="'xp/' + event.src" :alt="event.title">
                <div class="title-section">
                  <h3 class="experience-title-text">{{ event.title }}</h3>
                  <span class="experience-date">{{ event.date }}</span>
                </div>
              </div>
              
              <!-- Tech stack with musical styling -->
              <div class="tech-stack">
                <div class="tech-label">
                  <span class="tech-icon">🎹</span>
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

            <!-- Musical wave decoration -->
            <div class="card-wave">
              <div class="wave-line"></div>
              <div class="wave-line"></div>
              <div class="wave-line"></div>
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
  z-index: 0;
}

.music-line {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(120, 119, 198, 0.2) 25%, 
    rgba(255, 119, 198, 0.2) 50%, 
    rgba(120, 219, 255, 0.2) 75%, 
    transparent 100%);
  animation: musicFlow 8s ease-in-out infinite;
}

@keyframes musicFlow {
  0%, 100% {
    opacity: 0.3;
    transform: scaleX(0.8);
  }
  50% {
    opacity: 0.8;
    transform: scaleX(1.2);
  }
}

.floating-notes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.note-symbol {
  position: absolute;
  font-size: 1.5rem;
  color: rgba(120, 119, 198, 0.2);
  animation: floatNote 6s ease-in-out infinite;
}

.note-symbol:nth-child(1) {
  top: 20%;
  left: 15%;
  animation-delay: 0s;
}

.note-symbol:nth-child(2) {
  top: 70%;
  right: 20%;
  animation-delay: 2s;
}

.note-symbol:nth-child(3) {
  top: 40%;
  left: 80%;
  animation-delay: 4s;
}

@keyframes floatNote {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.2;
  }
  50% {
    transform: translateY(-15px) rotate(10deg);
    opacity: 0.5;
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
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.title-icon {
  font-size: 2.5rem;
  animation: iconPulse 3s ease-in-out infinite;
}

@keyframes iconPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.experience-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-style: italic;
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
  width: 4px;
  background: linear-gradient(to bottom, 
    #7877c6 0%, 
    #ff77c6 50%, 
    #78dbff 100%);
  border-radius: 2px;
  transform: translateX(-50%);
  box-shadow: 0 0 20px rgba(120, 119, 198, 0.3);
}

.timeline-items {
  position: relative;
}

.timeline-item {
  position: relative;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
}

.timeline-item:nth-child(odd) {
  justify-content: flex-end;
  
  .experience-card {
    margin-right: 3rem;
  }
}

.timeline-item:nth-child(even) {
  justify-content: flex-start;
  
  .experience-card {
    margin-left: 3rem;
  }
}

.timeline-marker {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.marker-outer {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7877c6, #ff77c6);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px rgba(120, 119, 198, 0.4);
  animation: markerGlow 3s ease-in-out infinite;
}

.marker-inner {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.marker-note {
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
}

.marker-pulse {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid rgba(120, 119, 198, 0.3);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes markerGlow {
  0%, 100% {
    box-shadow: 0 0 30px rgba(120, 119, 198, 0.4);
  }
  50% {
    box-shadow: 0 0 50px rgba(255, 119, 198, 0.6);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.experience-card {
  width: 45%;
  max-width: 400px;
  padding: 2rem;
  border-radius: 20px;
  position: relative;
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.experience-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(120, 119, 198, 0.2);
}

.card-header {
  margin-bottom: 1.5rem;
}

.company-info {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.company-logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  padding: 8px;
}

.title-section {
  flex: 1;
}

.experience-title-text {
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
}

.experience-date {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  background: rgba(120, 119, 198, 0.2);
  padding: 4px 12px;
  border-radius: 15px;
  display: inline-block;
}

.tech-stack {
  margin-bottom: 1rem;
}

.tech-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.8rem;
  font-weight: 500;
}

.tech-icon {
  font-size: 1rem;
}

.tech-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.tech-item {
  transition: transform 0.3s ease;
}

.tech-item:hover {
  transform: translateY(-3px);
}

.tech-image {
  width: 30px;
  height: 30px;
  object-fit: contain;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  padding: 4px;
  transition: all 0.3s ease;
}

.tech-item:hover .tech-image {
  background: rgba(255, 255, 255, 0.1);
  transform: scale(1.1);
}

.card-content {
  position: relative;
}

.experience-description {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;
}

.card-wave {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
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
  animation: waveMove 3s linear infinite;
}

.wave-line:nth-child(2) {
  animation-delay: 1s;
  background: linear-gradient(90deg, transparent, #ff77c6, #78dbff, transparent);
}

.wave-line:nth-child(3) {
  animation-delay: 2s;
  background: linear-gradient(90deg, transparent, #78dbff, #7877c6, transparent);
}

@keyframes waveMove {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

@media (max-width: 768px) {
  .experience-section {
    padding: 2rem 1rem;
  }
  
  .timeline-track {
    left: 2rem;
  }
  
  .timeline-item {
    justify-content: flex-start !important;
    
    .experience-card {
      margin-left: 4rem !important;
      margin-right: 0 !important;
      width: calc(100% - 5rem);
      max-width: none;
    }
  }
  
  .timeline-marker {
    left: 2rem;
    transform: translateX(-50%);
  }
  
  .marker-outer {
    width: 40px;
    height: 40px;
  }
  
  .marker-inner {
    width: 28px;
    height: 28px;
  }
  
  .marker-note {
    font-size: 0.9rem;
  }
  
  .experience-card {
    padding: 1.5rem;
  }
  
  .company-info {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.8rem;
  }
  
  .tech-icons {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .experience-title {
    font-size: 1.8rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .timeline-item {
    .experience-card {
      margin-left: 3rem !important;
      width: calc(100% - 4rem);
    }
  }
  
  .timeline-marker {
    left: 1.5rem;
  }
  
  .timeline-track {
    left: 1.5rem;
  }
}
</style>