<script setup lang="ts">
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
      <div class="d-flex justify-content-center ">
      <button class="lastProject">
        Projets
      </button>
      </div>
    </div>
  </div>
  <div class="carousel-container">
    <div class="carousel">
      <span>place</span>
      <span>place</span>
      <span>place</span>
      <span>place</span>
      <span>place</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-head {
  height: 70vh;
  background-color: #EEEDEC;
  border-radius: 0 0 30px 30px;
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
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
}

.carousel {
  display: flex;
  animation: scroll 10s linear infinite;
}

.carousel span {
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 200px;
  white-space: nowrap;
}

@keyframes scroll {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

</style>
