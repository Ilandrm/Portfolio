<script setup lang="ts">
import { ref } from "vue";

const email = "ilandarmon28@gmail.com"
const textCopy = ref<string>("Copier")
const copyToClip = () => {
  navigator.clipboard.writeText(email)
  textCopy.value = "Copié!"
  setTimeout(() => {
    textCopy.value = "Copier"
  }, 2000)
}
</script>

<template>
<nav class="navbar-dev">
  <div class="nav-container">
    <div class="nav-left">
      <div class="email-section terminal-glass">
        <button class="email-btn">{{ email }}</button>
        <button class="copy-btn btn-dev" @click="copyToClip">{{ textCopy }}</button>
      </div>
      <button class="cv-btn btn-dev">
        <a href="CV Ilan Darmon.pdf">📄 CV</a>
      </button>
    </div>
    
    <div class="nav-right">
      <div class="social-links">
        <a href="https://www.linkedin.com/in/ilan-darmon-0889ab1a0/" class="social-link">
          <span class="social-icon">💼</span>
          LinkedIn
        </a>
        <a href="https://github.com/Ilandrm" class="social-link">
          <span class="social-icon">🐱</span>
          GitHub
        </a>
        <a href="https://gricad-gitlab.univ-grenoble-alpes.fr/darmoni" class="social-link">
          <span class="social-icon">🦊</span>
          GitLab
        </a>
      </div>
    </div>
  </div>
  
  <!-- Code flow decoration -->
  <div class="nav-code-flow"></div>
</nav>
</template>

<style scoped lang="scss">
.navbar-dev {
  position: relative;
  padding: 20px 0;
  z-index: 100;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.email-section {
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  gap: 8px;
}

.email-btn {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  padding: 8px 16px;
  border-radius: 6px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
}

.copy-btn {
  font-size: 0.8rem;
  padding: 8px 16px;
  min-width: 70px;
  transition: all 0.3s ease;
}

.cv-btn {
  a {
    color: #0d1117;
    text-decoration: none;
    font-weight: 600;
  }
}

.nav-right {
  display: flex;
  align-items: center;
}

.social-links {
  display: flex;
  gap: 2rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid transparent;
  
  &:hover {
    color: #40e0d0;
    background: rgba(64, 224, 208, 0.1);
    border-color: rgba(64, 224, 208, 0.3);
    transform: translateY(-2px);
  }
}

.social-icon {
  font-size: 1.2rem;
  filter: grayscale(0.3);
  transition: filter 0.3s ease;
}

.social-link:hover .social-icon {
  filter: grayscale(0);
}

.nav-code-flow {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    #40e0d0 25%, 
    #00ff7f 50%, 
    #1e90ff 75%, 
    transparent 100%);
  animation: codeFlowNav 5s ease-in-out infinite;
}

@keyframes codeFlowNav {
  0%, 100% {
    opacity: 0.4;
    transform: scaleX(0.7);
  }
  50% {
    opacity: 0.8;
    transform: scaleX(1.1);
  }
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
  }
  
  .social-links {
    gap: 1rem;
  }
  
  .social-link {
    font-size: 0.9rem;
  }
}
</style>