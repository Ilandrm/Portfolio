<script setup lang="ts">
import TextClassique from "~/components/utils/TextClassique.vue";

const textOption = [
  {
    titre:'Les options de sortie et de rachat',
    paragraphe:'Les options de sortie et de rachat varient en fonction de deux critères\n' +
        'En cas de vie Le capital investi sur un contrat d’assurance vie Luxembourgeois est totalement liquide.\n' +
        '\n' +
        'Le souscripteur peut retirer tout ou partie des montants investis sur son contrat à n’importe quel moment.\n' +
        '\n' +
        'Le retrait se fait en capital et est fiscalisé qu’en cas de rachat (retrait).\n' +
        'La fiscalité dépendra de la résidence fiscale du souscripteur.\n' +
        '\n' +
        'Si la résidence fiscale du souscripteur est en France :\n' +
        'Le souscripteur décide de racheter la totalité des montants investis, la fiscalité sera la suivante :',
  }
]
const textPrev = [
  {
    titre:"",
    paragraphe:"L'assuré peut faire le choix d'être imposé sur les plus-values soit à partir d'un prélèvement Forfaitaire Libératoire ou bien à partir du barème progressif de l'Impôt sur le revenu."
  }
]
const textSouscripteur = [
  {
    titre:"",
    paragraphe:"Si le souscripteur décide d’effectuer un rachat partiel, seule la quote-part des plus-values réalisée et des intérêts produits sont imposables.\n" +
        "L’administration fiscale considère que le retrait est composé d’une partie en capital et d’une partie de plus-value (si le contrat est bénéficiaire). Seule la partie en plus-value est fiscalisée.\n" +
        "\n" +
        "Exemple : le souscripteur a versé 10 000 Euros sur son contrat, au bout de 2 ans celui-ci est à 11 000 euros. Soit un gain de 1000 Euros.\n" +
        "\n" +
        "Si le souscripteur décide de retirer 1000 Euros, soit plus ou moins 10% de la totalité de son contrat.\n" +
        "L’administration fiscale considère qu’il a retiré 90% de capital et 10% de plus-values (1000 euros de retrait/ 10 000 euros versés, soit 10%). Ainsi il ne sera fiscalisé que\n" +
        "sur 10% de 1000 Euros, soit 100 euros.\n" +
        "Les 100 Euros seront fiscalisé de la manière suivante :"
  }
]
</script>

<template>
<div class="mt-5">
  <TextClassique :text="textOption"/>
</div>
  <div class="mt-5">
    <h1 class="fw-bold d-flex justify-content-around">Fiscalité des plus-values pour les versements avant le 27/09/2017</h1>
    <TextClassique :text="textPrev"/>
    <table class="mx-auto mt-3 mb-3">
      <thead>
      <tr>
        <th class="small-col">Durée</th>
        <th class="large-col">PFL (ou barème progressif) + PS</th>
      </tr>
      </thead> 
      <tbody>
      <tr>
        <td>&lt; 4 ans</td>
        <td>PFL = 35% sur les produits dès l'origine + PS = 17,2% sur les produits acquis dans l'année</td>
      </tr>
      <tr>
        <td>De 4 à 8 ans</td>
        <td>PFL = 15% sur les produits dès l'origine + PS = 17,2% sur les produits acquis dans l'année</td>
      </tr>
      <tr>
        <td>Après 8 ans</td>
        <td>
          <p>Montant de l'abattement :</p>
          <ul>
            <li>4600 euros par personne et par an,</li>
            <li>9200 euros par couple et par an.</li>
          </ul>
          <p>Au-delà : les produits sont soumis sur option au PFL de 7,5% (hors PS) ou à l'impôt sur le revenu. Les PS restent dus.</p>
        </td>
      </tr>
      </tbody>
    </table>
    <TextClassique :text="textSouscripteur"/>
  </div>
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