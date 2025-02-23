<script setup lang="ts">

import TableComparatif from "~/components/Home/TableComparatif.vue";
</script>

<template>
  <h1 class="fw-bold d-flex justify-content-center mt-5">Les avantages de souscrire une assurance-vie au Luxembourg</h1>
  <div class="container mt-5">
    <div class="card advantage">
      <img class="icon" src="public/iconeTriangleBleu.png" alt="icon">
      <h3>La sécurité du contrat</h3>
      <p>Le souscripteur d’une assurance-vie luxembourgeoise est un créancier privilégié de premier rang. En cas de défaillance de l’assureur, les souscripteurs de contrats d’assurance vie sont les premiers créanciers de la compagnie avant même l’État ou la sécurité sociale qui viennent en second rang. Le triangle de sécurité assure la séparation entre les avoirs du souscripteur du contrat, et les actifs des actionnaires et autres créanciers de la compagnie d’assurances.</p>
    </div>
    <div class="card advantage">
      <img class="icon" src="public/life_neutrality.png" alt="icon">
      <h3>Neutralité fiscale en cas de vie</h3>
      <p>L’un des atouts du Luxembourg est sa transparence fiscale. Ainsi, le contrat d’assurance vie Luxembourgeois prend la fiscalité du pays de résidence fiscale de l’assuré.
        Cela signifie que ce sont les dispositifs fiscaux du pays de résidence fiscale du souscripteur qui s’appliquent.

        Si une personne est résidente fiscale en France, elle bénéficiera des avantages fiscaux de l’assurance vie française.
        La fiscalité au Luxembourg permet donc une portabilité du contrat en cas de changement de pays de résidence.</p>
    </div>
    <div class="card advantage">
      <img class="icon" src="public/stability.png" alt="icon">
      <h3>Stabilité économique,politique et social du Luxembourg</h3>
      <p>Le Luxembourg bénéficie d’une notation AAA par les agences de notation.
        La meilleure possible en termes de rating de solvabilité.
        Le régime luxembourgeois est une monarchie constitutionnelle.
      </p>
    </div>
    <div class="card advantage">
      <img class="icon" src="public/devise.png" alt="icon">
      <h3>Choix de la devise</h3>
      <p>Le souscripteur a le choix de la devise permettant d’alimenter son contrat. C’est un avantage non négligeable pour les expatriés ou futurs expatriés.</p>
    </div>
    <div class="card advantage w-100">
      <img class="icon" src="public/testament.png" alt="icon">
      <h3>Neutralité fiscale en cas de décès </h3>
      <p>Le Luxembourg ne taxe pas les capitaux décès versés aux bénéficiaires dès lors que l’assuré est non-résident fiscal luxembourgeois. La succession supportera les droits de succession soit de son lieu de résidence, ou de celle des bénéficiaires.</p>
    </div>
  </div>
  <ContratComparatif/>
  <hr class="w-100 mb-3"/>

</template>

<style scoped>
h1 {
  margin-bottom: 20px;
  font-size: 26px;

}
h2{
  display: flex;
  justify-content: center;
  font-size: 25px;
}
h3{
  font-weight: bold;
}
.icon{
  filter: brightness(0) saturate(100%) invert(65%) sepia(63%) saturate(406%) hue-rotate(8deg) brightness(94%) contrast(84%);

}
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: auto;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center; /* Centre les cartes sur la ligne */
}

.card {
  flex: 1 1 300px;
  max-width: 400px;
}

</style>
