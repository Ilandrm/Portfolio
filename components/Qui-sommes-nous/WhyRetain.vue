<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "WhyRetain"
})
</script>

<template>
  <h1 class="d-flex justify-content-around fw-bold mt-5 responsTitle">Pourquoi nous retenir ?</h1>
  <div class="container mb-5 mt-4">
    <div class="card advantage">
      <img class="icon" src="public/Demarche.jpg" alt="icon">
      <h3>Notre démarche</h3>
      <p>📌 Nous menons une démarche de conseil patrimonial globale, intégrant d’une part les aspects civils, juridiques, fiscaux et d’autre part, une expérience reconnue des marchés financiers et immobiliers.</p>
    </div>
    <div class="card advantage">
      <img class="icon" src="public/Nos-conseils.jpg" alt="icon">
      <h3>Notre philosophie</h3>
      <p>📌 Nous savons à quel point la gestion d'un patrimoine équilibré, dans la durée et dans l’allocation d’actifs est importante, et cela afin de vous assurer un investissement en adéquation avec vos objectifs personnels et familiaux.</p>
    </div>
    <div class="card advantage">
      <img class="icon" src="public/Atout.jpg" alt="icon">
      <h3>Nos atouts</h3>
      <p>📌 Notre expertise en tant qu’investisseur et conseiller financier depuis 1998 nous a permis de faire face aux crises financières de 2001, 2007 ou 2020, ou à la bulle spéculative des marchés en 2000 et 2007.</p>
      <p>Nous disposons également de plus de 20 ans d’expérience sur les marchés de l’investissement immobilier direct et indirect.</p>
    </div>
    <div class="card advantage">
      <img class="icon" src="public/Notre-independance.png" alt="icon">
      <h3>Notre indépendance</h3>
      <p>📌 Nous n’avons aucun lien capitalistique avec des sociétés financières (banque, assurance) ou immobilières, ce qui nous permet de sélectionner librement les produits d’investissement et les services qui correspondent précisément à vos besoins.</p>
    </div>
  </div>

</template>

<style scoped>
.container {
  text-align: center;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
  height: 100%;
}

.icon {
  width: 100%;
  height: 150px; /* Assure une hauteur uniforme */
  object-fit: cover; /* Redimensionne l'image sans la déformer */
  margin-bottom: 15px;
}

p{
  font-size: 15px;
}
h3{
  font-weight: bold;
}
@media (max-width: 768px) {
  h1 {
    font-size: 25px;
  }
}
</style>
