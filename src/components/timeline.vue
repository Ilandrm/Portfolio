<script setup lang="ts">
// Development skills timeline component
</script>

<template>
  <div class="skills-section">
    <!-- Code structure decoration -->
    <div class="code-structure">
      <div class="structure-line"></div>
      <div class="structure-line"></div>
      <div class="structure-line"></div>
      <div class="structure-line"></div>
      <div class="structure-line"></div>
    </div>
    
    <div class="section-header">
      <h2 class="skills-title">
        <span class="code-gradient">Compétences Techniques</span>
      </h2>
      <p class="skills-subtitle">Ma boite à outils</p>
    </div>

    <section class="skills-container">
      <div class="skills-grid">
        <div class="skill-card terminal-glass code-flow" data-category="desktop">
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
              <img src="icon/Java.png" alt="Java" />
              <span class="icon-label">Java</span>
            </div>
            <div class="icon-wrapper">
              <img src="icon/cpp.png" alt="C++" />
              <span class="icon-label">C++</span>
            </div>
            <div class="icon-wrapper">
              <img src="icon/Python.png" alt="Python" />
              <span class="icon-label">Python</span>
            </div>
          </div>
        </div>

        <div class="skill-card terminal-glass code-flow" data-category="web">
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
              <img src="icon/Vue.png" alt="Vue.js" />
              <span class="icon-label">Vue.js</span>
            </div>
            <div class="icon-wrapper">
              <img src="icon/Angular.png" alt="Angular" />
              <span class="icon-label">Angular</span>
            </div>
            <div class="icon-wrapper">
              <img src="icon/laravel-icon.png" alt="Laravel" />
              <span class="icon-label">Laravel</span>
            </div>
          </div>
        </div>

        <div class="skill-card terminal-glass code-flow" data-category="database">
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
              <img src="icon/Postgresql.png" alt="PostgreSQL" />
              <span class="icon-label">PostgreSQL</span>
            </div>
            <div class="icon-wrapper">
              <img src="icon/elasticsearch-logo.png" alt="Elasticsearch" />
              <span class="icon-label">Elasticsearch</span>
            </div>
          </div>
        </div>

        <div class="skill-card terminal-glass code-flow" data-category="tools">
          <div class="card-header">
            <h3>🛠️ Outils & DevOps</h3>
            <div class="skill-indicator">
              <div class="indicator-dot active"></div>
              <div class="indicator-dot active"></div>
              <div class="indicator-dot active"></div>
            </div>
          </div>
          <div class="skill-icons">
            <div class="icon-wrapper">
              <img src="icon/Git_Logo_full.png" alt="Git" />
              <span class="icon-label">Git</span>
            </div>
            <div class="icon-wrapper">
              <img src="icon/docker.png" alt="Docker" />
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
  overflow: hidden;
}

.code-structure {
  position: absolute;
  top: 10%;
  right: 5%;
  width: 150px;
  height: 100px;
  opacity: 0.1;
  z-index: 1;
}

.structure-line {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #40e0d0, transparent);
  margin: 18px 0;
  animation: structurePulse 6s ease-in-out infinite;
}

.structure-line:nth-child(odd) {
  animation-delay: 1s;
  width: 80%;
}

.structure-line:nth-child(even) {
  width: 60%;
  margin-left: 20px;
}

@keyframes structurePulse {
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
  position: relative;
  z-index: 2;
}

.skills-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 1rem;
}

.skills-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.skills-container {
  position: relative;
  z-index: 2;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-card {
  padding: 2rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(64, 224, 208, 0.2);
  }
  
  &[data-category="desktop"]:hover {
    border-color: rgba(64, 224, 208, 0.5);
  }
  
  &[data-category="web"]:hover {
    border-color: rgba(0, 255, 127, 0.5);
  }
  
  &[data-category="database"]:hover {
    border-color: rgba(30, 144, 255, 0.5);
  }
  
  &[data-category="tools"]:hover {
    border-color: rgba(255, 215, 0, 0.5);
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin: 0;
    color: #ffffff;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}

.skill-indicator {
  display: flex;
  gap: 0.3rem;
}

.indicator-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  
  &.active {
    background: #40e0d0;
    box-shadow: 0 0 10px rgba(64, 224, 208, 0.5);
  }
}

.skill-icons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 1rem;
}

.icon-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(64, 224, 208, 0.05);
  border: 1px solid rgba(64, 224, 208, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    background: rgba(64, 224, 208, 0.1);
    border-color: rgba(64, 224, 208, 0.4);
  }
  
  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    border-radius: 4px;
  }
}

.icon-label {
  font-size: 0.8rem;
  color: #c9d1d9;
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
  
  .skill-icons {
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    gap: 0.8rem;
  }
  
  .icon-wrapper {
    padding: 0.8rem;
    
    img {
      width: 35px;
      height: 35px;
    }
  }
}

@media (max-width: 480px) {
  .card-header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .skill-icons {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>