<script setup lang="ts">
import TextClassique from "~/components/utils/TextClassique.vue";

const textDonation = [
  {
    titre:'Précisions sur la fiscalité en cas de décès :',
    paragraphe:"Une des caractéristiques du contrat d’assurance vie est sa clause bénéficiaire. Ainsi, en cas de décès du souscripteur, le(s) bénéficiaire(s) du contrat (explicitement notifié dans la clause) recevra les sommes investies sur le contrat d’assurance vie du souscripteur.\n\n" +
"La somme reçue par le bénéficiaire bénéficie d’une exonération en France pour un montant allant jusqu’à 152 500 euros, si les versements du souscripteur ont lieu avant 70 ans.\n\n" +
"La particularité du contrat d’assurance vie luxembourgeois est la neutralité fiscale en cas de décès. Ainsi, le droit civil luxembourgeois ne taxe pas les capitaux décès versés aux bénéficiaires dès lors que l’assuré n’est pas résident fiscal luxembourgeois.\n\n" +
"La succession du défunt ne supportera que les droits de succession de son lieu de résidence, ou celle du ou des bénéficiaire(s)."
},
]
const textSouscripteur = [
  {
    titre: "Fiscalité en cas de décès du souscripteur pour les bénéficiaires du contrat",
    paragraphe:
        "Le souscripteur du contrat rédige (par l’aide de son conseiller) une clause bénéficiaire au moment de la souscription de son contrat (elle peut être modifiée jusqu’au décès du souscripteur). Cette clause bénéficiaire permettra d’identifier les bénéficiaires du contrat en cas de décès du souscripteur.\n\n" +
        "Ainsi, les capitaux investis sur le contrat seront versés aux bénéficiaires du contrat. Si le souscripteur du contrat est français et le bénéficiaire français, la fiscalité sera la suivante."
  }
];
</script>

<template>
  <TextClassique :text="textSouscripteur"/>
  <h1 class="fw-bold d-flex justify-content-around">La fiscalité en cas de décès </h1>
  <table class="w-50 mx-auto">
    <tr>
      <th>Date</th>
      <th>Contrats souscrits avant le 20/11/91</th>
      <th colspan="2">Contrats souscrits depuis le 20/11/91</th>
    </tr>
    <tr>
      <td>Age de l'assuré lors du versement des primes</td>
      <td>Quel que soit l’âge de l’assuré</td>
      <td>les primes ont été versées avant les 70 ans de l’assuré</td>
      <td>les primes ont été versées après les 70 ans de l’assuré</td>
    </tr>
    <tr>

      <td>Primes versées jusqu’au 12/10/98</td>
      <td>Aucune taxation</td>
      <td>Aucune taxation</td>
      <td>Droits de succession sur le montant des primes dépassant 30 500 € (tous contrats et bénéficiaires confondus)</td>
    </tr>
    <tr>
      <td>Primes versées depuis le 13/10/98</td>
      <td>Prélèvement de 20 % ou 31,25 % sur les capitaux reçus dépassant 152 500 € par bénéficiaire</td>
      <td>Prélèvement de 20 % ou 31,25 % sur les capitaux reçus dépassant 152 500 € par bénéficiaire</td>
      <td>Droits de succession sur le montant des primes dépassant 30 500 € (tous contrats et bénéficiaires confondus)</td>
    </tr>
  </table>
<br/>
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


td:not(.noPad){
  background-color: #000b31;
  padding: 15px;
  border: 3px solid white;
}
h1 {
  font-size: 30px;
}

.gold{
  color: #c9a646;
}
.noPad{
  background-color: #000b31;
  padding: 15px;
  border-bottom: none !important;
  border-right: 3px solid white;
  border-left: 3px solid white;


}
@media (max-width:768px) {
  h1 {
    font-size: 20px;
    margin-right: auto;
    margin-left: auto;
    width: 80%;
  }
  p {
    font-size: 12px;
  }
  td{
    font-size: 12px;
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
