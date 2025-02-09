<script setup>
import { ref } from 'vue'

const nom = ref("")
const prenom = ref("")
const email = ref("")
const message = ref("")
</script>

<template>
  <div class="d-flex justify-content-center row">
  <div class="form-container mt-5 col-4">
    <h2 class="form-title">Vous souhaitez prendre rendez-vous ?</h2>
    <form class="formulaire" @submit.prevent>
      <!-- Ligne 1 : Prénom et Nom -->
      <div class="row">
        <!-- Champ Prénom -->
        <div class="field-container">
          <i class="pi pi-user field-icon"></i>
          <div class="input-group">
            <input
                type="text"
                v-model="prenom"
                placeholder=" "
                class="input-field" />
            <label class="input-label">Prénom</label>
          </div>
        </div>
        <!-- Champ Nom -->
        <div class="field-container">
          <i class="pi pi-user field-icon"></i>
          <div class="input-group">
            <input
                type="text"
                v-model="nom"
                placeholder=" "
                class="input-field" />
            <label class="input-label">Nom</label>
          </div>
        </div>
      </div>

      <!-- Ligne 2 : Adresse Email -->
      <div class="row">
        <div class="field-container full-width">
          <i class="pi pi-envelope field-icon"></i>
          <div class="input-group">
            <input
                type="email"
                v-model="email"
                placeholder=" "
                class="input-field" />
            <label class="input-label">Adresse Email</label>
          </div>
        </div>
      </div>

      <!-- Ligne 3 : Message -->
      <div class="row">
        <div class="field-container full-width">
          <i class="pi pi-comment field-icon"></i>
          <div class="input-group">
            <textarea
                v-model="message"
                placeholder=" "
                class="input-field message-field"></textarea>
            <label class="input-label">Message</label>
          </div>
        </div>
      </div>

      <!-- Bouton d'envoi -->
      <div class="row">
        <button type="submit" class="submit-btn">
          <i class="pi pi-check"></i> Envoyer
        </button>
      </div>
    </form>
  </div>
    <div class="paliPres d-flex flex-column col-4 mt-5">

      <img class="w-25 mt-5 mx-auto" alt="logo" src="public/logo-pali-blanc.png">

      <div class="d-flex mx-auto mt-4">
      <i class="pi pi-map-marker" style="font-size: 25px"></i>
        <p class=" ms-3">58 rue Pierre Damours, 75017 Paris</p>

      </div>
      <div class="d-flex mx-auto">
        <i class="pi pi-phone" style="font-size: 25px"></i>
        <p class=" ms-3">06 19 81 34 72</p>

      </div>
      <div class="d-flex mx-auto">
        <i class="pi pi-envelope" style="font-size: 25px"></i>
        <p class=" ms-3">ds@palikaocapital.com </p>

      </div>

    </div>
  </div>
</template>

<style scoped>
/* Conteneur principal centré */
.form-container {
  max-width: 600px;
  padding: 1%;
  background: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
.paliPres{
  background-color: #000b31;
  border-radius: 8px;
  color: white;
}
p{
  font-size: 20px;
}
/* Titre du formulaire */
.form-title {
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: #000b31;
  margin-bottom: 20px;
}

/* Formulaire en colonne avec espacement entre chaque ligne */
.formulaire {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Chaque ligne utilise Flexbox pour aligner les champs côte à côte */
.row {
  display: flex;
  gap: 20px;
}

/* Pour occuper toute la largeur dans certaines lignes */
.full-width {
  flex: 1;
}

/* Conteneur pour chaque champ (icône + input-group) */
.field-container {
  display: flex;
  align-items: center;
  flex: 1;
}

/* Style de l'icône, positionnée à gauche et séparée du champ */
.field-icon {
  color: #000b31;
  font-size: 1.5rem;
  margin-right: 8px;
}

/* Conteneur de l'input et du label (label flottant) */
.input-group {
  position: relative;
  width: 100%;
}

/* Style des champs de saisie */
.input-field {
  font-size: 16px;
  width: 100%;
  height: 44px;
  padding: 0 16px;
  border: 1px solid #000b31;
  border-radius: 4px;
  background: #fff;
  color: #323840;
  box-sizing: border-box;
  transition: border-color 0.2s;
}

/* Pour le textarea (message) : hauteur plus importante */
.message-field {
  height: 100px;
  resize: vertical;
}

/* Style du label flottant */
.input-label {
  position: absolute;
  top: 14px;
  left: 16px;
  color: #000b31;
  background: #fff;
  padding: 0 4px;
  font-size: 14px;
  transition: top 0.2s, font-size 0.2s;
  pointer-events: none;
}

/* Quand le champ est actif ou comporte du texte, le label se déplace vers le haut */
.input-field:focus + .input-label,
.input-field:not(:placeholder-shown) + .input-label {
  top: -8px;
  font-size: 12px;
}

/* Amélioration visuelle lors du focus */
.input-field:focus {
  border-color: #0056b3;
  outline: none;
}

/* Style du bouton d'envoi */
.submit-btn {
  width: 100%;
  height: 44px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  background-color: #000b31;
  color: white;
}

/* Effet au survol du bouton */
.submit-btn:hover {
  background-color: rgba(0, 11, 49, 0.74);
}
</style>
