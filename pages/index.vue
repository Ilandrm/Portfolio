<script setup lang="ts">
useSeoMeta({
  title: 'Pali Kao Capital - Assurance vie luxembourg',
  description: 'L’assurance-vie luxembourgeoise est un contrat d’assurance vie souscrit auprès d’une compagnie d’assurance luxembourgeoise. Ce contrat permet à l’assuré de placer son épargne dans des fonds d’investissement (OPC, SICAV, FCP, etc.) gérés par la compagnie d’assurance.',
});
import Navbar from "~/components/utils/Navbar.vue";
import HeadHome from "~/components/utils/HeadHome.vue";
import TextPhoto from "~/components/Home/TextPhoto.vue";
import Contrat from "~/components/Home/Contrat.vue";
import Avantages from "~/components/Home/Avantages.vue";
import TableComparatif from "~/components/Home/TableComparatif.vue";
import Souplesse from "~/components/Home/Souplesse.vue";
import FAQ from "~/components/utils/FAQ.vue";
import Footer from "~/components/utils/Footer.vue";
const textFaq = [
  {
    quest: "Quels sont les frais associés à un contrat d'assurance-vie luxembourgeoise ?",
    asnw: "Les frais associés à un contrat d’assurance-vie luxembourgeois peuvent varier en fonction de la compagnie d’assurance et du mode de gestion choisi. En général, les contrats d’assurance-vie luxembourgeois comportent des frais de gestion comme tout autre contrat d’assurance vie."
  },
  {
    quest: "Qu’est-ce que le crédit Lombard ?",
    asnw: "Le crédit Lombard est une solution de financement simple qui consiste à nantir votre contrat luxembourgeois en contrepartie d’un prêt. Il s’agit là d’une stratégie opportuniste lorsque l’on porte un intérêt à l’effet de levier. Ce prêt accordé par la banque dépositaire est utilisé pour dégager des liquidités immédiates et profiter d’opportunités de marchés. Ce nantissement donne également la possibilité d’utiliser ces liquidités pour financer un projet plus personnel comme l’achat d’une voiture ou d’un bien immobilier."
  },
  {
    quest: "Peut-on transférer un contrat d’assurance-vie français vers un contrat d’assurance-vie luxembourgeois ?",
    asnw: "Il est impossible de transférer un contrat d’assurance vie français vers un contrat luxembourgeois. La seule solution est de clôturer son contrat français et d’en ouvrir un autre au Luxembourg."
  }
];
const pageContent = {
  title: "Qu'est-ce que l'assurance-vie luxembourgeoise ?",
  text: [

    "L’assurance-vie luxembourgeoise est un contrat d’assurance vie souscrit auprès d’une compagnie d’assurance luxembourgeoise. Ce contrat permet à l’assuré de placer son épargne dans des fonds d’investissement (OPC, SICAV, FCP, etc.) gérés par la compagnie d’assurance. L’assuré peut choisir les fonds dans lesquels il souhaite investir, en fonction de ses objectifs d’épargne et de ses préférences d’investissement.",
    "Le contrat d’assurance vie luxembourgeois est un contrat d’épargne qui répond aux mêmes engagements que le contrat d’assurance vie français.",
    "C’est un outil patrimonial, permettant d’épargner, de valoriser son capital et de le transmettre aux bénéficiaires désignés. Vous avez la liberté de retirer à tout moment tout ou partie du capital investi."
  ],
  src:'pf-luxembourg.png'
};

</script>

<template>
<Navbar/>
<HeadHome class="mt-5" :home="true"/>
  <div class="d-flex justify-content-center align-items-center">
  <div class="card advantage mt-5 w-75">

    <h1 class="d-flex justify-content-around fw-bold mt-2 responsTitle">Pourquoi choisir Pali Kao Capital</h1>
    <p class="text-lg-start w-75">
      1. Nous avons sélectionné les contrats d’assurance vie Luxembourgeois les plus performants.<br>
      2. Nous bénéficions d’une forte expertise dans le domaine des marchés financiers (plus de vingt-cinq ans d’expérience dans le conseil en investissement financier).<br>
      3. Nous accompagnons nos clients dans la durée, leur offrant réactivité, expertise et indépendance.<br>
      4. Nous ne sommes liés à aucune compagnie financière, ou de private equity, ainsi, nous conseillons nos clients, en totale indépendance, au mieux de leurs intérêts.<br>
      5. Nous avons accès à une pluralité de fonds, nous sélectionnons ceux alliant performance et régularité, en adéquation avec le profil de risque de nos clients.
    </p>
  </div>
  </div>
  <TextPhoto class="mt-5" :paragraphe="pageContent"/>
  <contrat/>
  <Avantages/>
  <TableComparatif/>
  <Souplesse/>
  <FAQ :text="textFaq"/>
  <Footer/>
</template>

<style scoped>


.advantage p{
  font-size: 20px;
  white-space: pre-line;
  color: #000b31;
}
</style>

