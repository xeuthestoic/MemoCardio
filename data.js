window.DEFAULT_CARDS = [

 /* =========================
     🧠 BASH - Pratique
  ========================= */

{
  subject: "Bash - Pratique",
  question: "S01 : Comment lire un CSV ligne par ligne ?",
  answer: "while read -r ligne; do ... done < fichier"
},
{
  subject: "Bash - Pratique",
  question: "S01 : Comment remplacer , par | ?",
  answer: "echo \"$ligne\" | tr ',' '|'"
},
{
  subject: "Bash - Pratique",
  question: "S02 : Comment parcourir les fichiers d’un dossier ?",
  answer: "for f in ~/*; do ... done"
},
{
  subject: "Bash - Pratique",
  question: "S02 : Comment vérifier taille > 1Ko ?",
  answer: "[ $(stat -c%s \"$f\") -gt 1024 ]"
},
{
  subject: "Bash - Pratique",
  question: "S03 : Comment générer un hash ?",
  answer: "sha256sum fichier"
},
{
  subject: "Bash - Pratique",
  question: "S03 : Comment comparer deux fichiers ?",
  answer: "h1=$(sha256sum f1); h2=$(sha256sum f2); [ \"$h1\" = \"$h2\" ]"
},
{
  subject: "Bash - Pratique",
  question: "S04 : Comment lire N lignes d’un fichier ?",
  answer: "i=0; while read -r ligne && [ $i -lt N ]; do ...; i=$((i+1)); done"
},
{
  subject: "Bash - Pratique",
  question: "S05 : Comment remplacer espaces multiples ?",
  answer: "echo \"$ligne\" | tr -s ' ' ';'"
},
{
  subject: "Bash - Pratique",
  question: "S06 : Comment extraire user UID home ?",
  answer: "cut -d':' -f1,3,6 /etc/passwd"
},
{
  subject: "Bash - Pratique",
  question: "S07 : Comment lire un champ précis ?",
  answer: "cut -d':' -f7"
},
{
  subject: "Bash - Pratique",
  question: "S08 : Comment créer N dossiers ?",
  answer: "i=1; while [ $i -le N ]; do mkdir \"dir_$i\"; i=$((i+1)); done"
},
{
  subject: "Bash - Pratique",
  question: "S08 : Comment créer des fichiers vides ?",
  answer: "touch fichier_A"
},
{
  subject: "Bash - Pratique",
  question: "S09 : Comment ignorer erreurs ?",
  answer: "commande 2>/dev/null"
},
{
  subject: "Bash - Pratique",
  question: "S10 : Comment parcourir caractères d’un mot ?",
  answer: "i=0; while [ $i -lt ${#mot} ]; do lettre=${mot:$i:1}; i=$((i+1)); done"
},
{
  subject: "Bash - Pratique",
  question: "S11 : Comment lire une entrée utilisateur ?",
  answer: "read reponse"
},
{
  subject: "Bash - Pratique",
  question: "S11 : Comment comparer deux nombres ?",
  answer: "[ \"$rep\" -eq \"$secret\" ]"
},
{
  subject: "Bash - Pratique",
  question: "S12 : Comment éviter doublons fichiers ?",
  answer: "[ -f \"$nom\" ]"
},
{
  subject: "Bash - Pratique",
  question: "S13 : Comment tester lecture fichier ?",
  answer: "[ -r \"$fichier\" ]"
},
{
  subject: "Bash - Pratique",
  question: "S14 : Comment faire une double boucle ?",
  answer: "i=1; while [ $i -le N ]; do j=1; while [ $j -le N ]; do ...; j=$((j+1)); done; i=$((i+1)); done"
},
{
  subject: "Bash - Pratique",
  question: "S14 : Comment calculer i*j ?",
  answer: "$((i * j))"
},
{
  subject: "Bash - Pratique",
  question: "S15 : Comment faire une factorielle ?",
  answer: "res=1; i=1; while [ $i -le N ]; do res=$((res*i)); i=$((i+1)); done"
},
{
  subject: "Bash - Pratique",
  question: "S16 : Comment tester droits lecture ?",
  answer: "[ -r \"$fichier\" ]"
},
{
  subject: "Bash - Pratique",
  question: "S17 : Comment lire sortie commande ligne par ligne ?",
  answer: "commande | while read -r ligne; do ... done"
},
{
  subject: "Bash - Pratique",
  question: "S18 : Comment filtrer avec condition ?",
  answer: "if [ \"$val\" -gt 5 ]; then ..."
},
{
  subject: "Bash - Pratique",
  question: "S19 : Comment simuler un dé ?",
  answer: "$((RANDOM % 6 + 1))"
},
{
  subject: "Bash - Pratique",
  question: "S19 : Comment compter les 7 ?",
  answer: "if [ $somme -eq 7 ]; then compteur=$((compteur+1)); fi"
},
{
  subject: "Bash - Pratique",
  question: "S20 : Comment détecter JJ/MM/AAAA ?",
  answer: "[[ \"$ligne\" =~ ^[0-9]{2}/[0-9]{2}/[0-9]{4}$ ]]"
},
{
  subject: "Bash - Pratique",
  question: "S20 : Comment convertir en AAAAMMJJ ?",
  answer: "annee=$(cut -d'/' -f3); mois=$(cut -d'/' -f2); jour=$(cut -d'/' -f1)"
},
{
  subject: "Bash - Pratique",
  question: "S21 : Comment accumuler une taille ?",
  answer: "total=$((total + taille))"
},
{
  subject: "Bash - Pratique",
  question: "S23 : Comment parcourir fichiers ?",
  answer: "for f in dossier/*; do ... done"
},
{
  subject: "Bash - Pratique",
  question: "S24 : Comment détecter doublons ?",
  answer: "h=$(sha256sum \"$fichier\")"
},
{
  subject: "Bash - Pratique",
  question: "S25 : Comment tester présence lettre ?",
  answer: "echo \"$mot\" | grep \"a\""
},
{
  subject: "Bash - Pratique",
  question: "S26 : Comment tester exécutable ?",
  answer: "[ -x \"$fichier\" ]"
},
{
  subject: "Bash - Pratique",
  question: "S27 : Comment créer un dossier ?",
  answer: "mkdir nom"
},
{
  subject: "Bash - Pratique",
  question: "S29 : Comment chercher dans un log ?",
  answer: "grep \"texte\" fichier.log"
},
{
  subject: "Bash - Pratique",
  question: "S30 : Comment exécuter une commande ?",
  answer: "commande"
},
   
/* =========================
     🔵 BASH - ARGUMENTS & TESTS
  ========================= */

  {
    subject: "Bash",
    question: "Comment vérifier qu'un argument est fourni ?",
    answer: "[ -z \"$1\" ]"
  },
  {
    subject: "Bash",
    question: "Comment vérifier qu'un fichier existe ?",
    answer: "[ -f \"$1\" ]"
  },
  {
    subject: "Bash",
    question: "Comment vérifier qu'un dossier existe ?",
    answer: "[ -d \"$1\" ]"
  },
  {
    subject: "Bash",
    question: "Condition complète pour vérifier argument valide fichier ?",
    answer: "[ -z \"$1\" ] || [ ! -f \"$1\" ]"
  },
  {
    subject: "Bash",
    question: "Comment afficher un message d'erreur et quitter ?",
    answer: "echo \"Erreur\" ; exit 1"
  },

  /* =========================
     🔢 BASH - CALCULS
  ========================= */

  {
    subject: "Bash",
    question: "Syntaxe pour faire un calcul en Bash ?",
    answer: "$((expression))"
  },
  {
    subject: "Bash",
    question: "Comment incrémenter i ?",
    answer: "i=$((i + 1))"
  },
  {
    subject: "Bash",
    question: "Comment initialiser un compteur ?",
    answer: "compteur=0"
  },
  {
    subject: "Bash",
    question: "Comment générer un nombre aléatoire entre 1 et 6 ?",
    answer: "$((RANDOM % 6 + 1))"
  },
  {
    subject: "Bash",
    question: "Comment comparer deux nombres ?",
    answer: "[ \"$a\" -eq \"$b\" ]"
  },

  /* =========================
     🔁 BASH - BOUCLES
  ========================= */

  {
    subject: "Bash",
    question: "Structure d'une boucle while ?",
    answer: "while [ condition ]; do ... done"
  },
  {
    subject: "Bash",
    question: "Boucle pour compter de 1 à N ?",
    answer: "i=1; while [ $i -le $N ]; do ...; i=$((i+1)); done"
  },
  {
    subject: "Bash",
    question: "Comment lire une ligne dans un fichier ?",
    answer: "read -r ligne"
  },
  {
    subject: "Bash",
    question: "Pourquoi utiliser read -r ?",
    answer: "Pour éviter l'interprétation des caractères spéciaux"
  },

  /* =========================
     📄 BASH - FICHIERS
  ========================= */

  {
    subject: "Bash",
    question: "Comment vider un fichier ?",
    answer: "> fichier.txt"
  },
  {
    subject: "Bash",
    question: "Comment écrire dans un fichier ?",
    answer: "echo \"texte\" > fichier.txt"
  },
  {
    subject: "Bash",
    question: "Comment ajouter dans un fichier ?",
    answer: "echo \"texte\" >> fichier.txt"
  },
  {
    subject: "Bash",
    question: "Comment lire un fichier sans utiliser < ?",
    answer: "exec 3< fichier ; read ligne <&3"
  },

  /* =========================
     🔍 BASH - CONDITIONS & REGEX
  ========================= */

  {
    subject: "Bash",
    question: "Syntaxe d'un if en Bash ?",
    answer: "if [ condition ]; then ... fi"
  },
  {
    subject: "Bash",
    question: "Comment tester une regex en Bash ?",
    answer: "[[ \"$var\" =~ regex ]]"
  },
  {
    subject: "Bash",
    question: "Regex pour JJ/MM/AAAA ?",
    answer: "^[0-9]{2}/[0-9]{2}/[0-9]{4}$"
  },
  {
    subject: "Bash",
    question: "Comment extraire jour/mois/année avec cut ?",
    answer: "cut -d'/' -f1 -f2 -f3"
  },

  /* =========================
     ⚠️ BASH - PIÈGES EXAM
  ========================= */

  {
    subject: "Bash",
    question: "Corrige : [ -z $1 ]",
    answer: "[ -z \"$1\" ]"
  },
  {
    subject: "Bash",
    question: "Corrige : [ -f $1 ]",
    answer: "[ -f \"$1\" ]"
  },
  {
    subject: "Bash",
    question: "Pourquoi éviter cat fichier | while read ?",
    answer: "Car la boucle s'exécute dans un subshell"
  },
  {
    subject: "Bash",
    question: "Comment faire un OU logique en Bash ?",
    answer: "[ condition1 ] || [ condition2 ]"
  },
  {
    subject: "Bash",
    question: "Comment faire un ET logique en Bash ?",
    answer: "[ condition1 ] && [ condition2 ]"
  },

  /* =========================
     🎯 BASH - CAS TP CONCRETS
  ========================= */

  {
    subject: "Bash",
    question: "Comment compter le nombre de lignes traitées ?",
    answer: "compteur=$((compteur + 1))"
  },
  {
    subject: "Bash",
    question: "Comment comparer si une valeur est >= N ?",
    answer: "[ \"$val\" -ge \"$N\" ]"
  },
  {
    subject: "Bash",
    question: "Comment afficher uniquement certaines colonnes ?",
    answer: "cut -d':' -f1"
  },
  {
  subject: "Bash",
  question: "Comment lire un fichier ligne par ligne ?",
  answer: "while read -r ligne; do ... done"
  },
  {
    subject: "Bash",
    question: "Comment créer un fichier s'il n'existe pas ?",
    answer: "touch fichier.txt"
  },
   
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
},

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
