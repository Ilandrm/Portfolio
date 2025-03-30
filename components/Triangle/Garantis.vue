<script setup lang="ts">

</script>

<template>
  <h1 class="fw-bold d-flex justify-content-center m-t5"> Les garanties offertes par le triangle de sécurité </h1>
  <div class="text-block mx-auto">
    <p class="mx-auto">L’agrément et la supervision de l’entreprise d’assurance par le CAA
      (commissariat aux assurances) ; </p>
    <p class="mx-auto"> Les contrôles réguliers par le CAA des provisions techniques de la compagnie d’assurance et de la façon dont elles sont investies;</p>
   <p class="mx-auto">L’impossibilité pour les autres créanciers de la compagnie de satisfaire leurs créances sur les actifs représentatifs des créances d’assurance ;</p>
   <p class="mx-auto">Le CAA peut intervenir sur les comptes ouverts au nom de la compagnie d’assurance auprès de la banque dépositaire en cas de survenance de
     problèmes de solvabilité.</p>
  </div>
  <div class="text-block mx-auto">
    <h4 class="mx-auto fw-bold mb-3">SEGREGATION DES ACTIFS DES ASSUREURS ?</h4>
    <p class=" mx-auto">Les actifs sous-jacents d’un contrat d’assurance-vie sont détenus par la compagnie d’assurance.

      La loi luxembourgeoise exige que la compagnie d’assurance gère les actifs représentatifs de ses engagements d’assurance comme un actif distinct géré séparément de son patrimoine propre. Ces actifs représentatifs ont l’obligation d’être déposés auprès d’une banque dépositaire.
      Une convention lie la compagnie d’assurance et la banque dépositaire et doit être approuvée par le CAA préalablement au dépôt des actifs.</p>

  </div>

  <div class="text-block mx-auto">
    <h4 class="mx-auto fw-bold mb-3">CONTROLE DU CLOISONNEMENT ACTIF</h4>

    <p class="mx-auto">Le cloisonnement des actifs est contrôlé chaque trimestre par le Commissariat Aux Assurances.

      Cette protection du souscripteur a été renforcée en août 2018 par un cloisonnement individuel des avoirs du souscripteur auprès de la banque dépositaire.</p>
  </div>
  <div class="cardPrivilege mx-auto">
    <div class="text-start divPrivilege">
      <div class="d-flex justify-content-center mb-3">
        <img class="icone me-3" alt="icone" src="public/icone_privilege.png">
    <h1 class="fw-bold align-self-center text-start">Qu’est-ce que le « super-privilège » ? </h1>
      </div>
    <p class="mx-auto">Le Luxembourg a choisi de donner aux souscripteurs d’un contrat d’assurance vie un privilège absolu par rapport à toute autre créance.

      Ce privilège permet aux souscripteurs d’un contrat d’assurance vie de récupérer en priorité sur tout autre créancier, notamment l’Etat, les sommes investies sur leurs contrats d’assurance vie.

      Ce privilège est appelé super-privilège.
      Il constitue un élément majeur de la protection des droits des souscripteurs de contrats d’assurance vie souscrits auprès d’une compagnie d’assurance luxembourgeoise.</p>
  </div>
  </div>
</template>

<style scoped>
.text-block {
  margin-bottom: 20px;
  font-family: 'GillSans', sans-serif;
  width: 50%;
  text-align: start;
}
.blue-text-block{
  background-color: #000b31;
  color: white;
  padding: 2%;
}
.icone{
  width: 100px;
  filter: brightness(0) saturate(100%) invert(65%) sepia(63%) saturate(406%) hue-rotate(8deg) brightness(94%) contrast(84%);

}
.cardPrivilege{
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 1%;
  border-radius: 7px;
  background-color: rgba(201, 166, 70, 0.1);
  width: 50%;
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
h4{
  font-size: 19px;
}
@media (max-width: 768px) {
  h1{
    font-size: 20px;
    width: 95%;
    margin: auto;
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
  .icone{
    object-fit: contain;
  }
  .cardPrivilege{
    width: 90%;
  }

}
</style>
