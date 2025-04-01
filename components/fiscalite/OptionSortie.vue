<script setup lang="ts">
import TextClassique from "~/components/utils/TextClassique.vue";

const textOption = [
  {
    titre:'Fiscalité des rachats total ou partiel',
    paragraphe:'Il est nécessaire de différencier La fiscalité du rachat en cas de vie du souscripteur du contrat\n et en'+
    ' cas de décès du souscripteur pour les bénéficiaires du contrat.\n'+
    '\n<p class="fw-bold" style="font-size: 24px">1/La fiscalité des rachats en cas de vie du souscripteur du contrat</p>'+
 ' Le capital investi sur un contrat d’assurance vie Luxembourgeois est totalement liquide. Le'+
'souscripteur peut retirer tout ou partie des montants investis sur son contrat à n’importe quel'+
'moment. Le retrait se fait en capital et, il n’est fiscalisé qu’en cas de rachat (retrait).'+
    'La fiscalité dépendra de la résidence fiscale du souscripteur.'+
    '\nSi la résidence fiscale du souscripteur est en France et si le souscripteur décide de ' +
        'racheter la totalité des montants investis, la fiscalité sera la suivante :'
  }
]
const textPrev = [
  {
    titre:"",
    paragraphe:"L'assuré peut faire le choix d'être imposé sur les plus-values soit à partir d'un prélèvement Forfaitaire Libératoire ou bien à partir du barème progressif de l'Impôt sur le revenu.\n" +
        "\n"
  }
]
const textSouscripteur = [
  {
    titre:"",
    paragraphe:""
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
  p ,td{
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