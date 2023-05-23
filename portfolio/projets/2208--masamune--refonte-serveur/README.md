# Lisez wam du folio pour le projet Refonte de serveur

## Contenus textes

### Titre du projet

Refonte de serveur

### Période & durée

12/2019 > 08/2022 - 1 an & 9 mois en décousu

### Catégories

1. Nature des travaux
   1. Infrastructure serveur
   2. Automatisation
   3. Ubuntu
   4. Sécurité
   5. Infrastructure As Code
   6. Administration serveur
   7. Maintenance
2. Poste
   1. DevOps
   2. Développeur web
      1. Full stack
3. Technologies
    1. Ubuntu / Bash
    2. Docker
    3. Ansible
    4. WSL2
    5. Traefik
    6. Nginx
    7. MariaDB
    8. PHP
4. Type de projet
    1. Infrastructure serveur
    2. Hébergement web

---

### Tags > Préférer pluriels

automatiser, serveur, installation, configuration, conteneurs, maintenance, hébergement web, documentation, iac, infrastructure as code

---

### Extrait

Création d'une infrastructure serveur avancée en vue d'héberger mes clients

---

### Image

#### Carrée

Title

Masamune / Refonte Serveur Hebergement web / DevOps, Infrastructure & Automatisation

Alt

Aperçu du projet Refonte Serveur Hebergement web, textes: "Masamune DevOps Refonte serveur"

#### Miniature

Title

Masamune / Refonte Serveur Hebergement web / DevOps, Infrastructure & Automatisation

Alt

Aperçu du projet Refonte Serveur Hebergement web, textes: "Masamune DevOps Refonte serveur"

#### Logo

Réutilisation du Logo Masamune

#### masamune--refonte-serveur--devops--01-ansible-automatisation-et-generation

Title

Refonte Serveur Hebergement web / Ansible automatisation et génération

Alt

Capture d'écran avec aperçu du code et terminal ouvert avec un déroulé Ansible

#### masamune--refonte-serveur--devops--02-arborescence-projet

Title

Refonte Serveur Hebergement web / Arborescence projet

Alt

Capture d'écran de l'ensemble de l'arborescence du projet qui est très grande

#### masamune--refonte-serveur--devops--03-configuration-au-poil-et-maintenable

Title

Refonte Serveur Hebergement web / Configuration au millimètre et maintenable grace à l'Infrastructure As Code : Fichiers de code avec variables remplacées à la volée, puis injectés

Alt

Capture d'écran de fichiers de configuration, avec variables, prêts à être injectés

#### masamune--refonte-serveur--devops--04-controle-total-des-conteneurs-et-traefik

Title

Refonte Serveur Hebergement web / Controle total des conteneurs et Traefik : Load balancer, proxy, gestion automatique du HTTPS

Alt

Capture d'écran du fichier de configuration pour Traefik

#### masamune--refonte-serveur--devops--05-docker-et-compose-et-wsl-environnement-locaux

Title

Refonte Serveur Hebergement web / Environnement locaux grâce à Docker, compose et le sous-système Windows pour Linux (WSL2)

Alt

Capture d'écrans multiples : un terminal qui fait tourner docker, qui fait tourner plusieurs conteneurs. Une fenetre Web avec le site qui tourne, et une autre avec l'administration SQL

#### masamune--refonte-serveur--devops--06-gestion-propre-des-packages-et-des-configurations-via-variables

Title

Refonte Serveur Hebergement web / Gestion propre des packages et des configurations via variables

Alt

Capture d'écran d'un fichier de configuration ansible afin de gérer l'installation des packages de manière propre

#### masamune--refonte-serveur--devops--07-github-projet

Title

Refonte Serveur Hebergement web / Projet Github avec documentation de qualité

Alt

Capture d'écran du site github ou le projet est stocké avec une documentation de qualité

#### masamune--refonte-serveur--devops--08-projet-tests-et-tutoriels

Title

Refonte Serveur Hebergement web / Enormément de projet tests et tutoriels afin de maximiser la sécurité et la maintenance

Alt

Capture d'écran de VSCode avec une multitude de projets de tests concernant docker, ansible, traefik

#### masamune--refonte-serveur--devops--09-reutilisation-sur-autres-projets-pour-environnement-locaux

Title

Refonte Serveur Hebergement web / Réutilisation sur d'autres projets pour environnement locaux propre, avec génération de documentation automatique

Alt

Capture d'écran d'un fichier de configuration yaml afin de lancer un projet en local et aperçu d'une documentation générée

#### masamune--refonte-serveur--devops--10-reutilisation-sur-autres-projets-pour-installlation-et-maintenance-serveurs

Title

Refonte Serveur Hebergement web / Réutilisation sur d'autres projets pour configuration de serveur propre, avec génération de documentation automatique

Alt

Capture d'écran de fichiers de configuration en vue d'installer et maintenir des serveurs professionnels

#### masamune--refonte-serveur--devops--11-serveur--documentation-generee

Title

Refonte Serveur Hebergement web / Génération automatique de fichiers de documentation, d'identifiants

Alt

Capture d'écran d'un boilerplate de fichier de documentation markdown généré, ainsi que son aperçu rendu en PDF

#### masamune--refonte-serveur--devops--12-serveur--fichier-yml-generes

Title

Refonte Serveur Hebergement web / Design Pattern Factory en vue de générer des fichiers de commandes de serveurs clients : installation, démarrage, arrêt, sauvegardes, maintenance de conteneurs

Alt

Capture d'écran de VSCode avec un aperçu des fichiers générés pour chaque client en vue d'exécuter des commandes sur les conteneurs

---

## 4 cases résumé / liens

```html
<h3>Période</h3>
12/2019 &gt; 08/2022
~1 an &amp; 9 mois

<h3>Poste</h3>
DevOps
Dev web Fullstack

<h3>Type de projet</h3>
Infrastructure serveur
Hébergement web

<h3>Liens</h3>
<a href="https://github.com/youpiwaza/ansible-install-web-server" title="Sauvegarde du projet" target="_blank">Projet Github</a>
```

---

## 🎯 Missions

Grosse montée en compétence sur le **DevOps**, les **conteneurs** et la **sécurité** liée à l'**hébergement** en général.

Le but était de passer de mon ancien hébergement sur serveur dédié + apache avec configuration maison (VHost pour chaque client) à quelque chose de plus pérenne et maintenable.

Après pas mal de veille, de tutoriaux et de tests j'ai retenu un mélange de **Docker** et d'**Ansible**.

Docker me permettait de **tester** les sites et leurs environnements rapidement, très pratique pour les **mises à jour systèmes**.

Cela permettait également d'avoir des environnements clients autonommes & cloisonnés.

**Ansible** me permettait une **maintenance** et une **évolution** très propre grace aux fichiers de configuration injectés, après des tests en **déploiement canary**.

Il me permettait également de **générer** des environnements et sites clients (WordPress en ligne en moins de 40 secondes ⚡️) grâce à l'utilisation du **Design Pattern Factory**.

---

Nature des travaux
Infrastructure serveur
Automatisation
Ubuntu
Sécurité
Infrastructure As Code
Administration serveur
Maintenance

Technologies
Ubuntu / Bash
Docker
Ansible
WSL2
Traefik
Nginx
MariaDB
PHP

---

## 👨‍💻 Développement

```html
<h3>Infrastructure serveur</h3>
Configuration du serveur de base, avec optimisation pour Docker.

Bonnes pratiques en terme de sécurité et performances.

<h3>Automatisation</h3>
Utilisation d'Ansible afin d'installer et configurer le serveur (IaC).

Génération de projets/sites et documentation clients.

Maintenance automatisée.

<h3>Traefik</h3>
Utilisation du **load balancer** afin de générer des "VHosts" de manière automatique en liaison avec Docker compose.

Gestion automatique des sous domaines et du HTTPS.

<h3>Serveurs Web</h3>
Veille et tests de performance sur les serveurs web (Apache, Nginx, Litespeed, Caddy).

Choix de Nginx, et configuration avancée en vue de performances.

<h3>Application</h3>
Possibilité de créer et déployer de manière automatique des sites clients PHP uniquement, PHP + MariaDB, WordPress.
```
