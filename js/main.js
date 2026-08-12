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
          },
          {
            t: "Quand le thème de la guerre s'invite à l'école",
            d: "Aide-mémoire pratique pour les intervenant(e)s scolaires. Papazian-Zohrabian et Mamprin, via l'Institut universitaire SHERPA.",
            org: "SHERPA",
            portee: "national",
          },
          {
            t: "Renforcez votre capacité à répondre efficacement aux besoins des immigrants et des réfugiés en santé mentale",
            d: "Une trousse d'outils pour fournisseurs de services d'établissement, sociaux et de santé. Centre de toxicomanie et de santé mentale (CAMH).",
            org: "CAMH",
            portee: "national",
          },
          {
            t: "Favoriser la santé mentale des élèves réfugiés de l'Alberta",
            d: "Alberta Teachers' Association (ATA).",
            org: "ATA",
            portee: "alberta",
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
          "Sécuriser l’identité de l’élève pour transformer la barrière de la langue en un vecteur d’apprentissage.",
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
          },
          {
            t: "Parlerpictos",
            d: "Banque de pictogrammes élaborée et réalisée par des intervenants scolaires. Centre de suppléance à la communication orale et écrite (CSCOE-Québec).",
            org: "CSCOE",
            portee: "quebec",
          },
          {
            t: "Des pictogrammes pour surmonter la barrière de la langue",
            d: "Une étude de cas dans une ressource intermédiaire. Juliana Alvarez, via l'Institut universitaire SHERPA.",
            org: "SHERPA",
            portee: "national",
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
          "Parents en situation de retrait ou de détachement relationnel avec l’école.",
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
          },
          {
            t: "Planifier la participation et l'engagement des parents",
            d: "Un guide pour les parents et les écoles. Conseil ontarien des directeurs de l'éducation (CODE).",
            org: "CODE",
            portee: "ontario",
          },
          {
            t: "Collaboration école-familles immigrantes-communauté",
            d: "Quelles pratiques des acteurs concernés ? Thèse doctorale : Khaoula Boulaamane, 2022.",
            org: "Thèse",
            portee: "national",
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
          "Familles manifestant de la réticence ou du déni face aux difficultés d'adaptation ou d'apprentissage de l'élève.",
        objectif:
          "Co-construire le sens des observations scolaires avec les parents pour transformer le diagnostic en un levier de réussite.",
        tone: "gold",
        tag: "Médiation",
        tags: ["parent", "famille", "preoccupant"],
        resume:
          "Co-construire le sens des observations scolaires avec les parents pour transformer le diagnostic en un levier de réussite.",
        available: false,
      },
      {
        id: "f5",
        num: 5,
        type: "fiche",
        titre: "Barrières financières",
        cible:
          "Élèves et familles vivant une situation de précarité économique.",
        objectif:
          "Déstigmatiser l’accès aux ressources pour assurer l’équité des chances et réduire le stress lié aux besoins de subsistance.",
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
          },
          {
            t: "Sécurité alimentaire",
            d: "Club des petits déjeuners, Enfants FORTSmidables, Après la cloche, etc.",
            org: "Divers",
            portee: "national",
          },
          {
            t: "Services et prestations",
            d: "Orienteur en mesures d'aide financière (Benefits Wayfinder).",
            org: "Benefits Wayfinder",
            portee: "national",
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
        tone: "blue",
        tag: "Littératie",
        tags: ["parent", "langue", "famille", "routine"],
        resume:
          "Agir comme un vulgarisateur stratégique pour restaurer la confiance des parents et leur capacité à soutenir le parcours scolaire de leur enfant.",
        available: false,
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
          },
          {
            t: "Parce que la vie continue",
            d: "Aider les enfants et les adolescents à vivre la séparation et le divorce. Agence de la santé publique du Canada.",
            org: "ASPC",
            portee: "national",
          },
          {
            t: "Families change",
            d: "Gérer le changement, renforcer la résilience. Justice Education Society of British Columbia (JES).",
            org: "JES",
            portee: "cb",
          },
          {
            t: "TAO Tel-Aide",
            d: "Ligne d'écoute empathique.",
            org: "TAO",
            portee: "national",
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
          "Élèves et familles vivant loin de l'école ou dans des régions où les services en français sont limités.",
        objectif:
          "Réduire la « distance » (physique et administrative) pour garantir à l'élève un accès aux ressources identiques à celui du milieu urbain.",
        tone: "gold",
        tag: "Accès",
        tags: ["materiel", "famille", "administratif", "routine"],
        resume:
          "Réduire la « distance » (physique et administrative) pour garantir à l'élève un accès aux ressources identiques à celui du milieu urbain.",
        available: false,
      },
      {
        id: "f9",
        num: 9,
        type: "fiche",
        titre: "Références culturelles",
        cible:
          "Élèves et familles dont les repères culturels divergent des normes de l'école canadienne.",
        objectif:
          "Harmoniser les référents culturels pour lever les malentendus et favoriser une intégration respectueuse de l'identité d'origine.",
        tone: "red",
        tag: "Interculturalité",
        tags: ["parent", "famille", "preoccupant"],
        resume:
          "Harmoniser les référents culturels pour lever les malentendus et favoriser une intégration respectueuse de l'identité d'origine.",
        available: false,
      },
      {
        id: "f10",
        num: 10,
        type: "fiche",
        titre: "Vulnérabilité du statut légal",
        cible:
          "Élèves et familles dont l'instabilité du statut d’immigration génère un stress chronique et limite l'accès aux services.",
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
          },
          {
            t: "Trouver des services pour les réfugiés au Canada",
            d: "Site web de l'IRCC.",
            org: "IRCC",
            portee: "national",
          },
          {
            t: "Justice pas-à-pas (Steps to Justice)",
            d: "Bien que basée en Ontario, cette plateforme est un modèle de référence en matière de littératie juridique utilisé à travers le Canada. Community Legal Education Ontario (CLEO).",
            org: "CLEO",
            portee: "ontario",
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
        titre: "Jeunes du secondaire",
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
          },
          {
            t: "L'Expérience Nationale - Katimavik",
            d: "Offrant aux jeunes de 17 à 25 ans un cadre de vie structuré, entièrement financé, qui renforce leur estime de soi et leur sentiment d'appartenance par l'engagement communautaire concret.",
            org: "Katimavik",
            portee: "national",
          },
          {
            t: "Jeunesse, J'écoute",
            d: "Service de santé mentale en ligne disponible 24/7 au Canada, offrant un soutien gratuit, multilingue et confidentiel pour aider les jeunes à libérer leurs émotions.",
            org: "Jeunesse, J'écoute",
            portee: "national",
          },
          {
            t: "Programme de Parentalité Positive (Triple P)",
            d: "Conçu pour aider les parents à prévenir et traiter les problèmes comportementaux et émotionnels chez les enfants et les adolescents.",
            org: "Triple P",
            portee: "national",
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
          "Interculturalité, enjeux de genre et prévention des risques d'exploitation",
        tone: "gold",
        tags: ["eleve-sec", "decrochage", "preoccupant", "urgent"],
        resume:
          "Interculturalité, enjeux de genre et prévention des risques d'exploitation",
        available: false,
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
          },
          {
            t: "Insécurité linguistique : nos jeunes ne sont pas malades !",
            d: "Phyllis Dalley, Ph. D., via l'ACELF.",
            org: "ACELF",
            portee: "national",
          },
          {
            t: "Mon accent, ton problème - Insécurité linguistique",
            d: "Démystifier les mythes et les réalités en lien avec la Loi sur les langues officielles, les accents et l'insécurité linguistique en contexte minoritaire. Office des télécommunications éducatives de langue française de l'Ontario (TFO).",
            org: "TFO",
            portee: "ontario",
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
        tone: "mint",
        tags: ["eleve-prim", "eleve-sec", "famille", "preoccupant"],
        resume:
          "Inclusion ethnique, diversité religieuse et lutte contre les biais systémiques",
        available: false,
      },
      {
        id: "b5",
        type: "boussole",
        titre: "Élèves en situation de handicap",
        sousTitre:
          "Besoins particuliers, retards de diagnostic et accès aux soins spécialisés",
        tone: "red",
        tags: ["eleve-prim", "eleve-sec", "famille", "preoccupant"],
        resume:
          "Besoins particuliers, retards de diagnostic et accès aux soins spécialisés",
        available: false,
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
      "Sandrine Coissieux - Responsable des services aux résidents permanents pour La Coopérative d'Intégration Francophone de l'Île-du-Prince-Édouard",
      "Saran Toure - TÉÉ pour La Francophonie Canadienne Plurielle",
      "Tina Kaloa - TÉÉ pour Le Conseil Scolaire FrancoSud",
      "Verno Nyembo - TÉÉ pour Le Service d'Accueil et d'Inclusion Francophone en Saskatchewan",
    ],
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
  function toast(message) {
    var el = document.getElementById("toast");
    el.textContent = message;
    el.classList.add("is-visible");
    setTimeout(function () {
      el.classList.remove("is-visible");
    }, 2600);
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
              '<button type="button" class="v2-choice' +
              (selected ? " is-selected" : "") +
              '" data-observation="' +
              o.id +
              '" aria-pressed="' +
              selected +
              '"><span>' +
              (selected ? "✓" : "") +
              "</span><strong>" +
              esc(o.label) +
              "</strong></button>"
            );
          })
          .join("");
        return (
          '<p class="v2-category">' +
          esc(category) +
          '</p><div class="v2-choice-grid">' +
          choices +
          "</div>"
        );
      })
      .join("");
    document.getElementById("profile-choices").innerHTML = data.compasses
      .map(function (d) {
        var selected = !!state.profiles[d.id];
        return (
          '<button type="button" class="v2-choice' +
          (selected ? " is-selected" : "") +
          '" data-profile="' +
          d.id +
          '" aria-pressed="' +
          selected +
          '"><span>' +
          (selected ? "✓" : "") +
          "</span><strong>" +
          esc(d.titre) +
          "</strong></button>"
        );
      })
      .join("");
    document.getElementById("stage-choices").innerHTML = stages
      .map(function (s) {
        return (
          '<button type="button" class="v2-stage' +
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
        ? '<div class="v2-urgent"><strong>Situation à risque immédiat</strong>Consultez d’abord le niveau 4 : évaluer le danger, noter les observations et agir en concertation avec votre hiérarchie.<button class="v2-reset" style="margin-top:8px" type="button" data-open-level="3">Ouvrir le niveau 4 →</button></div>'
        : "";
    var zone = document.getElementById("orientation-results");
    if (!results.length) {
      zone.innerHTML =
        urgent +
        '<div class="v2-empty"><span>⌖</span><strong>Vos résultats apparaîtront ici</strong><p>Sélectionnez un ou plusieurs éléments pour commencer.</p></div>';
      return;
    }
    zone.innerHTML =
      urgent +
      '<div class="v2-result-list">' +
      results
        .map(function (x) {
          var d = x.doc;
          return (
            '<button class="v2-result" type="button" data-open-doc="' +
            d.id +
            '"><span class="v2-result-top"><span class="v2-result-type">' +
            (d.type === "fiche" ? "Fiche d’action " + d.num : "Boussole") +
            '</span><span class="v2-result-score">' +
            x.score +
            " correspondance" +
            (x.score > 1 ? "s" : "") +
            "</span></span><strong>" +
            esc(d.titre) +
            "</strong><small>" +
            (d.available ? "Contenu intégré" : "Aperçu du prototype") +
            " →</small></button>"
          );
        })
        .join("") +
      "</div>";
  }

  function renderActions(query) {
    var needle = norm(query);
    var docs = data.actions.filter(function (d) {
      return (
        !needle ||
        norm([d.titre, d.cible, d.objectif, d.tag].join(" ")).includes(needle)
      );
    });
    document.getElementById("action-grid").innerHTML = docs
      .map(function (d) {
        return (
          '<button class="action-card tone-' +
          d.tone +
          (state.action === d.id ? " is-selected" : "") +
          '" type="button" data-action="' +
          d.id +
          '" aria-pressed="' +
          (state.action === d.id) +
          '"><span class="action-number">' +
          String(d.num).padStart(2, "0") +
          '</span><span class="action-tag">' +
          esc(d.tag) +
          "</span><strong>" +
          esc(d.titre) +
          '</strong><span class="v2-status ' +
          (d.available ? "" : "preview") +
          '">' +
          (d.available ? "Contenu intégré" : "Aperçu") +
          '</span><span class="action-arrow" aria-hidden="true">↗</span></button>'
        );
      })
      .join("");
    document.getElementById("action-empty").hidden = docs.length > 0;
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
      '</div><div class="detail-tools"><button class="tool-button" type="button" data-listen="' +
      d.id +
      '"><span aria-hidden="true">◖</span> Écouter</button><button class="tool-button" type="button" data-print-page><span aria-hidden="true">□</span> Imprimer</button></div></div>'
    );
  }
  function resourcesHtml(resources) {
    return (
      '<div class="v2-resources">' +
      (resources || [])
        .map(function (r) {
          return (
            '<a class="v2-resource-link" href="#" data-resource-link><strong>' +
            esc(r.t) +
            '<span class="v2-external" aria-label="Lien externe">↗</span></strong><small>' +
            esc(r.d) +
            "</small></a>"
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
          " »</strong><small>— " +
          esc(c.auteur) +
          ". " +
          esc(c.note) +
          "</small></div></blockquote>"
      : "";
  }
  function actionPanels(d) {
    var detect =
      '<details class="detail-panel tone-red" open><summary><span>◎</span>Détecter<i aria-hidden="true">⌄</i></summary><div style="padding:0 18px 18px">' +
      d.detecter
        .map(function (x, i) {
          return (
            '<div class="v2-detect-item"><p>' +
            lead(x.s) +
            '</p><button class="v2-reveal" type="button" data-reveal="a-' +
            i +
            '">＋ Ce que cela peut cacher</button><p class="v2-hidden-meaning" id="a-' +
            i +
            '"><strong>Ce que cela peut cacher :</strong> ' +
            esc(x.c) +
            "</p></div>"
          );
        })
        .join("") +
      "</div></details>";
    var agir =
      '<details class="detail-panel tone-blue" open><summary><span>↗</span>Agir<i aria-hidden="true">⌄</i></summary>' +
      list(d.agir) +
      "</details>";
    var init =
      '<details class="detail-panel tone-mint" open><summary><span>✦</span>Initiatives concrètes<i aria-hidden="true">⌄</i></summary>' +
      list(d.initiatives) +
      "</details>";
    var res =
      '<details class="detail-panel tone-gold" open><summary><span>↗</span>Appuis et ressources<i aria-hidden="true">⌄</i></summary>' +
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
    state.action = id;
    renderActions(document.getElementById("action-search").value);
    var shell = document.getElementById("action-detail");
    shell.hidden = false;
    document.getElementById("action-detail-inner").innerHTML =
      headerHtml(d, "Fiche d’action " + d.num) +
      (d.available
        ? actionPanels(d)
        : '<div class="prototype-notice"><span>✦</span><div><strong>Structure prévue dans la version complète</strong><p>Les rubriques « Détecter », « Agir », « Initiatives concrètes » et « Appuis et ressources » reprendront ici le texte intégral de la fiche ' +
          d.num +
          ". Le parcours d’orientation peut déjà vous mener vers cette fiche.</p></div></div>");
    if (scroll)
      setTimeout(function () {
        shell.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 20);
  }

  function renderCompassSelector() {
    document.getElementById("compass-selector").innerHTML = data.compasses
      .map(function (d) {
        return (
          '<button type="button" role="tab" data-compass="' +
          d.id +
          '" aria-selected="' +
          (state.compass === d.id) +
          '" class="' +
          (state.compass === d.id ? "is-selected" : "") +
          '"><span aria-hidden="true">⌖</span>' +
          esc(d.titre) +
          "</button>"
        );
      })
      .join("");
  }
  function compassPanels(d) {
    var a =
      '<details class="compass-panel tone-red" open><summary>' +
      esc(d.colA.titre) +
      "<span>＋</span></summary>" +
      list(d.colA.items) +
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
    state.compass = id;
    renderCompassSelector();
    var shell = document.getElementById("compass-detail");
    shell.hidden = false;
    document.getElementById("compass-detail-inner").innerHTML =
      '<div class="compass-title"><span class="compass-mark">⌖</span><div><p>Boussole d’accompagnement</p><h3>' +
      esc(d.titre) +
      "</h3><span>" +
      esc(d.sousTitre) +
      "</span></div></div>" +
      (d.available
        ? compassPanels(d)
        : '<div class="prototype-notice light-notice"><span>⌖</span><div><strong>Cette boussole est prête à être intégrée</strong><p>La structure interactive est définie. Le texte intégral de cette boussole sera ajouté dans la version complète.</p></div></div>');
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
            '<article class="v2-principle"><span>' +
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
        return (
          '<article class="handoff-card tone-' +
          tone +
          '"><div class="handoff-card-title"><span>' +
          (e.phase === "Avant" ? "↺" : e.phase === "Pendant" ? "△" : "→") +
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
  function speakDoc(id) {
    var d = docById(id);
    if (!d || !("speechSynthesis" in window)) {
      toast("La lecture vocale n’est pas disponible dans ce navigateur.");
      return;
    }
    var parts = [d.titre, d.cible || d.sousTitre, d.objectif || ""];
    if (d.available && d.type === "fiche")
      parts.push.apply(
        parts,
        d.detecter
          .flatMap(function (x) {
            return [x.s, x.c];
          })
          .concat(d.agir, d.initiatives),
      );
    if (d.available && d.type === "boussole")
      parts.push.apply(parts, d.colA.items.concat(d.colB.items, [d.eviter]));
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(parts.join(". "));
    u.lang = "fr-CA";
    u.rate = 0.95;
    speechSynthesis.speak(u);
  }
  function openDoc(id) {
    var d = docById(id);
    if (!d) return;
    if (d.type === "fiche") openAction(id, true);
    else openCompass(id, true);
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
    b = event.target.closest("[data-resource-link]");
    if (b) {
      event.preventDefault();
      toast("Le lien externe sera connecté dans la version finale.");
      return;
    }
    b = event.target.closest("[data-listen]");
    if (b) {
      speakDoc(b.dataset.listen);
      return;
    }
    if (event.target.closest("[data-print-page]")) window.print();
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
    .getElementById("action-search")
    .addEventListener("input", function (e) {
      renderActions(e.target.value);
    });
  document.getElementById("participant-list").innerHTML = data.participants
    .map(function (p) {
      return "<li>" + esc(p) + "</li>";
    })
    .join("");
  document
    .getElementById("feedback-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      toast("Aperçu seulement : aucune rétroaction n’a été transmise.");
    });
  renderOrientation();
  renderActions("");
  renderCompassSelector();
  renderLevels();
  renderHandoff();
})();
