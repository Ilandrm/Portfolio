<script setup lang="ts">
import {Navbar} from "#components";
import {HeadHome} from "#components";
import {TextPhoto} from "#components";
import {Contrat} from "#components";
import {Avantages} from "#components";
import {TableComparatif} from "#components";
import {Souplesse} from "~/components/Souplesse.vue";
</script>

<template>
<Navbar/>
<HeadHome class="mt-5"/>
<TextPhoto class="mt-5"/>
  <contrat/>
  <Avantages/>
  <TableComparatif/>
  <Souplesse/>
</template>

<style scoped>


</style>
