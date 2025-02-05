<script setup lang="ts">
import {TextClassique} from "#components";
const textSouplesse = [
  {
    titre: 'La souplesse, les differents modes de gestion' ,
    paragraphe:  'Il existe trois modes de gestion principaux pour un contrat d’assurance-vie luxembourgeois : la gestion sous mandat, la gestion pilotée, et la gestion libre.'}
    ]

</script>

<template>
<TextClassique :text="textSouplesse"/>
</template>

<style scoped>

</style>
