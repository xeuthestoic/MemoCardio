window.DEFAULT_CARDS = [

/* =========================
   🌐 OSI — COUCHES 1 À 4
========================= */

/* 🔵 COUCHE 4 — TRANSPORT */

{
  subject: "Réseaux",
  question: "Quel est le rôle de la couche Transport ?",
  answer: "Acheminer les données entre applications"
},
{
  subject: "Réseaux",
  question: "Entre quelles entités communique la couche Transport ?",
  answer: "Entre deux processus applicatifs"
},
{
  subject: "Réseaux",
  question: "Quels protocoles sont utilisés en couche 4 ?",
  answer: "TCP et UDP"
},
{
  subject: "Réseaux",
  question: "Qu'est-ce qu'un port ?",
  answer: "Un numéro identifiant une application (0 à 65535)"
},
{
  subject: "Réseaux",
  question: "Pourquoi utiliser des ports ?",
  answer: "Permettre à plusieurs applications d'utiliser le réseau"
},
{
  subject: "Réseaux",
  question: "Qu'est-ce que le multiplexage ?",
  answer: "Faire passer plusieurs communications"
},
{
  subject: "Réseaux",
  question: "Qu'est-ce que la segmentation ?",
  answer: "Découper les données en segments"
},
{
  subject: "Réseaux",
  question: "Qu'est-ce que le contrôle de flux ?",
  answer: "Adapter la vitesse d'envoi"
},
{
  subject: "Réseaux",
  question: "TCP est-il fiable ?",
  answer: "Oui"
},
{
  subject: "Réseaux",
  question: "UDP est-il fiable ?",
  answer: "Non"
},
{
  subject: "Réseaux",
  question: "Quel protocole est le plus rapide ?",
  answer: "UDP"
},
{
  subject: "Réseaux",
  question: "Quel protocole garantit l'ordre ?",
  answer: "TCP"
},
{
  subject: "Réseaux",
  question: "TCP utilise-t-il une connexion ?",
  answer: "Oui"
},
{
  subject: "Réseaux",
  question: "UDP utilise-t-il une connexion ?",
  answer: "Non"
},
{
  subject: "Réseaux",
  question: "Étapes du handshake TCP ?",
  answer: "SYN → SYN-ACK → ACK"
},
{
  subject: "Réseaux",
  question: "Pourquoi TCP est plus lent ?",
  answer: "Vérification + retransmission"
},
{
  subject: "Réseaux",
  question: "Que garantit TCP ?",
  answer: "Fiabilité, ordre, intégrité"
},
{
  subject: "Réseaux",
  question: "Que ne garantit pas UDP ?",
  answer: "Fiabilité et ordre"
},
{
  subject: "Réseaux",
  question: "Taille en-tête UDP ?",
  answer: "8 octets"
},
{
  subject: "Réseaux",
  question: "Taille minimale TCP ?",
  answer: "20 octets"
},

/* 🟢 COUCHE 3 — RÉSEAU */

{
  subject: "Réseaux",
  question: "Quel est le rôle de la couche Réseau ?",
  answer: "Acheminer les paquets entre réseaux"
},
{
  subject: "Réseaux",
  question: "Quel protocole principal ?",
  answer: "IP"
},
{
  subject: "Réseaux",
  question: "Qu'est-ce qu'une adresse IP ?",
  answer: "Identifiant unique d'une machine"
},
{
  subject: "Réseaux",
  question: "IPv4 taille ?",
  answer: "32 bits"
},
{
  subject: "Réseaux",
  question: "IPv6 taille ?",
  answer: "128 bits"
},
{
  subject: "Réseaux",
  question: "Qu'est-ce que le routage ?",
  answer: "Choisir le meilleur chemin"
},
{
  subject: "Réseaux",
  question: "Quel équipement couche 3 ?",
  answer: "Routeur"
},
{
  subject: "Réseaux",
  question: "Qu'est-ce qu'une IP privée ?",
  answer: "Adresse interne"
},
{
  subject: "Réseaux",
  question: "Exemple IP privée ?",
  answer: "192.168.x.x"
},
{
  subject: "Réseaux",
  question: "Qu'est-ce que NAT ?",
  answer: "Traduction IP privée/public"
},
{
  subject: "Réseaux",
  question: "Qu'est-ce qu'un masque ?",
  answer: "Sépare réseau/hôte"
},
{
  subject: "Réseaux",
  question: "Que signifie /24 ?",
  answer: "24 bits réseau"
},
{
  subject: "Réseaux",
  question: "Qu'est-ce qu'un paquet ?",
  answer: "Unité couche 3"
},
{
  subject: "Réseaux",
  question: "Quel protocole teste réseau ?",
  answer: "ICMP"
},
{
  subject: "Réseaux",
  question: "Ping utilise quoi ?",
  answer: "ICMP"
},

/* 🟡 COUCHE 2 — LIAISON */

{
  subject: "Réseaux",
  question: "Rôle couche Liaison ?",
  answer: "Transmission locale"
},
{
  subject: "Réseaux",
  question: "Qu'est-ce qu'une MAC ?",
  answer: "Adresse physique unique"
},
{
  subject: "Réseaux",
  question: "MAC longueur ?",
  answer: "48 bits"
},
{
  subject: "Réseaux",
  question: "Unité couche 2 ?",
  answer: "Trame"
},
{
  subject: "Réseaux",
  question: "Protocole principal ?",
  answer: "Ethernet"
},
{
  subject: "Réseaux",
  question: "Quel équipement couche 2 ?",
  answer: "Switch"
},
{
  subject: "Réseaux",
  question: "À quoi sert ARP ?",
  answer: "Associer IP à MAC"
},
{
  subject: "Réseaux",
  question: "Différence hub/switch ?",
  answer: "Switch intelligent"
},
{
  subject: "Réseaux",
  question: "MAC signifie ?",
  answer: "Media Access Control"
},
{
  subject: "Réseaux",
  question: "Transmission locale ou globale ?",
  answer: "Locale"
},

/* 🟣 COUCHE 1 — PHYSIQUE */

{
  subject: "Réseaux",
  question: "Rôle couche Physique ?",
  answer: "Transmettre les bits"
},
{
  subject: "Réseaux",
  question: "Unité couche 1 ?",
  answer: "Bit"
},
{
  subject: "Réseaux",
  question: "Types de signaux ?",
  answer: "Électrique, optique, radio"
},
{
  subject: "Réseaux",
  question: "Exemples support ?",
  answer: "Câble, fibre"
},
{
  subject: "Réseaux",
  question: "Équipement couche 1 ?",
  answer: "Hub"
},
{
  subject: "Réseaux",
  question: "Gère-t-elle les adresses ?",
  answer: "Non"
},
{
  subject: "Réseaux",
  question: "Que transporte-t-elle ?",
  answer: "0 et 1"
},

/* 🔥 BONUS / PIÈGES */

{
  subject: "Réseaux",
  question: "Combien de couches OSI ?",
  answer: "7"
},
{
  subject: "Réseaux",
  question: "Encapsulation ?",
  answer: "Ajout d'en-têtes"
},
{
  subject: "Réseaux",
  question: "Décapsulation ?",
  answer: "Retrait des en-têtes"
},
{
  subject: "Réseaux",
  question: "Couche IP ?",
  answer: "3"
},
{
  subject: "Réseaux",
  question: "Couche MAC ?",
  answer: "2"
},
{
  subject: "Réseaux",
  question: "Couche ports ?",
  answer: "4"
},
{
  subject: "Réseaux",
  question: "Couche signal ?",
  answer: "1"
},
{
  subject: "Réseaux",
  question: "TCP ou UDP pour DNS ?",
  answer: "UDP (principalement)"
},
{
  subject: "Réseaux",
  question: "DHCP utilise ?",
  answer: "UDP"
},
{
  subject: "Réseaux",
  question: "ICMP utilise TCP ?",
  answer: "Non"
}

  /* =========================
     🔴 CYBER / RENSEIGNEMENT
  ========================= */

  {
    subject: "Cyber",
    question: "Budget de l'Intelligence Community en 2025 ?",
    answer: "101.1 milliards de dollars"
  },
  {
    subject: "Cyber",
    question: "Service français équivalent à la DIA ?",
    answer: "Direction du Renseignement militaire"
  },
  {
    subject: "Cyber",
    question: "Qu'est-ce que l'accord UKUSA ?",
    answer: "Accord de coopération SIGINT entre 5 pays anglophones"
  },
  {
    subject: "Cyber",
    question: "Milieu principal d'action de l'ONI ?",
    answer: "La mer et les océans"
  },
  {
    subject: "Cyber",
    question: "Nombre de services dans l'Intelligence Community ?",
    answer: "18"
  },

  {
    subject: "Cyber",
    question: "Mission principale de la DST ?",
    answer: "Contre-espionnage et antiterrorisme"
  },
  {
    subject: "Cyber",
    question: "Année de création de la DCRI ?",
    answer: "2008"
  },
  {
    subject: "Cyber",
    question: "Pourquoi la DGSI remplace la DCRI ?",
    answer: "Renforcer la lutte antiterroriste après 2012"
  },
  {
    subject: "Cyber",
    question: "Nombre de services dans le premier cercle français ?",
    answer: "6"
  },
  {
    subject: "Cyber",
    question: "Effectif approximatif de la DGSI ?",
    answer: "Environ 5000 agents"
  },

  {
    subject: "Cyber",
    question: "Nombre d'agents de la DNRT ?",
    answer: "3000"
  },
  {
    subject: "Cyber",
    question: "Service rattaché au ministère de la justice ?",
    answer: "SNRP"
  },
  {
    subject: "Cyber",
    question: "Service impliqué dans les attentats 2018/2019 ?",
    answer: "DRPP"
  },
  {
    subject: "Cyber",
    question: "Zone d'action du SNRP ?",
    answer: "France métropolitaine et outre-mer"
  },
  {
    subject: "Cyber",
    question: "Année de création du GIC ?",
    answer: "1960"
  },

  {
    subject: "Cyber",
    question: "Service de contre-espionnage militaire allemand ?",
    answer: "MAD"
  },
  {
    subject: "Cyber",
    question: "Service allemand créé en 1956 ?",
    answer: "BND"
  },
  {
    subject: "Cyber",
    question: "Service surveillant la population en RDA ?",
    answer: "Stasi"
  },
  {
    subject: "Cyber",
    question: "Budget du BFV ?",
    answer: "500 millions"
  },
  {
    subject: "Cyber",
    question: "Effectif du BND ?",
    answer: "Environ 6500"
  },

  {
    subject: "Cyber",
    question: "Filiation directe du FSB et SVR ?",
    answer: "KGB"
  },
  {
    subject: "Cyber",
    question: "Service intérieur russe ?",
    answer: "FSB"
  },
  {
    subject: "Cyber",
    question: "Société privée liée à l'État russe ?",
    answer: "Wagner"
  },
  {
    subject: "Cyber",
    question: "Forces spéciales russes ?",
    answer: "Spetsnaz"
  },

  {
    subject: "Cyber",
    question: "Statut du VEVAK ?",
    answer: "Ministère civil d'État"
  },
  {
    subject: "Cyber",
    question: "Mission principale du VEVAK ?",
    answer: "Renseignement et contre-espionnage"
  },
  {
    subject: "Cyber",
    question: "Organisation liée au Guide suprême ?",
    answer: "IRGC"
  },
  {
    subject: "Cyber",
    question: "Année de création de l'IRGC ?",
    answer: "1979"
  },
  {
    subject: "Cyber",
    question: "Nature de l'IRGC ?",
    answer: "Organisation militaire / paramilitaire"
  },

  {
    subject: "Cyber",
    question: "Organisation à l'origine des services israéliens ?",
    answer: "Haganah"
  },
  {
    subject: "Cyber",
    question: "Unité spécialisée en guerre électronique ?",
    answer: "Unité 8200"
  },
  {
    subject: "Cyber",
    question: "Service de sécurité intérieure israélien ?",
    answer: "Shin Bet"
  },
  {
    subject: "Cyber",
    question: "Service de renseignement militaire israélien ?",
    answer: "Aman"
  },
  {
    subject: "Cyber",
    question: "Nom des civils aidant les services israéliens ?",
    answer: "Sayanim"
  },

  {
    subject: "Cyber",
    question: "Rôle principal du MI5 ?",
    answer: "Contre-espionnage et antiterrorisme"
  },
  {
    subject: "Cyber",
    question: "Année de création du MI6 ?",
    answer: "1909"
  },
  {
    subject: "Cyber",
    question: "Où se situe le GCHQ ?",
    answer: "Cheltenham (The Doughnut)"
  },
  {
    subject: "Cyber",
    question: "Directeur du MI5 (2020+) ?",
    answer: "Ken McCallum"
  },

  /* =========================
     🧠 Physique
  ========================= */

  {
    subject: "Physique",
    question: "Quelle est la formule du pont diviseur de tension ?",
    answer: "U_AB = (R2 + R3) / (R1 + R2 + R3) × E"
  },
  {
    subject: "Physique",
    question: "À quoi sert un pont diviseur de tension ?",
    answer: "À adapter une tension (ex : passer de 24V à 5V)"
  },
  {
    subject: "Physique",
    question: "Quelle est la loi des mailles ?",
    answer: "La somme des tensions dans une maille est nulle"
  },
  {
    subject: "Physique",
    question: "Expression de la loi des mailles avec un générateur ?",
    answer: "E = U1 + U2"
  },
  {
    subject: "Physique",
    question: "Quelle est la loi des nœuds ?",
    answer: "La somme des courants entrants = somme des courants sortants"
  },
  {
    subject: "Physique",
    question: "Formule de la loi d’Ohm ?",
    answer: "U = R × I"
  },
  {
    subject: "Physique",
    question: "Comment calculer un courant dans une branche ?",
    answer: "I = U / R"
  },
  {
    subject: "Physique",
    question: "Formule de la célérité du son ?",
    answer: "v = distance / temps"
  },
  {
    subject: "Physique",
    question: "Relation entre vitesse, longueur d’onde et fréquence ?",
    answer: "v = λ × f"
  },
  {
    subject: "Physique",
    question: "Formule de la fréquence ?",
    answer: "f = 1 / T"
  },
  {
    subject: "Physique",
    question: "Domaine des sons audibles ?",
    answer: "Entre 20 Hz et 20 kHz"
  },
  {
    subject: "Physique",
    question: "Formule de la longueur d’onde ?",
    answer: "λ = v / f"
  },
  {
    subject: "Physique",
    question: "Formule de la vitesse de propagation dans un câble ?",
    answer: "v = L / Δt"
  },
  {
    subject: "Physique",
    question: "Formule de l’atténuation en dB ?",
    answer: "A_dB = 20 log(Ve / Vs)"
  },
  {
    subject: "Physique",
    question: "Pourquoi adapter une ligne de transmission ?",
    answer: "Pour éviter les réflexions du signal"
  },
  {
    subject: "Physique",
    question: "Quand y a-t-il réflexion du signal ?",
    answer: "Quand l’impédance n’est pas adaptée"
  },
  {
    subject: "Physique",
    question: "Formule du coefficient de vélocité ?",
    answer: "k = v / c"
  },
  {
    subject: "Physique",
    question: "Formule de la bande passante ?",
    answer: "B = f_c2 - f_c1"
  },
  {
    subject: "Physique",
    question: "Formule du facteur de qualité ?",
    answer: "Q = f0 / B"
  },
  {
    subject: "Physique",
    question: "Comment trouver la fréquence centrale (échelle log) ?",
    answer: "f0 = √(f_c1 × f_c2)"
  },
  {
    subject: "Physique",
    question: "Que signifie -3 dB ?",
    answer: "La puissance est divisée par 2 (zone utile du filtre)"
  },
  {
    subject: "Physique",
    question: "Impédance d’un circuit LC en parallèle (forme générale) ?",
    answer: "Zp dépend de L, C et ω (comportement fréquentiel)"
  },
  {
    subject: "Physique",
    question: "Pourquoi ajouter une résistance en parallèle d’un LC ?",
    answer: "Pour adapter l’impédance à la ligne"
  },
  {
    subject: "Physique",
    question: "Pourquoi utiliser un circuit LC ?",
    answer: "Pour filtrer les parasites (HF ou DC)"
  }

];
