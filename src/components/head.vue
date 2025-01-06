<script setup lang="ts">
import { onMounted, ref, nextTick } from "vue";

const images = ref<string[]>([]);
const carouselRef = ref<HTMLElement | null>(null);
const isAnimating = ref(false);
onMounted(async () => {
  images.value = [
    "icon/Angular.png",
    "icon/cpp.png",
    "icon/Java.png",
    "icon/laravel-icon.png",
    "icon/mongodb-logo.png",
    "icon/Vue.png",
    "icon/nodejs-logo.png",
    "icon/symfony-icon.png",
  ];

  await nextTick();

  startCarousel();
});

function startCarousel() {
  const carousel = carouselRef.value;

  if (!carousel) return;

  isAnimating.value = true;

  const scrollStep = 1;
  const interval = 16;
  const totalScrollWidth = carousel.scrollWidth / 2;

  let currentScroll = 0;

  const scrollInterval = setInterval(() => {
    if (!isAnimating.value) {
      clearInterval(scrollInterval);
      return;
    }

    currentScroll += scrollStep;

    if (currentScroll >= totalScrollWidth) {
      currentScroll = 0;
      carousel.scrollLeft = 0;
    } else {
      carousel.scrollLeft = currentScroll;
    }
  }, interval);
}

function stopCarousel() {
  isAnimating.value = false;
}
</script>

<template>
  <div class="d-flex justify-content-center container-head">
    <div>
    <div class=" d-flex justify-content-center image-container mb-2">
      <img src="../assets/image.png" alt="Image" class="pdp">
      <div class="bubble">
        😁 Ilan Darmon
      </div>
    </div>
    <div class="d-flex justify-content-center mb-3 ">
    <h1 class="brandTitle ">"Ne jamais s'arreter d'apprendre"</h1>
    </div>
      <div class="d-flex justify-content-center">
      <button class="lastProject">
        Projets
      </button>
      </div>
    </div>
  </div>
  <div class="carousel-container" @mouseenter="stopCarousel" @mouseleave="startCarousel">
    <div class="carousel" ref="carouselRef">
      <img
          class="iconDev"
          v-for="(image, index) in [...images, ...images]"
          :key="index"
          :src="image"
          alt="Image"
      />
    </div>
  </div>
</template>


<style scoped lang="scss">
.container-head {
  height: 70vh;
  background-color: #EEEDEC;
  border-radius: 0 0 50px 50px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 24px;

  align-items: center;
}

.lastProject{
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
.brandTitle{
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
  border-radius: 10px;
  margin-top: 20px;
}

.carousel {
  display: flex;
  animation: scroll 50s linear infinite;
  white-space: nowrap;
}

.carousel img {
  align-self: center;
  width: 120px;
  height: fit-content;
  margin-right: 200px;
  flex-shrink: 0;
}

@keyframes scroll {
  from {
    transform: translateX(50%);
  }
  to {
    transform: translateX(-100%);
  }
}

</style>
