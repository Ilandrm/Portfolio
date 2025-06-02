<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{
  project: {
    src: string;
    name: string;
    type: 'scolaire' | 'professionnel' | 'personnel';
  };
}>();

const icons = {
  scolaire: '🎓',
  professionnel: '💼',
  personnel: '🌱',
};


</script>

<template>
  <div class="project-card" @click="$emit('active',props.project)">
      <!-- Face avant -->
      <div class="card-face front">
        <div class="badge" :class="props.project.type">
          {{ icons[props.project.type] }}
        </div>
        <img
            v-if="props.project.src"
            :src="'projects/' + props.project.src"
            alt="Projet"
            class="project-image"
        />
        <img
            v-else
            src="projects/placeholder.png"
            alt="Projet"
            class="project-image"
        />
        <div class="project-info">
          <h3 class="project-title">{{ props.project.name }}</h3>
        </div>
      </div>
  </div>

</template>

<style scoped lang="scss">
.project-card {
  perspective: 1000px;
  width: 250px;
  height: 300px;
  cursor: pointer;
}

.flip-container {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-container.flipped {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.card-face.front {
  background: #ffffff;
  z-index: 2;
}

.card-face.back {
  background: #2c3e50;
  color: #fff;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
}

.project-image {
  width: 100%;
  height: 250px;
  object-fit: contain;
}

.project-info {
  padding: 1rem;
  text-align: center;
}

.project-title {
  margin: 0;
  font-size: 1.2rem;
  color: #2c3e50;
}

.badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #eee;
  color: #fff;
  font-size: 1.1rem;
  padding: 6px 9px;
  border-radius: 999px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}
</style>
