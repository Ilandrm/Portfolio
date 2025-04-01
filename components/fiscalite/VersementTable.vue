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
    titre: "",
    paragraphe: "\n<p class=\"fw-bold\" style=\"font-size: 24px\">En cas de rachat partiel :\n</p>" +
        "Si le souscripteur décide d’effectuer un rachat partiel (racheter une partie du contrat), seule la quote-part des plus-values réalisée et des intérêts produits sont imposables.\n\n" +
        "L’administration fiscale considère que le retrait est composé d’une partie en capital et d’une partie de plus-value (si le contrat est bénéficiaire). Seule la partie en plus-value est fiscalisée.\n\n" +
        "Exemple : le souscripteur a versé 10 000 Euros sur son contrat, au bout de 2 ans celui-ci est à 11 000 euros. Soit un gain de 1000 Euros. Si le souscripteur décide de retirer 1000 Euros, soit plus ou moins 10% de la totalité de son contrat. L’administration fiscale considère qu’il a retiré 90% de capital et 10% de plus-values (1000 euros de retrait/ 9 000 euros versés, soit 10%). Ainsi il ne sera fiscalisé que sur 10% de 1000 Euros, soit 100 euros. Les 100 Euros seront fiscalisés à hauteur de 30% si le contrat a été souscrit après le 27/09/2017, soit une fiscalité de 300 €.\n\n"
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
      <th class="large-col">PFU (ou barème progressif de l'IR) + PS</th>
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
  p,td {
    font-size: 15px;
  }
  table {
    font-size: 12px;
    width: 95%;
    margin: auto;
  }
  th {
    font-size: 15px;
  }
}
</style>