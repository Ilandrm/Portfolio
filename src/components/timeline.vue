<script setup lang="ts">
// Musical timeline component
</script>

<template>
  <div class="skills-section">
    <!-- Musical staff decoration -->
    <div class="musical-staff">
      <div class="staff-line"></div>
      <div class="staff-line"></div>
      <div class="staff-line"></div>
      <div class="staff-line"></div>
      <div class="staff-line"></div>
    </div>
    
    <div class="section-header">
      <h2 class="skills-title">
        <span class="gradient-text">Compétences Techniques</span>
      </h2>
      <p class="skills-subtitle">Ma boite à outils</p>
    </div>

    <section class="skills-container">
      <div class="skills-grid">
        <div class="skill-card glass sound-wave" data-category="desktop">
          <div class="card-header">
            <h3>🖥️ Client Lourd</h3>
            <div class="skill-indicator">
              <div class="indicator-dot active"></div>
              <div class="indicator-dot active"></div>
              <div class="indicator-dot active"></div>
            </div>
          </div>
          <div class="skill-icons">
            <div class="icon-wrapper">
              <img src="/icon/Java.png" alt="Java" />
              <span class="icon-label">Java</span>
            </div>
            <div class="icon-wrapper">
              <img src="/icon/cpp.png" alt="C++" />
              <span class="icon-label">C++</span>
            </div>
            <div class="icon-wrapper">
              <img src="/icon/Python.png" alt="Python" />
              <span class="icon-label">Python</span>
            </div>
          </div>
        </div>

        <div class="skill-card glass sound-wave" data-category="web">
          <div class="card-header">
            <h3>🌐 Développement Web</h3>
            <div class="skill-indicator">
              <div class="indicator-dot active"></div>
              <div class="indicator-dot active"></div>
              <div class="indicator-dot active"></div>
            </div>
          </div>
          <div class="skill-icons">
            <div class="icon-wrapper">
              <img src="/icon/Vue.png" alt="Vue.js" />
              <span class="icon-label">Vue.js</span>
            </div>
            <div class="icon-wrapper">
              <img src="/icon/Angular.png" alt="Angular" />
              <span class="icon-label">Angular</span>
            </div>
            <div class="icon-wrapper">
              <img src="/icon/laravel-icon.png" alt="Laravel" />
              <span class="icon-label">Laravel</span>
            </div>
            <div class="icon-wrapper">
              <img src="/icon/nodejs-logo.png" alt="Node.js" />
              <span class="icon-label">Node.js</span>
            </div>
          </div>
        </div>

        <div class="skill-card glass sound-wave" data-category="database">
          <div class="card-header">
            <h3>🗄️ Base de Données</h3>
            <div class="skill-indicator">
              <div class="indicator-dot active"></div>
              <div class="indicator-dot active"></div>
              <div class="indicator-dot"></div>
            </div>
          </div>
          <div class="skill-icons">
            <div class="icon-wrapper">
              <img src="/icon/Postgresql.png" alt="PostgreSQL" />
              <span class="icon-label">PostgreSQL</span>
            </div>
            <div class="icon-wrapper">
              <img src="/icon/mongodb-logo.png" alt="MongoDB" />
              <span class="icon-label">MongoDB</span>
            </div>
            <div class="icon-wrapper">
              <img src="/icon/elasticsearch-logo.png" alt="Elasticsearch" />
              <span class="icon-label">Elasticsearch</span>
            </div>
          </div>
        </div>

        <div class="skill-card glass sound-wave" data-category="tools">
          <div class="card-header">
            <h3>🛠️ Outils</h3>
            <div class="skill-indicator">
              <div class="indicator-dot active"></div>
              <div class="indicator-dot active"></div>
              <div class="indicator-dot active"></div>
            </div>
          </div>
          <div class="skill-icons">
            <div class="icon-wrapper">
              <img src="/icon/Git_Logo_full.png" alt="Git" />
              <span class="icon-label">Git</span>
            </div>
            <div class="icon-wrapper">
              <img src="/icon/docker.png" alt="Docker" />
              <span class="icon-label">Docker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.skills-section {
  position: relative;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.musical-staff {
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 40px;
  opacity: 0.1;
}

.staff-line {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #7877c6, transparent);
  margin: 8px 0;
  animation: staffGlow 4s ease-in-out infinite;
}

.staff-line:nth-child(odd) {
  animation-delay: 0.5s;
}

@keyframes staffGlow {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.8;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.skills-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.musical-note {
  font-size: 2rem;
  animation: noteFloat 3s ease-in-out infinite;
}

.musical-note:last-child {
  animation-delay: 1.5s;
}

@keyframes noteFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.skills-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-style: italic;
}

.skills-container {
  position: relative;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.skill-card {
  padding: 2rem;
  border-radius: 20px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(120, 119, 198, 0.1), transparent);
  transition: left 0.6s ease;
}

.skill-card:hover::before {
  left: 100%;
}

.skill-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(120, 119, 198, 0.2);
}

.skill-card[data-category="desktop"]:hover {
  box-shadow: 0 20px 40px rgba(255, 119, 198, 0.2);
}

.skill-card[data-category="web"]:hover {
  box-shadow: 0 20px 40px rgba(120, 219, 255, 0.2);
}

.skill-card[data-category="database"]:hover {
  box-shadow: 0 20px 40px rgba(120, 255, 119, 0.2);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.card-header h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.skill-indicator {
  display: flex;
  gap: 4px;
}

.indicator-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.indicator-dot.active {
  background: linear-gradient(45deg, #7877c6, #ff77c6);
  box-shadow: 0 0 10px rgba(120, 119, 198, 0.5);
  animation: indicatorPulse 2s ease-in-out infinite;
}

@keyframes indicatorPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
}

.skill-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.icon-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.icon-wrapper:hover {
  transform: translateY(-5px);
}

.icon-wrapper img {
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 10px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.icon-wrapper:hover img {
  background: rgba(255, 255, 255, 0.1);
  transform: scale(1.1);
}

.icon-label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  text-align: center;
}

@media (max-width: 768px) {
  .skills-section {
    padding: 2rem 1rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .skill-card {
    padding: 1.5rem;
  }
  
  .skills-title {
    font-size: 2rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .skill-icons {
    gap: 1rem;
  }
  
  .icon-wrapper img {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .card-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .skill-indicator {
    align-self: flex-end;
  }
}
</style>