<script setup lang="ts">

import TextClassique from "~/components/utils/TextClassique.vue";
const textAcreditation = [
  {
    titre:'Conseiller en gestion de patrimoine (CGP) : Qu’est-ce que c’est ?',
    paragraphe: '\n' +
        '\n' +
        '\n' +
        'Pour bien exercer son métier, le CGP doit cumuler plusieurs compétences et exercer plusieurs métiers :\n' +
        '- Conseil en investissement financier (CIF)\n' +
        '- Intermédiaire en opération d’assurance (IOA)\n' +
        '- Intermédiaire en transaction immobilière\n' +
        '- Conseil patrimonial à titre accessoire avec la compétence juridique appropriée (CJA)'
  },
]
const typeAcreditation = [
  {
    titre:'Conseiller Investissements Financiers (CIF).',
    sub:'Sous le contrôle de l’A.M.F - Autorité des Marchés Financiers',
    paragraphe: ' Pali Kao Capital est enregistré sous le numéro par la CNCGP (chambre nationale des conseillers en gestion de patrimoine, www.CNCGP.fr), association agréée par l’Autorité des Marchés Financiers (AMF).\n' +
        'Ce statut permet à, Pali Kao Capital de délivrer des conseils en investissement portant sur des instruments financiers (actions, obligations, parts de fonds communs de placement, etc...) et sur la fourniture de services d\'investissement (par exemple, réalisation d\'une allocation d\'actifs, etc.).'
  },
  {
    titre:'Courtier en Assurances (IOA)',
    sub:'contrôlable par l’A.C.P.R. – Autorité de Contrôle Prudentiel et de Résolution.',
    paragraphe: 'contrôlable par l’A.C.P.R.  – Autorité de Contrôle Prudentiel et de Résolution.\n' +
        'Pali Kao Capital est enregistré auprès de l’ORIAS (Registre des Intermédiaires en Assurance) sous le numéro 1800 23 04.\n' +
        'Ce statut permet notamment à Pali Kao Capital de distribuer des produits d’Assurance-vie.'
  },
  {
    titre:'Intermédiaire en transaction immobilière',
    sub:'sous le contrôle C.C.I Paris Île-de-France.',
    paragraphe: 'Pali Kao Capital est enregistré auprès du C.C.I Paris Île-de-France sous le numéro : CPI 7501 2018 000 026 804.\n' +
        'Ce statut permet notamment à Pali Kao Capital de vous conseiller sur vos investissements immobiliers en fonction des différents dispositifs fiscaux mis en place par l’administration fiscale (Pinel, Malraux, LMNP, monuments historiques etc…).'
  },
  {
    titre:'Compétence juridique appropriée (CJA).',
    paragraphe: 'De par leurs diplômes, vos conseillers disposent de la CJA.'
  }
]
</script>

<template>
  <div class="mt-5 mb-5">
<TextClassique :text="textAcreditation" title="Nos accréditations légales"/>
  </div>
  <TextClassique :text="typeAcreditation"/>
</template>

<style scoped>

</style>
