# Refonte de e-commerce Modélisme

## 🧠 Pour CV > XP Pro

📝 Toutes les dates > fin de poste ou projet

1. Titre
   1. `2023 / Masamune / Refonte de e-commerce PB Modélisme`
2. 📅 Période & durée
   1. `03/2022 > ~02/2023 - ~11mois+`
3. 💼 Poste
   1. 👨‍💻 `Développeur web full stack`
4. 🎯 Missions
   1. 🏗️⚰️ Rupture anticipée du contrat & abandon du projet
   2. Migrer un site e-commerce en PHP vers WordPress / WooCommerce
   3. 👷 Gestion de projet
   4. 📝 Analyse & documentation de l'existant, établir des correspondances vers WP
   5. 🐳🤖 *DevOps* > Création d'un environnement de dev local
   6. 💾 *Back* > Création, import, vérification & affichage de champs personnalisés (plus de 250, pour 26 catégories)
   7. 💾🔀 *SQL* > Export à partir de 30+ tables, normalisation, correspondances & import vers WP/WC d'un catalogue de 35k+ produits, 250+ catégories & sous catégories, des clients, des commandes via requêtes SQL complexes et conversion en CSV
   8. 🎨 *Front* > Intégration des champs persos (250+ pour 25+ catégories), création de templates via Divi
   9. 🎞️ *Vidéos* > Réalisation de plus de 8h de tutoriaux vidéos pour l'installation, la prise en main dev, la prise en main clients, la maintenance
   10. 💬 *SEO* > Analyse de la concurrence, refactorisation des contenus & catégories, nettoyage des images structurelles
5. 👨‍💻 Technologies
   1. `SQL, PHP, WordPress & Thème Divi, WooCommerce, CSS & Bootstrap, HTML, CSV, Docker`
6. 🔗 Liens
   1. `⚰️ Projet abandonné`

```html
<!-- 🏭 Boilerplate -->
<h3>YYYY / Entreprise / Projet</h3>

<!-- Hey met de la ~~flemme~~ consistance-->
table>tr>td>strong{📅 Période & durée}^td{XXX}^tr>td>strong{💼 Poste}^td{👨‍💻 Développeur web full stack}+td{🎓 Professeur}^tr>td>strong{🎯 Missions}^td{Description one line}+td>ul>li{Si plusieurs lignes}+li>em{yay}^^^tr>td>strong{👨‍💻 Technologies}^td{XXX}^tr>td>strong{🔗 Liens}^td{https://Vers le site}+td{🙈 En interne, confidentiel}+td{Projet Github}
```

---
---
---

## ✨ Pour site vitrine > Portfolio

## Avant-propos

⚰️ Rupture anticipée du contrat & abandon du projet, suite à une très ~~très très~~ mauvaise estimation de ma part sur la quantité de travaux à effectuer.

🏗️ Projet non terminé ! Les visuels ne représentent pas le niveau de qualité d'un projet final.

👥 Données anonymisées

- Les données originales étant la propriété de la société pour lequel était prévu le site (sans parler des clients, RGPD blah²), ces dernières ont été anonymisées ou masquées.
- Le peu qui **pourrait** apparaître est du domaine publique (accessible depuis leur site en ligne)
- La couleur principale à été remplacée pour les captures d'écran par le classique "royalblue", plus foncé de ~20%
- Les images ont été remplacées par des images libres de droits, pour les autres il s'agit
  - en grande majorité de wikipedia, [n'oubliez pas de donner ;)](https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal)
  - de logos de marques, à priori publique
  - de personnes que j'aprécie et pour qui je fais un peu de pub
    - Jérémie Bonamant Teboul aka. "Figone" et son super [Figostock](http://figostock.jeremiebt.com/)
    - Luke towans, un [modéliste hors pair](https://www.youtube.com/channel/UCjRkUtHQ774mTg1vrQ6uA5A)
    - [Squidmar miniatures](https://www.youtube.com/@SquidmarMiniatures)
    - Il est pas dedans mais tant pis, [Miniac > Miniatures & Métal](https://www.youtube.com/@Miniac)

BREF

---

## ⚡️ Description rapide du projet

Refonte complète d'un site e-commerce, en conservant le catalogue de produits, les clients, l'historique des commandes, ainsi que les fonctionnalités particulières déjà présentes.

Migration vers un WordPress / WooCommerce afin de tout normaliser, faciliter la gestion & la mise à jour des contenus.

---

## 📚 Description moins rapide du projet, catégorisée

### 👷 Gestion de projet

Analyse besoins clients, rédaction de cahier des charges, spécifications techniques.

### 👨‍💻⬆️ Migration du site

Création d'un environnement de dev local via 🐳 `docker`, mais KO assez vite à cause de la quantité de données injectées.

#### 📝 Documentation, 2 mois

1. Création d'une documentation technique
2. Analyse de l'existant (30+ tables)
    1. Référencement & normalisation des champs
    2. Conversion de la structure vers WordPress / Woocommerce (pour l'export)
3. Crafts n' tests
   1. Recherche & developpement, plugins
   2. Etapes par étapes
   3. Création de tutoriaux vidéos ~8h de vidéos
      1. Installation du projet
      2. Prise en main côté dev
      3. Prise en main côté client (admin wordpress)

---

#### 💾🔀 Export site actuel vers Imports WordPress / Woocommerce, 4 mois

1. Aministration WordPress
    1. Création de champs personnalisés (plugin Advanced Custom Fields) afin de ne rien perdre qui ne rentrait pas dans les cases WP/WC
       1. 220+ champs, dont répéteurs
2. Exports des bases actuelles en CSV, afin de correspondre aux plugins
    1. Création de requêtes SQL avancées (plus de 800 lignes lel)
    2. Ajustement des champs afin de correspondre à la nouvelle structure
    3. Respect des catégories et de leur hiérarchie (sous catégories) (~750)
    4. Gestion des champs personnalisés, privés/publiques, et anciens champs (legacy)
    5. Refactorisation, homogénéisation, améliorations de l'ergonomie
3. Produits, plus de 35k
    1. Optimisation du flux de production : Possibilité de ré-imports, sélectifs ou mise à jour de l'existant
       1. Avec 35k+ produits & certains imports de plus de 10h c'était indispensable ^^'
4. Import des comptes clients, & conservation de l'historique (partiellement) des commandes & produits associés
    1. Champs personnalisés
        1. Conditionnels
        2. Conservation des anciens champs (legacy)
    2. Types de comptes différents

---

### ♻️💬 Contenus & référencement naturel, 2-3 mois

1. Administration WordPress
    1. Création de templates avancés (Thème Divi + Thème enfant)
2. Référencement naturel
    1. Balises abbréviations automatiques
    2. Images structurelles
        1. Optimisations: tailles, poids, formats/ratios, balises title & alt
        2. ✌️ A la mano : actualisation et normalisation
            1. récupération, détourage, recadrage, mise aux ratios, optimisations
            2. logos des marques ~400+
            3. images représentatives des catégories & sous catégories, ~750
    3. Mise au propre des des marques ~400+, mises à jour :
        1. dédoublonnage
        2. des noms (en cas de changements, rachats)
        3. des images (logos)
        4. des urls de site
        5. refactorisation des marques parents/enfants en cas de sous marques
3. Rédaction de contenus optimisés référencement naturel
    1. Re-factorisation des contenus (catégories), ainsi que des menus, suite à une analyse poussée de la concurrence (2 sites)
    2. Mise en valeur & création de page dédiées pour
        1. Les catégories phares du sites (guides)
        2. Les services
        3. Les actualités de la société
    3. Rédaction d'actualités pertinentes dans le milieu du modélisme
    4. Rédaction de page promotionnelles
    5. Pages secondaires usuelles (contact, législation, CGV, etc.)
