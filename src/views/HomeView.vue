<script setup lang="ts">
import Navbar from '@/components/navbar.vue';
import Head from "@/components/head.vue";
import Timeline from "@/components/timeline.vue";
import Experience from "@/components/experience.vue";
import Project from "@/components/project.vue";
const events = [
  { title: 'Koesio - Alternance développeur web fullstack', description: 'Développement d’un système de gestion des permissions et de sécurité, puis maintenance évolutive et corrective de deux applications internes (bugs, nouvelles fonctionnalités). Renforcement de mes compétences en développement back-end, sécurité et support utilisateur.\n' +
        '\n', date: '2024-2025',src:'koesio.png'
    ,img:['laravel-icon.png','Vue.png','docker.png','elasticsearch-logo.png','Git_Logo_full.png','Postgresql.png']
  },
  { title: 'Koesio - Stage développeur web fullstack', description: 'Conception et développement d\'une application de gestion des ressources pour accompagner la forte croissance de l\'équipe de développeurs (+800 % en 2 ans). Objectif : optimiser la planification des équipes et la répartition sur les projets.', date: '2024', src:'koesio.png'     ,img:['laravel-icon.png','Vue.png','docker.png','elasticsearch-logo.png','Git_Logo_full.png','Postgresql.png']
  },
  { title: 'BUT Informatique', description: 'Formation polyvalente en informatique : programmation (orientée objet, web, bas niveau), réseaux, bases de données, développement logiciel et web. Approche pratique et projets concrets m\'ont permis d\'explorer des domaines variés et de consolider mes compétences techniques.\n' +
        '\n', date: '2022-2025', src:'uga.png'
    ,img:['Angular.png','cpp.png','Java.png','mongodb-logo.png','nodejs-logo.png','symfony-icon.png','docker.png','elasticsearch-logo.png']
  },
]
</script>
<template>
  <Navbar/>
  <Head/>
  <Timeline/>
  <Experience :events="events"/>
  <Project/>
</template>


