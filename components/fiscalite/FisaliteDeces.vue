<script setup lang="ts">
import TextClassique from "~/components/utils/TextClassique.vue";

const textDonation = [
  {
    titre:'Fiscalité sur les successions et les donations',
    paragraphe:'Une des caractéristiques du contrat d’assurance vie est sa clause bénéficiaire.\n' +
        '\n' +
        'Ainsi en cas de décès du souscripteur, le(s) bénéficiaire(s) du contrat (explicitement notifié dans la clause) recevra les sommes investies sur le contrat d’assurance vie du souscripteur.\n' +
        '\n' +
        'La somme reçue par le bénéficiaire bénéficie d’une exonération en France pour un montant allant jusqu’à 152 500 euros, si les versements du souscripteur ont lieu avant 70 ans. La particularité du contrat d’assurance vie Luxembourgeois est la neutralité fiscale en cas de décès.\n' +
        '\n' +
        'Ainsi, Le droit civil luxembourgeois ne taxe pas les capitaux décès versés aux bénéficiaires dès lors que l’assuré n’est pas résident fiscal luxembourgeois. La succession du défunt ne supportera que les droits de succession de son lieu de résidence, ou celle du ou des bénéficiaire(s).'
  },
]
</script>

<template>
  <h1 class="fw-bold d-flex justify-content-around">La fiscalité en cas de décès </h1>
  <table class="mx-auto mt-3 mb-3">
    <thead>
    <tr>
      <th class="medium-col">Date de souscription du contrat</th>
      <th class="small-col">Primes versées</th>
      <th class="large-col">Fiscalité</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td rowspan="2">Contrats souscrits avant le 20 novembre 1991</td>
      <td>Avant le 13 octobre 1998</td>
      <td>Pas de taxation</td>
    </tr>
    <tr>
      <td>A compter du 13 octobre 1998</td>
      <td>Prélèvement de 20% au-delà de 152 500 euros, article 990I</td>
    </tr>
    <tr>
      <td rowspan="3">Contrats souscrits à compter du 20 novembre 1991</td>
      <td>Primes versées avant 70 ans</td>
      <td>
        <p>Pas de taxation</p>
        <p>Prélèvement de 20% au-delà de 152 500 euros, Article 990I</p>
        <p>Prélèvement de 31,25% au-delà de 852 500 euros</p>
      </td>
    </tr>
    <tr>
      <td>Primes versées après 70 ans</td>
      <td>Droit de mutation par décès sur la fraction des primes qui excède 30 500 euros, Article 757B (exonération des plus-values)</td>
    </tr>
    </tbody>
  </table>
  <TextClassique :text="textDonation"/>
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
