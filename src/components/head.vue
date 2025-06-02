<script setup lang="ts">
import { onMounted, ref } from "vue";

const images = ref<string[]>([]);

onMounted(() => {
  images.value = [
    'projects/concorde.png',
    'projects/icon_petitbach.png',
    'projects/LOGO PALI KAO.png',
    'projects/lookup.png',
    'projects/suki4.png',
    'projects/mask8.png',
    'projects/saveTheExam.png',
  ];
});
</script>

<template>
  <div class="d-flex justify-content-center container-head">
    <div>
      <div class="d-flex justify-content-center image-container mb-2">
        <img src="../assets/image.png" alt="Image" class="pdp">
        <div class="bubble">😁 Ilan Darmon</div>
      </div>

      <div class="d-flex justify-content-center mb-3">
        <h1 class="brandTitle">"Développeur web fullstack"</h1>
      </div>

      <div class="d-flex justify-content-center">
        <button class="lastProject">Dernier projet</button>
      </div>
    </div>
  </div>

  <div class="carousel-wrapper mx-auto">
    <div class="carousel-container">
      <div class="carousel">
        <img
            class="iconDev"
            v-for="(image, index) in [...images, ...images]"
            :key="index"
            :src="image"
            alt="Image"
        />
      </div>
    </div>
  </div>
  <div class="paragraphe w-100 mt-5">
    <h2 class="fw-bold d-flex justify-content-center">A propos de moi...</h2>
    <div class="d-flex justify-content-center mt-4">
      <div>
    <p>Salut , je suis Ilan Darmon, un passionné d'informatique et étudiant dans ce domaine fascinant.</p>
    <p>Ce portfolio vous offre un aperçu détaillé de mes compétences, </p>
    <p>de mon parcours académique ainsi que des projets informatiques auxquels j'ai participé.</p>
    <p>Si vous cherchez à collaborer sur un projet ou à discuter de nouvelles opportunités, </p>
    <p>n'hésitez pas à me contacter. Vous trouverez ici une sélection de mes réalisations,</p>
        <p>ainsi qu'un détail de mes compétences techniques et de mon expérience professionnelle.</p>
    <p id="lastline">Je vous souhaite une agréable visite et j'espère que mes réalisations sauront captiver votre intérêt !</p>
    </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.carousel-wrapper {
  background-color: #ffffff;
  border-radius: 60px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  padding: 40px 0;
  margin-top: 50px;
  width: 80%;
  z-index: 2;
  position: relative;
}
p{
  text-align: center;
  font-size: 1.2rem;

}
.container-head {
  height: 70vh;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  align-items: center;
}

.lastProject {
  border-radius: 30px;
  background-color: black;
  color: white;
  width: 200px;
  font-size: 20px;
  padding: 10px;
}

.image-container {
  position: relative;
}

.pdp {
  width: 150px;
  border: 2px solid white;
  border-radius: 100%;
}

.brandTitle {
  font-weight: bold;
  width: 70%;
  text-align: center;
  margin: 0 auto;
}

.bubble {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffffff;
  color: #333;
  padding: 10px 15px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
}

.bubble::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 10px;
  border-style: solid;
  border-color: #ffffff transparent transparent transparent;
}

.carousel-container {
  overflow: hidden;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.carousel {
  display: flex;
  width: max-content;
  animation: scroll 40s linear infinite;
}

.carousel img {
  align-self: center;
  width: 200px;
  height: auto;
  margin-right: 200px;
  flex-shrink: 0;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
