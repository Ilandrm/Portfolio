<script setup lang="ts">
import TextClassique from "~/components/utils/TextClassique.vue";
import Contrat from "~/components/Home/Contrat.vue";

const textPourquoi = [
  {
    titre:'',
    paragraphe:'Le contrat d’assurance vie au Luxembourg est une enveloppe fiscale.\n' +
        'Tous les contrats d’assurance vie bénéficient des mêmes avantages et inconvénients de cette enveloppe fiscale (sécurité, neutralité fiscale etc..).\n' +
        '\n' +
        'Cependant les offres de compagnies d’assurance au Luxembourg varient selon plusieurs critères:',
    list:[
        'Qualité de la compagnie d’assurance\n',
        'Diversité, nombre et qualités des supports d’investissement',
        'Présence ou non du fonds Euro',
        'Montant minimum pour investir dans un FAS ou un FID',
        'Nombre de devises acceptées pour les versements',
        'Etendue géographique (Nombre de résidences fiscale approuvée).'
    ]
  }
]
const textCritere = [
  {
    titre:'',
    paragraphe:'Il est important de prendre en considération un certain nombre de critères avant d’héberger son contrat dans une compagnie d’assurance.\n' +
        '\n' +
        'En effet, les offres de compagnies d’assurance au Luxembourg varient selon plusieurs critères:'
  },
  {
    titre:'Qualité et solidité financière de la compagnie d\'assurance',
    paragraphe: 'La qualité et la solidité financière de la compagnie d’assurance se mesurent par le montant des capitaux administrés, par son ratio de solvabilité, par la qualité et la réactivité de son back office, par son savoir-faire dans la maitrise dans la planification de des objectifs fiscaux etc…'
  },
]

const textSupport = [
  {
    titre: "Performance du fonds en euros",
    paragraphe: "Les contrats d'assurance vie Luxembourgeois ne comportent pas tous la possibilité d'investir sur le fonds Euro.",
    list: [
      "Certains contrats comme Generali, Cardif Luxembourg l'autorisent, d'autres non",
      "En fonction de l'objectif du souscripteur, il est nécessaire de se diriger vers un contrat répondant aux ambitions de chacun"
    ]
  },
  {
    titre: "La diversité des supports d'investissement",
    paragraphe: "Les compagnies d'assurance ne sont pas toutes égales dans le nombre et la diversité des supports disponibles pour investir sur son contrat d'assurance vie.",
    list: [
      "Certaines sont spécialisées dans le private equity",
      "D'autres sont spécialisées dans les OPCVM, ou dans les FAS ou FID"
    ],
    sub: "Il est ainsi nécessaire de s'orienter vers celle qui répondra le mieux aux attentes de chaque souscripteur."
  }
]
const textFrais = [
  {
    titre: "",
    paragraphe: "Les frais des contrats d'assurance vie se divisent en quatre parties :"
  },
]
const textDevises = [
  {
    titre: "Nombre de devises acceptées",
    paragraphe: "Le nombre de devises acceptées lors de versements concernant les contrats d'assurance vie varient d'une compagnie à l'autre. On trouve cependant les trois principales devises disponibles dans l'ensemble des contrats d'assurance vie, à savoir : dollar, Euro et Franc Suisse. Certaines compagnies acceptent plus d'une dizaine de devises."
  },
  {
    titre: "Étendue géographique",
    paragraphe: "Afin de pouvoir profiter d'un des atouts de l'assurance vie Luxembourgeoise, c'est-à-dire la possibilité pour un expatrié ou futur expatrié de bénéficier de la fiscalité de sa nouvelle résidence fiscale, il est nécessaire que ce pays soit disponible sur les contrats de la compagnie d'assurance dans laquelle le contrat est hébergé, on parle alors d'étendue géographique. L'étendue géographique varie d'une compagnie à une autre. On peut aller de quelques pays européens à des pays d'Asie ou d'Amérique centrale. Il est important de vérifier avec votre conseiller l'étendue géographique avant de souscrire. L'étendue géographique est la possibilité de profiter de la fiscalité d'un autre pays que celui envisagé lors de la souscription."
  }
]
</script>

<template>
<TextClassique :text="textPourquoi" title="Pourquoi comparer les offres d'assurance vie au Luxembourg en 2025"/>
  <TextClassique :text="textCritere" title="Les critères à prendre en compte pour choisir une assurance vie au Luxembourg"/>
  <TextClassique :text="textFrais" title="Les frais liés à l'assurance vie"></TextClassique>
  <div class="container mb-5">
    <div class="card advantage">
      <img class="icon" src="../../public/enter.png" alt="icon">
      <h3 class="fw-bold">Frais d'entrée</h3>
      <p>Lors de la souscription d'un contrat, la compagnie d'assurance ou l'intermédiaire peut demander des frais d'entrée : on parle alors de frais de dossier, frais d'adhésion ou frais d'entrée.</p>
      <ul>
        <li>Ces derniers sont fixes et ne sont à régler qu'une fois, au moment de la souscription</li>
        <li>Les frais d'entrée ne sont pas obligatoires et leur montant varie selon les intermédiaires ou compagnies d'assurance</li>
      </ul>
      <p class="fw-bold">Pali Kao Capital ne prend aucun frais d'entrée sur l'ouverture de contrat d'assurance vie.</p>
    </div>

    <div class="card advantage">
      <img class="icon" src="../../public/versement.png" alt="icon">
      <h3 class="fw-bold">Frais sur versements</h3>
      <p>Une fois le contrat souscrit, lors de chaque apport en capital, le souscripteur peut, en fonction de l'intermédiaire s'acquitter de frais sur versements, qui seront proportionnels au montant versé et qui viendront minorer le montant réel du versement.</p>
      <ul>
        <li>Ces versements varient de 0 à 4% selon les intermédiaires</li>
      </ul>
      <p class="fw-bold">Pali Kao Capital ne prend aucun frais sur versement, à l'exception des frais minimum requis par l'assureur pour les versements programmés.</p>
    </div>

    <div class="card advantage">
      <img class="icon" src="../../public/gestion.png" alt="icon">
      <h3 class="fw-bold">Frais de gestion</h3>
      <p>Les frais de gestion d'un contrat d'assurance vie sont des frais récurrents, qui sont proportionnels au montant investi sur le contrat. Ils sont prélevés chaque année.</p>
      <ul>
        <li>Chaque contrat d'assurance vie a des frais de gestion</li>
        <li>Contrairement à son cousin français, les frais de gestion peuvent être négociés dans un contrat d'assurance vie Luxembourgeois et sont proportionnels au montant investi</li>
      </ul>
      <p class="fw-bold">Les frais de gestion servent à rémunérer les compagnies d'assurance, les back office, le gestionnaire du fonds euros etc..</p>
    </div>

    <div class="card advantage">
      <img class="icon" src="../../public/Iconcircle_gold.png" alt="icon">
      <h3 class="fw-bold">Frais d'arbitrage</h3>
      <p>Lors d'un arbitrage sur un contrat d'assurance vie, c'est à dire le fait de passer d'un fonds à un autre, des frais peuvent s'appliquer.</p>
      <ul>
        <li>Ces frais sont appelés frais d'arbitrage</li>
        <li>Ils sont variables d'une compagnie à l'autre, proportionnels au montant de l'épargne arbitrée (entre 0 et 1%)</li>
        <li>Certains contrats d'assurance vie appliquent un nombre d'arbitrages gratuits par an</li>
      </ul>
      <p class="fw-bold">Pali Kao Capital ne prend aucun frais d'arbitrage sur les contrats d'assurance vie, autres que le minimum requis par la compagnie d'assurance.</p>
    </div>
  </div>
  <TextClassique :text="textSupport"/>
  <TextClassique :text="textDevises"/>
  <Contrat/>
  <ContratComparatif/>
</template>

<style scoped>

</style>
