<script setup lang="ts">

</script>

<template>
  <h1 class="fw-bold d-flex justify-content-center"> Les garanties offertes par le triangle de sécurité </h1>
  <div class="text-block mx-auto">
    <p class="mx-auto">L’agrément et la supervision de l’entreprise d’assurance par le CAA
      (commissariat aux assurances) ; </p>
    <p class="mx-auto"> Les contrôles réguliers par le CAA des provisions techniques de la compagnie d’assurance et de la façon dont elles sont investies;</p>
   <p class="mx-auto">L’impossibilité pour les autres créanciers de la compagnie de satisfaire leurs créances sur les actifs représentatifs des créances d’assurance ;</p>
   <p class="mx-auto">Le CAA peut intervenir sur les comptes ouverts au nom de la compagnie d’assurance auprès de la banque dépositaire en cas de survenance de
     problèmes de solvabilité.</p>
    <hr class="w-80 mx-auto mb-3"/>
  </div>
  <div class="text-block mx-auto">
    <h4 class="mx-auto fw-bold mb-3">Ségrégation des actifs des assureurs ?</h4>
    <p class=" mx-auto">Les actifs sous-jacents d’un contrat d’assurance-vie sont détenus par la compagnie d’assurance.

      La loi luxembourgeoise exige que la compagnie d’assurance gère les actifs représentatifs de ses engagements d’assurance comme un actif distinct géré séparément de son patrimoine propre. Ces actifs représentatifs ont l’obligation d’être déposés auprès d’une banque dépositaire.
      Une convention lie la compagnie d’assurance et la banque dépositaire et doit être approuvée par le CAA préalablement au dépôt des actifs.</p>

    <hr class="w-80 mx-auto mb-3"/>
  </div>

  <div class="text-block mx-auto">
    <h4 class="mx-auto fw-bold mb-3">Contrôle du cloisonnement des actifs</h4>

    <p class="mx-auto">Le cloisonnement des actifs est contrôlé chaque trimestre par le Commissariat Aux Assurances.

      Cette protection du souscripteur a été renforcée en août 2018 par un cloisonnement individuel des avoirs du souscripteur auprès de la banque dépositaire.</p>
    <hr class="w-80 mx-auto mb-3"/>
  </div>
</template>

<style scoped>
.text-block {
  text-align: center;
  margin-bottom: 20px;
  font-family: 'GillSans', sans-serif;
  width: 50%;

}
.blue-text-block{
  background-color: #000b31;
  color: white;
  padding: 2%;
}
.text-block p , .blue-text-block p{
  font-size: 20px;
}
.text-block h1, .blue-text-block h1{
  font-size: 25px;
}
hr{
  border-top: 3px solid #000b31;
  opacity: 100%;
}
h1{
  font-size: 30px;
}
@media (max-width: 768px) {
  h1{
    font-size: 20px;
  }
  h4{
    font-size: 17px;
  }
  p{
    font-size: 15px;
  }
  .text-block,.blue-text-block {
    width: 80%;
  }
}
</style>
