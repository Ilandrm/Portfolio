<script setup lang="ts">
const question1 = ref(false)
const question2 = ref(false)
const question3 = ref(false)
</script>

<template>
  <div class="d-flex justify-content-center">
    <div>
      <h1 class="fw-bold text-center title">FAQ</h1>
      <div class="question mt-5 mx-auto">

        <div class="d-flex w-100 align-items-start">
          <i class="pi pi-arrow-circle-right" style="font-size: 40px; cursor: pointer" @click="question1 = true" v-if="!question1"/>
          <i class="pi pi-arrow-circle-down" style="font-size: 40px; cursor: pointer" @click="question1 = false" v-if="question1"/>
          <div class="ms-3">
            <h1 class="fw-bold">Quels sont les frais associés à un contrat d'assurance-vie luxembourgeoise ?</h1>
            <p v-if="question1" class="w-100 ms-2">Les frais associés à un contrat d’assurance-vie luxembourgeois peuvent varier en fonction de la compagnie d’assurance et du mode de gestion choisi. En général, les contrats d’assurance-vie luxembourgeois comportent des frais de gestion comme tout autres contrats d’assurance vie.</p>
          </div>
        </div>

        <!-- Question 2 -->
        <div class="d-flex w-100 align-items-start mt-3">
          <i class="pi pi-arrow-circle-right" style="font-size: 40px; cursor: pointer" @click="question2 = true" v-if="!question2"/>
          <i class="pi pi-arrow-circle-down" style="font-size: 40px; cursor: pointer" @click="question2 = false" v-if="question2"/>
          <div class="ms-3">
            <h1 class="fw-bold">Qu’est ce que le crédit Lombard ?</h1>
            <p v-if="question2" class="w-100 ms-2">Le crédit Lombard est une solution de financement simple qui consiste à nantir votre contrat luxembourgeois en contrepartie d’un prêt. Il s’agit là d’une stratégie opportuniste lorsque l’on porte un intérêt à l’effet de levier.</p>
            <p v-if="question2" class="w-100 ms-2">Ce prêt accordé par la banque dépositaire est utilisé pour dégager des liquidités immédiates et profiter d’opportunités de marchés.</p>
            <p v-if="question2" class="w-100 ms-2">Ce nantissement donne également la possibilité d’utiliser ces liquidités pour financer un projet plus personnel comme l’achat d’une voiture ou d’un bien immobilier.</p>
          </div>
        </div>

        <!-- Question 3 -->
        <div class="d-flex w-100 align-items-start mt-3">
          <i class="pi pi-arrow-circle-right" style="font-size: 40px; cursor: pointer" @click="question3 = true" v-if="!question3"/>
          <i class="pi pi-arrow-circle-down" style="font-size: 40px; cursor: pointer" @click="question3 = false" v-if="question3"/>
          <div class="ms-3">
            <h1 class="fw-bold">Peut-on transférer un contrat d’assurance-vie français vers un contrat d’assurance-vie luxembourgeois ?</h1>
            <p v-if="question3" class="w-100 ms-2">Il est impossible de transférer un contrat d’assurance vie français vers un contrat luxembourgeois. La seule solution est de clôturer son contrat français et d’en ouvrir un autre au Luxembourg.</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.question {
  max-width: 80%;
  width: 80%;
  margin: 0 auto;
}
h1 {
  font-size: 30px;
}
.title {
  font-size: 40px;
}
p {
  max-width: 800px;
  font-size: 20px;
  word-break: break-word;
}
</style>
