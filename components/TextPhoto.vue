<script setup lang="ts">
import {useMediaQuery} from "@vueuse/core";

const isMobile = useMediaQuery("(max-width: 768px)");
</script>

<template>
  <h1 class="d-flex justify-content-around fw-bold mt-5 responsTitle">Pourquoi choisir Pali Kao Capital</h1>
  <div class="d-flex justify-content-around responsContent">
<div class="text-photo d-flex justify-content-around mt-5" v-if="!isMobile">
  <div class="paragraphe widthPreDef d-flex justify-content-around me-3 ">
    <div>
    <h1 class="fw-bold">Qu'est-ce que l'assurance-vie luxembourgeoise ?</h1>
    <p>L’assurance-vie luxembourgeoise est un contrat d’assurance vie souscrit auprès d’une compagnie d’assurance luxembourgeoise. Ce contrat permet à l’assuré de placer son épargne dans des fonds d’investissement (OPC, SICAV, FCP, etc.) gérés par la compagnie d’assurance. L’assuré peut choisir les fonds dans lesquels il souhaite investir, en fonction de ses objectifs d’épargne et de ses préférences d’investissement.</p>
    <p>Le contrat d’assurance vie luxembourgeois est un contrat d’épargne qui répond aux mêmes engagements que le contrat d’assurance vie français.</p>
    <p>C’est un outil patrimonial, permettant d’épargner, de valoriser son capital et de le transmettre aux bénéficiaires désignés.
      Vous avez la liberté de retirer à tout moment tout ou partie du capital investi</p>
  </div>
  </div>
  <img class="imgPf widthPreDef" alt="icone" src="public/pf-luxembourg.png">
</div>
  <div v-if="isMobile">
    <div class="paragraphe widthPreDef d-flex justify-content-around me-3 w-100">
      <div>
        <h1 class="fw-bold  d-flex justify-content-center ms-5 w-100">Qu'est-ce que l'assurance-vie luxembourgeoise ?</h1>
        <div class="w-100">
        <p>L’assurance-vie luxembourgeoise est un contrat d’assurance vie souscrit auprès d’une compagnie d’assurance luxembourgeoise. Ce contrat permet à l’assuré de placer son épargne dans des fonds d’investissement (OPC, SICAV, FCP, etc.) gérés par la compagnie d’assurance. L’assuré peut choisir les fonds dans lesquels il souhaite investir, en fonction de ses objectifs d’épargne et de ses préférences d’investissement.</p>
        <p>Le contrat d’assurance vie luxembourgeois est un contrat d’épargne qui répond aux mêmes engagements que le contrat d’assurance vie français.</p>
        <p>C’est un outil patrimonial, permettant d’épargner, de valoriser son capital et de le transmettre aux bénéficiaires désignés.
          Vous avez la liberté de retirer à tout moment tout ou partie du capital investi</p>
      </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>

.paragraphe{
  background-color: #000b31;
  padding: 3%;
  color: white;
  align-self: center;
}
@media screen and (min-width: 768px)  {
  .paragraphe p {
    font-size: 20px;
  }
}
.widthPreDef{
  width: 700px;
}
@media screen and (max-width: 768px) {
  .responsTitle {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:5% ;
  }
    h1{
    font-size: 20px;
  }
  .paragraphe p{
    font-size: 15px;
  }
}
</style>
