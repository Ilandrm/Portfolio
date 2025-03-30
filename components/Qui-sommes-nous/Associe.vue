<script setup lang="ts">
import TextPhoto from "~/components/Home/TextPhoto.vue";
const textDavid = {
  title:'David Sitbon',
  sub:'President Fondateur',
  text:[  "David est passionné des marchés financiers, depuis toujours.",
    "Fort de sa maitrise d’économie et de gestion de la Sorbonne, il se lance en Bourse dès 1998. Il est désormais diplômé du DU expert en gestion de patrimoine de l’université de Clermont-Ferrand (Aurep).",
    "Expert en investissement sur les marchés financiers, il a travaillé 20 ans dans des institutions aussi prestigieuses que la Caisse des dépôts et consignations, Oddo BHF, ou Kepler Cheuvreux.",
    "Régulièrement nommé dans le top 5 des meilleurs analystes graphiques au classement européen Extel, conseillant aussi bien les family offices, hedge funds, traders ou fonds de pension.",
    "Fier papa de 2 grandes filles, le voici aujourd’hui lancé dans une belle aventure, avec la création de Pali Kao Capital, pour sa plus grande joie et l’ambition de toujours mieux servir ses clients."
  ],
  src:'PHOTO-DAVID-reduit-2-480x480.jpg'
}
const textRemi = {
  title: 'Rémi LOIR',
  sub: 'Partenaire',
  text: [
    "Spécialiste de l’investissement immobilier, Rémi dispose de plus de 20 ans d’expérience sur les marchés de l’investissement immobilier direct et indirect. Il a réalisé plus de 750 millions d’euros d’acquisitions. Il a ainsi développé une vision globale des marchés lui permettant de détecter les opportunités de valorisation à saisir.",
    "Rémi est diplômé de l’ESCP et du DU d’expert en gestion de patrimoine de l’AUREP (Université de Clermont-Ferrand).",
    "Ancien analyste financier, Rémi a acquis une expérience technique de l’analyse des différents véhicules d’investissements et de l’élaboration de recommandations adaptées à la situation personnelle de chacun.",
    "« Vous accompagner d’une manière humaine, efficace et fluide dans l’organisation de votre patrimoine, pour savoir utiliser au mieux de vos intérêts toute la gamme des solutions existantes afin d’optimiser la gestion, la préservation et la transmission de votre patrimoine constitue pour moi l’élément fondamental autour duquel j’exerce mon activité »."
  ],
  src: 'PHOTO-REMI-480x474.jpg'
};

</script>

<template>
  <h1 class="d-flex justify-content-around fw-bold mt-5 responsTitle">Nos associés et nos partenaires</h1>
  <TextPhoto :paragraphe="textDavid" :photo_mobile="true"/>
  <TextPhoto :paragraphe="textRemi" :photo_mobile="true"/>
</template>

<style scoped>

h1{
  font-size: 30px;
}
@media (max-width: 768px) {
  h1 {
    font-size: 25px;
  }
}
</style>
