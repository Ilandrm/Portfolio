<script setup lang="ts">
import TextClassique from "~/components/utils/TextClassique.vue";

const textSouplesse = [
  {
    titre: 'La souplesse, les differents modes de gestion' ,
    paragraphe:  'Il existe trois modes de gestion principaux pour un contrat d’assurance-vie luxembourgeois : la gestion sous mandat, la gestion pilotée, et la gestion libre.'
  }
    ]
const textPluralite = [
  {
    titre:'La pluralité des supports d’investissement',
    paragraphe:'L’objectif principal d’un contrat est de garantir la sécurité de l’investisseur.\n' +
        'La réglementation luxembourgeoise catégorise et segmente les contrats selon le montant investi, ce qui définit la liberté d’investissement et les actifs admissibles.\n' +
        '\n' +
        'Plus le montant investi est élevé, plus les actifs accessibles sont nombreux.'
  }
]
const textGestionLibre = [
  {
    titre:'',
    paragraphe:'Les souscripteurs disposent de la qualité de créanciers privilégiés de 1er rang de la compagnie d’assurances sur la masse des actifs.\n' +
        '\n' +
        'Dans le cadre de la gestion libre, l’épargnant gère directement son contrat d’assurance-vie. L’offre luxembourgeoise repose sur deux types de supports :\n'
  },
  {
    titre:'Fonds général : Capital garanti',
    paragraphe: 'Le Fonds Général garantit le capital pendant toute la durée de l’investissement.\n' +
        'Disponible principalement en euros, certaines compagnies offrent également des options en dollars américains.\n' +
        'Attention : Ce fonds n’est pas systématiquement présent dans tous les contrats luxembourgeois.'
  },
  {titre: 'Fonds externes',
    paragraphe: 'Ces fonds offrent une large gamme d’options, souvent non accessibles dans les contrats français.\n' +
        'Ils permettent d’investir via des gestionnaires financiers internationaux.'
  }
]
const textGestionMandat = [
  {
    titre:'',
    paragraphe:'La gestion dédiée est un mode de gestion offrant un suivi personnalisé grâce à l’intervention d’un conseiller ou d’un gestionnaire de patrimoine.\n'
  },
  {
    titre:'Avantages',
    paragraphe: 'Possibilité de définir une stratégie d’investissement adaptée aux objectifs de l’assuré et à son profil de risque.\n' +
        'Allocation des fonds basée sur les performances et les opportunités des marchés financiers.\n' +
        'Expertise et personnalisation renforcées.\n'
  },
  {titre: 'Limites',
    paragraphe: 'Frais de gestion potentiellement plus élevés par rapport aux autres modes de gestion.'
  }
]
const textFI = [
  {
    titre:'Fonds Internes Collectifs (FIC)',
    paragraphe:'Ces fonds sont accessibles à des groupes d’investisseurs, sans lien familial requis.\n' +
        'Ils offrent une diversification du portefeuille adaptée à différents profils de risque.\n' +
        'Leur réglementation garantit un niveau élevé de sécurité et de transparence.\n'
  },
  {
    titre:'Fonds Internes Dédiés (FID)',
    paragraphe: 'Exclusifs et personnalisés, ces fonds permettent une gestion sur mesure.\n' +
        'Ils incluent des options sophistiquées telles que produits structurés, fonds internationaux, ou encore Private Equity.\n' +
        'Ils nécessitent l’intervention d’un gestionnaire financier désigné par le souscripteur.'
  },
  {titre: 'Fonds d’Assurance Spécialisé (FAS)',
    paragraphe: 'Destinés aux investisseurs avertis, ces fonds offrent une grande autonomie dans la gestion des actifs.\n' +
        'Idéal pour les investissements à long terme et les produits spécifiques.\n' +
        'Contrairement au FID, leur cadre réglementaire est plus souple.'
  }
]
</script>

<template>
  <div class="mt-5">
<TextClassique :text="textSouplesse" :bigger="true"/>
<TextClassique :text="textPluralite" :blue_b="true"/>
<hr class="w-100 mb-5"/>
    <TextClassique :text="textGestionLibre" :noHr="true" title="La gestion libre"/>

    <TextClassique :text="textGestionMandat" :noHr="true" title="La gestion dédiée ou sous-mandat"/>
    <TextClassique :text="textFI" :noHr="true" title="Les fonds d’investissement disponibles"/>
    <hr class="w-100 mb-3"/>

  </div>
</template>

<style scoped>
h1{
  font-size: 30px;
}
</style>
