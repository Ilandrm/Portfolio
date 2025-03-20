<script setup>
import { ref } from 'vue';
import TextClassique from "~/components/utils/TextClassique.vue";

const textNeutralite = [
  {
    titre: "Neutralité Fiscale",
    paragraphe: "L’un des piliers et des atouts de l’assurance vie au Luxembourg est la neutralité fiscale. Cela signifie que la fiscalité appliquée est celle du pays de résidence fiscale de l’assuré. Ce sont donc les dispositifs fiscaux du pays de résidence fiscale du souscripteur du contrat qui s’appliquent. Si une personne est résidente fiscale française, elle bénéficiera de la fiscalité et des avantages fiscaux de l’assurance vie française. Si elle décide de s’expatrier fiscalement dans un autre pays, son contrat d’assurance vie luxembourgeois appliquera la fiscalité du pays de sa nouvelle résidence fiscale. L’assurance vie luxembourgeoise permet donc une portabilité de la fiscalité du contrat en cas de changement de résidence fiscale."
  },
  {
    titre: "Comment déclarer son contrat d’assurance vie luxembourgeois aux impôts ?",
    paragraphe: "Si vous êtes résident fiscal français, la déclaration d’un compte ou d’une assurance vie détenu à l’étranger est obligatoire. Cependant, son application est assez simple.",
    list: [
      "Cocher la case 8 TT sur la déclaration 2042.",
      "Ouvrir la case 'Joignez la liste des contrats'.",
      "Préciser les éléments suivants :",
      "   Identification du souscripteur : nom, prénom, adresse, date et lieu de naissance.",
      "   Adresse du siège de la compagnie d’assurance ou assimilé, et, le cas échéant, de la succursale qui accorde la couverture.",
      "   Désignation du contrat, ses références et la nature des risques garantis.",
      "   Le moment à partir duquel le risque est garanti et la durée de cette garantie.",
      "   Les dates d’effet des avenants et des opérations de dénouement total ou partiel, survenus au cours de l’année civile."
    ]
  },
  {
    titre: "Doit-on déclarer la somme investie sur une assurance vie au Luxembourg ?",
    paragraphe: "Cette information n’est pas demandée, il n’est donc pas nécessaire de l’indiquer."
  },
  {
    titre: "Que se passe-t-il en cas de non-déclaration de votre assurance vie au Luxembourg ?",
    paragraphe: "Le défaut de déclaration d’un contrat d’assurance vie au Luxembourg ou tout autre compte détenu à l’étranger, modifié ou ayant fait l’objet d’opérations de remboursement au cours de l’année, est passible d’une amende de 1 500 € par contrat non déclaré. Ce montant est porté à 10 000 € par contrat non déclaré lorsque l’obligation déclarative concerne un État ou territoire qui n’a pas conclu avec la France une convention d’assistance administrative en vue de lutter contre la fraude et l’évasion fiscales permettant l’accès aux renseignements bancaires (CGI art 1649 AA, 1766)."
  }
];

</script>

<template>
  <div class="mt-5">
    <TextClassique :text="textNeutralite"/>
  </div>
</template>

<style scoped>

</style>
