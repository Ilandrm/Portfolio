<script setup lang="ts">

</script>

<template>
  <div class="mt-5">
<h1 class="fw-bold d-flex justify-content-around d-flex justify-content-around">Comparatif : Contrat d’assurance vie Luxembourgeois vs Assurance vie</h1>
    <table class="w-75 mx-auto mt-5">
      <thead>
      <tr>
        <th>Caractéristiques</th>
        <th>Assurance vie française</th>
        <th>Assurance vie Luxembourgeoise</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Loi Sapin 2 applicable (gel des actifs)</td>
        <td>OUI</td>
        <td>NON</td>
      </tr>
      <tr>
        <td>Ségrégation des comptes (Assureur et assuré)</td>
        <td>OUI</td>
        <td>NON</td>
      </tr>
      <tr>
        <td>Super privilège (statut de créancier de 1er rang)</td>
        <td>NON</td>
        <td>OUI</td>
      </tr>
      <tr>
        <td>Notation du pays par Standard & Poor's</td>
        <td>AAA (meilleur niveau possible)</td>
        <td>AA</td>
      </tr>
      <tr>
        <td>Plafond de garantie en cas de faillite</td>
        <td>Aucun plafond</td>
        <td>70 000 € (par déposant et par société d’assurance)</td>
      </tr>
      <tr>
        <td>Fiscalité des revenus et des transmissions</td>
        <td>Fiscalité identique pour un résident français</td>
        <td>/</td>
      </tr>
      <tr>
        <td>Choix de la devise</td>
        <td>OUI</td>
        <td>NON</td>
      </tr>
      <tr>
        <td>Fiscalité adaptée au pays de résidence</td>
        <td>OUI</td>
        <td>NON</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table{
  font-size: 25px;
  color: white;
  font-weight: bold;
}
tr,td,th{
  background-color: #000b31;
  padding: 2%;
  border: 5px solid white;
}
th{
  font-size: 35px;
}
@media (max-width:768px){
  h1{
    font-size:20px;
    margin-right:auto;
    margin-left:auto;
    width:80%
  }
  p{
    font-size:15px;
  }
  table{
    font-size:12px;
  }
  th{
    font-size:15px;
  }
  tr,td,th{

}
  }
</style>
