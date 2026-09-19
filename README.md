# Guide interactif TÉÉ

Site statique d’accompagnement des élèves à besoins élevés, destiné aux travailleuses et travailleurs d’établissement dans les écoles (TÉÉ).

Le guide propose une navigation interactive pour repérer une situation, choisir une boussole d’accompagnement et situer le niveau d’intervention approprié.

## Fonctionnalités

- Navigation principale et menu mobile responsive.
- Section d’orientation en trois étapes avec choix multiples.
- Résultats classés selon les correspondances avec les fiches et les boussoles.
- Dix fiches d’action sur les enjeux rencontrés par les élèves et les familles.
- Cinq boussoles d’accompagnement pour différents profils de vulnérabilité.
- Guide de navigation stratégique en quatre niveaux d’intervention.
- Aide-mémoire interactif pour la transition empathique, avec suivi de progression.
- Téléchargement des fiches PDF et de la fiche de liaison Word.
- Section documentaire « À propos » avec contenu méthodologique et entretiens.
- Formulaire de rétroaction envoyé via FormSubmit.
- Animations de révélation et prise en charge de la préférence `prefers-reduced-motion`.
- Mise en page adaptée aux écrans mobiles, tablettes et ordinateurs.

## Démarrer le projet

Le projet ne nécessite ni installation de dépendances ni compilation. Il peut être ouvert directement dans un navigateur, mais un petit serveur local est recommandé pour éviter les restrictions liées aux fichiers locaux.

## Structure du projet

```text
.
├── index.html              # Structure de la page et contenu statique
├── css/
│   ├── main.css            # Styles principaux et composants
│   ├── responsive.css      # Ajustements responsive
│   └── animations.css      # Animations et réduction des mouvements
├── js/
│   ├── main.js             # Données, rendu et interactions principales
│   ├── animations.js       # Révélations au défilement et animation du hero
│   └── form.js             # Soumission et état du formulaire de rétroaction
├── assets/
│   ├── img/                # Images et logos bitmap
│   └── svg/                # Logos et illustrations SVG
└── documents/              # PDF et document Word téléchargeables
```

## Fonctionnement technique

`index.html` fournit les sections et les points d’ancrage de la page. Les fiches, boussoles, niveaux et étapes de transition sont stockés dans l’objet `data` de `js/main.js`, puis injectés dans le DOM par les fonctions de rendu correspondantes.

Les interactions principales sont gérées sans framework :

- clics sur les choix de l’orientation;
- calcul et classement des résultats;
- ouverture des fiches et des boussoles;
- suivi des cases cochées de la transition empathique;
- ouverture et fermeture du menu mobile;
- dépliage du contenu documentaire;
- envoi du formulaire de rétroaction.

## Modifier le contenu

Pour modifier une fiche, une boussole ou un niveau d’intervention, éditer les données correspondantes dans `js/main.js`. Les fichiers téléchargés associés sont référencés dans `data.downloads`.

Pour modifier la mise en page :

- utiliser `css/main.css` pour les composants et styles généraux;
- utiliser `css/responsive.css` pour les points de rupture et les écrans plus étroits;
- utiliser `css/animations.css` pour les animations de révélation.

Les icônes des fiches utilisent Font Awesome chargé depuis un CDN dans `index.html`.

## Formulaire de rétroaction

Le formulaire utilise l’endpoint AJAX de FormSubmit défini dans l’attribut `data-endpoint` du formulaire. Pour changer le destinataire ou le service d’envoi, modifier cette configuration dans `index.html` et vérifier la configuration du fournisseur choisi.

## Accessibilité

Le projet inclut notamment :

- des libellés `aria-label`, `aria-controls` et `aria-live`;
- des états `aria-expanded`, `aria-selected` et `aria-pressed`;
- des textes alternatifs pour les images;
- des styles `:focus-visible`;
- une désactivation des animations lorsque `prefers-reduced-motion: reduce` est activé.

## Déploiement

Le dossier peut être déployé sur n’importe quel hébergement de fichiers statiques, par exemple GitHub Pages, Netlify, Vercel ou un serveur web classique. Il suffit de publier la racine du projet en conservant les chemins relatifs vers `css/`, `js/`, `assets/` et `documents/`.

## Licence

Le guide est présenté dans le site comme une ressource sous licence **CC BY-NC 4.0**. Consulter la section « Licence collaborative » de la page et la [licence Creative Commons](https://creativecommons.org/licenses/by-nc/4.0/) avant toute réutilisation ou adaptation.