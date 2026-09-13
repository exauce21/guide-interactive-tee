(function () {
  "use strict";
  var data = {
    actions: [
      {
        id: "f1",
        num: 1,
        type: "fiche",
        titre: "Traumatismes extrêmes",
        cible: "Élèves issus de zones de conflit ou de camps de réfugiés.",
        objectif:
          "Restaurer le sentiment de sécurité pour permettre la transition vers la réussite scolaire.",
        tags: [
          "detresse",
          "eleve-prim",
          "eleve-sec",
          "routine",
          "preoccupant",
          "urgent",
        ],
        resume:
          "Signes d'alerte du système nerveux, posture de sécurisation et orientation vers le counselling.",
        detecter: [
          {
            s: "L'Hypervigilance : l'élève surréagit aux bruits (cloche, cris, chaises).",
            c: "Un système nerveux en état d'alerte maximale constante.",
          },
          {
            s: "L'Anesthésie Émotionnelle : retrait total, indifférence, évitement du regard.",
            c: "Une protection nécessaire contre de nouvelles souffrances.",
          },
          {
            s: "La Méfiance Institutionnelle : perçoit l'enseignant ou la direction comme une menace potentielle.",
            c: "Des expériences passées avec des autorités violentes ou arbitraires.",
          },
          {
            s: "La Fragmentation du Futur : difficulté à s'investir dans des projets longs ou à se projeter.",
            c: "Un passé marqué par des pertes soudaines ; le futur est perçu comme instable.",
          },
        ],
        agir: [
          "Bâtir une « Base de Sécurité » : offrez une présence stable. La confiance se gagne par la régularité (accueil quotidien, rituels fixes).",
          "Valider sans Questionner : accueillez l'émotion sans forcer le récit. Ne jamais demander de détails sur le passé pour éviter la retraumatisation.",
          "Pratiquer l'Empathie Transculturelle : reconnaissez que le mutisme ou l'agitation ont une fonction de protection vitale dans son parcours.",
          "Prioriser le « Ici et Maintenant » : calmez le système nerveux en répondant aux besoins immédiats (sécurité physique, nourriture, repères spatiaux).",
        ],
        initiatives: [
          "Le « Coin Zen » : suggérer un coin calme de régulation (avec ou sans outils sensoriels) où l'élève peut se retirer volontairement s'il se sent submergé.",
          "Désamorcer le « Stress de la cloche » : sensibiliser le personnel au fait que les alarmes ou sonneries fortes peuvent être des déclencheurs de panique.",
          "Canaux d'Expression Non-Verbaux : intégrer la musique, le dessin ou le sport coopératif pour créer du lien sans les barrières d'expression.",
          "Orienter vers des services gratuits de counselling : proposer des services gratuits de counselling, à l'école ou dans la communauté, pour aider à surmonter les traumatismes vécus.",
        ],
        ressources: [
          {
            t: "Expertise Trauma",
            d: "Consortium canadien sur le trauma chez les enfants et les adolescents (CCTEA).",
            org: "CCTEA",
            portee: "national",
            url: "https://www.traumaconsortium.com/fr/",
          },
          {
            t: "Quand le thème de la guerre s'invite à l'école",
            d: "Aide-mémoire pratique pour les intervenant(e)s scolaires. Papazian-Zohrabian et Mamprin, via l'Institut universitaire SHERPA.",
            org: "SHERPA",
            portee: "national",
            url: "https://sherpa-recherche.com/wp-content/uploads/2022/03/Quand-le-theme-de-la-guerre-sinvite-a-lecole-Aide-Memoire.pdf",
          },
          {
            t: "Renforcez votre capacité à répondre efficacement aux besoins des immigrants et des réfugiés en santé mentale",
            d: "Une trousse d'outils pour fournisseurs de services d'établissement, sociaux et de santé. Centre de toxicomanie et de santé mentale (CAMH).",
            org: "CAMH",
            portee: "national",
            url: "https://www.camh.ca/fr/professionals/professionals--projects/immigrant-and-refugee-mental-health-project/toolkit",
          },
          {
            t: "Favoriser la santé mentale des élèves réfugiés de l'Alberta",
            d: "Alberta Teachers' Association (ATA).",
            org: "ATA",
            portee: "alberta",
            url: "https://teachers.ab.ca/sites/default/files/2023-06/PD-80-50f_MentalHealthofABRefugeeStudents.pdf",
          },
        ],
        citation: {
          txt: "La résilience ne naît pas de l'exposition à l'adversité, mais de la présence de relations stables, prévisibles et sécurisantes au milieu de cette adversité.",
          auteur: "Dr Bruce Perry",
          note: "Pédopsychiatre et neuroscientifique. Il a consacré sa vie à l'étude de la résilience : la capacité des individus à se reconstruire et à se développer après avoir vécu des traumatismes extrêmes. Pour le TÉÉ, être ce « tuteur de résilience » est le premier pas vers l'intégration de l'élève.",
        },
        tone: "red",
        tag: "Sécurité",
        available: true,
      },
      {
        id: "f2",
        num: 2,
        type: "fiche",
        titre: "Défis linguistiques et communicationnels",
        cible:
          "Élèves allophones ou francophones en situation d'insécurité linguistique.",
        objectif:
          "Sécuriser l'identité de l'élève pour transformer la barrière de la langue en un vecteur d'apprentissage.",
        tags: [
          "langue",
          "eleve-prim",
          "eleve-sec",
          "parent",
          "routine",
          "preoccupant",
        ],
        resume:
          "Repérer le silence de protection et outiller la communication avec l'élève et sa famille.",
        detecter: [
          {
            s: "Le « Silence de protection » : l'élève ne parle pas, semble passif ou craint le jugement sur son accent.",
            c: "Une phase d'observation intense ou une peur paralysante de l'erreur.",
          },
          {
            s: "L'Incompréhension des « Implicites » : l'élève décode les mots, mais pas les codes culturels (sarcasme, expressions idiomatiques, consignes non écrites).",
            c: "Un décalage entre la maîtrise technique et la compétence culturelle.",
          },
          {
            s: "Le Retrait des Familles : absence de réponse aux messages ou aux invitations de l'école.",
            c: "Une peur de mal interpréter l'information ou une incapacité à répondre dans la langue exigée.",
          },
          {
            s: "L'Anxiété du Futur (secondaire) : sentiment d'impuissance face à une langue (ex. : l'anglais) perçue comme un mur pour les études supérieures.",
            c: "Une érosion de l'ambition scolaire par crainte de l'échec linguistique.",
          },
        ],
        agir: [
          "Normaliser l'Insécurité Linguistique : rassurer l'élève ou le parent sur le fait que l'accent et les erreurs sont des étapes normales de son bilinguisme en devenir.",
          "Utiliser l'Oralité et le Visuel : pour les parents, privilégier les messages vocaux ou les rencontres physiques où le langage non-verbal compense les lacunes.",
          "Valoriser le répertoire linguistique de l'élève : souligner que les compétences dans la langue d'origine soutiennent le développement de la langue d'apprentissage.",
        ],
        initiatives: [
          "Trousses de Bienvenue Visuelles : utiliser des pictogrammes (icônes ou visuels représentatifs) pour les consignes de base (dîner, casier, horaires) afin d'autonomiser l'élève.",
          "Mise en place de « Tandems Linguistiques » : jumeler l'élève avec un pair « mentor » (élève établi ou bilingue) pour faciliter l'intégration et la transition linguistique.",
          "Rencontres « Parents sans barrières » : organiser des rencontres thématiques courtes où le TÉÉ ou un parent-relais assure une médiation fluide sur les sujets stressants relatifs à l'école.",
          "Séances d'apprentissage informel de la langue : organisées par les TÉÉ, ces séances favorisent l'apprentissage informel du français ou de l'anglais via des activités concrètes (cercles de conversation, clubs de lecture, etc.). Elles visent à bâtir la confiance et l'aisance nécessaires à la communication quotidienne.",
        ],
        ressources: [
          {
            t: "Astuces de communication",
            d: "Recherche sur l'oral pragmatique.",
            org: "—",
            portee: "national",
            url: "http://www.astucesdecommunication.ca/",
          },
          {
            t: "Parlerpictos",
            d: "Banque de pictogrammes élaborée et réalisée par des intervenants scolaires. Centre de suppléance à la communication orale et écrite (CSCOE-Québec).",
            org: "CSCOE",
            portee: "quebec",
            url: "https://recitas.ca/parlerpictos/",
          },
          {
            t: "Des pictogrammes pour surmonter la barrière de la langue",
            d: "Une étude de cas dans une ressource intermédiaire. Juliana Alvarez, via l'Institut universitaire SHERPA.",
            org: "SHERPA",
            portee: "national",
            url: "https://sherpa-recherche.com/wp-content/uploads/pictogrammes_surmonter_barriere_en_ligne.pdf",
          },
        ],
        citation: {
          txt: "Parler une langue, c'est assumer un monde, une culture. Celui qui a peur de parler a peur de perdre son monde.",
          auteur: "Frantz Fanon",
          note: "Psychiatre et essayiste. Ses travaux soulignent que la langue est au cœur de l'estime de soi. Pour le TÉÉ, protéger le répertoire linguistique de l'élève tout en ouvrant la porte à la nouvelle langue est la clé d'une intégration réussie.",
        },
        tone: "blue",
        tag: "Communication",
        available: true,
      },
      {
        id: "f3",
        num: 3,
        type: "fiche",
        titre: "Faible engagement parental",
        cible:
          "Parents en situation de retrait ou de détachement relationnel avec l'école.",
        objectif:
          "Transformer un sentiment de « manque d'implication » en une véritable alliance éducative.",
        tags: ["parent", "famille", "routine", "preoccupant"],
        resume:
          "Décoder le retrait parental et rebâtir l'alliance entre la famille et l'école.",
        detecter: [
          {
            s: "L'Absence de réactivité aux écrits : pas de réponse aux courriels, formulaires non signés.",
            c: "Barrière linguistique, faible littératie ou « peur de l'écrit officiel » liée au statut légal ou à des traumatismes passés.",
          },
          {
            s: "Le Désengagement « par respect » : le parent ne pose aucune question et ne conteste rien.",
            c: "Dans plusieurs cultures, l'école est l'autorité absolue ; intervenir est perçu comme une intrusion ou un manque de respect envers l'expertise de l'enseignant.",
          },
          {
            s: "La Priorité à la survie : absences aux rencontres, retards fréquents.",
            c: "Horaires de travail atypiques (quarts de nuit), précarité de logement ou fatigue migratoire extrême (manque de disponibilité mentale).",
          },
          {
            s: "La « Parentification » inversée : l'enfant devient le traducteur et le messager officiel de la famille à cause de la barrière linguistique des parents.",
            c: "Une perte du statut de décideur des parents devant l'école, brisant la hiérarchie familiale traditionnelle.",
          },
        ],
        agir: [
          "Privilégier l'Oralité : utilisez les appels téléphoniques ou les messages vocaux. C'est plus personnel, rassurant et accessible que les lettres types.",
          "Valoriser les Compétences Parentales : restaurez le sentiment de compétence du parent en le questionnant sur les forces et les réussites de l'enfant dans son pays d'origine : « Vous êtes le premier éducateur de votre enfant. Votre regard et vos partages nous sont indispensables pour mieux l'accompagner. »",
          "Décoder l'Implicite : expliquer au parent qu'à l'école, poser des questions ou donner son avis n'est pas un manque de respect, c'est le signe d'une collaboration précieuse que l'école encourage activement.",
        ],
        initiatives: [
          "Le « Café des Parents » thématique : rencontres informelles sans ordre du jour rigide pour discuter des différences entre « l'école là-bas » et « l'école ici ».",
          "Les Tutoriels Vidéo Multilingues : courtes vidéos (format téléphone) expliquant simplement comment utiliser le portail scolaire ou préparer le sac d'école.",
          "Le Jumelage « Famille à Famille » : connecter une famille établie avec une nouvelle famille pour briser l'isolement géographique et faciliter l'intégration sociale.",
          "Les Ateliers « L'école entre vos mains » : inviter les parents à manipuler physiquement le matériel scolaire et l'agenda pour comprendre concrètement les attentes pédagogiques.",
        ],
        ressources: [
          {
            t: "Commission nationale des parents francophones (CNPF)",
            d: "Site internet.",
            org: "CNPF",
            portee: "national",
            url: "https://cnpf.ca/parents-engages/",
          },
          {
            t: "Planifier la participation et l'engagement des parents",
            d: "Un guide pour les parents et les écoles. Conseil ontarien des directeurs de l'éducation (CODE).",
            org: "CODE",
            portee: "ontario",
            url: "https://cspne.ca/sites/default/files/documents/2024/guide-pour-parents-engagement-2012.pdf",
          },
          {
            t: "Collaboration école-familles immigrantes-communauté",
            d: "Quelles pratiques des acteurs concernés ? Thèse doctorale : Khaoula Boulaamane, 2022.",
            org: "Thèse",
            portee: "national",
            url: "https://corpus.ulaval.ca/server/api/core/bitstreams/463ffa08-e578-4e7d-a75e-4d57314f5712/content",
          },
        ],
        citation: {
          txt: "Il faut tout un village pour élever un enfant.",
          auteur: "Proverbe africain",
          note: "Cette sagesse universelle rappelle que la réussite de l'élève ne repose pas uniquement sur l'école, mais sur une alliance indissociable entre la famille et la communauté. Dans une perspective d'ethnopédagogie, le rôle du TÉÉ est de rebâtir ce « village » autour de l'enfant, en redonnant aux parents leur place légitime de premiers éducateurs, peu importe leur réalité.",
        },
        tone: "mint",
        tag: "Famille",
        available: true,
      },
      {
        id: "f4",
        num: 4,
        type: "fiche",
        titre: "Acceptation des observations et diagnostics",
        cible:
          "Familles manifestant de la réticence ou du déni face aux difficultés d’adaptation ou d’apprentissage de l’élève.",
        objectif:
          "Co-construire le sens des observations scolaires avec les parents pour transformer le diagnostic en un levier de réussite.",
        tags: ["parent", "famille", "preoccupant"],
        resume:
          "Co-construire le sens des observations et transformer le diagnostic en levier de réussite.",
        detecter: [
          {
            s: "Différence de perception de la « norme » : Un comportement jugé problématique par l’école (agitation, retrait) peut être valorisé comme de la « vitalité » ou de la « sage réserve » dans la culture d’origine.",
          },
          {
            s: "Stigmatisation et honneur : Le diagnostic est parfois perçu comme une « tache » indélébile sur la lignée familiale, déclenchant un déni pour sauvegarder l’honneur de la famille.",
          },
          {
            s: "Conflit de modèles éducatifs : Pour le parent, accepter le diagnostic équivaut parfois à accepter que son enfant est « défectueux » ou que leur éducation a échoué.",
          },
          {
            s: "Barrières conceptuelles : Les termes techniques (Dys, Troubles) peuvent ne pas avoir d’équivalent ou porter des connotations effrayantes (folie, malédiction) dans la langue maternelle.",
          },
        ],
        agir: [
          "Posture de Médiateur (vs Expert) : Demander aux parents : « Qu’observez-vous de différent entre l’école et la maison ? » pour faire émerger leur propre constat plutôt que d’imposer le vôtre.",
          "Valorisation préalable des forces : Consacrer systématiquement la première moitié des échanges aux réussites de l’enfant pour sécuriser le lien avant d’aborder les défis.",
          "Médiation culturelle active : Expliquer l’intention bienveillante de l’école derrière le jargon technique en utilisant des métaphores culturelles adaptées à leur réalité.",
          "Le diagnostic comme « Levier d’aide » : Expliquer que le « papier » officiel est une clé d’accès à des ressources gratuites (tutorat, matériel, aide financière) auxquelles ils ont droit.",
        ],
        initiatives: [
          "Période d’observation partagée : Inviter le parent à observer une activité précise pour qu’il constate les défis de l’enfant dans un cadre social, sans discours théorique.",
          "Lexique des Besoins personnalisé : Utiliser des termes imagés lors des rencontres (ex. : remplacer « Hyperactivité » par « Besoin de bouger pour se concentrer »), ce qui est moins menaçant.",
          "Faciliter un « Témoignage de Pair » : Suggérer une rencontre avec un parent-relais de la même communauté qui a déjà franchi cette étape et peut en témoigner positivement.",
        ],
        ressources: [
          {
            t: "Les troubles du développement d’une culture à l’autre",
            d: "Société canadienne de pédiatrie (CPS).",
            url: "https://enfantsneocanadiens.ca/mental-health/developmental-disability",
          },
          {
            t: "Référentiel des interventions pour soutenir les élèves à besoins particuliers",
            d: "Commission scolaire de la Seigneurie-des-Mille-Îles (CSSMI).",
            url: "https://www.carrefourfga.com/SMC/documents/REFERENTIEL-TROUSSE/ReferentielInterventionsElevesBesoinsParticuliersV2.pdf",
          },
          {
            t: "Les normes en matière d’adaptation scolaire",
            d: "Alberta Learning. Direction de l’éducation française.",
            url: "https://open.alberta.ca/publications/0778537781-french/resource/c4a8b6db-6423-4c15-9638-b8fce138eb1e",
          },
          {
            t: "Comment parler aux parents quand un enfant a besoin de soutien supplémentaire",
            d: "Childminding Monitoring, Advisory and Support (CMAS).",
            url: "https://cmascanada.ca/wp-content/uploads/2019/04/HOW%20TO%20TALK%20TO%20%20PARENTS%20WHEN%20A%20CHILD%20NEEDS%20EXTRA%20SUPPORT_FR.pdf",
          },
          {
            t: "Institut des troubles d’apprentissage",
            d: "Site internet.",
            url: "https://www.institutta.com/",
          },
        ],
        citation: {
          txt: "Poser un diagnostic, ce n’est pas mettre un enfant dans une boîte, c’est identifier les outils dont il a besoin pour que l’on puisse, ensemble, construire son succès.",
          auteur: "Dr Gilles Julien",
          note: "Pédiatre social et clinicien canadien. Sa philosophie repose sur l’idée que chaque enfant a des droits fondamentaux à la réussite et que l’observation clinique est le levier qui permet de mobiliser les ressources (école, famille, communauté) autour de ses besoins spécifiques. Le TÉÉ agit comme un facilitateur qui ouvre la porte à l’équité des chances.",
        },
        tone: "gold",
        tag: "Médiation",
        available: true,
      },
      {
        id: "f5",
        num: 5,
        type: "fiche",
        titre: "Barrières financières",
        cible:
          "Élèves et familles vivant une situation de précarité économique.",
        objectif:
          "Déstigmatiser l'accès aux ressources pour assurer l'équité des chances et réduire le stress lié aux besoins de subsistance.",
        tags: [
          "materiel",
          "famille",
          "eleve-prim",
          "eleve-sec",
          "routine",
          "preoccupant",
        ],
        resume:
          "Repérer la précarité sans exposer la famille, et normaliser l'accès aux ressources.",
        detecter: [
          {
            s: "Le retrait des activités payantes : l'élève « oublie » systématiquement de faire signer le coupon de sortie ou prétend ne pas vouloir y aller.",
            c: "Une stratégie d'évitement pour ne pas exposer la détresse financière des parents.",
          },
          {
            s: "Boîte à dîner peu garnie ou absence de collations.",
            c: "Une insécurité alimentaire ou un climat de stress financier étouffant à la maison.",
          },
          {
            s: "Vêtements inadaptés : absence de vêtements chauds en hiver ou chaussures trop petites ou usées.",
            c: "Une difficulté à suivre le rythme des saisons ou de la croissance de l'enfant dans un nouveau climat.",
          },
          {
            s: "Refus de l'aide et isolement : agressivité ou repli face aux offres de soutien.",
            c: "Une peur de la « perte de face » (stigmatisation) très forte dans certaines cultures.",
          },
        ],
        agir: [
          "La Normalisation : présenter l'aide comme une ressource scolaire standard : « Ici, l'école a des stocks de réserve pour tout le monde. »",
          "La Confidentialité Absolue : ne jamais remettre de matériel ou de nourriture devant les autres élèves.",
          "Valoriser la Dignité : expliquer que ces ressources sont des droits liés à la scolarisation au Canada, et non une faveur personnelle.",
        ],
        initiatives: [
          "Le « Magasin Gratuit » de classe : espace en libre-service présenté comme une initiative écologique de partage plutôt que sociale.",
          "La « Boîte à Collation Communautaire » : panier de fruits ou barres tendres accessible à tous sans justification.",
          "Le « Fonds de Solidarité Sorties » : option de « don volontaire » de 1 $ lors des sorties pour couvrir anonymement les frais des familles en difficulté.",
          "La Friperie Scolaire Durable : échange de vêtements (habits de neige) présenté sous l'angle du développement durable.",
          "Le « Sac à dos de Bienvenue » : offert systématiquement à chaque nouvel élève immigrant comme cadeau d'accueil.",
        ],
        ressources: [
          {
            t: "Matériel scolaire",
            d: "Start2Finish (The backpack program), United Way (Tools for School), Staples Canada (Adopt-a-School) et (Class Registry), etc.",
            org: "Divers",
            portee: "national",
            url: "https://www.start2finishonline.org/backpack-program",
          },
          {
            t: "Sécurité alimentaire",
            d: "Club des petits déjeuners, Enfants FORTSmidables, Après la cloche, etc.",
            org: "Divers",
            portee: "national",
            url: "https://www.clubdejeuner.org/coin-des-ecoles/demande-de-soutien",
          },
          {
            t: "Services et prestations",
            d: "Orienteur en mesures d'aide financière (Benefits Wayfinder).",
            org: "Benefits Wayfinder",
            portee: "national",
            url: "https://benefitswayfinder.org/fr",
          },
        ],
        citation: {
          txt: "La pauvreté n'est pas un manque de caractère, c'est un manque d'argent.",
          auteur: "Rutger Bregman",
          note: "Historien et auteur. Cette citation rappelle que les barrières financières ne définissent ni l'élève ni son talent. Le rôle du TÉÉ est de s'assurer que le manque de moyens ne devienne jamais un manque d'opportunités.",
        },
        tone: "red",
        tag: "Équité",
        available: true,
      },
      {
        id: "f6",
        num: 6,
        type: "fiche",
        titre: "Faible capital scolaire parental",
        cible:
          "Parents ayant une scolarité limitée ou des difficultés de littératie.",
        objectif:
          "Agir comme un vulgarisateur stratégique pour restaurer la confiance des parents et leur capacité à soutenir le parcours scolaire de leur enfant.",
        tags: ["parent", "langue", "famille", "routine"],
        resume:
          "Rendre les codes scolaires accessibles sans infantiliser les parents.",
        detecter: [
          {
            s: "La dépendance absolue au TÉÉ : Les parents ne font aucune démarche sans votre présence.",
            c: "Une peur paralysante de commettre une erreur irréparable par méconnaissance des codes.",
          },
          {
            s: "L’évitement des documents écrits : Les formulaires ou l’agenda reviennent non signés.",
            c: "Une stratégie de protection pour ne pas exposer ses propres lacunes devant l’enfant ou l’enseignant.",
          },
          {
            s: "La difficulté à se repérer dans le temps scolaire : Confusion entre les dates, les types de rencontres ou les cycles.",
            c: "Un système trop éloigné de leur propre vécu qui rend l’organisation scolaire abstraite et anxiogène.",
          },
          {
            s: "Le sentiment d’incompétence : Les parents s’excluent eux-mêmes des discussions pédagogiques.",
            c: "La croyance qu’ils n’ont « rien d’intelligent à dire » face aux experts de l’école.",
          },
        ],
        agir: [
          "Privilégier la Littératie Visuelle : Remplacez les longs textes par des schémas, des codes couleurs ou des icônes pour expliquer les étapes d’une démarche.",
          "Pratiquer la « Démonstration par l’Exemple » : Ne faites pas à la place du parent. Faites avec lui une fois, puis laissez-le faire la deuxième étape sous votre supervision bienveillante.",
          "Valoriser les Savoirs Non-Académiques : Rappelez aux parents qu’ils transmettent des valeurs et des savoirs de vie essentiels. Cela réduit leur complexe d’infériorité.",
          "Simplifier sans infantiliser : Utilisez un langage clair, direct et sans jargon, tout en traitant le parent comme un partenaire adulte égal.",
        ],
        initiatives: [
          "Création de « Formulaires Simplifiés » : Suggérer à l’école d’utiliser des versions allégées (plus de cases à cocher, moins de rédaction) pour les communications de base.",
          "Ateliers de « Décodage du Bulletin » : Organiser une rencontre où le TÉÉ explique visuellement (émoticônes, couleurs) la signification des résultats au-delà des codes.",
          "Utilisation de « Tutoriels Audio/Vidéo » : Proposer à l’enseignant d’enregistrer les consignes importantes par message vocal ou courte vidéo.",
          "Favoriser les « Rencontres par l’Action » : Inviter les parents pour des tâches concrètes (aide à la collation, jardinage, partage d’un conte oral) pour créer un lien positif sans pression intellectuelle.",
        ],
        ressources: [
          {
            t: "ABC Alpha pour la vie",
            d: "Outils d’alphabétisation des apprenants et apprenantes adultes pour développer diverses compétences : littératie numérique, financière, en mathématiques, au travail, et autres.",
            url: "https://abcalphapourlavie.ca/litteratie/",
          },
          {
            t: "Informations traduites",
            d: "Settlement.Org propose des informations dans plus de 30 langues.",
            url: "https://settlement.org/translated-information",
          },
          {
            t: "Global Storybooks",
            d: "Ressource gratuite d’alphabétisation multilingue.",
            url: "https://globalstorybooks.net/",
          },
        ],
        citation: {
          txt: "Ce n’est pas parce qu’on ne sait pas lire un livre qu’on ne sait pas lire la vie.",
          auteur: "Sagesse populaire",
          note: "Cette citation souligne que l’intelligence et la sagesse d’un parent ne se limitent pas à sa scolarité. Le TÉÉ aide à valider le « savoir de vie » des parents afin de reprendre leur place de guides et de modèles pour leurs enfants.",
        },
        tone: "blue",
        tag: "Littératie",
        available: true,
      },
      {
        id: "f7",
        num: 7,
        type: "fiche",
        titre: "Configurations familiales vulnérables",
        cible:
          "Élèves dont l'équilibre familial est fragilisé (familles monoparentales, séparations, dynamiques complexes ou instabilité du foyer).",
        objectif:
          "Faire de l'école une « base de sécurité » immuable pour l'élève tout en soutenant la résilience du système familial.",
        tags: [
          "famille",
          "detresse",
          "eleve-prim",
          "eleve-sec",
          "preoccupant",
          "urgent",
        ],
        resume:
          "Stabiliser l'élève quand le foyer vacille, et savoir quand passer le relais.",
        detecter: [
          {
            s: "L'Hypervigilance ou le Retrait : l'élève est en état d'alerte (sursaute aux bruits) ou s'efface totalement.",
            c: "Un climat familial imprévisible où l'enfant s'épuise à décoder les émotions des adultes au détriment de ses apprentissages.",
          },
          {
            s: "La « Parentification » manifeste : l'élève agit comme un « mini-adulte » (gère les documents, s'occupe des cadets).",
            c: "Une charge mentale disproportionnée qui l'empêche d'investir pleinement son rôle d'enfant et d'élève.",
          },
          {
            s: "L'Absence de réseau de proximité : aucun contact d'urgence local (oncle, ami, voisin).",
            c: "Un isolement social profond où chaque imprévu devient une crise insurmontable pour la famille.",
          },
        ],
        agir: [
          "Cartographier les Alliés : identifiez les forces réelles. Qui est la personne de confiance pour le parent ? Aidez l'école à cibler le bon interlocuteur pour ne pas surcharger un parent déjà fragile.",
          "Renforcer la Prévisibilité du Cadre : si le foyer est instable, l'école doit être un point fixe. Des rituels d'accueil peuvent réduire l'anxiété de l'élève.",
          "Valoriser la Figure Parentale : restaurez l'image du parent aux yeux de l'élève en soulignant ses forces (ex. : le courage d'avoir immigré). Cela stabilise l'identité de l'enfant.",
          "Assurer le Relais Sécuritaire : dès que la situation dépasse la médiation simple (ex. : risque d'expulsion, conflit de garde sévère, soupçon de maltraitance ou de négligence), collaborez avec la direction pour valider les limites de l'intervention et assurer le passage de relais vers les services sociaux spécialisés.",
        ],
        initiatives: [
          "Aménager un « Coin Zen » : suggérer un coin de régulation (calme, outils sensoriels) où l'élève peut s'isoler s'il se sent submergé par le stress accumulé au foyer.",
          "Le projet « Récits de courage » : initier une activité valorisant le parcours de vie comme une épopée. Transformer la vulnérabilité familiale en une fierté identitaire partagée.",
          "Le « Jumelage de sécurité » : mettre en lien la famille isolée avec une « famille marraine » déjà établie dans la communauté pour créer un réseau d'entraide de proximité.",
        ],
        ressources: [
          {
            t: "Guide sur les arrangements parentaux après la séparation ou le divorce",
            d: "Comment penser à votre enfant d'abord. Ministère de la Justice du Canada.",
            org: "Justice Canada",
            portee: "national",
            url: "https://www.justice.gc.ca/fra/df-fl/parent/fdp-mp/tdm-toc.html",
          },
          {
            t: "Parce que la vie continue",
            d: "Aider les enfants et les adolescents à vivre la séparation et le divorce. Agence de la santé publique du Canada.",
            org: "ASPC",
            portee: "national",
            url: "https://www.canada.ca/fr/sante-publique/services/publications/vie-saine/parce-que-la-vie-continue-aider-enfants-adolescents-vivre-separation-divorce.html",
          },
          {
            t: "Families change",
            d: "Gérer le changement, renforcer la résilience. Justice Education Society of British Columbia (JES).",
            org: "JES",
            portee: "cb",
            url: "https://familieschange.ca/fr",
          },
          {
            t: "TAO Tel-Aide",
            d: "Ligne d'écoute empathique.",
            org: "TAO",
            portee: "national",
            url: "https://telaideoutaouais.ca/territoires-desservis/",
          },
        ],
        citation: {
          txt: "Pour un enfant, la sécurité ne vient pas de l'absence de problèmes, mais de la présence d'adultes fiables qui ne le laissent pas seul avec ses tempêtes.",
          auteur: "Dr Gabor Maté",
          note: "Célèbre médecin et auteur canadien, spécialisé dans les traumatismes et le développement de l'enfant. Cette perspective rappelle que face à l'instabilité familiale, l'école devient le port d'attache. Le rôle du TÉÉ est de veiller à ce que l'élève ne porte pas seul le poids du foyer.",
        },
        tone: "mint",
        tag: "Résilience",
        available: true,
      },
      {
        id: "f8",
        num: 8,
        type: "fiche",
        titre: "Barrières géographiques",
        cible:
          "Élèves et familles vivant loin de l’école ou dans des régions où les services en français sont limités.",
        objectif:
          "Réduire la « distance » (physique et administrative) pour garantir à l’élève un accès aux ressources identiques à celui du milieu urbain.",
        tags: ["materiel", "famille", "administratif", "routine"],
        resume:
          "Réduire les distances physiques, numériques et administratives qui limitent l’accès aux services.",
        detecter: [
          {
            s: "La fatigue cognitive liée aux transports : L’élève passe un temps disproportionné dans les bus scolaires (parfois 2 h+ par jour).",
            c: "Une baisse de concentration ou une irritabilité liée à la fatigue physique du trajet du bus scolaire.",
          },
          {
            s: "L’exclusion sociale « par la distance » : L’élève ne participe jamais aux activités parascolaires ou sportives.",
            c: "Une dépendance totale aux horaires fixes du transport scolaire.",
          },
          {
            s: "Le renoncement face au « double désert » des services : On ne consulte qu’en cas de crise aiguë ou d’urgence absolue.",
            c: "Épuisement face à l’absence de professionnels capables de les servir localement.",
          },
          {
            s: "Le TÉÉ comme « seul pont » francophone : Le TÉÉ est poussé à agir hors de son rôle par manque de spécialistes locaux.",
            c: "Une lacune systémique où le TÉÉ est perçu comme la seule ressource francophone « tout-en-un » disponible en région.",
          },
        ],
        agir: [
          "Objectif « Zéro Barrière Numérique » : S’assurer que la famille maîtrise les outils de visio pour ne pas manquer les suivis, et vérifiez leur confort numérique et leur accès à Internet.",
          "Réseautage externe : Identifier des partenaires francophones hors région (via le virtuel) pour les interventions spécialisées.",
          "Affirmer son rôle de Médiateur (vs Clinicien) : Rappeler que le TÉÉ est là pour créer des ponts, et non pour remplacer les spécialistes absents.",
          "Partenariats stratégiques : Éviter l’isolement institutionnel (« silos ») en favorisant la collaboration interservices francophones, tout en élargissant les partenariats stratégiques avec les services anglophones dans la région.",
        ],
        initiatives: [
          "Instaurer les « Rencontres Hybrides par défaut » : Proposer que toute rencontre offre systématiquement une option par téléphone ou vidéo pour favoriser la participation des parents éloignés.",
          "Promouvoir l’organisation de « Journées de Services Itinérants » : Inspirées de l’exemple des cliniques mobiles, ces journées visent à optimiser les déplacements afin de répondre aux besoins dispersés de manière efficace et coordonnée sans multiplier les trajets.",
          "Favoriser le « Réseautage de Proximité » : Identifier d’autres familles immigrantes dans le même secteur géographique pour encourager le réseautage, brisant ainsi l’isolement social.",
        ],
        ressources: [
          {
            t: "211.ca",
            d: "Trouvez les programmes et services offerts dans votre communauté.",
            url: "https://211.ca/fr/#find",
          },
          {
            t: "Les 13 Réseaux en immigration francophone (RIF) au Canada",
            d: "Réseaux régionaux de concertation et de mobilisation.",
            url: "https://immigrationfrancophone.ca/fr/rif/",
          },
          {
            t: "Les réseaux de santé en français du Canada",
            d: "Composé de la Société Santé en français (SSF) et des 16 réseaux régionaux, provinciaux et territoriaux.",
            url: "https://www.santefrancais.ca/",
          },
        ],
        citation: {
          txt: "La distance géographique ne doit jamais devenir une distance de droits.",
          auteur: "Amélie Mazé",
          note: "Spécialiste en politiques publiques et changement social. Cette perspective rappelle que le code postal d’un élève ne doit jamais déterminer son plafond de réussite. Le rôle du TÉÉ est de s’assurer que les barrières de la distance ne privent pas l’élève des opportunités auxquelles il a droit.",
        },
        tone: "gold",
        tag: "Accès",
        available: true,
      },
      {
        id: "f9",
        num: 9,
        type: "fiche",
        titre: "Références culturelles",
        cible:
          "Élèves et familles dont les repères culturels divergent des normes de l’école canadienne.",
        objectif:
          "Harmoniser les référents culturels pour lever les malentendus et favoriser une intégration respectueuse de l’identité d’origine.",
        tags: ["parent", "famille", "preoccupant"],
        resume:
          "Harmoniser les référents culturels et lever les malentendus entre la famille et l’école.",
        detecter: [
          {
            s: "Rapport à l’autorité et au silence : L’élève évite le regard de l’enseignant ou ne pose jamais de questions.",
            c: "L’application stricte des codes de politesse d’origine où regarder un aîné dans les yeux est un signe de défi.",
          },
          {
            s: "Gestion du temps et de l’implicite : Retards fréquents ou non-utilisation de l’agenda scolaire.",
            c: "Une méconnaissance des codes de ponctualité rigide ou de planification à long terme propres au système occidental.",
          },
          {
            s: "Négociation de l’espace privé/public : La famille refuse de discuter de santé ou d’émotions avec l’école.",
            c: "Une conviction profonde que les enjeux personnels doivent rester strictement dans le cercle familial.",
          },
        ],
        agir: [
          "Normaliser les différences de codes : Expliquer à l’équipe-école qu’un élève « trop sage » ou « fuyant » utilise peut-être simplement un signe de respect dans sa culture d’origine.",
          "Pratiquer la « Médiation de sens » : Expliquer aux familles le « pourquoi » des attentes canadiennes (ex. : l’agenda sert à l’autonomie, pas seulement à la surveillance).",
          "Valider les Fonds de Connaissances : Reconnaître que les savoirs familiaux (artisanat, contes, valeurs) sont des atouts académiques réels.",
          "Sécuriser l’Espace de Parole : Rassurer les parents sur la confidentialité et expliquer le rôle d’aide (et non de jugement) du personnel de soutien.",
        ],
        initiatives: [
          "Le jumelage de « Parents-Ambassadeurs » : Mettre en lien la nouvelle famille avec une famille établie de la même culture pour expliquer les « codes implicites » de l’école.",
          "Ateliers « L’École de mon pays vs L’École d’ici » : Utiliser des supports visuels pour comparer les méthodes d’apprentissage et lever les malentendus par le dialogue.",
          "Création de « Lexiques Culturels » pour le personnel : Diffuser des fiches simples expliquant les gestes ou expressions qui peuvent porter à confusion (ex. : la signification du « Oui »).",
          "Valorisation des savoir-faire : Inviter les parents à présenter un savoir-faire dans des activités pédagogiques pour valider leur identité.",
        ],
        ressources: [
          {
            t: "Voir grand ensemble",
            d: "Guide de dialogue sur la diversité culturelle, à l’intention des élèves du secondaire, de leurs parents et du personnel enseignant. Association canadienne d’éducation de langue française (ACELF).",
            url: "https://acelf.ca/wp-content/uploads/2021/05/Guide_VoirGrand-Ensemble.pdf",
          },
          {
            t: "Guide sur l’inclusion des personnes issues de la diversité culturelle dans les communautés francophones et acadiennes du Canada",
            d: "Fédération des communautés francophones et acadienne (FCFA) du Canada.",
            url: "https://vivreahawkesbury.ca/wp-content/uploads/2021/05/Guide_sur_inclusion_diversite_culturelle_FCFA.pdf",
          },
          {
            t: "Fils conducteurs en éducation inclusive : No 10 - Élèves immigrants et réfugiés",
            d: "Alberta Teachers’ Association (ATA).",
            url: "https://legacy.teachers.ab.ca/SiteCollectionDocuments/ATA/Publications/Professional-Development/Common%20Threads/PD-170-9F%20No10_CT%20-%20Immigrant%20and%20Refugees.pdf",
          },
        ],
        citation: {
          txt: "La culture n’est pas un bagage que l’on dépose à la frontière ; c’est la lentille à travers laquelle on regarde le monde.",
          auteur: "Amin Maalouf",
          note: "Écrivain et académicien. Cette pensée rappelle que l’intégration réussie ne demande pas d’effacer ses racines, mais d’apprendre à naviguer entre deux mondes. Le rôle du TÉÉ est de s’assurer que cette lentille culturelle ne devienne pas un obstacle, mais une richesse partagée au sein de l’école.",
        },
        tone: "red",
        tag: "Interculturalité",
        available: true,
      },
      {
        id: "f10",
        num: 10,
        type: "fiche",
        titre: "Vulnérabilité du statut légal",
        cible:
          "Élèves et familles dont l'instabilité du statut d'immigration génère un stress chronique et limite l'accès aux services.",
        objectif:
          "Garantir le droit à l'éducation et l'accès aux services essentiels en protégeant la confidentialité et la sécurité des familles.",
        tags: ["administratif", "famille", "parent", "preoccupant", "urgent"],
        resume:
          "Sécuriser les familles au statut précaire et affirmer le droit inconditionnel à l'école.",
        detecter: [
          {
            s: "Stress de déportation ou d'incertitude : anxiété aiguë lors de discussions sur l'avenir ou peur irrationnelle des services gouvernementaux.",
            c: "Une peur constante d'une rupture brutale du parcours de vie ou d'une arrestation des parents.",
          },
          {
            s: "Instabilité résidentielle : changements fréquents de logement (sous-location, hébergements d'urgence), retards ou déménagements subits.",
            c: "Une précarité économique extrême et l'absence de bail à leur nom pour protéger leur domicile.",
          },
          {
            s: "Non-recours aux aides sociales : des parents qui refusent l'aide scolaire ou des paniers alimentaires par peur que cela « nuise à leur dossier ».",
            c: "La crainte que solliciter de l'aide impacte leur processus d'immigration ou soit perçu comme un fardeau pour l'État.",
          },
        ],
        agir: [
          "Affirmer le Droit Universel : rappeler que selon la Charte canadienne des droits et libertés, l'accès à l'éducation est un droit fondamental pour chaque enfant présent sur le territoire, indépendamment de son statut.",
          "Garantir l'Anonymat : rassurer les parents que le dossier scolaire de l'enfant est confidentiel et qu'il n'existe aucun partage de données avec les services de l'immigration.",
          "Orienter vers des services universels : l'exemple des cliniques communautaires ou le Programme fédéral de santé intérimaire (PFSI) pour les soins dentaires ou visuels essentiels.",
          "Démystifier les Conséquences : expliquer que l'aide (banques alimentaires, aide scolaire) n'a aucun impact sur les démarches d'immigration.",
        ],
        initiatives: [
          "Promouvoir l'École comme « Zone de Sécurité » : afficher l'adhésion de l'établissement aux principes de « Cité Sanctuaire » (Access Without Fear).",
          "Soutien à la Littératie Juridique : organiser des séances d'information simplifiées avec des partenaires spécialisés sur les droits des migrants au Canada.",
          "Faciliter l'accès au PFSI : accompagner les parents demandeurs d'asile dans l'utilisation de leur couverture fédérale pour les besoins de santé de l'élève.",
        ],
        ressources: [
          {
            t: "Politiques « Accès sans peur » (Access Without Fear)",
            d: "Plusieurs municipalités telles que Toronto, Vancouver et Edmonton, considérées comme « villes sanctuaires », garantissent à chaque résident l'accès à des services municipaux, peu importe sa situation migratoire.",
            org: "Municipalités",
            portee: "national",
            url: "https://ccrweb.ca/fr/webinaire/acces-sans-peur",
          },
          {
            t: "Trouver des services pour les réfugiés au Canada",
            d: "Site web de l'IRCC.",
            org: "IRCC",
            portee: "national",
            url: "https://www.canada.ca/fr/immigration-refugies-citoyennete/services/refugies/aide-partir-canada.html",
          },
          {
            t: "Justice pas-à-pas (Steps to Justice)",
            d: "Bien que basée en Ontario, cette plateforme est un modèle de référence en matière de littératie juridique utilisé à travers le Canada. Community Legal Education Ontario (CLEO).",
            org: "CLEO",
            portee: "ontario",
            url: "https://stepstojustice.ca/fr/",
          },
        ],
        citation: {
          txt: "Le droit à l'éducation est un droit humain fondamental. Il ne dépend pas de l'endroit où l'on est né, ni du statut d'immigration de ses parents.",
          auteur: "L'Honorable Ratna Omidvar",
          note: "Sénatrice canadienne et experte en matière de migration et d'inclusion. Pour le TÉÉ, cette citation est le socle de son intervention : devant la porte de l'école, chaque enfant est d'abord un élève.",
        },
        tone: "blue",
        tag: "Droits",
        available: true,
      },
    ],
    compasses: [
      {
        id: "b1",
        type: "boussole",
        titre: "Adolescents du secondaire",
        sousTitre: "Prévention de la marginalisation et des dérives",
        tags: ["decrochage", "eleve-sec", "preoccupant", "urgent"],
        resume:
          "Signes de basculement, mentorat et postures de communication qui ne rompent pas le lien.",
        colA: {
          titre: "Signes de rupture ou de basculement",
          items: [
            "Désaffiliation systémique : absentéisme croissant et rupture relationnelle avec l'institution scolaire et le cadre familial.",
            "Signes d'autonomie financière suspecte : apparition soudaine de vêtements de luxe, de gadgets coûteux ou d'argent liquide sans corrélation avec les moyens familiaux.",
            "Adoption de codes d'une sous-culture : changement de jargon, de gestuelle ou de style vestimentaire pour s'identifier à une culture de rue perçue comme protectrice.",
            "Modification du cercle social : abandon des amis habituels au profit de nouvelles affiliations externes marquées par un déséquilibre relationnel.",
          ],
        },
        colB: {
          titre: "La voie de passage",
          items: [
            "Le Mentorat « Miroir » : connecter le jeune avec un adulte (étudiant, professionnel) issu de sa communauté qui a réussi. Ce modèle possède une crédibilité que l'institution n'a pas aux yeux du jeune.",
            "Médiation par les pairs : confier au jeune leader une responsabilité officielle de médiateur auprès des plus jeunes. Valoriser son influence naturelle de manière constructive le responsabilise.",
            "Tandems de Raccrochage : jumeler l'élève avec un pair « ancre » (ami stable) pour des projets multimédias ou sportifs afin de recréer un sentiment d'appartenance à l'école.",
            "Les Espaces de Dialogue Sécurisés : faciliter des groupes de parole où les jeunes stabilisés partagent les réalités et les risques de la rue. Le TÉÉ n'est ici qu'un facilitateur de l'entraide entre pairs.",
          ],
        },
        eviter:
          "Le ton moralisateur, les critiques directes sur ses fréquentations (qui renforcent sa loyauté envers le groupe) ou les menaces de sanctions systématiques.",
        privilegier: [
          {
            t: "L'appel au leadership",
            p: "Tu as une force pour rassembler les gens. Comment veux-tu utiliser ce pouvoir ici ?",
          },
          {
            t: "La transparence et l'inquiétude",
            p: "Je m'inquiète, car je vois que tu t'éloignes de tes propres buts. On a un mentor qui a vécu ça, tu devrais lui parler.",
          },
          {
            t: "Le défi de la loyauté",
            p: "Un vrai leader aide les siens à s'élever, il ne les suit pas dans le mur.",
          },
        ],
        ressources: [
          {
            t: "Passeport pour ma réussite Canada (Pathways to Education Canada)",
            d: "Offrant des ressources et un réseau de soutien aux jeunes de communautés défavorisées pour favoriser l'obtention du diplôme d'études secondaires et établir les fondements de leur réussite future.",
            org: "Pathways",
            portee: "national",
            url: "https://www.passeportpourmareussite.ca/",
          },
          {
            t: "L'Expérience Nationale - Katimavik",
            d: "Offrant aux jeunes de 17 à 25 ans un cadre de vie structuré, entièrement financé, qui renforce leur estime de soi et leur sentiment d'appartenance par l'engagement communautaire concret.",
            org: "Katimavik",
            portee: "national",
            url: "https://katimavik.org/programme-jeunesse/experience-nationale/",
          },
          {
            t: "Jeunesse, J'écoute",
            d: "Service de santé mentale en ligne disponible 24/7 au Canada, offrant un soutien gratuit, multilingue et confidentiel pour aider les jeunes à libérer leurs émotions.",
            org: "Jeunesse, J'écoute",
            portee: "national",
            url: "https://jeunessejecoute.ca/",
          },
          {
            t: "Programme de Parentalité Positive (Triple P)",
            d: "Conçu pour aider les parents à prévenir et traiter les problèmes comportementaux et émotionnels chez les enfants et les adolescents.",
            org: "Triple P",
            portee: "national",
            url: "https://www.triplep-parentalite.ca/",
          },
        ],
        citation: {
          txt: "Le jeune ne suit pas un règlement, il suit une personne en qui il a confiance.",
          auteur: "Dr Benoît Hammarrenger",
          note: "Neuropsychologue canadien dont la pédagogie repose sur la présence et l'affection. Pour le TÉÉ, l'enjeu est de rester l'adulte significatif : celui qui ne lâche pas le fil, ce dernier rempart avant l'isolement total.",
        },
        tone: "red",
        available: true,
      },
      {
        id: "b2",
        type: "boussole",
        titre: "Jeunes filles du secondaire",
        sousTitre:
          "Interculturalité, enjeux de genre et prévention des risques d’exploitation",
        tags: ["eleve-sec", "famille", "preoccupant", "urgent"],
        resume:
          "Repérer les contraintes invisibles, renforcer le pouvoir d’agir et prévenir l’exploitation.",
        colA: {
          titre: "Signes de vulnérabilité",
          items: [
            "Le « Plafond de verre » culturel : Limitation des ambitions scolaires ou refus des carrières non traditionnelles (sciences, arts). Ce que cela peut cacher : La perception que l’avenir est déjà tracé par les attentes familiales.",
            "La fatigue domestique invisible : Retards fréquents ou devoirs non faits. Ce que cela peut cacher : Une charge de travail domestique (cuisine, ménage, garde des cadets) rarement imposée aux garçons.",
            "Signaux d’une emprise : Apparition d’un deuxième téléphone, cadeaux inexpliqués, absentéisme sélectif le vendredi. Ce que cela peut cacher : Une manipulation psychologique utilisant la précarité ou la rigidité familiale comme levier d’emprise.",
          ],
        },
        colB: {
          titre: "La voie de passage",
          items: [
            "Cercles de parole : Créer des lieux de discussion réservés aux filles pour parler de leurs réalités sans jugement, pour renforcer leur estime de soi et briser l’emprise.",
            "Mentorat et Modèles de Réussite : Connecter les filles avec des femmes de leur communauté travaillant dans les carrières STEM pour briser les stéréotypes.",
            "Médiation Parents-Filles : Organiser des ateliers sur l’acculturation pour outiller les parents à passer de la surveillance stricte à une vigilance bienveillante.",
            "Prévention de l’exploitation : Intervenir sur les mécanismes de manipulation psychologique en impliquant les services de santé et les intervenants communautaires.",
          ],
        },
        eviter:
          "Le ton moralisateur ou critique des traditions familiales (risque de rupture de confiance).",
        privilegier: [
          {
            t: "La validation du potentiel",
            p: "Tu as des capacités incroyables, ton avenir est plein de possibilités ici au Canada.",
          },
          {
            t: "La vigilance bienveillante",
            p: "Je remarque que tu sembles préoccupée. Je suis là si tu te sens sous pression, peu importe la raison.",
          },
          {
            t: "L’éducation au consentement",
            p: "Personne n’a le droit d’utiliser ton besoin d’affection pour t’imposer des choix.",
          },
        ],
        ressources: [
          {
            t: "Trousse d’outils sur le mentorat de groupe pour filles",
            d: "Pour créer un programme de mentorat de groupe pour filles au sein de votre communauté. Fondation canadienne des femmes.",
            url: "https://canadianwomen.org/wp-content/uploads/2024/12/trousse-d-outils-sur-le-mentorat-de-groupe-pour-filles.pdf",
          },
          {
            t: "Filles et médias",
            d: "Littératie numérique, éducation aux médias. HabiloMédias.",
            url: "https://habilomedias.ca/litteratie-numerique-education-aux-medias/enjeux-des-medias/representations-des-sexes/les-femmes-et-les-filles/filles-et-medias",
          },
          {
            t: "Cyberaide.ca",
            d: "La centrale canadienne de signalement des cas d’exploitation et d’abus sexuels d’enfants sur Internet. Centre canadien de protection de l’enfance (CCPE).",
            url: "https://cyberaide.ca/fr/",
          },
          {
            t: "Prévenir la violence sexuelle auprès des adolescent·e·s",
            d: "Initiatives pour prévenir la cyberviolence sexuelle, la violence sexuelle et l’exploitation sexuelle chez les adolescent·e·s. Marie-Vincent.",
            url: "https://marie-vincent.org/prevenir/ados-12-17-ans/",
          },
        ],
        citation: {
          txt: "Je crois en ce que je fais, et je crois que cela doit être fait.",
          auteur: "Fatima al-Fihriya",
          note: "Femme musulmane du 9e siècle qui a utilisé son héritage pour fonder l’Université Al-Qarawiyyin, reconnue comme la plus ancienne du monde. Sa détermination prouve que l’éducation est l’héritage le plus durable qu’une femme puisse bâtir. Pour le TÉÉ, l’enjeu est de rappeler à chaque jeune fille qu’elle est, elle aussi, une architecte de son propre avenir.",
        },
        tone: "gold",
        available: true,
      },
      {
        id: "b3",
        type: "boussole",
        titre: "Vulnérabilité linguistique",
        sousTitre:
          "Insécurité linguistique, allophonie et barrières de communication",
        tags: ["langue", "eleve-prim", "eleve-sec", "routine", "preoccupant"],
        resume:
          "Comprendre le mutisme et l'autocensure, et redonner de la fierté au répertoire linguistique.",
        colA: {
          titre: "Signes de vulnérabilité",
          items: [
            "Le mutisme sélectif ou « l'effacement » : l'élève ne prend jamais la parole en classe, par peur du jugement sur son accent ou sa syntaxe. Ce que cela peut cacher : une anxiété de performance qui paralyse la participation, même si l'élève maîtrise le sujet.",
            "La fragmentation sociale : regroupement par « clans linguistiques » dans la cour de récréation. Ce que cela peut cacher : un besoin de sécurité émotionnelle face à un code dominant (français standardisé ou anglais) perçu comme excluant.",
            "L'autocensure : refus de participer à des activités de leadership, de théâtre ou de présentation orale. Ce que cela peut cacher : la crainte d'être ridiculisé et de voir son identité réduite à ses « erreurs » de langue.",
            "Décrochage psychologique et aliénation : sentiment d'incompétence généralisée. Ce que cela peut cacher : l'élève sent qu'il doit « blanchir » son identité ou gommer sa langue d'origine pour être accepté comme un « vrai » francophone.",
          ],
        },
        colB: {
          titre: "La voie de passage",
          items: [
            "Pédagogie de l'Éveil aux Langues : inverser le rapport de force en invitant l'élève (allophone ou francophone) à enseigner quelques mots de sa langue maternelle à la classe.",
            "Cercles de Parole sur l'Identité : déconstruire l'idée du « bon français » unique pour valoriser la communication et la diversité des parlers francophones.",
            "Jumelage Linguistique : transformer l'apprentissage de la langue en une pratique sociale régulière qui réduit l'anxiété et brise l'isolement.",
            "Francisation par l'Action : favoriser le sport ou les arts où l'action prime sur le mot. Cela permet de vivre en français sans la pression constante de la performance linguistique.",
          ],
        },
        eviter:
          "Corriger systématiquement chaque faute (cela renforce le mutisme) ou exiger une « diction parfaite » d'emblée.",
        privilegier: [
          {
            t: "La validation du message",
            p: "Je comprends très bien ce que tu dis, et c'est une excellente idée.",
          },
          {
            t: "La fierté du bilinguisme",
            p: "C'est une force incroyable de maîtriser plusieurs langues. Le français est un outil de plus dans ton coffre.",
          },
          {
            t: "Le droit à l'erreur",
            p: "L'important est de se faire comprendre. La précision viendra avec la pratique.",
          },
        ],
        ressources: [
          {
            t: "Éveil aux langues",
            d: "Liens utiles pour la mise en place d'activités d'éveil aux langues. Éveil au langage et ouverture à la diversité linguistique (ÉLODiL).",
            org: "ÉLODiL",
            portee: "national",
            url: "https://elodil.openum.ca/liens-utiles/eveil-aux-langues/",
          },
          {
            t: "Insécurité linguistique : nos jeunes ne sont pas malades !",
            d: "Phyllis Dalley, Ph. D., via l'ACELF.",
            org: "ACELF",
            portee: "national",
            url: "https://acelf.ca/francophonie/confiante/insecurite-linguistique-nos-jeunes-ne-sont-pas-malades/",
          },
          {
            t: "Mon accent, ton problème - Insécurité linguistique",
            d: "Démystifier les mythes et les réalités en lien avec la Loi sur les langues officielles, les accents et l'insécurité linguistique en contexte minoritaire. Office des télécommunications éducatives de langue française de l'Ontario (TFO).",
            org: "TFO",
            portee: "ontario",
            url: "https://www.idello.org/01627059/mon-accent-ton-probleme-insecurite-linguistique",
          },
        ],
        citation: {
          txt: "Nos langues sont nos histoires, et nos histoires sont nos vies. Sans elles, nous n'avons plus de fondations.",
          auteur: "Maria Campbell",
          note: "Écrivaine, dramaturge et cinéaste métisse canadienne. Cette pensée transforme l'apprentissage linguistique : ce n'est plus une menace pour l'identité d'origine, mais une expansion de soi. Le rôle du TÉÉ est de rassurer l'élève : parler français ne signifie pas trahir qui il est, mais ajouter une nouvelle dimension à sa force intérieure.",
        },
        tone: "blue",
        available: true,
      },
      {
        id: "b4",
        type: "boussole",
        titre: "Groupes racialisés et minorités",
        sousTitre:
          "Inclusion ethnique, diversité religieuse et lutte contre les biais systémiques",
        tags: ["eleve-prim", "eleve-sec", "famille", "preoccupant"],
        resume:
          "Reconnaître les biais, prévenir l’invisibilisation et sécuriser l’identité de l’élève.",
        colA: {
          titre: "Manifestations de la marginalisation et des biais",
          items: [
            "Le « Sur-aiguillage » : Tendance statistique à diriger plus souvent les élèves racisés vers l’adaptation scolaire ou des parcours moins exigeants. Ce que cela peut cacher : Une perception erronée des capacités basée sur des biais inconscients ou des barrières mal interprétées.",
            "Les Micro-agressions : Commentaires répétés sur l’origine, les cheveux, l’odeur de la nourriture ou les pratiques religieuses. Ce que cela peut cacher : Un sentiment pour l’élève d’être un « invité permanent » ou un étranger, plutôt qu’un membre à part entière de l’école.",
            "Le désengagement par « invisibilité » : Retrait protecteur de l’élève. Ce que cela peut cacher : Un manque de représentation dans le personnel ou les manuels ; l’élève ne se voit nulle part, donc il ne s’investit plus.",
          ],
        },
        colB: {
          titre: "La voie de passage",
          items: [
            "Pédagogie de l’Équité : Soutenir l’intégration des perspectives racisées et religieuses directement dans le curriculum (ex. : figures historiques noires, arabes ou asiatiques francophones).",
            "Cercles de Mentorat et Représentation : S’assurer que les élèves voient des leaders racisés au sein de l’école. Encourager les comités de justice sociale menés par les élèves.",
            "Normalisation des Mesures d’Adaptation : Faciliter les besoins religieux (espaces de calme, options alimentaires, calendriers de fêtes) pour que la foi ne soit plus un facteur d’exclusion.",
            "Sensibiliser sur les biais inconscients : Collaborer avec l’équipe-école pour reconnaître les perceptions implicites qui influencent parfois le jugement ou l’évaluation.",
          ],
        },
        eviter:
          "L’approche daltonienne : « Ici, on ne voit pas les couleurs, on est tous pareils. » (Nier la couleur, c’est nier l’expérience de discrimination réelle de l’élève.)",
        privilegier: [
          {
            t: "La validation de l’identité",
            p: "Je respecte ton parcours et je suis là pour m’assurer que tu as les mêmes chances que n’importe qui d’autre ici.",
          },
          {
            t: "La sécurisation face aux micro-agressions",
            p: "J’ai entendu ce commentaire déplacé. Sache que ce genre de propos n’a pas sa place ici et que je vais m’en occuper.",
          },
          {
            t: "L’ouverture religieuse",
            p: "Comment l’école peut-elle respecter ton calendrier de fêtes pour que tu ne sois pas pénalisé dans ton cheminement ?",
          },
        ],
        ressources: [
          {
            t: "Guides pratiques contre le racisme",
            d: "Fondation canadienne des relations raciales / Canadian Race Relations Foundation (CRRF).",
            url: "https://crrf-fcrr.ca/fr/guides-contre-racisme/",
          },
          {
            t: "Guide d’accompagnement pour une pédagogie inclusive auprès des étudiant·es issu·es de l’immigration",
            d: "Institut de recherche sur l’immigration et sur les pratiques interculturelles et inclusives (IRIPII).",
            url: "https://iripi.ca/public/uploads/2024/03/SL_BN_Guide-accompagnement-Pedagogie-Inclusive.pdf",
          },
          {
            t: "Tenir compte de la diversité religieuse dans les écoles du Manitoba",
            d: "Un guide pour les éducatrices et les éducateurs. Ministère de l’Éducation et de la Formation du Manitoba.",
            url: "https://www.edu.gov.mb.ca/m12/frpub/appui/diversite_religieuse/index.html",
          },
        ],
        citation: {
          txt: "Personne ne naît en haïssant une autre personne à cause de la couleur de sa peau, de ses origines ou de sa religion. On apprend à haïr, et si l’on peut apprendre à haïr, on peut aussi apprendre à aimer.",
          auteur: "Nelson Mandela",
          note: "Militant anti-apartheid et ancien président de l’Afrique du Sud. Cette pensée rappelle que l’école est le lieu par excellence où l’on déconstruit les préjugés pour bâtir la fraternité. Le rôle du TÉÉ est d’être l’artisan de ce dialogue.",
        },
        tone: "mint",
        available: true,
      },
      {
        id: "b5",
        type: "boussole",
        titre: "Élèves en situation de handicap",
        sousTitre:
          "Besoins particuliers, retards de diagnostic et accès aux soins spécialisés",
        tags: ["eleve-prim", "eleve-sec", "famille", "preoccupant"],
        resume:
          "Naviguer les services, reconnaître l’épuisement des proches et soutenir un projet d’inclusion.",
        colA: {
          titre: "Signes de vulnérabilité spécifiques",
          items: [
            "Le « Retard de Diagnostic » : L’élève présente des besoins évidents, mais son dossier est vide. Ce que cela peut cacher : Un diagnostic du pays d’origine non reconnu ou des listes d’attente au Canada dépassant 2 ans.",
            "L’Épuisement de l’Aidant (Caregiver Burnout) : Parents arrivant en retard, manquant de sommeil ou semblant totalement dépassés. Ce que cela peut cacher : La charge mentale de naviguer seuls dans un système de santé complexe en plus de leur propre processus d’établissement.",
            "Le Renoncement aux soins par peur : Une famille qui semble « cacher » le handicap de l’enfant ou refuse les évaluations. Ce que cela peut cacher : Une crainte fréquente liée à la clause de « fardeau excessif » de la loi sur l’immigration (peur que cela nuise à la résidence permanente).",
            "Isolement sensoriel ou moteur : L’élève reste en marge des activités physiques ou de groupe. Ce que cela peut cacher : Un équipement adapté trop coûteux ou non couvert par les assurances.",
          ],
        },
        colB: {
          titre: "La voie de passage",
          items: [
            "Le « Navigateur de services » : Accompagner les parents dans le labyrinthe administratif (remplir les demandes de Prestation pour enfants handicapés par exemple).",
            "Banques d’équipement en prêt : Suggérer à l’école de faciliter le prêt de matériel appartenant à l’école (tablettes, outils sensoriels) pendant que la famille attend ses propres subventions ou équipements.",
            "Privilégier des Rencontres pluridisciplinaires : À travers de telles rencontres, l’école garantira aux parents des messages cohérents et complémentaires sur les besoins de leur enfant, leur permettant d’agir avec plus de clarté et de confiance.",
            "Surmonter les tabous culturels : Organiser des rencontres entre parents d’enfants handicapés issus de l’immigration pour déstigmatiser le handicap et briser l’isolement.",
          ],
        },
        eviter:
          "Le jargon médical froid : « Votre enfant présente un trouble neurodéveloppemental sévère. » (C’est effrayant et peu parlant pour un parent stressé.) L’insistance bureaucratique : « Sans le document du médecin, on ne peut rien faire. » (Cela ferme la porte à l’aide immédiate.)",
        privilegier: [
          {
            t: "L’approche par le besoin",
            p: "L’école observe que votre enfant a besoin de bouger pour rester attentif. Voici ce que nous allons mettre en place pour l’aider dès demain.",
          },
          {
            t: "La sécurisation légale",
            p: "Saviez-vous que les lois ont changé ? Le handicap de votre enfant n’est plus un obstacle pour votre dossier de résidence permanente au Canada.",
          },
          {
            t: "La reconnaissance du parent",
            p: "Vous faites un travail immense pour votre enfant. L’école en est vraiment consciente.",
          },
        ],
        ressources: [
          {
            t: "Le pouvoir des mots et des images",
            d: "Guide pour une meilleure communication avec les personnes en situation de handicap, et à leur sujet. Emploi et Développement social Canada (EDSC).",
            url: "https://www.canada.ca/fr/emploi-developpement-social/programmes/invalidite/cra/mots-images.html",
          },
          {
            t: "Promouvoir la relation école-famille",
            d: "Le PEI et au-delà. Module de formation. TA@l’école, Learning Disabilities Association of Ontario (LDAO).",
            url: "https://www.taalecole.ca/learning-modules/promouvoir-la-relation-ecole-famille/",
          },
          {
            t: "AIDE Canada",
            d: "Réseau d’échange de connaissances sur l’autisme et la déficience intellectuelle / Autism and Intellectual Disability Knowledge Exchange Network.",
            url: "https://aidecanada.ca/fr/%C3%A0-propos/a-propos-daide-canada",
          },
        ],
        citation: {
          txt: "Le handicap ne devrait jamais être une condamnation à l’isolement, mais un appel à la solidarité.",
          auteur: "Helen Keller",
          note: "Auteure et activiste sourde-aveugle mondiale. Pour le TÉÉ, l’enjeu est de transformer le handicap d’un « problème médical » en un « projet d’inclusion ». Votre rôle est d’être le pont qui permet à l’élève de traverser les barrières du diagnostic pour atteindre sa propre réussite.",
        },
        tone: "red",
        available: true,
      },
    ],
    observations: [
      {
        id: "o1",
        category: "Comportement et sécurité",
        doc: "f1",
        label: "L’élève surréagit aux bruits (cloche, cris, chaises).",
      },
      {
        id: "o2",
        category: "Comportement et sécurité",
        doc: "f1",
        label: "Retrait total, indifférence ou évitement du regard.",
      },
      {
        id: "o3",
        category: "Communication et école",
        doc: "f2",
        label:
          "L’élève ne parle pas, semble passif ou craint le jugement sur son accent.",
      },
      {
        id: "o4",
        category: "Communication et école",
        doc: "f2",
        label:
          "L’élève décode les mots, mais pas les codes culturels ou les consignes implicites.",
      },
      {
        id: "o5",
        category: "Famille et alliance",
        doc: "f3",
        label: "Pas de réponse aux courriels ou formulaires non signés.",
      },
      {
        id: "o6",
        category: "Famille et alliance",
        doc: "f3",
        label: "Absences aux rencontres ou retards fréquents des parents.",
      },
      {
        id: "o7",
        category: "Famille et alliance",
        doc: "f4",
        label:
          "Un comportement jugé problématique par l’école est perçu autrement par la famille.",
      },
      {
        id: "o8",
        category: "Famille et alliance",
        doc: "f4",
        label:
          "Le diagnostic est perçu comme une stigmatisation ou une atteinte à l’honneur familial.",
      },
      {
        id: "o9",
        category: "Ressources et quotidien",
        doc: "f5",
        label: "L’élève évite systématiquement les activités payantes.",
      },
      {
        id: "o10",
        category: "Ressources et quotidien",
        doc: "f5",
        label: "Boîte à dîner peu garnie ou absence de collations.",
      },
      {
        id: "o11",
        category: "Communication et école",
        doc: "f6",
        label: "Les parents ne font aucune démarche sans la présence du TÉÉ.",
      },
      {
        id: "o12",
        category: "Communication et école",
        doc: "f6",
        label: "Les formulaires ou l’agenda reviennent non signés.",
      },
      {
        id: "o13",
        category: "Famille et alliance",
        doc: "f7",
        label:
          "L’élève est en état d’alerte ou s’efface totalement lorsque le foyer est instable.",
      },
      {
        id: "o14",
        category: "Famille et alliance",
        doc: "f7",
        label:
          "L’élève agit comme un mini-adulte et assume des responsabilités familiales.",
      },
      {
        id: "o15",
        category: "Accès et territoire",
        doc: "f8",
        label:
          "L’élève passe un temps disproportionné dans les transports scolaires.",
      },
      {
        id: "o16",
        category: "Accès et territoire",
        doc: "f8",
        label:
          "L’élève ne participe jamais aux activités parascolaires ou sportives en raison de la distance.",
      },
      {
        id: "o17",
        category: "Communication et école",
        doc: "f9",
        label:
          "L’élève évite le regard de l’enseignant ou ne pose jamais de questions.",
      },
      {
        id: "o18",
        category: "Communication et école",
        doc: "f9",
        label: "Retards fréquents ou non-utilisation de l’agenda scolaire.",
      },
      {
        id: "o19",
        category: "Accès et statut",
        doc: "f10",
        label:
          "Anxiété aiguë lors de discussions sur l’avenir ou peur des services gouvernementaux.",
      },
      {
        id: "o20",
        category: "Accès et statut",
        doc: "f10",
        label:
          "Changements fréquents de logement, retards ou déménagements subits.",
      },
    ],
    niveaux: [
      {
        n: 1,
        titre: "Accueil et stabilisation",
        couleur: "vert",
        nature: [
          "Information : méconnaissance des codes scolaires, confusion sur les horaires, le calendrier ou le transport.",
          "Sociale : sentiment d'isolement.",
          "Matérielle : manque de vêtements, nourriture ou fournitures scolaires.",
          "Linguistique : insécurité linguistique, allophonie, etc.",
        ],
        eleves: [
          "Facilitation : accueillir et faciliter la connexion.",
          "Orientation : fournir les ressources immédiates, les contacts utiles et expliquer les routines.",
        ],
        ecole: [
          "Facilitation : informer l'équipe pédagogique sur le contexte familial et faciliter les échanges entre l'école et la famille.",
        ],
        limites: [
          "Le TÉÉ ne peut pas résoudre des problèmes structurels (logement, emploi, etc.).",
          "Ne pas faire à la place du parent pour ne pas créer de dépendance.",
        ],
      },
      {
        n: 2,
        titre: "Médiation et interculturalité",
        couleur: "mango",
        nature: [
          "Scolaire : opposition aux normes scolaires.",
          "Relationnelle : malentendus ou conflits culturels.",
        ],
        eleves: [
          "Médiation interculturelle : créer des ponts de communication.",
          "Expliquer les normes scolaires et clarifier les attentes de chaque partie.",
        ],
        ecole: [
          "Médiation interculturelle : sensibiliser le personnel scolaire aux enjeux interculturels pour permettre la création d'environnements éducatifs inclusifs et sécurisants.",
        ],
        limites: [
          "Écoute neutre : ne pas prendre parti, mais rechercher des compromis.",
          "Le TÉÉ ne peut pas décider des aménagements.",
        ],
      },
      {
        n: 3,
        titre: "Vulnérabilité et prévention",
        couleur: "orange",
        nature: [
          "Psychologique : trauma, dépression, addiction, etc.",
          "Légale : statut précaire (demandeurs d'asile).",
          "Socio-économique : logement précaire.",
          "Familiale : parentification de l'enfant, refus d'acceptation du handicap ou d'un diagnostic.",
        ],
        eleves: [
          "Plaideur et sentinelle : entretien approfondi.",
          "Détecter les signes de détresse.",
          "Aider à la navigation dans le système.",
          "Mettre en avant les droits de l'enfant.",
        ],
        ecole: [
          "Signalement préventif : alerter l'équipe éducative sur des signes de détresse.",
          "Réunions régulières de suivi avec la direction.",
        ],
        limites: [
          "Le TÉÉ ne peut pas diagnostiquer.",
          "Pour les services relatifs à l'école : référer aux spécialistes (travailleur social de l'école, psychologue scolaire, etc.) à travers la direction de l'école.",
          "En dehors de l'école : référer aux services communautaires. Légal : clinique juridique communautaire. Santé : clinique ou centres de santé communautaire, etc.",
        ],
      },
      {
        n: 4,
        titre: "Crise et protection",
        couleur: "rouge",
        nature: [
          "Sécurité : délinquance, recrutement par des gangs, risque d'exploitation, etc.",
          "Protection : suspicion de violence domestique, maltraitance ou négligence grave.",
          "Légale : avis d'expulsion (déportation) imminent de la famille.",
        ],
        eleves: [
          "Évaluer le danger et noter les observations : prendre des mesures immédiates en concertation avec sa hiérarchie.",
        ],
        ecole: ["Coordination renforcée avec l'équipe pédagogique."],
        limites: [
          "Le TÉÉ ne peut pas enquêter.",
          "Vérifier les lois en vigueur.",
          "Maltraitance : signalement obligatoire immédiat à l'agence de protection de la jeunesse ou aux services à l'enfance.",
          "Crime ou sécurité : direction, Crime Stoppers, 911.",
          "Itinérance : centre d'hébergement d'urgence, 211.",
        ],
      },
    ],
    handoff: {
      objectif: "Transférer la confiance, pas seulement le dossier.",
      principes: [
        {
          t: "L'approche de « transition empathique »",
          d: "Ne donnez pas juste un numéro. Privilégiez, dans la mesure du possible, une rencontre en personne pour présenter l'élève ou le parent au professionnel, pour ne pas briser la chaîne de confiance.",
        },
        {
          t: "La confidentialité partagée",
          d: "Informez l'élève ou le parent : « Je vais parler de ta situation à [nom du professionnel] pour qu'on t'aide mieux, est-ce que tu es d'accord ? »",
        },
        {
          t: "La fiche de liaison et de référence",
          d: "Préparez un résumé factuel (signes observés, actions déjà faites par le TÉÉ, besoins identifiés) pour éviter que la famille n'ait à raconter son trauma plusieurs fois.",
        },
      ],
      etapes: [
        {
          phase: "Avant",
          sousTitre: "Préparer le terrain",
          couleur: "vert",
          items: [
            "Nommer l'allié : présenter le spécialiste par sa mission (ex. : « l'expert des solutions ») plutôt que par son titre (ex. : « le travailleur social »).",
            "Sécuriser le lieu : si possible, organiser la rencontre dans votre bureau ou un espace familier à l'élève ou au parent.",
            "Valider le consentement : expliquer clairement pourquoi vous passez le relais (limite de compétence) pour éviter le sentiment de rejet.",
          ],
        },
        {
          phase: "Pendant",
          sousTitre: "La triangulation",
          couleur: "bleu",
          items: [
            "Posturer physiquement : s'asseoir aux côtés du parent ou de l'élève (faire bloc ensemble) et non face à lui avec le spécialiste.",
            "Traduire l'implicite : si vous sentez un malaise non verbal, intervenez doucement : « Je pense que Mme X se demande si cela va affecter son dossier. Est-ce qu'on peut la rassurer ? »",
            "Le retrait graduel : ne partez pas tout de suite. Restez 10 à 15 minutes, puis retirez-vous : « Je vous laisse faire connaissance, je repasse vous voir à la fin. »",
          ],
        },
        {
          phase: "Après",
          sousTitre: "Boucler la boucle",
          couleur: "rouge",
          items: [
            "Le débriefing « rassurance » : revoir la famille seule juste après. « Comment vous êtes-vous senti ? Est-ce que les explications étaient claires ? »",
            "Maintenir le fil : rappeler que vous restez le pivot : « Je ne disparais pas, je reste votre contact principal à l'école. »",
            "La transition, pas l'abandon : le parent doit sentir qu'il gagne un allié de plus, et non qu'il perde son TÉÉ.",
          ],
        },
      ],
    },
    about: {
      projectContext:
        "Ce travail s’inscrit dans le cadre des travaux de la table de concertation du Réseau National TÉÉ, composée de la coordination nationale et des coordinations régionales de l’initiative TÉÉ, visant à l’identification et au traitement des enjeux d’envergure nationale relatifs au secteur TÉÉ.",
      acknowledgmentsIntro: [
        "Nous tenons à exprimer notre profonde gratitude à l'ensemble des collaboratrices et collaborateurs, dont la contribution précieuse à travers les entretiens a grandement enrichi la compréhension de l’enjeu de l’accompagnement des élèves à besoins élevés.",
        "Les noms sont classés par ordre alphabétique, sans hiérarchie ni distinction, afin de respecter l’égale valeur de leur contribution. Leur engagement et leur collaboration ont grandement facilité la réalisation de ce travail, et nous leur adressons nos sincères remerciements.",
      ],
      coordinatorsIntro:
        "Nous remercions également chaleureusement les coordinations régionales de l’initiative TÉÉ, pour leur soutien, leur mobilisation et leur contribution dans cette démarche.",
      participants: [
        "Alex Moreno - TÉÉ pour Le Conseil Scolaire Francophone de la Colombie-Britannique",
        "Christel Funken - TÉÉ pour La Commission Scolaire Francophone du Yukon",
        "Doris Immanuel - TÉÉ pour Le Conseil Scolaire Francophone de la Colombie-Britannique",
        "Jaber Najim - TÉÉ pour Le District Scolaire Francophone Sud du Nouveau-Brunswick",
        "Jidiri Ndagije - TÉÉ pour La Francophonie Canadienne Plurielle",
        "Jocelina Dibanzilua - TÉÉ pour La Division Scolaire Franco-Manitobaine",
        "Leila Bouchenafa - TÉÉ pour Le Conseil Scolaire Acadien Provincial de la Nouvelle-Écosse",
        "Maria Munoz - TÉÉ pour Le Conseil Scolaire Francophone de la Colombie-Britannique",
        "Mathilde Pilaert - TÉÉ pour La Francophonie Canadienne Plurielle",
        "Melaine Ndjatou - TÉÉ pour Le Service d'Accueil et d'Inclusion Francophone en Saskatchewan",
        "Mélanie Bélanger - TÉÉ pour Le Conseil Scolaire Francophone de la Colombie-Britannique",
        "Omar Nour - TÉÉ pour Le District Scolaire Francophone Sud du Nouveau-Brunswick",
        "Rim El Baze - TÉÉ pour Conseil Scolaire Francophone Provincial de Terre-Neuve-et-Labrador",
        "Sandrine Coissieux – Responsable des services aux résidents permanents pour La Coopérative d'Intégration Francophone de l'Île-du-Prince-Édouard",
        "Saran Toure - TÉÉ pour La Francophonie Canadienne Plurielle",
        "Tina Kaloa - TÉÉ pour Le Conseil Scolaire FrancoSud",
        "Verno Nyembo - TÉÉ pour Le Service d'Accueil et d'Inclusion Francophone en Saskatchewan",
      ],
      coordinators: [
        "Amira Khedri : Directrice de la coordination atlantique de l’initiative TÉÉ - District Scolaire Francophone Sud du Nouveau-Brunswick.",
        "Gaëlle Birolini : Agente et intervenante famille aux services TÉÉ - Conseil Scolaire Francophone de la Colombie-Britannique.",
        "Lynda Kahlouche : Coordonnatrice régionale de l’initiative TÉÉ région Est - District Scolaire Francophone Sud du Nouveau-Brunswick.",
        "Maxime Barbier : Gestionnaire des Services TÉÉ - Conseil Scolaire Francophone de la Colombie-Britannique.",
        "Sabelle Gueye : Directrice du programme TÉÉ des Prairies et des Territoires du Nord (PTN) et Services aux écoles - Francophonie Canadienne Plurielle.",
      ],
      introduction: [
        { type: "h2", text: "Introduction" },
        {
          type: "paragraph",
          text: "Financé par Immigration, Réfugiés et Citoyenneté Canada (IRCC), le programme des travailleuses et travailleurs d’établissement dans les écoles (TÉÉ) vise à soutenir l’intégration des élèves nouvellement arrivés et de leurs familles au sein du système scolaire et de la communauté. L’initiative TÉÉ est l’équivalent de l’initiative SWIS (Settlement Workers in Schools) pour les élèves d’expression française et leur famille. Les intervenant.e.s TÉÉ jouent un rôle essentiel dans l’accompagnement des élèves nouvellement arrivés et de leurs familles, en facilitant leur intégration dans le système scolaire et la communauté, tout en favorisant l’inclusion et la compétence interculturelle au sein du système éducatif. Ces professionnels dévoués soutiennent ces élèves dans leur parcours éducatif en leur proposant un accompagnement personnalisé, des activités sociales et culturelles, ainsi que des ressources adaptées pour faciliter leur adaptation à leur nouvel environnement. En travaillant en étroite collaboration avec les parents, le personnel scolaire et la communauté, les TÉÉ contribuent à créer un climat inclusif, où chaque élève peut développer un sentiment d’appartenance, réussir ses études et s’épanouir pleinement dans sa nouvelle vie au Canada.",
        },
        {
          type: "paragraph",
          text: "Dans un contexte où la diversité et la complexité des profils s’accroissent, les élèves nouvellement arrivés rencontrent souvent des défis importants, liés à des parcours de vie complexes, des obstacles socio-économiques, linguistiques ou culturels, ainsi qu’à des difficultés d’adaptation, ce qui entrave leur réussite scolaire et leur intégration. Ces réalités représentent un enjeu majeur pour les TÉÉ, dont la formation spécifique, les limites de leur champ d’intervention et des considérations juridiques et professionnelles restent souvent insuffisamment développées, ce qui complique leur capacité à intervenir efficacement auprès de ces élèves. Conscients de cette difficulté, ce guide a été conçu comme un outil d’accompagnement structuré, visant à outiller les TÉÉ, à leur fournir des repères clairs et opérationnels, afin de faciliter leur intervention et leur permettre de mieux répondre à ces enjeux spécifiques. Ce travail s’inscrit dans le cadre des travaux de la table de concertation du Réseau National TÉÉ, visant à l’identification et au traitement des enjeux d’envergure nationale relatifs au secteur TÉÉ.",
        },
        {
          type: "paragraph",
          text: "Dans cette optique, notre démarche méthodologique avait pour objectif d’approfondir la compréhension des enjeux spécifiques rencontrés par les TÉÉ. Elle s’est principalement appuyée sur la collecte de données qualitatives par le biais d’entretiens semi-directifs, conçus pour explorer en profondeur les perceptions, les expériences et les défis liés à cette problématique. Un échantillonnage stratifié a été mis en place afin d’assurer une représentativité tant sectorielle que géographique à l’échelle nationale. Les données recueillies ont été analysées selon une approche rigoureuse, par une méthode d’analyse thématique, permettant d’identifier les thèmes et les tendances pertinentes. L’ensemble de cette démarche est détaillé dans l’Annexe [1].",
        },
      ],
      analysis: [
        {
          type: "h2",
          text: "État des lieux des enjeux relatifs aux élèves à besoins élevés : Analyse exploratoire des problématiques repérées et pistes de réflexion.",
        },
        {
          type: "h3",
          text: "Identification et typologie des besoins élevés des élèves",
        },
        {
          type: "paragraph",
          text: "L’analyse des entretiens semi-directifs menés auprès des TÉÉ a permis de dégager une compréhension nuancée et riche de la manière dont ces professionnels perçoivent et identifient les besoins élevés des élèves. Les TÉÉ rapportent que l’identification de ces besoins élevés n’est pas toujours évidente, notamment en raison de la diversité des profils et des parcours des élèves. Beaucoup soulignent que ces besoins dépassent largement les interventions classiques, ce qui entraîne une surcharge et une nécessité d’interventions qui dépassent parfois leur champ de responsabilité, comme l’illustre le témoignage du TÉÉ Bakary qui indique : « Il existe une description des tâches que je dois accomplir en tant que TÉÉ et une certaine limite jusqu’où je peux aller dans l’accomplissement de mon travail »",
        },
        {
          type: "paragraph",
          text: "La difficulté réside également dans la perception de ces besoins par les TÉÉ, qui peuvent manquer d’outils ou de formations pour les repérer précisément. De ce fait, les TÉÉ se retrouvent parfois à intervenir dans des contextes où leur rôle dépasse leurs responsabilités initiales, ce qui pose la question de la définition claire de leurs missions et de leur champ d’action, et qui demande une vigilance accrue, ainsi qu’un cadre précis pour garantir une intervention adaptée et efficace.",
        },
        {
          type: "paragraph",
          text: "Concernant la typologie et la diversité de ces besoins, les témoignages mettent en évidence plusieurs catégories principales, notamment celles des :",
        },
        {
          type: "list",
          text: "Traumatismes liés à des expériences de vie extrêmes : La présence d’élèves ayant vécu dans des camps de réfugiés ou dans des zones de conflit constitue une réalité fréquemment rencontrée par les TÉÉ. Ces traumatismes, souvent non visibles, ont des effets durables sur leur comportement, leur concentration, leur confiance en eux et leur capacité à s’intégrer dans le cadre scolaire.",
        },
        {
          type: "list",
          text: "De plus, beaucoup de ces élèves ont vécu des ruptures scolaires prolongées, ce qui leur a causé d’importants retards académiques ce qui complique leur intégration et leur réussite scolaire. À leur arrivée au Canada, ils sont fréquemment placés dans des classes en fonction de leur âge plutôt que de leur niveau académique, comme le témoigne le TÉÉ Lamine : « Des fois, on a des élèves qui sont au secondaire, qui n'ont jamais étudié de leur vie. Ils ne sont jamais allés à l'école auparavant », illustrant la complexité accrue des besoins de ces élèves, et des limites du programme TÉÉ, qui ne parvient pas systématiquement à répondre de manière adéquate à la diversité des trajectoires et aux exigences particulières de cette population vulnérable.",
        },
        {
          type: "list",
          text: "Défis linguistiques et communicationnels : Pour les TÉÉ, ces enjeux constituent une barrière majeure à la qualité et à l’efficacité de leurs interventions. Ces défis concernent principalement les élèves allophones, dont la maîtrise limitée du français ou de l’anglais entrave la compréhension mutuelle, compliquant ainsi l’évaluation de leurs besoins et la mise en place d’un accompagnement adapté.",
        },
        {
          type: "list",
          text: "Ces obstacles affectent également la communication avec leurs familles, souvent confrontées à des problématiques linguistiques similaires, ce qui limite leur implication dans ce processus.",
        },
        {
          type: "list",
          text: "Par ailleurs, certains élèves francophones nouvellement arrivés, notamment au secondaire, rencontrent des difficultés similaires avec l’anglais, langue devenue incontournable pour accéder aux études supérieures et au marché du travail au Canada.",
        },
        {
          type: "list",
          text: "Faible engagement parental : L’intégration et la réussite scolaire de l’élève nouvellement arrivé se trouve souvent entravée par une faible implication parentale.",
        },
        {
          type: "list",
          text: "Ces difficultés se traduisent fréquemment par une faible réactivité aux communications du TÉÉ ou de l’école, un suivi insuffisant des activités éducatives, ou encore un manque de participation aux rencontres et aux démarches éducatives. Pour les TÉÉ, ces obstacles ont un impact significatif en termes de charge et de complexité organisationnelle, ce qui limite l’efficacité de l’accompagnement mis en place.",
        },
        {
          type: "list",
          text: "Résistance à l’acceptation des diagnostics ou des observations pédagogiques : L’acceptation des diagnostics ou des observations pédagogiques représente un défi récurrent dans la pratique des TÉÉ, particulièrement dans un contexte interculturel où les différences de perception, de croyances et d’expérience du système éducatif peuvent compliquer cette démarche, comme le souligne le témoignage de la TÉÉ Clémence qui explique : « Quelquefois, les familles sont un peu méfiantes, comme : “pourquoi est-ce que tu vas envoyer mon enfant chez le médecin, mon enfant n'a pas de problème, il n'a pas de trouble” ». Cette résistance, souvent accompagnée de méfiance ou parfois de déni, complexifie considérablement la tâche des TÉÉ, dont la difficulté à faire face à ces obstacles peut augmenter la charge émotionnelle, rendre plus ardues l’accompagnement et le suivi de ces élèves, et ainsi impacter directement leur réussite et leur intégration scolaire et sociale.",
        },
        {
          type: "list",
          text: "Besoins fondamentaux liés à l’habillement, à l’alimentation ou à l’hygiène : Il est fréquent que certains élèves nouvellement arrivés soient confrontés à des situations de vulnérabilité, et que certains de leurs besoins fondamentaux ne soient pas toujours satisfaits. Par exemple, le besoin d’habillement adapté aux conditions climatiques rigoureuses de l’hiver canadien peut ne pas être comblé. De même, le besoin d’une alimentation régulière et équilibrée peut ne pas être assuré, et des signes de négligence corporelle peuvent être observés. Ces besoins fondamentaux, indispensables à la stabilité et à la réussite scolaire de l’élève, représentent un défi constant dans la pratique professionnelle des TÉÉ.",
        },
        {
          type: "h3",
          text: "Les facteurs individuels, intersectionnels et contextuels : Éléments fondamentaux dans l’analyse des trajectoires et des parcours des élèves à besoins élevés",
        },
        {
          type: "paragraph",
          text: "L’analyse des enjeux liés aux élèves à besoins élevés nécessite d’appréhender la diversité des facteurs qui façonnent leurs trajectoires. Les dimensions individuelles, intersectionnelles et contextuelles constituent des éléments fondamentaux permettant d’éclairer la complexité de leurs parcours et d’identifier les leviers d’action pertinents adaptés aux spécificités et à la diversité des expériences de ces élèves.",
        },
        {
          type: "paragraph",
          text: "Les principaux facteurs ayant émergé de cette analyse peuvent être résumés dans les catégories suivantes :",
        },
        {
          type: "list",
          text: "Vécu et parcours migratoires difficiles : Les TÉÉ sont souvent confrontés à la complexité du vécu des élèves nouvellement arrivés, notamment ceux dont le parcours migratoire a été marqué par la guerre, la vie en camp de réfugiés ou des ruptures familiales profondes.",
        },
        {
          type: "list",
          text: "Ces élèves présentent en eux des traces de traumatismes, de pertes et de séparations, susceptibles d’exercer une influence directe sur leur comportement ainsi que sur leur rapport au cadre scolaire et social. Ils peuvent manifester des comportements d’évitement, d’isolement ou de retrait social, témoins d’une méfiance envers leur environnement et d’une difficulté à établir des liens de confiance avec les adultes et leurs pairs. Ces dynamiques peuvent compliquer la démarche d’accompagnement de ces élèves et en compromettre l’efficacité.",
        },
        {
          type: "list",
          text: "Faible capital scolaire parental : Le faible capital scolaire des parents constitue un obstacle majeur à l’autonomie et à la participation active des familles au parcours scolaire de leurs enfants. Ce facteur limite leur capacité à s’impliquer pleinement dans la vie scolaire, à suivre efficacement les démarches administratives et à soutenir leurs enfants dans leurs apprentissages.",
        },
        {
          type: "list",
          text: "Conséquemment, ces familles deviennent fortement dépendantes des TÉÉ, qui doivent consacrer un temps considérable à leur fournir des explications détaillées, ainsi qu’un accompagnement personnalisé, souvent long et exigeant.",
        },
        {
          type: "list",
          text: "Barrières financières : Les barrières financières constituent un obstacle majeur ayant un impact significatif sur le parcours éducatif et l’intégration sociale des élèves nouvellement arrivés ainsi que de leurs familles.",
        },
        {
          type: "list",
          text: "La précarité économique limite l’accès à des ressources essentielles telles que le matériel scolaire, les activités parascolaires ou encore les services spécialisés. Ces dépenses, souvent sous-estimées ou perçues à tort comme accessoires, jouent un rôle déterminant dans la participation effective des élèves à la vie scolaire et dans leur processus d’intégration socioculturelle. Ces barrières ne se limitent pas à de simples contraintes matérielles, mais constituent des facteurs structurants qui influencent en profondeur l’ensemble du parcours d’intégration et de réussite de ces élèves au sein du système éducatif.",
        },
        {
          type: "list",
          text: "Configurations familiales vulnérables : Les contextes familiaux marqués par une organisation particulière ou par des dynamiques complexes peuvent influencer de manière profonde le parcours des élèves nouvellement arrivés. Ces environnements, où l’équilibre et la cohésion peuvent être fragilisés, exercent une influence directe sur la capacité des élèves à s’intégrer pleinement, à ressentir un sentiment de sécurité et à développer leur confiance. En effet, la qualité et la stabilité du cadre familial constituent des facteurs déterminants dans ce processus d’intégration scolaire et sociale.",
        },
        {
          type: "list",
          text: "Facteur géographique : Ce facteur constitue un élément majeur dans l’accès aux services et aux ressources essentielles, particulièrement pour les familles francophones. En milieu rural, l’éloignement géographique et la rareté des ressources adaptées limitent considérablement l’accès aux services, notamment les services spécialisés tels que les services de santé adaptés.",
        },
        {
          type: "list",
          text: "Cette situation entraîne souvent un isolement accru des familles et des élèves à besoins élevés, renforçant ainsi les inégalités d’accès et compromettant leur réussite scolaire et leur intégration. Bien que cette problématique ne soit pas approfondie ici, elle sera examinée dans la section consacrée à l’évaluation du dispositif actuel.",
        },
        {
          type: "list",
          text: "Références culturelles : Le facteur des références culturelles a été fréquemment évoqué par les TÉÉ et identifié comme un enjeu central dans le processus d’intégration des familles et des élèves nouvellement arrivés. Ces références, qui incluent des pratiques, des valeurs, des codes sociaux et linguistiques propres à chaque culture, se manifestent à travers diverses approches d’apprentissage, comportements et perceptions, influençant l’engagement des familles et des élèves ainsi que leurs interactions avec leur environnement scolaire et social. Lorsqu’il existe une divergence entre ces référents culturels et ceux de la communauté d’accueil, cela peut constituer un obstacle à une intégration harmonieuse et une inclusion effective.",
        },
        {
          type: "list",
          text: "Statut légal au Canada : Le cadre juridique encadre l’accès à de nombreux services publics essentiels au Canada. Les citoyens et résidents permanents bénéficient d’un accès universel à ces services, tandis les personnes en situation irrégulière ou titulaires de statuts temporaires, comme les demandeurs d’asile ou les travailleurs temporaires, disposent d’un accès réglementé ou restreint à ces services. Cela limite la portée de l’accompagnement offert les TÉÉ, entravant souvent la mise en place d’un dispositif d’accompagnement pluridimensionnelle.",
        },
        {
          type: "h3",
          text: "Groupes vulnérables : Des identités individuelles aux fragilités collectives",
        },
        {
          type: "paragraph",
          text: "Lors des entretiens, une question essentielle visait à explorer la possibilité que certains facteurs ou caractéristiques individuelles puissent, selon les TÉÉ, rendre certains élèves plus vulnérables que d’autres. Cette démarche a permis d’identifier divers éléments, susceptibles de contribuer à la formation de certains groupes à risque accru.",
        },
        {
          type: "list",
          text: "Les adolescents du secondaire : En pleine période de construction identitaire, ces jeunes nouvellement arrivés doivent naviguer entre leur identité culturelle d’origine et leur intégration dans leur nouvel environnement. En raison des pressions socio-économiques ou familiales qu’ils peuvent subir, ces jeunes, deviennent des cibles privilégiées des groupes criminels, qui exploitent leur marginalisation, leur précarité économique ou leur isolement social. Les témoignages des TÉÉ Lamine et Duniya semblent plutôt renforcer cette perception.",
        },
        {
          type: "list",
          text: "Les jeunes filles du secondaire : Cela constitue une dimension supplémentaire de vulnérabilité, s’ajoutant à celle préexistante chez les adolescents du secondaire. Confrontées à des stéréotypes et à des attentes culturelles particulières, ces jeunes filles voient leur vulnérabilité s’intensifier lorsque ces éléments se conjuguent avec des pressions socio-économiques et familiales. Cette configuration intersectionnelle contribue à accentuer leur exposition à des formes d’exploitation à haut risque, telles que la prostitution, comme le témoigne la TÉÉ Olga, ce qui illustre concrètement la gravité de ces risques et souligne la complexité des facteurs sous-adjacents.",
        },
        {
          type: "list",
          text: "Groupe de vulnérabilité linguistique : Les élèves rencontrant des difficultés linguistiques, notamment les allophones, vivent une vulnérabilité accrue dans un contexte où la maîtrise de l’une des deux langues officielles du canada est essentielle pour leur réussite scolaire et leur inclusion sociale.",
        },
        {
          type: "list",
          text: "Cette situation s’applique également aux élèves francophones évoluant en milieu minoritaire, où la maîtrise du français ne suffit pas toujours à garantir leur intégration. En effet, certains de ces élèves, même scolarisés dans des écoles francophones, font face à des rejets de la part de leurs pairs, en raison de leur accent ou de leur maîtrise limitée de l’anglais, ce qui alimente leur marginalisation et leur exclusion sociale.",
        },
        {
          type: "list",
          text: "Les groupes racialisés ou issus de minorités ethniques et religieuses : Dans le contexte migratoire francophone au Canada, ces groupes peuvent être confrontées à des obstacles liés à des préjugés culturels ou institutionnels, renforcées par leur statut minoritaire.",
        },
        {
          type: "list",
          text: "Associé à des stéréotypes ou à des perceptions implicites, ce statut minoritaire peut influencer la façon dont ces élèves sont perçus et traités, tant dans leur environnement scolaire que dans leur communauté d’accueil.",
        },
        {
          type: "list",
          text: "Ces représentations, souvent implicites, contribuent à renforcer la vulnérabilité de ces groupes en favorisant des processus de marginalisation, d’exclusion et de stigmatisation, contribuant ainsi à une expérience d’intégration marquée par un sentiment d’aliénation et de déconnexion.",
        },
        {
          type: "list",
          text: "Les élèves en situation de handicap : L'ajout d'une dimension liée à un handicap au processus d'intégration des élèves nouvellement arrivés au Canada représente un autre niveau de difficultés à cet enjeu. Des obstacles tels que le coût, le temps d'attente et la complexité administrative associés au diagnostic et à la prise en change de ces enfants, peuvent impacter leur intégration et compromettre leur accès à des services de soutien de qualité.",
        },
        {
          type: "h2",
          text: "Dynamique collaborative intra- et inter-sectorielle : Regard des TÉÉ sur le dispositif d’accompagnement.",
        },
        { type: "h3", text: "Cartographie des acteurs impliqués" },
        {
          type: "paragraph",
          text: "Cette section établit, à partir des éléments collectés, une cartographie des acteurs impliqués dans le dispositif d’accompagnement des élèves à besoins élevés, dans le cadre du programme TÉÉ.",
        },
        {
          type: "paragraph",
          text: "Les TÉÉ soulignent que leurs interactions les plus fréquentes se concentrent principalement avec le personnel scolaire et pédagogique, incluant notamment les directions d’écoles, les conseillers en orientation, les travailleurs sociaux ainsi que les enseignants. Ces acteurs occupent une position centrale dans l’accueil, l’évaluation et l’accompagnement des élèves à besoins élevés.",
        },
        {
          type: "paragraph",
          text: "Par ailleurs, les TÉÉ collaborent également avec un éventail d’intervenants et de partenaires issus de secteurs variés, tels que :",
        },
        {
          type: "list",
          text: "Les organismes d’établissement et les organismes communautaires : Ces organismes occupent une place importante dans le dispositif d’accompagnement des élèves à besoins élevés, en apportant un soutien essentiel à leur intégration sociale et culturelle, tant pour les élèves que pour leurs familles.",
        },
        {
          type: "list",
          text: "Les communautés ethnoculturelles ou religieuses : Ces communautés jouent un rôle essentiel dans ce dispositif d’accompagnement en contribuant à la préservation, à la valorisation et au maintien du capital symbolique des élèves et de leurs familles, tout en facilitant leur transition culturelle.",
        },
        {
          type: "list",
          text: "Les services de santé et de gestion des cas : Ces services jouent un rôle crucial dans le dispositif d’accompagnement des élèves à besoins spécifiques, en fournissant une réponse ciblée et adaptée à leurs besoins médicaux, psychologiques et sociaux, qui relèvent de compétences professionnelles spécialisées.",
        },
        {
          type: "list",
          text: "Services gouvernementaux : Il arrive, dans le cadre de ce processus d’accompagnement, que les élèves et leurs familles soient orientés vers les services gouvernementaux compétents lorsque leurs besoins nécessitent une intervention spécifique, comme l’obtention de documents officiels, l’accès à une aide financière, un hébergement d’urgence ou toute autre démarche adaptée à leur situation.",
        },
        {
          type: "paragraph",
          text: "Il est important de souligner que la complémentarité entre les différents acteurs impliqués constitue un élément clé pour assurer un accompagnement efficace et coordonné des élèves à besoins élevés.",
        },
        {
          type: "paragraph",
          text: "Cette collaboration, qu’elle soit permanente ou occasionnelle, permet des échanges d’informations essentielles, le renforcement et la cohérence des actions, et l’adoption une approche holistique, prenant en compte la diversité des besoins de chaque élève.",
        },
        {
          type: "h3",
          text: "Évaluation du dispositif actuel d’accompagnement",
        },
        {
          type: "paragraph",
          text: "L’évaluation du dispositif actuel d’accompagnement des élèves à besoins élevés constitue une étape essentielle pour comprendre en profondeur son fonctionnement, ainsi que pour identifier ses points forts et ses limites. Cette démarche constitue une étape préalable indispensable à la conception d’un guide d’accompagnement pertinent, parfaitement aligné avec la réalité du terrain.",
        },
        { type: "list", text: "Points forts :" },
        {
          type: "list",
          text: "Le dispositif actuel d’accompagnement des élèves à besoins élevés, en dépit de l’absence d’un cadre systématisé, se caractérise par une grande diversité d’initiatives qui s’adaptent aux réalités locales, aux ressources disponibles et aux besoins spécifiques des élèves. Ce constat témoigne d’une capacité remarquable d’adaptation des TÉÉ et de leur engagement manifeste à offrir un soutien pertinent et évolutif, capable de s’ajuster aux défis complexes rencontrés.",
        },
        {
          type: "list",
          text: "La réactivité des partenaires constitue un aspect fréquemment mis en avant dans les témoignages, tout comme la fluidité dans la communication, les références, et la coordination entre les différents acteurs impliqués.",
        },
        {
          type: "list",
          text: "L’école occupe une place centrale dans ce dispositif, comme le montrent plusieurs témoignages de TÉÉ. Au-delà de sa mission traditionnelle de transmission des connaissances, elle se positionne comme un véritable moteur d’accompagnement, capable d’adapter ses pratiques pédagogiques et de mobiliser ses ressources, qu’elles soient humaines ou matérielles, afin de répondre aux besoins diversifiés de ses élèves. En s’ajustant en permanence aux particularités de chaque élève, l’école affirme non seulement son rôle central dans ce processus d’accompagnement, mais aussi son engagement profond à soutenir ces élèves dans leur parcours éducatif et social.",
        },
        {
          type: "list",
          text: "Certains dispositifs locaux ont su développer des pratiques innovantes telles que le soutien par les pairs, les groupes de discussion et de partage d’expérience, ou encore la mise en place d’ateliers de développement d’habilités sociales, qui s’inscrivent dans une approche collective plutôt qu’individuelle. En plus d’être un levier pour la prise en charge, ces démarches participatives jouent un rôle préventif, permettant à anticiper les difficultés sociales et relationnelles, tout en favorisant la dynamique collective d’entraide, élément fondamental pour promouvoir l’inclusion et la cohésion sociale, tant à l’intérieur qu’à l’extérieur de l’école.",
        },
        { type: "list", text: "Limitations et défis identifiés :" },
        {
          type: "paragraph",
          text: "Les limitations et défis abordés dans cette partie concernent principalement les limites structurelles du dispositif actuel de prise en charge. Bien que la typologie des besoins élevés des élèves ainsi que les facteurs individuels, intersectionnels et contextuels, évoqués dans la section précédente, constituent également, dans une certaine mesure, des limites inhérentes au dispositif d’accompagnement, cette partie se concentrera principalement sur les limitations et défis organisationnels et matériels qui entravent la capacité de ce dispositif à assurer une intervention holistique, synergique et efficace.",
        },
        {
          type: "list",
          text: "En contexte francophone minoritaire, les disparités structurelles en matière de ressources et d’offre de services disponibles en français, notamment des services spécialisés, constituent une limite significative du dispositif d’accompagnement, en particulier dans les régions rurales. Cette situation entrave la détection, l’évaluation et la mise en place d’interventions adaptées pour les élèves à besoins élevés, ce qui renforce leur vulnérabilité, leur isolement et leur marginalisation.",
        },
        {
          type: "list",
          text: "La dynamique démographique des dernières années, engendrée par l’augmentation significative du nombre d’élèves nouvellement arrivés dans certaines régions, exerce une pression accrue sur le programme TÉÉ, limitant sa capacité à accompagner efficacement les élèves à besoins élevés. En raison de cette croissance rapide, ce dispositif tend à privilégier une gestion principalement réactive plutôt que proactive, intervenant en réponse aux situations d’urgence plutôt qu’en anticipant les difficultés potentielles. Cette situation oblige les TÉÉ à agir principalement dans l’immédiateté, souvent par des interventions ponctuelles, plutôt que de mettre en place des stratégies préventives visant à identifier en amont les problématiques et les difficultés potentielles.",
        },
        {
          type: "list",
          text: "L’absence de services de gestion des cas dédiés aux enfants se révèle une autre limite majeure de ce dispositif. En effet, le service de gestion des cas, étant principalement conçu pour la prise en charge de problématiques chez l’adulte, se révèle souvent peu sensible aux spécificités et aux besoins particuliers des jeunes élèves, ce qui limite la capacité du dispositif à offrir un accompagnement pertinent et personnalisé à ces élèves.",
        },
        {
          type: "list",
          text: "La méconnaissance de la réalité migratoire des élèves nouvellement arrivés constitue un obstacle majeur à leur inclusion effective dans le système scolaire. Cette réalité, souvent insuffisamment explorée entraîne souvent un manque d’adaptation des pratiques d’accompagnement, ce qui limite l’efficacité de ce dispositif.",
        },
        {
          type: "list",
          text: "La méconnaissance du rôle et du travail des TÉÉ constitue une autres limite structurelle majeure du dispositif actuel. Cette méconnaissance est particulièrement visible dans les écoles qui accueillent le programme TÉÉ pour la première fois. Elle entrave leur reconnaissance institutionnelle au sein des écoles, entraînant des contraintes pratiques telles que l'accès limité aux informations essentielles relatives à ces élèves à besoins élevés, ce qui affecte la capacité des TÉÉ à agir de manière efficace.",
        },
        {
          type: "list",
          text: "L’absence de statut juridique et professionnel formel reconnu pour les TÉÉ crée un décalage important entre leur réalité de terrain et leur cadre de responsabilités. Bien que leur mission soit de soutenir l’intégration des élèves nouveaux arrivants et de favoriser la compétence interculturelle au sein du système éducatif, la réalité du terrain les force à naviguer dans des zones grises, où ils effectuent des interventions souvent comparables à celles de professionnels réglementés, tels que les travailleurs sociaux. Ils se voient parfois amenés à des interventions s'apparentant à des actes réservés, tels que l'accompagnement familial intensif ou la manipulation de données hautement sensibles, sans détenir les qualifications professionnelles requises, ni bénéficier de la protection juridique et institutionnelle conférée par un ordre professionnel en cas de litige.",
        },
      ],
      methodology: [
        { type: "paragraph", text: "Annexe 1 : Approche méthodologique" },
        {
          type: "paragraph",
          text: "La compréhension approfondie des enjeux liés aux élèves à besoins élevés est essentielle pour optimiser leur accompagnement et améliorer la qualité des interventions.",
        },
        {
          type: "paragraph",
          text: "La collecte de données auprès des TÉÉ constitue une étape cruciale pour identifier ces enjeux, recueillir des témoignages concrets et repérer les axes d’amélioration possibles. Elle permet d’obtenir une vision précise des situations rencontrées sur le terrain, contribuant ainsi à enrichir la réflexion et à orienter les actions futures.",
        },
        { type: "list", text: "Collecte des données" },
        {
          type: "paragraph",
          text: "Les données ont été recueillies principalement par le biais d’entretiens semi-directifs, une méthode qui offre une flexibilité permettant d’explorer en profondeur les expériences et perceptions des participants tout en maintenant une structure thématique cohérente.",
        },
        {
          type: "paragraph",
          text: "Cette approche favorise la spontanéité dans les réponses, encourageant les TÉÉ à partager des exemples concrets et des cas précis, ce qui enrichit la compréhension des enjeux complexes liés aux élèves à besoins élevés. Elle permet également d’adapter les questions en fonction des réponses, facilitant ainsi l’approfondissement de certains aspects spécifiques à chaque situation.",
        },
        {
          type: "paragraph",
          text: "Cette méthode a été particulièrement adaptée pour notre étude, car elle combine rigueur et souplesse, offrant une vision détaillée et nuancée des réalités du terrain.",
        },
        {
          type: "paragraph",
          text: "Un total de 17 entretiens semi-directifs ont été menés entre le 15 et le 27 janvier 2026, via la plateforme Microsoft Teams.",
        },
        {
          type: "paragraph",
          text: "Ces entretiens ont permis de collecter des données qualitatives approfondies, constituant une base essentielle pour l’analyse contextuelle et thématique de la problématique abordée.",
        },
        { type: "list", text: "Échantillonnage" },
        {
          type: "paragraph",
          text: "Un échantillonnage stratifié a été mis en place afin d’assurer la représentativité de l’ensemble du secteur TÉÉ, en tenant compte de son hétérogénéité en termes de :",
        },
        {
          type: "paragraph",
          text: "- Niveau scolaire (secondaire et élémentaire)",
        },
        { type: "paragraph", text: "- Zone géographique (rurale et urbaine)" },
        {
          type: "paragraph",
          text: "- Type d’affiliation des TÉÉ (conseil scolaire et organisme communautaire)",
        },
        {
          type: "paragraph",
          text: "- Différentes région du Canada, afin de garantir une couverture nationale.",
        },
        { type: "list", text: "Guide d’entretien" },
        {
          type: "paragraph",
          text: "L'architecture du guide d’entretien reposait sur une progression thématique structurée en sept axes distincts, favorisant le passage d'une conceptualisation théorique à une analyse systémique et prospective des pratiques. Il s'articule autour de plusieurs dimensions clés, notamment :",
        },
        {
          type: "paragraph",
          text: "- La définition et l’identification des besoins élevés des élèves",
        },
        {
          type: "paragraph",
          text: "- La typologie et la diversité de ces besoins",
        },
        {
          type: "paragraph",
          text: "- Les facteurs individuels, intersectionnels et contextuels",
        },
        {
          type: "paragraph",
          text: "- Les conséquences d’une prise en charge insuffisante",
        },
        {
          type: "paragraph",
          text: "- La collaboration avec les partenaires et les acteurs intersectoriels",
        },
        { type: "paragraph", text: "- L’évaluation du dispositif actuel" },
        {
          type: "paragraph",
          text: "- Les perspectives et recommandations futures",
        },
        {
          type: "paragraph",
          text: "L’intégralité du guide d’entretien, comprenant l’ensemble des questions détaillées par axe, est consultable en Annexe [2] de ce document.",
        },
        { type: "list", text: "Enregistrements et transcriptions" },
        {
          type: "paragraph",
          text: "Les entretiens ont été enregistrés afin d’assurer une transcription fidèle des propos des participants. Toutes les dispositions visant au respect de la confidentialité et de l’anonymat ont été rigoureusement respectées tout au long du processus.",
        },
        {
          type: "paragraph",
          text: "Conformément aux bonnes pratiques en recherche qualitative, les noms réels des participants ont été remplacés par des prénoms fictifs attribués selon un ordre alphabétique : Amélie, Bakary, Clémence, Duniya, Eve, Fatima, Gora, Hervé, Imani, Juliette, Kadi, Lamine, Mohamad, Nathalie, Olga, Pascaline, et Rama.",
        },
        {
          type: "paragraph",
          text: "Cette approche vise à garantir la confidentialité tout en permettant une contextualisation plus humaine et accessible des citations, facilitant ainsi la présentation des propos tout en respectant l’anonymat des TÉÉ interviewés.",
        },
        { type: "list", text: "Analyse des données" },
        {
          type: "paragraph",
          text: "Les transcriptions des entretiens ont été soigneusement codées à l’aide du logiciel d’analyse qualitative Atlas.ti, ce qui a permis d’organiser et d’identifier des thèmes, des motifs et des relations pertinentes.",
        },
        {
          type: "paragraph",
          text: "Une analyse thématique approfondie a été ensuite réalisée pour faire ressortir les points saillants, ainsi que les convergences et les divergences. Une démarche itérative a été adoptée pour affiner la compréhension des données, vérifier la cohérence des résultats et garantir que les interprétations reflétaient fidèlement les propos recueillis.",
        },
        {
          type: "paragraph",
          text: "L’ensemble de ce processus a été mené dans une optique de rigueur scientifique, afin d’assurer la crédibilité, la validité et la fiabilité des données collectées et des résultats.",
        },
      ],
      interviewGuide: [
        {
          theme: "Définition et identification des besoins élevés des élèves",
          questions:
            "Formulation possible : Selon vous, qu’est-ce qui caractérise un élève à besoins élevés dans le travail d’établissement en milieu scolaire ? Relance 1 : Comment reconnaissez-vous qu’un élève présente des besoins élevés ? Quels signaux ou indicateurs observez-vous ? Relance 2 : Comment décririez-vous un cas à besoins élevés et quels éléments vous permettent de l’identifier concrètement ?",
        },
        {
          theme: "Typologie et diversité des besoins",
          questions:
            "Formulation possible : Les besoins élevés que vous rencontrez sont-ils similaires d’un élève à l’autre ? Si non, comment pourriez-vous les classer en catégories ? Relance 1 : Quels types de besoins élevés rencontrez-vous le plus souvent dans votre pratique ? Relance 2 : Existe-t-il des besoins émergents ou moins visibles que vous jugez importants de mentionner ?",
        },
        {
          theme: "Facteurs individuels, intersectionnels et contextuels",
          questions:
            "Formulation possible : Quels facteurs individuels (trajectoire migratoire, âge, genre, statut migratoire, langue, religion, handicap, etc.) influencent la situation des élèves à besoins élevés ? Relance 1 : Y a-t-il des facteurs individuels qui augmentent les besoins d’un cas par rapport à un autre ? Si oui quels sont-ils et comment ces facteurs interagissent-ils avec le cas ? Relance 2 : Certaines identités ou facteurs individuels rendent-ils certains élèves plus vulnérables que d’autres ? Si oui, lesquels et pourquoi selon vous ?",
        },
        {
          theme: "Conséquences d’une prise en charge insuffisante",
          questions:
            "Formulation possible : Quelles sont, selon vous, les principales conséquences pour les élèves à besoins élevés lorsqu’ils/elles ne sont pas accompagnés adéquatement ? Relance 1 : Ces conséquences touchent-elles tous/toutes les élèves de la même manière ? Relance 2 : Quels groupes semblent les plus exposés ou fragilisés ?",
        },
        {
          theme: "Partenaires et collaboration intersectorielle",
          questions:
            "Formulation possible : Quels services, organismes ou partenaires devraient être impliqués pour assurer une prise en charge efficace des élèves à besoins élevés ? Relance 1 : Quel rôle jouent-ils ou devraient-ils jouer selon vous ? Relance 2 : Pouvez-vous donner des exemples d’actions concrètes que vous ou vos partenaires avez mises en place pour soutenir les élèves à besoins élevés ?",
        },
        {
          theme: "Évaluation du dispositif actuel",
          questions:
            "Formulation possible : Comment évaluez-vous le dispositif actuel de prise en charge des élèves à besoins élevés dans les écoles ? Relance 1 : Quelles en sont les forces et les limites selon vous ? Relance 2 : Quelles recommandations proposeriez-vous pour améliorer l’efficacité de l’accompagnement ?",
        },
        {
          theme: "Conclusion et perspectives",
          questions:
            "Formulation possible : Souhaitez-vous ajouter quelque chose concernant les défis, les besoins ou la coordination entre les acteurs impliqués ? Relance : Y a-t-il un point essentiel que nous n’avons pas abordé et que vous aimeriez souligner ?",
        },
      ],
    },
    downloads: {
      f1: "documents/fiche-action-01-traumatismes-extremes.pdf",
      f2: "documents/fiche-action-02-defis-linguistiques-communicationnels.pdf",
      f3: "documents/fiche-action-03-faible-engagement-parental.pdf",
      f4: "documents/fiche-action-04-acceptation-observations-diagnostics.pdf",
      f5: "documents/fiche-action-05-barrieres-financieres.pdf",
      f6: "documents/fiche-action-06-faible-capital-scolaire-parental.pdf",
      f7: "documents/fiche-action-07-configurations-familiales-vulnerables.pdf",
      f8: "documents/fiche-action-08-barrieres-geographiques.pdf",
      f9: "documents/fiche-action-09-references-culturelles.pdf",
      f10: "documents/fiche-action-10-vulnerabilite-statut-legal.pdf",
      b1: "documents/boussole-01-adolescents-secondaire.pdf",
      b2: "documents/boussole-02-jeunes-filles-secondaire.pdf",
      b3: "documents/boussole-03-vulnerabilite-linguistique.pdf",
      b4: "documents/boussole-04-groupes-racialises-minorites.pdf",
      b5: "documents/boussole-05-eleves-situation-handicap.pdf",
    },
  };
  
  var state = {
    observations: {},
    profiles: {},
    stage: null,
    action: "f1",
    compass: null,
    level: 0,
    checked: {},
  };
  var stages = [
    { id: "routine", label: "Accueil ou prévention" },
    { id: "preoccupant", label: "Situation préoccupante" },
    { id: "urgent", label: "Risque immédiat" },
  ];
  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, function (c) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      }[c];
    });
  }
  function norm(value) {
    return String(value ?? "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }
  function lead(value) {
    var safe = esc(value),
      i = safe.indexOf(":");
    return i < 0
      ? safe
      : "<strong>" + safe.slice(0, i + 1) + "</strong>" + safe.slice(i + 1);
  }
  function list(items) {
    return (
      "<ul>" +
      (items || [])
        .map(function (x) {
          return "<li>" + lead(x) + "</li>";
        })
        .join("") +
      "</ul>"
    );
  }
  function docById(id) {
    return data.actions.concat(data.compasses).find(function (d) {
      return d.id === id;
    });
  }

  function renderOrientation() {
    var categories = [
      ...new Set(
        data.observations.map(function (o) {
          return o.category;
        }),
      ),
    ];
    document.getElementById("observation-choices").innerHTML = categories
      .map(function (category) {
        var choices = data.observations
          .filter(function (o) {
            return o.category === category;
          })
          .map(function (o) {
            var selected = !!state.observations[o.id];
            return (
              '<button type="button" class="v3-choice' +
              (selected ? " is-selected" : "") +
              '" data-observation="' +
              o.id +
              '" aria-pressed="' +
              selected +
              '"><span>' +
              (selected ? "✓" : "") +
              "</span>" +
              esc(o.label) +
              "</button>"
            );
          })
          .join("");
        return (
          '<p class="v3-category">' +
          esc(category) +
          '</p><div class="v3-choice-grid">' +
          choices +
          "</div>"
        );
      })
      .join("");
    document.getElementById("profile-choices").innerHTML = data.compasses
      .map(function (d) {
        var selected = !!state.profiles[d.id];
        return (
          '<button type="button" class="v3-choice' +
          (selected ? " is-selected" : "") +
          '" data-profile="' +
          d.id +
          '" aria-pressed="' +
          selected +
          '"><span>' +
          (selected ? "✓" : "") +
          "</span>" +
          esc(d.titre) +
          "</button>"
        );
      })
      .join("");
    document.getElementById("stage-choices").innerHTML = stages
      .map(function (s) {
        return (
          '<button type="button" class="v3-stage' +
          (state.stage === s.id ? " is-selected" : "") +
          '" data-stage="' +
          s.id +
          '" aria-pressed="' +
          (state.stage === s.id) +
          '">' +
          esc(s.label) +
          "</button>"
        );
      })
      .join("");
    renderResults();
  }
  function renderResults() {
    var scores = {},
      selectedObs = Object.keys(state.observations).filter(function (k) {
        return state.observations[k];
      });
    selectedObs.forEach(function (id) {
      var o = data.observations.find(function (x) {
        return x.id === id;
      });
      if (o) scores[o.doc] = (scores[o.doc] || 0) + 1;
    });
    Object.keys(state.profiles)
      .filter(function (k) {
        return state.profiles[k];
      })
      .forEach(function (id) {
        scores[id] = (scores[id] || 0) + 1;
      });
    if (state.stage) {
      data.actions.concat(data.compasses).forEach(function (d) {
        if ((d.tags || []).includes(state.stage))
          scores[d.id] = (scores[d.id] || 0) + 1;
      });
    }
    var results = Object.keys(scores)
      .map(function (id) {
        return { doc: docById(id), score: scores[id] };
      })
      .filter(function (x) {
        return x.doc;
      })
      .sort(function (a, b) {
        return (
          b.score - a.score ||
          String(a.doc.titre).localeCompare(String(b.doc.titre), "fr")
        );
      });
    document.getElementById("result-count").textContent =
      results.length + " résultat" + (results.length === 1 ? "" : "s");
    var urgent =
      state.stage === "urgent"
        ? '<div class="v3-urgent"><strong>Situation à risque immédiat</strong>Consultez d’abord le niveau 4 : évaluer le danger, noter les observations et agir en concertation avec votre hiérarchie.<br/><button class="v3-reset" style="margin-top:8px" type="button" data-open-level="3">Ouvrir le niveau 4 →</button></div>'
        : "";
    var zone = document.getElementById("orientation-results");
    if (!results.length) {
      zone.innerHTML =
        urgent +
        '<div class="v3-empty"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="3"></circle> <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path> </svg><strong>Vos résultats apparaîtront ici</strong><p>Sélectionnez un ou plusieurs éléments pour commencer.</p></div>';
      return;
    }
    zone.innerHTML =
      urgent +
      '<div class="v3-result-list">' +
      results
        .map(function (x) {
          var d = x.doc;
          return (
            '<button class="v3-result" type="button" data-open-doc="' +
            d.id +
            '"><span class="v3-result-top"><span class="v3-result-type">' +
            (d.type === "fiche" ? "Fiche d’action " + d.num : "Boussole") +
            '</span><span class="v3-result-score">' +
            x.score +
            " correspondance" +
            (x.score > 1 ? "s" : "") +
            "</span></span><strong>" +
            esc(d.titre) +
            "</strong><small>Contenu complet →</small></button>"
          );
        })
        .join("") +
      "</div>";
  }

  function renderActions() {
    var detail = document.getElementById("action-detail");
    document.getElementById("action-grid").innerHTML = data.actions
      .map(function (d) {
        var selected =
          state.action === d.id && detail && !detail.hidden;
        return (
          '<button class="action-card tone-' +
          d.tone +
          (selected ? " is-selected" : "") +
          '" type="button" data-action="' +
          d.id +
          '" aria-pressed="' +
          selected +
          '"><span class="action-number">' +
          String(d.num).padStart(2, "0") +
          '</span><span class="action-tag">' +
          esc(d.tag) +
          "</span>" +
          esc(d.titre) +
          '<span class="action-arrow" aria-hidden="true"><i class="fa-solid fa-angle-' +
          (selected ? "up" : "down") +
          '"></i></span></button>'
        );
      })
      .join("");
  }
  function downloadButton(d) {
    var file = data.downloads[d.id];
    return file
      ? '<a class="tool-button" href="' +
          esc(file) +
          '" download><span aria-hidden="true"><i class="fa-solid fa-download"></i></span> Télécharger ' +
          (d.type === "fiche" ? "la fiche" : "la boussole") +
          " PDF</a>"
      : "";
  }
  function headerHtml(d, label) {
    return (
      '<div class="detail-header"><div><p class="detail-kicker">' +
      label +
      "</p><h2>" +
      esc(d.titre) +
      "</h2>" +
      (d.cible
        ? "<p><strong>Cible :</strong> " + esc(d.cible) + "</p>"
        : "<p><strong>Profil :</strong> " + esc(d.sousTitre) + "</p>") +
      (d.objectif
        ? "<p><strong>Objectif de l’intervention :</strong> " +
          esc(d.objectif) +
          "</p>"
        : "") +
      '</div><div class="detail-tools">' +
      downloadButton(d) +
      "</div></div>"
    );
  }
  function resourcesHtml(resources) {
    return (
      '<div class="v3-resources">' +
      (resources || [])
        .map(function (r) {
          var href = r.url || "#";
          return (
            '<a class="v3-resource-link" href="' +
            esc(href) +
            '"' +
            (r.url ? ' target="_blank" rel="noopener noreferrer"' : "") +
            "><strong>" +
            esc(r.t) +
            '<span class="v3-external" aria-label="Lien externe">↗</span></strong>' +
            esc(r.d) +
            "</a>"
          );
        })
        .join("") +
      "</div>"
    );
  }
  function citationHtml(c) {
    return c
      ? '<blockquote class="essential-quote"><span aria-hidden="true">“</span><div><p>L’essentiel en une phrase</p><strong>« ' +
          esc(c.txt) +
          " »</strong>" +
          esc(c.auteur) +
          ". " +
          esc(c.note) +
          "</div></blockquote>"
      : "";
  }
  function actionPanels(d) {
    var detect =
      '<details class="detail-panel tone-red" open><summary>Détecter</summary><div style="padding:0 18px 18px">' +
      d.detecter
        .map(function (x, i) {
          var reveal = x.c
            ? '<button class="v3-reveal" type="button" data-reveal="' +
              d.id +
              "-" +
              i +
              '">＋ Ce que cela peut cacher</button><p class="v3-hidden-meaning" id="' +
              d.id +
              "-" +
              i +
              '"><strong>Ce que cela peut cacher :</strong> ' +
              esc(x.c) +
              "</p>"
            : "";
          return (
            '<div class="v3-detect-item"><p>' +
            lead(x.s) +
            "</p>" +
            reveal +
            "</div>"
          );
        })
        .join("") +
      "</div></details>";
    var agir =
      '<details class="detail-panel tone-blue" open><summary>Agir</summary>' +
      list(d.agir) +
      "</details>";
    var init =
      '<details class="detail-panel tone-mint" open><summary>Initiatives concrètes</summary>' +
      list(d.initiatives) +
      "</details>";
    var res =
      '<details class="detail-panel tone-gold" open><summary>Appuis et ressources</summary>' +
      resourcesHtml(d.ressources) +
      "</details>";
    return (
      '<div class="detail-grid">' +
      detect +
      agir +
      init +
      res +
      "</div>" +
      citationHtml(d.citation)
    );
  }
  function openAction(id, scroll) {
    var d = docById(id);
    if (!d) return;
    var shell = document.getElementById("action-detail");
    if (state.action === id && !shell.hidden) {
      state.action = null;
      shell.classList.remove("is-open");
      renderActions();
      var closeToken = (shell._closeToken || 0) + 1;
      shell._closeToken = closeToken;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        shell.hidden = true;
        return;
      }
      shell.addEventListener(
        "transitionend",
        function (event) {
          if (
            event.propertyName === "max-height" &&
            shell._closeToken === closeToken &&
            !shell.classList.contains("is-open")
          ) {
            shell.hidden = true;
          }
        },
        { once: true },
      );
      return;
    }
    state.action = id;
    shell.hidden = false;
    renderActions();
    document.getElementById("action-detail-inner").innerHTML =
      headerHtml(d, "Fiche d’action " + d.num) + actionPanels(d);
    shell._closeToken = (shell._closeToken || 0) + 1;
    requestAnimationFrame(function () {
      shell.classList.add("is-open");
    });
    if (scroll)
      setTimeout(function () {
        shell.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 20);
  }

  function renderCompassSelector() {
    document.getElementById("compass-selector").innerHTML = data.compasses
      .map(function (d) {
        var selected = state.compass === d.id;
        return (
          '<button type="button" role="tab" data-compass="' +
          d.id +
          '" aria-selected="' +
          selected +
          '" aria-expanded="' +
          selected +
          '" class="' +
          (selected ? "is-selected" : "") +
          '">' +
          esc(d.titre) +
          "<i class='fa-solid fa-angle-" +
          (selected ? "up" : "down") +
          "'></i></button>"
        );
      })
      .join("");
  }
  function compassSignals(d) {
    var marker = "Ce que cela peut cacher :";
    return (
      '<div style="padding:0 18px 18px">' +
      d.colA.items
        .map(function (item, i) {
          var pos = item.indexOf(marker),
            signal = pos < 0 ? item : item.slice(0, pos).trim(),
            hidden = pos < 0 ? "" : item.slice(pos + marker.length).trim();
          var reveal = hidden
            ? '<button class="v3-reveal" type="button" data-reveal="' +
              d.id +
              "-" +
              i +
              '">＋ Ce que cela peut cacher</button><p class="v3-hidden-meaning" id="' +
              d.id +
              "-" +
              i +
              '"><strong>Ce que cela peut cacher :</strong> ' +
              esc(hidden) +
              "</p>"
            : "";
          return (
            '<div class="v3-detect-item"><p>' +
            lead(signal) +
            "</p>" +
            reveal +
            "</div>"
          );
        })
        .join("") +
      "</div>"
    );
  }
  function compassPanels(d) {
    var a =
      '<details class="compass-panel tone-red" open><summary>' +
      esc(d.colA.titre) +
      "<span>＋</span></summary>" +
      compassSignals(d) +
      "</details>";
    var b =
      '<details class="compass-panel tone-blue" open><summary>' +
      esc(d.colB.titre) +
      "<span>＋</span></summary>" +
      list(d.colB.items) +
      "</details>";
    var posture =
      '<details class="compass-panel tone-mint" open><summary>Posture de communication<span>＋</span></summary><ul><li><strong>À éviter :</strong> ' +
      esc(d.eviter) +
      "</li>" +
      d.privilegier
        .map(function (p) {
          return (
            "<li><strong>" + esc(p.t) + " :</strong> « " + esc(p.p) + " »</li>"
          );
        })
        .join("") +
      "</ul></details>";
    var res =
      '<details class="compass-panel tone-gold" open><summary>Appuis et ressources<span>＋</span></summary>' +
      resourcesHtml(d.ressources) +
      "</details>";
    return (
      '<div class="compass-grid">' +
      a +
      b +
      posture +
      res +
      "</div>" +
      citationHtml(d.citation)
    );
  }
  function openCompass(id, scroll) {
    var d = docById(id);
    if (!d) return;
    var shell = document.getElementById("compass-detail");
    if (state.compass === id && !shell.hidden) {
      state.compass = null;
      shell.classList.remove("is-open");
      renderCompassSelector();
      var closeToken = (shell._closeToken || 0) + 1;
      shell._closeToken = closeToken;
      shell.addEventListener(
        "transitionend",
        function (event) {
          if (
            event.propertyName === "max-height" &&
            shell._closeToken === closeToken &&
            !shell.classList.contains("is-open")
          ) {
            shell.hidden = true;
          }
        },
        { once: true },
      );
      return;
    }
    state.compass = id;
    shell.hidden = false;
    renderCompassSelector();
    document.getElementById("compass-detail-inner").innerHTML =
      headerHtml(d, "") + compassPanels(d);
    requestAnimationFrame(function () {
      shell.classList.add("is-open");
    });
    if (scroll)
      setTimeout(function () {
        shell.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 20);
  }

  function renderLevels() {
    document.getElementById("level-stepper").innerHTML = data.niveaux
      .map(function (n, i) {
        var tone =
          n.couleur === "vert"
            ? "mint"
            : n.couleur === "mango"
              ? "gold"
              : n.couleur === "orange"
                ? "orange"
                : "red";
        return (
          '<button type="button" role="tab" data-level="' +
          i +
          '" aria-selected="' +
          (state.level === i) +
          '" class="level-button tone-' +
          tone +
          (state.level === i ? " is-selected" : "") +
          '"><span>' +
          n.n +
          "</span><strong>" +
          esc(n.titre) +
          "</strong></button>"
        );
      })
      .join("");
    var n = data.niveaux[state.level],
      tone =
        n.couleur === "vert"
          ? "mint"
          : n.couleur === "mango"
            ? "gold"
            : n.couleur === "orange"
              ? "orange"
              : "red";
    document.getElementById("level-detail").innerHTML =
      '<div class="level-detail tone-' +
      tone +
      '"><div class="level-title"><span>Niveau ' +
      n.n +
      "</span><h3>" +
      esc(n.titre) +
      '</h3></div><div class="level-columns"><article><p>Nature de la problématique</p>' +
      list(n.nature) +
      "</article><article><p>Rôle du TÉÉ</p>" +
      list((n.eleves || []).concat(n.ecole || [])) +
      "</article><article><p>Limites et protocoles de référence</p>" +
      list(n.limites) +
      "</article></div></div>";
  }
  function renderHandoff() {
    document.getElementById("handoff-principles").innerHTML =
      data.handoff.principes
        .map(function (p, i) {
          return (
            '<article class="v3-principle"><span>' +
            (i + 1) +
            "</span><h3>" +
            esc(p.t) +
            "</h3><p>" +
            esc(p.d) +
            "</p></article>"
          );
        })
        .join("");
    document.getElementById("handoff-grid").innerHTML = data.handoff.etapes
      .map(function (e) {
        var tone =
          e.couleur === "vert" ? "mint" : e.couleur === "bleu" ? "blue" : "red";
        var phaseIcon =
          e.phase === "Avant"
            ? '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="11 6 5 12 11 18"></polyline></svg>'
            : e.phase === "Pendant"
              ? '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="6 13 12 19 18 13"></polyline></svg>'
              : '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="13 6 19 12 13 18"></polyline></svg>';
        return (
          '<article class="handoff-card tone-' +
          tone +
          '"><div class="handoff-card-title"><span class="handoff-phase-icon">' +
          phaseIcon +
          "</span><div><h3>" +
          esc(e.phase) +
          "</h3><p>" +
          esc(e.sousTitre) +
          '</p></div></div><div class="checklist">' +
          e.items
            .map(function (item, i) {
              var key = e.phase + "-" + i,
                checked = !!state.checked[key];
              return (
                '<label class="' +
                (checked ? "is-checked" : "") +
                '"><input type="checkbox" data-step="' +
                key +
                '" ' +
                (checked ? "checked" : "") +
                "><span>" +
                (checked ? "✓" : "") +
                "</span><p>" +
                lead(item) +
                "</p></label>"
              );
            })
            .join("") +
          "</div></article>"
        );
      })
      .join("");
    var total = data.handoff.etapes.reduce(function (s, e) {
        return s + e.items.length;
      }, 0),
      done = Object.keys(state.checked).filter(function (k) {
        return state.checked[k];
      }).length;
    document.getElementById("progress-count").textContent =
      done + " / " + total;
    document.getElementById("progress-bar").style.width =
      (done / total) * 100 + "%";
  }

  function blockHtml(blocks) {
    var listOpen = false,
      out = "";
    (blocks || []).forEach(function (block) {
      if (block.type === "list") {
        if (!listOpen) {
          out += "<ul>";
          listOpen = true;
        }
        out += "<li>" + lead(block.text) + "</li>";
        return;
      }
      if (listOpen) {
        out += "</ul>";
        listOpen = false;
      }
      if (block.type === "h2") out += "<h3>" + esc(block.text) + "</h3>";
      else if (block.type === "h3") out += "<h4>" + esc(block.text) + "</h4>";
      else out += "<p>" + esc(block.text) + "</p>";
    });
    if (listOpen) out += "</ul>";
    return out;
  }
  function personHtml(value) {
    var separator =
      value.indexOf(" - ") >= 0
        ? " - "
        : value.indexOf(" – ") >= 0
          ? " – "
          : value.indexOf(" : ") >= 0
            ? " : "
            : null;
    if (!separator)
      return '<span class="v3-person-name">' + esc(value) + "</span>";
    var parts = value.split(separator);
    return (
      '<span class="v3-person-name">' +
      esc(parts.shift()) +
      "</span>" +
      esc(separator + parts.join(separator))
    );
  }
  function interviewQuestions(value) {
    return String(value)
      .split(/(?=Formulation possible\s*:|Relance(?:\s+\d+)?\s*:)/g)
      .filter(Boolean)
      .map(function (part) {
        var colon = part.indexOf(":"),
          label = colon < 0 ? "" : part.slice(0, colon + 1),
          question = colon < 0 ? part : part.slice(colon + 1).trim();
        return (
          '<p class="v3-interview-question">' +
          (label ? "<strong>" + esc(label) + "</strong> " : "") +
          esc(question) +
          "</p>"
        );
      })
      .join("");
  }
  function renderAbout() {
    document.getElementById("about-introduction").innerHTML = blockHtml(
      data.about.introduction,
    );
    document.getElementById("about-analysis").innerHTML = blockHtml(
      data.about.analysis,
    );
    document.getElementById("about-methodology").innerHTML = blockHtml(
      data.about.methodology,
    );
    document.getElementById("about-interviews").innerHTML =
      data.about.interviewGuide
        .map(function (row) {
          return (
            '<article class="v3-interview-card"><h4>' +
            esc(row.theme) +
            "</h4>" +
            interviewQuestions(row.questions) +
            "</article>"
          );
        })
        .join("");
    document.getElementById("about-thanks").innerHTML =
      data.about.acknowledgmentsIntro
        .map(function (p) {
          return "<p>" + esc(p) + "</p>";
        })
        .join("");
    document.getElementById("participant-list").innerHTML =
      data.about.participants
        .map(function (p) {
          return "<li>" + personHtml(p) + "</li>";
        })
        .join("");
    document.getElementById("coordinator-intro").textContent =
      data.about.coordinatorsIntro;
    document.getElementById("coordinator-list").innerHTML =
      data.about.coordinators
        .map(function (p) {
          return "<li>" + personHtml(p) + "</li>";
        })
        .join("");
  }
  function initFeedbackForm() {
    var form = document.getElementById("feedback-form");
    var status = document.getElementById("feedback-status");
    if (!form || !status) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.reportValidity()) return;

      var button = form.querySelector('button[type="submit"]');
      button.disabled = true;
      status.className = "v3-feedback-status is-sending";
      status.textContent = "Envoi en cours…";

      fetch(form.dataset.endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
        .then(function (response) {
          return response.text().then(function (body) {
            var result = {};
            try {
              result = body ? JSON.parse(body) : {};
            } catch (error) {
              result = {};
            }
            if (!response.ok || result.success === false) {
              throw new Error("feedback-send-failed");
            }
            return result;
          });
        })
        .then(function () {
          form.reset();
          status.className = "v3-feedback-status is-success";
          status.textContent = "Merci, votre commentaire a bien été transmis à l’équipe TÉÉ.";
        })
        .catch(function () {
          status.className = "v3-feedback-status is-error";
          status.textContent = "L’envoi a échoué. Veuillez réessayer ou écrire directement à info@teenational.ca.";
        })
        .finally(function () {
          button.disabled = false;
        });
    });
  }
  function openDoc(id) {
    var d = docById(id);
    if (!d) return;
    if (d.type === "fiche") openAction(id, true);
    else openCompass(id, true);
  }

  var header = document.querySelector(".site-header");
  var menuToggle = document.querySelector(".mobile-nav-toggle");

  function setViewportState() {
    var width = window.innerWidth;
    var viewportClass = "viewport-default";

    if (width >= 1920) viewportClass = "viewport-xxl";
    else if (width >= 1536) viewportClass = "viewport-xl";
    else if (width >= 1280) viewportClass = "viewport-lg";
    else if (width >= 1024) viewportClass = "viewport-md";
    else if (width >= 768) viewportClass = "viewport-sm";
    else if (width >= 480) viewportClass = "viewport-xs";
    else viewportClass = "viewport-xxs";

    document.body.setAttribute("data-viewport", viewportClass);
  }

  setViewportState();
  window.addEventListener("resize", setViewportState, { passive: true });

  var welcomeDialog = document.getElementById("welcome-dialog");
  var welcomeDialogClose = document.getElementById("welcome-dialog-close");

  if (welcomeDialog && welcomeDialogClose) {
    welcomeDialogClose.addEventListener("click", function () {
      welcomeDialog.close();
    });
    welcomeDialog.addEventListener("click", function (event) {
      if (event.target === welcomeDialog) welcomeDialog.close();
    });
    welcomeDialog.showModal();
  }

  if (header && menuToggle) {
    menuToggle.addEventListener("click", function () {
      var isOpen = header.classList.toggle("is-open");
      menuToggle.classList.toggle("is-active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fermer le menu" : "Ouvrir le menu"
      );
    });

    header.querySelectorAll(".mobile-nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("is-open");
        menuToggle.classList.remove("is-active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Ouvrir le menu");
      });
    });

    document.addEventListener("click", function (event) {
      if (!header.contains(event.target) && header.classList.contains("is-open")) {
        header.classList.remove("is-open");
        menuToggle.classList.remove("is-active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Ouvrir le menu");
      }
    });
  }

  document.addEventListener("click", function (event) {
    var b = event.target.closest("[data-observation]");
    if (b) {
      var id = b.dataset.observation;
      state.observations[id] = !state.observations[id];
      renderOrientation();
      return;
    }
    b = event.target.closest("[data-profile]");
    if (b) {
      var pid = b.dataset.profile;
      state.profiles[pid] = !state.profiles[pid];
      renderOrientation();
      return;
    }
    b = event.target.closest("[data-stage]");
    if (b) {
      state.stage = state.stage === b.dataset.stage ? null : b.dataset.stage;
      renderOrientation();
      return;
    }
    b = event.target.closest("[data-open-doc]");
    if (b) {
      openDoc(b.dataset.openDoc);
      return;
    }
    b = event.target.closest("[data-action]");
    if (b) {
      openAction(b.dataset.action, true);
      return;
    }
    b = event.target.closest("[data-compass]");
    if (b) {
      openCompass(b.dataset.compass, true);
      return;
    }
    b = event.target.closest("[data-level]");
    if (b) {
      state.level = Number(b.dataset.level);
      renderLevels();
      return;
    }
    b = event.target.closest("[data-open-level]");
    if (b) {
      state.level = Number(b.dataset.openLevel);
      renderLevels();
      document
        .getElementById("navigation")
        .scrollIntoView({ behavior: "smooth" });
      return;
    }
    b = event.target.closest("[data-reveal]");
    if (b) {
      var m = document.getElementById(b.dataset.reveal),
        open = m.classList.toggle("is-open");
      b.textContent = (open ? "−" : "＋") + " Ce que cela peut cacher";
      return;
    }
  });
  document.addEventListener("change", function (event) {
    var b = event.target.closest("[data-step]");
    if (b) {
      state.checked[b.dataset.step] = b.checked;
      renderHandoff();
    }
  });
  document
    .getElementById("orientation-reset")
    .addEventListener("click", function () {
      state.observations = {};
      state.profiles = {};
      state.stage = null;
      renderOrientation();
    });
  document
    .getElementById("about-expand")
    .addEventListener("click", function () {
      document.querySelectorAll(".v3-about details").forEach(function (d) {
        d.open = true;
      });
    });
  document
    .getElementById("about-collapse")
    .addEventListener("click", function () {
      document.querySelectorAll(".v3-about details").forEach(function (d) {
        d.open = false;
      });
    });
  renderOrientation();
  renderActions();
  renderCompassSelector();
  renderLevels();
  renderHandoff();
  renderAbout();
  initFeedbackForm();
  
  // Reveal initialization moved to js/animations.js
})();
