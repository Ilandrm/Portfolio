<script setup lang="ts">

import TextClassique from "~/components/utils/TextClassique.vue";

const textNext = [
    {
  titre:"",
  paragraphe:"Depuis le 1er janvier  2018, un Prélèvement Forfaitaire Unique (PFU), qui s'élève à 30% (PFU de 12,8% + 17,2% de prélèvements sociaux), a été mis en place sur les plus-values.\n" +
      "L'option pour le barème progressif de l'impôt sur le revenu reste toujours possible."
}
]
const textSouscripteur = [
  {
    titre:"",
    paragraphe:"En cas de décès du souscripteur.\n" +
        "Le souscripteur du contrat rédige (par l’aide de son conseiller) une clause bénéficiaire au moment de la souscription de son contrat (elle peut être modifiée jusqu’au décès du souscripteur) .\n" +
        "\n" +
        "Cette clause bénéficiaire permettra d’identifier les bénéficiaires du contrat en cas de décès du souscripteur.\n" +
        "Ainsi, les capitaux investis sur le contrat seront versés aux bénéficiaires du contrat.\n" +
        "Si le souscripteur du contrat est français et le bénéficiaire français, La fiscalité sera la suivante.",
  }
]
</script>

<template>
  <h1 class="fw-bold d-flex justify-content-around">Fiscalité des plus-values pour les versements après le 27/09/2017</h1>
  <TextClassique :text="textNext"/>

  <table class="mx-auto mt-3 mb-3">
    <thead>
    <tr>
      <th class="small-col">Durée</th>
      <th class="large-col">PFL (ou barème progressif de l'IR) + PS</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>&lt; 8 ans</td>
      <td>PFU = 30% (ou barème de l'IR + PS = 17,2%)</td>
    </tr>
    <tr>
      <td>&gt; 8 ans</td>
      <td>
        <p>Montant de l'abattement :</p>
        <ul>
          <li>4600 euros par personne et par an,</li>
          <li>9200 euros par couple et par an.</li>
        </ul>
        <p>Valeur du contrat :</p>
        <ul>
          <li>Moins de 150'000€ : 24,70% (ou barème de l'IR + PS de 17,2%)</li>
          <li>Fraction supérieure à 150'000€ : 30% (ou barème de l'IR + PS de 17,2%)</li>
        </ul>
      </td>
    </tr>
    </tbody>
  </table>
  <TextClassique :text="textSouscripteur"/>

</template>

<style scoped>
th {
  font-size: 18px;
  text-align: center;
  padding: 15px;
  border: 3px solid white;
  background-color: #c9a646;
}

.small-col {
  width: 30%;
}

.large-col {
  width: 70%;
}

table {
  font-size: 15px;
  color: white;
  font-weight: bold;
  width: 50%;
}

tr, td {
  background-color: #000b31;
  padding: 15px;
  border: 3px solid white;
}

h1 {
  font-size: 30px;
}


@media (max-width:768px) {
  h1 {
    font-size: 20px;
    margin-right: auto;
    margin-left: auto;
    width: 80%;
  }
  p {
    font-size: 15px;
  }
  table {
    font-size: 12px;
  }
  th {
    font-size: 15px;
  }
}
</style>