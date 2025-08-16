# CV / Portfolio

Tout ce qui concerne de prêt ou de loin mon CV / Curriculum Vitae, mon portfolio, mon parcours professionnel.

SST des ressources.

Note : [CV moche sous word](https://drive.google.com/drive/folders/1K_6c86utVANnYQuMQUtEPZpNSBeaVqz4?usp=sharing) disponible sur le drive.

## ♻️⬆️ Date de dernière mise à jour

08/2025

## ✨ Procédures d'ajout au CV

🏭 Dupliquer boilerplates `entreprises/` & `projets/`

Renommage des fichiers via [AntRenamer](https://antp.be/software/renamer/fr)

### 💬🖼️🎞️ Création des ressources

#### Arborescence

1. `cv-portfolio-tout/portfolio/entreprises`
   1. `/YYMM--nom-entreprise`, date de fin du **dernier** projet
      1. 🖼️ `/non-compresse`
         1. Logo de base
      2. 🖼️ `_carre--nom-entreprise.png`, 512 x 512
      3. 🖼️ `_miniature--nom-entreprise.png`, ~1200 x 512
      4. 📝 `README.md`, t'es qui vous, historique si multiples projets
2. `cv-portfolio-tout/portfolio/projets`
   1. 👥 `/YYMM--rieng--nom-entreprise--nom-projet`, si aucune ressources
      1. `cv-portfolio-tout/portfolio/projets/__images bp pour vide`
   2. `/YYMM--nom-entreprise--nom-projet`, date de fin de projet
      1. 🖼️ `/images`
         1. `/non-compresse`
         2. `/screenshots`
            1. 🖼️ `nom-entreprise--nom-projet--type-projet--INDEX-nom-page.png`, 1200 x XXX
      2. 🎞️ `/videos`****
         1. `nom-entreprise--video--nom-projet--type-projet.mkv`
            1. OBS Studio, 1280x720, 30 IPS, Pas de son
      3. 🖼️ `_carre--nom-entreprise--nom-projet--type-projet.png`, 512 x 512
         1. Si besoin de rajouter titre
            1. Roboto Condensed, bold, 64pt, calque centré, #49cced
            2. Contour noir 7px
      4. 🖼️ `_miniature--nom-entreprise--nom-projet--type-projet.png`, 1200 x 600
         1. Idem, 90pt de taille de police
      5. 📝 `README.md`, Détail du projet
         1. 🏭 `cv-portfolio-tout/portfolio/projets/_BP_README.md`

---

#### 🖼️ Images

1. 👔 Entreprise
   1. Logo
      1. Vanilla
      2. Miniature
      3. Carré > 👌 Pas hésiter à virer des éléments avant capture pour bien centrer & lisibilité
2. Projet
   1. Screenshots
      1. Non compressés
         1. 📷 Plugin GoFullPage > Format PNG
   2. Aperçu
      1. Carré
      2. Miniature
3. ⚡️ Optimiser
   1. 📏 Redimensionner 512 / 1200 de largeur
   2. 🤏 [TinyPNG](https://tinypng.com/)

---

#### 💬 Textes

Au format Markdown.

1. Entreprise
   1. Nom de l'entreprise
   2. Que fait l'entreprise ?
   3. Contacts
   4. Projets réalisés avec
      1. Historique
2. Projet
   1. 🧠 Pour CV > XP Pro
      1. 📝 Toutes les dates > fin de poste ou projet
      2. Titre
         1. `YYYY / Client / Projet`
         2. `YYYY / Client / Poste`
      3. 📅 Période & durée
         1. `09/2022 - 2 jours`
         2. `01/2022 > 01/2023 - 1 an`
      4. Poste
         1. 💼 `Développeur web full stack`
         2. 🎓 `Professeur`
      5. 🎯 Missions
         1. Une ligne rapide
         2. Si besoin liste technologie > Kwakjéfé
      6. 👨‍💻 Technologies
         1. `WordPress, Thème Divi, PHP, CSS`
      7. 🔗 Liens
         1. `https://Vers le site`
         2. `🙈 En interne, confidentiel`
         3. `Projet Github`
   2. ✨ Pour site vitrine > Portfolio
      1. (Avant propos)
         1. 🙈 Confidentiel
         2. 👥 Données anonymisées
         3. 🏗️ Projet non terminé
         4. Si problème lors de la mission
      2. ⚡️ Description rapide du projet
      3. Description détaillée du projet, catégoriser
         1. 👨‍💻 Développement
            1. 🎨 Front
            2. 💾 Back
            3. 🐳🤖 DevOps
         2. 👷 Gestion de projet
         3. 📝 Documentation
         4. 💬 SEO
         5. 🎓 Prof
            1. 🙋‍♂️ Présentiel
            2. 🌐 Visio
            3. 📝 Rédaction de contenus pédagogiques

---

### Au CV

⚡️ Ready à c/c

1. Export au format PNG également au cazou
   1. // Hauteur 1200px
   2. // Tinypng
   3. Ajout du PNG à la racine de  ce projet
   4. Ajout à `cv/index--cv-seo-fallback-and-js-redirect-to-pdf/cv.png`
2. Mise à jour du PDF
   1. `/__craft-and-tests/`
   2. Ajout du PDF dans `assets/pdf`
   3. Ajout du PDF à la racine de  ce projet
   4. Mise à jour de `cv/index--cv-seo-fallback-and-js-redirect-to-pdf`
      1. Maj du fichier
      2. `./script.js` > `const pdfUri`
   5. Ajout à `cv/index--cv-seo-fallback-and-js-redirect-to-pdf/cv.pdf`
3. Mise à jour de `cv/xp`
4. Mise à jour de `cv/competences`
5. Upload sur masamune.fr/cv
6. Maj de la [liste de technos/compétences](https://docs.google.com/spreadsheets/d/1PRnekwnyb4MZHagqTLvMCuVENYs8-7VIgpYGB4pyqIg/edit?gid=0#gid=0)

---

Le [CV moche sous word yay](https://drive.google.com/drive/folders/1K_6c86utVANnYQuMQUtEPZpNSBeaVqz4?usp=sharing)

---

### 👔 Procédures d'ajout au site vitrine / portfolio / nouveau projet

1. Cloner `cv-portfolio-tout/portfolio/projets/_BP_README.md`
2. Remplir les informations de base
3. Rapatrier images si c'pas déjà fait et clean
   1. Process `cv-portfolio-tout/README.md`
      1. Récupérer depuis `/Desktop/tas de merde now/masamune.fr dump fichiers/uploads`
      2. A bouger dans `cv-portfolio-tout/portfolio`
      3. 🔥 Infos sensibles > noms projets, noms clients, identifiants
   2. Vérifier si logo entreprise dans le dossier
   3. `README.md` portfolio > textes title & alt
   4. WP > Ajouter aux médias
4. Page WordPress
   1. Titre du projet : NOM_PROJET
   2. Date de publication : Date dans CV & Premier du mois & 12:00
   3. Publier > Vérifier Url
   4. Catégories > Ajouter uniquement enfants
      1. Si nouvelles catégories ajouter au BP
   5. Tags > Pluriel uniquement
      1. Sujets du site
      2. Styles/Ambiance minimaliste / moderne / luxe / classique / one page
   6. Image en avant > Carré ( 512 x 512, TinyPNG )
      1. Title `Masamune / PROJET / CLIENT / TYPE_PROJET`
   7. Extrait
      1. `Réalisation d'un site vitrine pour un architecte, qui souhaitait un design minimaliste, et une administration simple à prendre en main.`
      2. Type de projet, type de client, objectifs du projet.
      3. 2 lignes max
   8. Désactiver commentaires
5. 💾 Rapatrier textes dans portfolio `cv-portfolio-tout/portfolio/projets/CLIENT/README.md`
6. Utiliser Divi
   1. Choisir la mise en page
   2. Télécharger le modèle
   3. Charger à partir de la bibliothèque "YYMMDD (latest) Projet"
   4. Remplacer les contenus
      1. Si pas d'image > Fond > Motif > Cube + #49CCED
      2. Vérifier si vidéo youtube
   5. 🚨 Pas oublier
      1. Liens > Ajouter liens
      2. Images > Visionneuse ou lien fichier direct
         1. CSS perso `max-height: 300px; overflow: hidden; width: 100%;`
         2. Styles > Espacement > Marge externe basse > 2em
      3. Missions > logo client à la place de celui masamune
      4. Vérifier en mode texte à la fin qu'il n'y a pas d'ajout de balises alakon `<div><span>&nbsp;`
      5. 📱 Responsive
7. 💾 Github

---

## 📂 Ouksékwa

| Emplacement                    | Kwaksé                                                                       |
|                             ---|                                                                           ---|
| `/_docs/craft-and-tests/`      | Toshop du CV actuel                                                          |
| `/_old/`                       | Anciens CVs                                                                  |
| `assets/images/_masamune`      | Logos, FF, favicon                                                           |
| `assets/images/cv`             | GIFs chats (CV compétences)                                                  |
| `assets/images/portfolio`      | Les images relatives au portfolio                                            |
| `[...]/portfolio/entreprises`  | Les images relatives aux entreprises : logos de base & carrés                |
| `[...]/portfolio/projets`      | Les textes, images **et vidéos** relatives aux projets : MD & screenshots    |
| `assets/pdf`                   | Sauvegarde des versions pdf du CV                                            |
| `cv/`                          | Les 3 parties du CV                                                          |
| `cv/competences`               | La partie compétences                                                        |
| `cv/index[...]`                | Redirection vers PDF + html fallback pour robots                             |
| `cv/xp`                        | La partie études & expériences pro                                           |

---

## 🌐 En ligne

1. Le seo fallback est injecté sur masamune.fr, dans le dossier `/cv`
2. Compétences dans `/cv/competences/`
3. Xp pro dans `/cv/xp/`

---

## Technologies

- Unicorns 🦄
- Magic ✨
- Some paprika 🌶️
- Love 💖

---

## Ressources

- My [base repositroy for github](https://github.com/youpiwaza/base-repository-github) project.

---

## Credits

Masamune / Maxime Chevasson
