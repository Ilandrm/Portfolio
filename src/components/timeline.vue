<script setup lang="ts">


</script>

<template>
  <div class="container-head mt-3">
    <h2 class="mx-auto fw-bold mb-5">Compétences techniques</h2>
    <section class="skills">
      <div class="skills-grid">
        <div class="skill-card">
          <h3>Client lourd</h3>
          <div class="icons">
            <img src="/icon/Java.png" alt="Java" />
            <img src="/icon/cpp.png" alt="cpp" />
            <img src="/icon/Python.png" alt="Python" />
          </div>
        </div>

        <div class="skill-card">
          <h3>Développement web</h3>
          <div class="icons">
            <img src="/icon/Vue.png" alt="vue" />
            <img src="/icon/Angular.png" alt="angular" />
            <img src="/icon/nuxt.svg" alt="nust" />
            <img src="/icon/laravel-icon.png" alt="JavaScript" />
            <img src="/icon/symfony-icon.png" alt="Vue.js" />
            <img src="/icon/nodejs-logo.png" alt="Laravel" />
          </div>
        </div>

        <div class="skill-card">
          <h3>Base de données</h3>
          <div class="icons">
            <img src="/icon/mongodb-logo.png" alt="MySQL" />
            <img src="/icon/elasticsearch-logo.png" alt="PostgreSQL" />
            <img src="/icon/Postgresql.png" alt="MongoDB" />
          </div>
        </div>

        <div class="skill-card">
          <h3>Outils</h3>
          <div class="icons">
            <img src="/icon/Git_Logo_full.png" alt="React Native" />
            <img src="/icon/docker.png" alt="Flutter" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<style scoped lang="scss">
.container-head {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h3{
  font-weight: bold;
  display: flex;
  justify-content: center;
}
.container{
  max-width: 1200px;
}
.skills {
  text-align: center;
  font-family: "Poppins", sans-serif;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 30px;
  margin: 0 auto;
}

.icons img{
  width: 15%;
  object-fit: contain;
  padding: 2%;
}
.icons{
  display: flex;
  justify-content: center;
}
.skill-card {
  padding: 30px 25px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-align: left;
  background: rgba( 255, 255, 255, 0.1 );
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;

width: 500px
}

.skill-card:hover {
  transform: translateY(-6px);
}

.skill-card h3 {
  font-size: 1.4em;
  margin-bottom: 15px;
  color: #333;
}

.skill-card p {
  font-size: 1em;
  line-height: 1.6;
  color: #666;
}

</style>
