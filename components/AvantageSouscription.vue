<script setup lang="ts">
import TextClassique from "~/components/utils/TextClassique.vue";
import BoxeText from "~/components/Home/BoxeText.vue";

const textAvantage= [
      {
        titre: "La sécurité du contrat avec le triangle de sécurité et le super privilège",
        paragraphe: "Le souscripteur d’une assurance-vie luxembourgeoise est un créancier privilégié de premier rang. En cas de défaillance de l’assureur, les souscripteurs de contrats d’assurance vie sont les premiers créanciers de la compagnie avant même l’État ou la sécurité sociale qui viennent en second rang. Le triangle de sécurité assure la séparation entre les avoirs du souscripteur du contrat, et les actifs des actionnaires et autres créanciers de la compagnie d’assurances.",
        src:'Icontriangle.png'
      },
      {
        titre: "La neutralité fiscale en cas de vie",
        paragraphe: "La fiscalité du contrat s’adaptera au lieu de résidence fiscale du souscripteur. En cas d’expatriation (professionnelle ou choisie), les règles fiscales du nouveau lieu de résidence feront foi.",
        src:'neutrality_blanc.png'

      },
      {
        titre: "La stabilité économique et politique du Luxembourg",
        paragraphe: "Le Luxembourg bénéficie d’une notation AAA, la meilleure possible en termes de notation. Le Luxembourg bénéficie d’une stabilité politique et sociale. Le régime est une monarchie constitutionnelle.",
        src:'stability.png'

      },
      {
        titre: "Le choix de la devise de votre contrat d’assurance vie",
        paragraphe: "Le souscripteur a le choix de la devise permettant d’alimenter son contrat. C’est un avantage non négligeable pour les expatriés ou futurs expatriés.",
        src: 'devise_blanc.png'
      },
    ]
const textInconvenients= [

  {
        titre: "Non transférabilité des contrats",
        paragraphe: "Un contrat d’assurance vie est transférable d’un courtier à un autre courtier au sein de la même compagnie mais n’est pas transférable d’une compagnie à une autre.",
        src: 'cross.png'

  },
      {
        titre: "Le fonds euro",
        paragraphe: "Le fonds euro n’est proposé que par une partie des compagnies d’assurance luxembourgeoises. En fonction de l’aversion aux risques de chaque souscripteur, il est important de s’assurer de sa présence ou non sur le contrat.",
        src: 'fid.png'

      },
      {
        titre: "Le contrat d’assurance vie est un investissement long terme",
        paragraphe: "Un contrat d’assurance vie n’est pas un compte-titres où des arbitrages peuvent être réalisés de manière régulière. Il est important d’avoir une allocation d’actifs qui a du sens sur le long terme.",
        src: 'contrat.png'

      }
]
</script>

<template>

  <h1 class="fw-bold d-flex justify-content-around  mt-5">Avantages et inconvénients de souscrire à une assurance vie au Luxembourg en tant que non-résident</h1>
  <h4 class="fw-bold d-flex justify-content-around mt-3">Avantages</h4>
  <div class="boxe mx-auto">
  <BoxeText :text="textAvantage"></BoxeText>
  </div>
  <h4 class="fw-bold d-flex justify-content-around mt-3">Inconvenients</h4>
  <BoxeText :text="textInconvenients"></BoxeText>
  <hr class="w-100 mb-3"/>

</template>

<style scoped>
h1{
  font-size: 35px;
}
.boxe{
  width: 90% ;
}
</style>
