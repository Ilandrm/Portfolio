<script setup lang="ts">
import ProjectIcon from "@/components/ProjectIcon.vue";
import { computed, onMounted, ref } from "vue";

const isActive = ref(false);
const selectedType = ref<string | null>(null);
const activeProject = ref<any>(null);

const toggleType = (type: string) => {
  selectedType.value = selectedType.value === type ? null : type;
};

const projects = ref([
  { name: "Game Jam 2023", src: "saveTheExam.png", type: "scolaire", years: 2023 },
  { name: "Petit Bach", src: "icon_petitbach.png", type: "scolaire", years: 2023 },
  { name: "Game Jam 2024", src: "concorde.png", type: "scolaire", years: 2024 },
  { name: "Pali Kao capital", src: "LOGO PALI KAO.png", type: "professionnel", years: 2025 },
  { name: "Tower of heros", src: "mask8.png", type: "scolaire", years: 2025 },
  { name: "MMAPI", type: "scolaire", years: 2025 },
  { name: "Lookup", src: "lookup.png", type: "scolaire", years: 2024 },
  { name: "App-stage", src: "stage.jpg", type: "scolaire", years: 2024 },
  { name: "Suki", src: "suki4.png", type: "scolaire", years: 2023 },
  { name: "Kosmos", src: "earth.jpg", type: "professionnel", years: 2025 }
]);

const filteredProjects = computed(() =>
    !selectedType.value
        ? projects.value
        : projects.value.filter((p) => p.type === selectedType.value)
);

const getProjectActive = (project: any) => {
  isActive.value = !isActive.value;
  activeProject.value = project;
};

onMounted(() => {
  projects.value = projects.value.sort((a, b) => b.years - a.years);
});
</script>

<template>
  <h2 class="fw-bold d-flex justify-content-center">Mes Projets</h2>

  <div class="divBtn d-flex justify-content-center mt-4">
    <button
        :class="['btn me-3', selectedType === 'scolaire' ? 'btn-primary' : 'btn-outline-primary']"
        @click="toggleType('scolaire')"
    >
      Scolaire 🎓
    </button>
    <button
        :class="['btn', selectedType === 'professionnel' ? 'btn-primary' : 'btn-outline-primary']"
        @click="toggleType('professionnel')"
    >
      Professionnel 💼
    </button>
  </div>

  <div class="container-project mx-auto">
    <div v-for="project in filteredProjects" class="projects">
      <ProjectIcon :project="project" @active="getProjectActive" />
    </div>
  </div>

  <!-- Overlay avec animation -->
  <div id="overlay" :class="{ show: isActive }" @click="getProjectActive(null)"></div>

  <!-- Modale avec animation -->
  <div class="project-detail" :class="{ show: isActive }">
    <h3 class="text-center">{{ activeProject?.name }}</h3>
    <button class="btn btn-secondary mt-3 mx-auto d-block" @click="getProjectActive(null)">
      Fermer
    </button>
  </div>
</template>

<style scoped lang="scss">
.container-project {
  border-radius: 60px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
  z-index: 2;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.projects {
  padding: 1%;
}

.divBtn button {
  border-radius: 999px;
}

#overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease;
}

#overlay.show {
  opacity: 1;
  visibility: visible;
}

.project-detail {
  background-color: #f1f1f1;
  width: 600px;
  max-width: 90vw;
  padding: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 20;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease, transform 0.4s ease;
  border-radius: 16px;
}

.project-detail.show {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, -50%);
}
</style>
