<template>
  <h2 class="fw-bold d-flex justify-content-center mt-5">Experiences et formations</h2>
  <div class="timeline mt-5">
    <div v-for="(event, index) in events" :key="index" class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <div class="d-flex">
          <img class="xp-img me-2" :src="'xp/'+event.src" alt="xp">
        <h3>{{ event.title }}</h3>
        </div>
        <div class="d-flex mt-2">
          <img v-for="src in event.img" :src="'icon/'+src" class="xp-img-lang me-2" :alt="src">
        </div>
        <p>{{ event.description }}</p>
        <span class="timeline-date">{{ event.date }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  events: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>

<style scoped>
.timeline {
  position: relative;
  margin: 2rem auto;
  padding-left: 30px;
  border-left: 2px solid #ccc;
  max-width: 600px;
}
.xp-img{
  width: 5%;
  object-fit: contain;
}
.xp-img-lang{
  width: 4%;
  object-fit: contain;

}
.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}

.timeline-marker {
  position: absolute;
  left: -9px;
  top: 0.4rem;
  width: 16px;
  height: 16px;
  background: #3498db;
  border: 3px solid white;
  border-radius: 50%;
  z-index: 1;
  transition: background 0.3s ease;
}

.timeline-content {
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.timeline-content h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #2c3e50;
}

.timeline-content p {
  margin: 0.5rem 0 0.3rem;
  color: #555;
}

.timeline-date {
  font-size: 0.8rem;
  color: #999;
  font-style: italic;
}
</style>
