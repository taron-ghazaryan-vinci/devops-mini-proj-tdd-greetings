# -devops-mini-proj-tdd-greetings

groupe 8 : Ghazaryan Taron, Axmad Muxamad Mostafa.

# DevOps Mini-Projet 2

Travail de recherche , mettre en place de l'integration continue avec les GitHub Actions

## Informations

-   N° de groupe : 8
-   Membres du groupe :Ghazaryan Taron , Axmad Muxamad Mostafa
-   Lien vers le dépôt github : https://github.com/taron-ghazaryan-vinci/devops-mini-proj-tdd-greetings

## Énoncé

### Pré-requis :

-   Sur base de votre mini-projet 1 (TDD)
-   Usage de [JEST](https://jestjs.io/docs/getting-started) obligatoire
-   Utilisation pulls requests

### Ajouter ce fichier MD à votre mini-projet-1

Compléter les informations concernant votre numéro de groupe et membres du groupe

### Mettre en place une intégration continue

L'intégration continue doit se composer des étapes obligatoires suivantes (non-exhaustif):

    - Les dépendances doivent être installées
    - Une première étape indiquant l'heure de commencement de la pipeline doit être affichée
    - Le code doit être "formatté" correctement (Prettier)
    - Le code doit être "linté" correctement (Lint)
    - Le code doit être "testé" correctement ET le coverage doit être au-dessus de 80% (Jest)
    - Le code doit être "buildé" correctement
    - Une étape indiquant l'heure de fin de la pipeline doit être affichée
    - Une étape indiquant le string suivant "PIPELINE SUCCESS WITHOUT ERRORS" doit être affichée

### Enclencher l'intégration continue lors d'une Pull Request / Merge Request

Ouvrez une Pull Request / Merge Request
Lors de l'ouverture et/ou de la modification de votre PR/MR vers la branche principale, l'intégration continue doit s'enclencher et les étapes doivent être respectées.
Merci de laisser une PR / MR ouverte afin que l'on puisse évaluer.

Liens utiles:
[GitHub Actions](https://docs.github.com/fr/actions)
[Jest coverage](https://www.valentinog.com/blog/jest-coverage/)

## Questions

-   Décrivez brièvement ce que fait votre fichier YML.

```bash
Notre fichier YML s'exécute lors d une pull request sur la main et lors d'un push sur les autres branche. Il met d'abord en place Node.js ensuite il affiche l'heure de l'exécution du fichier dans la pipeline , il installe les dépendences, il configure Eslint et Prettier pour notre projet, il test notre projet et affiche le coverage, il build le projet et finalement affiche l'heure de fin de pipeline et un petit message.
```

-   En particulier : à quoi sert le “on” ? dans votre fichier YML ? Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ?

```bash
Le "on" sert a définir quand est-ce que la pipeline doit être déclenchée et alors on a les options : "on push" et "on pull request".
Nous conseillerions "on pull request" pour éviter que des mauvaises modifications arrivent sur la branche principale et cela permettrait aussi de faire check les mofications par les personnes plus expérimentées plus facilement.
```

-   Quelle est la différence entre run et run_on ? Expliquez par rapport à votre pipeline.

```bash
La commande run est utilisé pour spécifier les commandes qui vont s'executer lors d'une étape tandis que la commande run on est utilisé pour specifier les evenements qui vont executer le flux de travail.
```

-   Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline.

```bash
La commande use sert à incorporer des actions predefinies par GitHub Actions dans notre pipeline tandis le run sert à executer des commandes durant des etapes qui sont beaucoup plus specifiques à notre workflow (exemple : l'installation des dépendances).
```

-   Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline.

```bash
oui et non car dans notre pipeline nous aurions très bien pu intervertir certaines étapes comme la configuration du prettier et du linter mais nous serions obligés de commencer dans tout les cas par l'installation des dépendances car les étapes ultérieur en dependent
```

-   Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ? Quelles questions devriez-vous vous poser ?

```bash
<"
Pour ajouter un test de sécurité, vous pouvez ajouter une nouvelle étape après celles existant déjà dans la pipeline avec la commande run afin que celle-ci s'exécute. Il faudra juste faire attention à installer les dépendences dont le programme à besoin.
```
