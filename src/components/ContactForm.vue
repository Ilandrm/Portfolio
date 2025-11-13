<script setup lang="ts">
import { ref } from 'vue';
import axios from "axios";
const formData = ref({
  name: '',
  email: '',
  phone: '',
  projectType: '',
  message: ''
});

const isSubmitting = ref(false);
const submitStatus = ref<'idle' | 'success' | 'error'>('idle');

const projectTypes = [
  'Site vitrine',
  'Site e-commerce',
  'Application web',
  'Application mobile',
  'Refonte de site',
  'Autre'
];

const handleSubmit = async () => {
  isSubmitting.value = true;
    try {
      await axios.post('http://localhost:3001/send-email', {
        nom: formData.value.name,
        email: formData.value.email,
        projectType: formData.value.projectType,
        message: formData.value.message
      })
      formData.value.name = ""
      formData.value.projectType = ""
      formData.value.email = ""
      formData.value.message = ""
    } catch (error) {
      console.error(error)
    }
};
</script>

<template>
  <div class="contact-section" id="contact">
    <div class="contact-decoration">
      <div class="code-lines">
        <div class="code-line" v-for="i in 5" :key="i">
          <span class="line-number">{{ i }}</span>
          <span class="code-content">{{ i === 1 ? 'function sendMessage() {' : i === 5 ? '}' : '  // contact...' }}</span>
        </div>
      </div>
      <div class="floating-symbols">
        <span class="symbol">@</span>
        <span class="symbol">📧</span>
        <span class="symbol">💬</span>
      </div>
    </div>

    <div class="section-header">
      <h2 class="contact-title">
        <span class="code-gradient">Parlons de votre projet</span>
      </h2>
      <p class="contact-subtitle">Développement web & mobile sur mesure</p>
    </div>

    <div class="contact-content">
      <div class="contact-info terminal-glass">
        <h3 class="info-title">Mes services</h3>
        <div class="services-list">
          <div class="service-item">
            <span class="service-icon">🌐</span>
            <div>
              <h4>Sites Web</h4>
              <p>Sites vitrines, e-commerce, landing pages optimisés SEO</p>
            </div>
          </div>
          <div class="service-item">
            <span class="service-icon">📱</span>
            <div>
              <h4>Applications Mobile</h4>
              <p>Applications iOS et Android </p>
            </div>
          </div>
          <div class="service-item">
            <span class="service-icon">⚙️</span>
            <div>
              <h4>Applications Web</h4>
              <p>Solutions métier, dashboards, SaaS sur mesure</p>
            </div>
          </div>
          <div class="service-item">
            <span class="service-icon">🔧</span>
            <div>
              <h4>Maintenance & Support</h4>
              <p>Évolution, correction de bugs, optimisation</p>
            </div>
          </div>
        </div>

        <div class="contact-details">
          <div class="detail-item">
            <span class="detail-icon">📧</span>
            <a href="mailto:contact@ilandarmon.com">ilandarmon28@gmail.com</a>
          </div>
          <div class="detail-item">
            <span class="detail-icon">💼</span>
            <span>Freelance</span>
          </div>
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="contact-form terminal-glass">
        <div class="form-header">
          <div class="terminal-indicators">
            <div class="indicator red"></div>
            <div class="indicator yellow"></div>
            <div class="indicator green"></div>
          </div>
          <span class="form-title">Demande de devis</span>
        </div>

        <div class="form-group">
          <label for="name">Nom complet *</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            required
            placeholder="Votre nom"
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label for="email">Email *</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            required
            placeholder="votre@email.com"
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label for="phone">Téléphone</label>
          <input
            type="tel"
            id="phone"
            v-model="formData.phone"
            placeholder="+33 6 12 34 56 78"
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label for="projectType">Type de projet *</label>
          <select
            id="projectType"
            v-model="formData.projectType"
            required
            class="form-input"
          >
            <option value="" disabled>Sélectionnez un type</option>
            <option v-for="type in projectTypes" :key="type" :value="type">
              {{ type }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="message">Décrivez votre projet *</label>
          <textarea
            id="message"
            v-model="formData.message"
            required
            rows="5"
            placeholder="Parlez-moi de votre projet, vos besoins, vos objectifs..."
            class="form-input"
          ></textarea>
        </div>

        <button
          type="submit"
          class="submit-button btn-dev code-flow"
          :disabled="isSubmitting"
        >
          <span v-if="!isSubmitting">Envoyer ma demande</span>
          <span v-else>Envoi en cours...</span>
        </button>

        <div v-if="submitStatus === 'success'" class="status-message success">
          ✅ Message envoyé ! Je vous recontacte rapidement.
        </div>
        <div v-if="submitStatus === 'error'" class="status-message error">
          ❌ Erreur lors de l'envoi. Réessayez ou contactez-moi par email.
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact-section {
  position: relative;
  padding: 6rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  overflow: hidden;
}

.contact-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.3;
  z-index: 0;
}

.code-lines {
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: rgba(64, 224, 208, 0.3);
}

.code-line {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.line-number {
  color: rgba(64, 224, 208, 0.5);
}

.floating-symbols {
  position: absolute;
  width: 100%;
  height: 100%;
  
  .symbol {
    position: absolute;
    font-size: 2rem;
    animation: float 6s ease-in-out infinite;
    
    &:nth-child(1) {
      top: 20%;
      right: 10%;
      animation-delay: 0s;
    }
    
    &:nth-child(2) {
      top: 60%;
      right: 20%;
      animation-delay: 2s;
    }
    
    &:nth-child(3) {
      top: 40%;
      left: 10%;
      animation-delay: 4s;
    }
  }
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
}

.contact-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  font-family: 'JetBrains Mono', monospace;
}

.contact-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  position: relative;
  z-index: 1;
}

.contact-info {
  padding: 2.5rem;
  border-radius: 20px;
  height: fit-content;
  position: sticky;
  top: 2rem;
}

.info-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #40e0d0;
  font-family: 'JetBrains Mono', monospace;
}

.services-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.service-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  
  .service-icon {
    font-size: 2rem;
    flex-shrink: 0;
  }
  
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
    color: #40e0d0;
  }
  
  p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.5;
  }
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(64, 224, 208, 0.2);
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1rem;
  
  .detail-icon {
    font-size: 1.5rem;
  }
  
  a {
    color: #40e0d0;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      color: #5ff5e5;
      text-decoration: underline;
    }
  }
}

.contact-form {
  padding: 2.5rem;
  border-radius: 20px;
}

.form-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(64, 224, 208, 0.2);
}

.terminal-indicators {
  display: flex;
  gap: 0.5rem;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  
  &.red { background: #ff5f56; }
  &.yellow { background: #ffbd2e; }
  &.green { background: #27c93f; }
}

.form-title {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  color: #40e0d0;
}

.form-group {
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.95rem;
  }
}

.form-input {
  width: 100%;
  padding: 0.9rem 1.2rem;
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(64, 224, 208, 0.2);
  border-radius: 12px;
  color: white;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #40e0d0;
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 20px rgba(64, 224, 208, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
}

select.form-input {
  cursor: pointer;
}

textarea.form-input {
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
}

.submit-button {
  width: 100%;
  padding: 1.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 1rem;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.status-message {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 500;
  
  &.success {
    background: rgba(39, 201, 63, 0.2);
    border: 2px solid #27c93f;
    color: #27c93f;
  }
  
  &.error {
    background: rgba(255, 95, 86, 0.2);
    border: 2px solid #ff5f56;
    color: #ff5f56;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
  }
}

@media (max-width: 1024px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
  
  .contact-info {
    position: relative;
    top: 0;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 4rem 1.5rem;
  }
  
  .contact-title {
    font-size: 2rem;
  }
  
  .contact-subtitle {
    font-size: 1rem;
  }
  
  .contact-info,
  .contact-form {
    padding: 1.5rem;
  }
}
</style>
