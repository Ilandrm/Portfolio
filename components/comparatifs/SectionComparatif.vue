<script setup lang="ts">
import TextClassique from "~/components/utils/TextClassique.vue";
import BoxeText from "~/components/Home/BoxeText.vue";

const textSecurite = [
  {
    titre:"Le triangle de sécurité",
    paragraphe:"",
    list:["Les actifs liés aux contrats d’assurance-vie sont déposés – séparément des autres engagements de la compagnie d’assurance–auprès d’une banque dépositaire, qui est préalablement approuvée par le CAA. ",
    "Le « triangle de sécurité » se définit par la signature d’une convention tripartite de dépôt entre la compagnie d’assurances, la banque dépositaire et l’autorité de contrôle des assurances au Luxembourg (le Commissariat aux Assurances). Le cloisonnement des actifs est contrôlé chaque trimestre par le commissariat aux assurances.",
    "En cas de défaillance de l’assureur, l’autorité de contrôle a la possibilité de bloquer les comptes afin de protéger les droits des souscripteurs. Les avoirs des clients déposés sur leur contrat d’assurance vie Luxembourgeois sont ainsi totalement indépendants des fonds propres de la compagnie d’assurance. En cas de faillite de la compagnie d’assurance, les créanciers ordinaires ne pourront exercer leur droit de recouvrement sur les actifs des contrats d’assurance vie Luxembourgeois."]
  },
  {
    titre:'Le super privilège',
    paragraphe: 'Les souscripteurs d’un contrat d’assurance vie Luxembourgeois disposent de la qualité de créanciers privilégiés de 1er rang.\n' +
        '\n' +
        'Ce privilège, qui domine tous les autres créanciers permet aux clients de récupérer en priorité les créances relatives à l’exécution de leurs contrats d’assurance en cas de défaillance de la compagnie d’assurance.'
  }
]
const textFlexContrat=[{
  titre: "",
  paragraphe: "En plus des modes de gestion existants sur les contrats français (gestion libre, dédiée ou conseillée), le contrat d’assurance vie luxembourgeois offre des modes de gestion propres offrant plus de flexibilité."
},
  {
    titre: "Fonds Internes Collectifs (FIC)",
    paragraphe: "Les Fonds Internes Collectifs sont un type de support d’investissement d’un contrat d’assurance vie luxembourgeois. Ils sont des fonds internes à la compagnie, accessibles à un groupe d’investisseurs sans liens familiaux. Comparables à une SICAV préconstituée, ils permettent d’investir selon le profil de risque.",
    note: "Les frais de gestion des FIC sont en général plus faibles que ceux d’un FID."
  },
  {
    titre: "Fonds interne dédié (FID)",
    paragraphe: "Spécificité du contrat luxembourgeois, les Fonds Internes Dédiés permettent une gestion individuelle sous mandat. Ils donnent accès à des produits sophistiqués et innovants, parfois absents des contrats français. La gestion des actifs est confiée à un gestionnaire financier désigné par le souscripteur."
  },
  {
    titre: "Fonds d’assurance spécialisé (FAS)",
    paragraphe: "Introduit par la Circulaire 15/3 du Commissariat aux Assurances du Luxembourg, le FAS permet au souscripteur de choisir directement les actifs sous-jacents, sous certaines limites d’investissement. Il offre une alternative aux supports traditionnels comme le FID, le FIC ou les fonds externes.",
    note: "Pour les résidents français, le contrat respecte le code des assurances français et les règles d’investissement luxembourgeoises. Il est recommandé de faire appel à un Conseil en investissement externe pour optimiser la gestion du contrat."
  },]

const textFlexFiscal = [
  {
    titre: "",
    list: [
      "Neutralité fiscale en cas de vie : Le souscripteur bénéficie de la fiscalité de son pays de résidence, même en cas d’expatriation, sans besoin de transférer ses actifs.",
      "Choix de la devise : Le contrat peut être alimenté en devise autre que l’euro, avantage notable pour les expatriés.",
      "Neutralité fiscale en cas de décès : Le Luxembourg ne taxe pas les capitaux décès des non-résidents fiscaux, la succession dépend des règles du pays de résidence du défunt ou des bénéficiaires."
    ]
  }
]
const boxeFlex = [
  {
    titre: 'Neutralité fiscale en cas de vie ',
    paragraphe: 'Elle a pour objectif de permettre au souscripteur de bénéficier de la fiscalité de se résidence fiscale.\n' +
        '\n' +
        'Si le souscripteur projette de s‘expatrier, il n’aura aucun besoin de transférer ses actifs dans une autre compagnie financière pour bénéficier du régime fiscal du pays concerné. Son contrat d’assurance vie suivra la fiscalité de son nouveau pays de résidence.',
    src:'life_neutrality.png'
  },
  {
    titre: 'Choix de la devise',
    paragraphe: 'Le souscripteur d’une assurance vie luxembourgeoise a la possibilité d’alimenter son contrat par une autre devise que l’euro.\n' +
        'Cela constitue un avantage important pour les expatriés ou futurs expatriés.',
    src:'devise.png'
  },
  {
    titre:'Neutralité fiscale en cas de décès',
    paragraphe: 'Le droit civil luxembourgeois ne taxe pas les capitaux décès versés aux bénéficiaires dès lors que l’assuré est non-résident fiscal luxembourgeois. La succession du défunt dépendra des droits de succession de son lieu de résidence, ou de celle des bénéficiaires.',
    src:'testament.png'
  }
]

</script>

<template>
<div class="mt-5">
  <TextClassique :text="textSecurite" title="Securité"/>
</div>
  <div class="mt-5">
    <h1 class="fw-bold d-flex justify-content-around text-start mb-3">Flexibilité dans la gestion du contrat</h1>
      <div class="displayContainer">
      <div
          class="displayBloc mb-3 active"
      >
        <h5 class="fw-bold">Fonds interne dédié (FID)</h5>
        <transition name="fade">
          <p>
            La spécialité du contrat Luxembourgeois, les Fonds Internes Dédiés permettent à un investisseur, de mettre en place une gestion individuelle sous mandat qui lui est dédiée. Ces fonds permettent d’investir sur des produits sophistiqués, et innovants.

            Certains d’entre eux sont absents dans les contrats d’assurance vie français. La gestion des actifs est déléguée à un gestionnaire financier que le souscripteur aura préalablement désigné.
          </p>
        </transition>
      </div>

      <div
          class="displayBloc mb-3 active"

      >
        <h5 class="fw-bold">Fonds d'assurance spécialisé (FAS)</h5>
        <transition name="fade">
          <p >
            Le FAS a été introduit par la Circulaire 15/3 du Commissariat aux Assurances du Luxembourg, Il a pour objectif une plus grande flexibilité, et permet au souscripteur de choisir directement les actifs sous-jacents.

            Il existe certaines limites d’investissement, qui sont prévues par la Circulaire 15/3 et dépendent de la catégorie du souscripteur (elle est déterminée en fonction du montant de la prime et de la fortune mobilière déclarée).

            C’est une réponse à certains objectifs patrimoniaux qui ne peuvent être atteints avec les supports traditionnels tels que le FID, le FIC ou les fonds externes.

            Concernant les résidents français, le contrat obéira au code des assurances français conjointement avec l’utilisation des règles d’investissement de la circulaire luxembourgeoise. Il n’y a pas de contre-indication pour la souscription de ce type de contrat.

            Le recours à un Conseil en investissement externe (société de gestion de portefeuilles, banque privée ou CIF tel que Pali Kao Capital) est vivement recommandé afin d’assurer la performance du contrat et la qualité de l’allocation d’actifs.        </p>
        </transition>
      </div>

      <div
          class="displayBloc active"
      >
        <h5 class="fw-bold">Fonds Internes Collectifs (FIC)</h5>
        <transition name="fade">
          <p >
            Les fonds Internes Collectifs sont un type de support d’investissement d’un contrat d’assurance vie luxembourgeois. Ils sont des fonds internes à la compagnie, et sont accessibles à un groupe d’investisseurs qui peuvent n’avoir aucuns liens familiaux. Ils peuvent se comparer à une SICAV déjà préconstituée, et sur lequel le particulier pourra investir en fonction de son profil de risque.

            Les frais afférents à ce type de gestion sont en général plus faible qu’un FID.          </p>
        </transition>
      </div>
      </div>
    </div>

  <div class="mt-5">
    <BoxeText :text="boxeFlex" title="Flexibilité fiscale du contrat d’assurance vie Luxembourgeois"/>
  </div>
</template>

<style scoped>
.displayBloc {
  background-color: #f5f5f5;
  padding: 2%;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
  max-width: 50%;
}

.displayBloc:hover, .displayBloc.active {
  background-color: #c9a646;
  color: white;
}
.displayContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; /* Espacement entre les blocs */
}
/* Animation fade-in pour le texte */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease, max-height 0.5s ease-in-out;
  max-height: 300px;
  overflow: hidden;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  max-height: 0;
}
h1{
  font-size: 30px;
}

</style>
