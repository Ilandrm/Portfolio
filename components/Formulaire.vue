<script setup>
const nom = ref("")
const prenom = ref("")
const email = ref("")
const message = ref("")
</script>

<template>
  <div class="form-container mt-5">
    <form class="formulaire">
      <!-- Ligne 1 : Prénom et Nom -->
      <div class="row">
        <div class="input-group">
          <input
              type="text"
              v-model="prenom"
              placeholder=" "
              class="input-field" />
          <label class="input-label">Prénom</label>
        </div>
        <div class="input-group">
          <input
              type="text"
              v-model="nom"
              placeholder=" "
              class="input-field" />
          <label class="input-label">Nom</label>
        </div>
      </div>

      <!-- Ligne 2 : Adresse Email -->
      <div class="row">
        <div class="input-group full-width">
          <input
              type="email"
              v-model="email"
              placeholder=" "
              class="input-field" />
          <label class="input-label">Adresse Email</label>
        </div>
      </div>

      <!-- Ligne 3 : Message -->
      <div class="row">
        <div class="input-group full-width">
          <textarea
              v-model="message"
              placeholder=" "
              class="input-field message-field"></textarea>
          <label class="input-label">Message</label>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
/* Conteneur principal centré */
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
}

/* Formulaire en colonne avec un espacement entre chaque ligne */
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

/* Conteneur de chaque champ avec label flottant */
.input-group {
  position: relative;
  flex: 1;
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
}

/* Supprimer le contour par défaut lors du focus */
.input-field:focus {
  outline: none;
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
  transition: 0.2s;
  pointer-events: none;
}

/* Quand le champ est actif ou comporte du texte, le label se déplace vers le haut */
.input-field:focus + .input-label,
.input-field:not(:placeholder-shown) + .input-label {
  top: -8px;
  font-size: 12px;
}

/* Pour le textarea (message), on augmente la hauteur */
.message-field {
  height: 100px;
  resize: vertical;
}
</style>
