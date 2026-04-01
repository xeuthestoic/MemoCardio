window.DEFAULT_CARDS = [

 /* =========================
     🧠 BASH - Pratique
  ========================= */

{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S01 : Comment lire un CSV ligne par ligne ?",
  answer: "while read -r ligne; do ... done < fichier"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S01 : Comment remplacer , par | ?",
  answer: "echo \"$ligne\" | tr ',' '|'"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S02 : Comment parcourir les fichiers d’un dossier ?",
  answer: "for f in ~/*; do ... done"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S02 : Comment vérifier taille > 1Ko ?",
  answer: "[ $(stat -c%s \"$f\") -gt 1024 ]"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S03 : Comment générer un hash ?",
  answer: "sha256sum fichier"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S03 : Comment comparer deux fichiers ?",
  answer: "h1=$(sha256sum f1); h2=$(sha256sum f2); [ \"$h1\" = \"$h2\" ]"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S04 : Comment lire N lignes d’un fichier ?",
  answer: "i=0; while read -r ligne && [ $i -lt N ]; do ...; i=$((i+1)); done"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S05 : Comment remplacer espaces multiples ?",
  answer: "echo \"$ligne\" | tr -s ' ' ';'"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S06 : Comment extraire user UID home ?",
  answer: "cut -d':' -f1,3,6 /etc/passwd"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S07 : Comment lire un champ précis ?",
  answer: "cut -d':' -f7"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S08 : Comment créer N dossiers ?",
  answer: "i=1; while [ $i -le N ]; do mkdir \"dir_$i\"; i=$((i+1)); done"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S08 : Comment créer des fichiers vides ?",
  answer: "touch fichier_A"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S09 : Comment ignorer erreurs ?",
  answer: "commande 2>/dev/null"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S10 : Comment parcourir caractères d’un mot ?",
  answer: "i=0; while [ $i -lt ${#mot} ]; do lettre=${mot:$i:1}; i=$((i+1)); done"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S11 : Comment lire une entrée utilisateur ?",
  answer: "read reponse"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S11 : Comment comparer deux nombres ?",
  answer: "[ \"$rep\" -eq \"$secret\" ]"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S12 : Comment éviter doublons fichiers ?",
  answer: "[ -f \"$nom\" ]"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S13 : Comment tester lecture fichier ?",
  answer: "[ -r \"$fichier\" ]"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S14 : Comment faire une double boucle ?",
  answer: "i=1; while [ $i -le N ]; do j=1; while [ $j -le N ]; do ...; j=$((j+1)); done; i=$((i+1)); done"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S14 : Comment calculer i*j ?",
  answer: "$((i * j))"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S15 : Comment faire une factorielle ?",
  answer: "res=1; i=1; while [ $i -le N ]; do res=$((res*i)); i=$((i+1)); done"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S16 : Comment tester droits lecture ?",
  answer: "[ -r \"$fichier\" ]"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S17 : Comment lire sortie commande ligne par ligne ?",
  answer: "commande | while read -r ligne; do ... done"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S18 : Comment filtrer avec condition ?",
  answer: "if [ \"$val\" -gt 5 ]; then ..."
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S19 : Comment simuler un dé ?",
  answer: "$((RANDOM % 6 + 1))"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S19 : Comment compter les 7 ?",
  answer: "if [ $somme -eq 7 ]; then compteur=$((compteur+1)); fi"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S20 : Comment détecter JJ/MM/AAAA ?",
  answer: "[[ \"$ligne\" =~ ^[0-9]{2}/[0-9]{2}/[0-9]{4}$ ]]"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S20 : Comment convertir en AAAAMMJJ ?",
  answer: "annee=$(cut -d'/' -f3); mois=$(cut -d'/' -f2); jour=$(cut -d'/' -f1)"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S21 : Comment accumuler une taille ?",
  answer: "total=$((total + taille))"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S23 : Comment parcourir fichiers ?",
  answer: "for f in dossier/*; do ... done"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S24 : Comment détecter doublons ?",
  answer: "h=$(sha256sum \"$fichier\")"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S25 : Comment tester présence lettre ?",
  answer: "echo \"$mot\" | grep \"a\""
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S26 : Comment tester exécutable ?",
  answer: "[ -x \"$fichier\" ]"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S27 : Comment créer un dossier ?",
  answer: "mkdir nom"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S29 : Comment chercher dans un log ?",
  answer: "grep \"texte\" fichier.log"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S30 : Comment exécuter une commande ?",
  answer: "commande"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S01 : CSV → Markdown",
  answer: "while read -r ligne; do echo \"| $(echo \"$ligne\" | tr ',' ' | ') |\"; done < fichier"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S02 : fichiers >1Ko",
  answer: "for f in ~/*; do if [ -f \"$f\" ] && [ $(stat -c%s \"$f\") -gt 1024 ]; then echo \"$f\"; fi; done"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S03 : copie + vérif hash",
  answer: "cp \"$f\" \"$dest\"; h1=$(sha256sum \"$f\"); h2=$(sha256sum \"$dest\"); [ \"$h1\" = \"$h2\" ]"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S04 : lire 10 lignes + compter lettres",
  answer: "i=0; total=0; while read -r l && [ $i -lt 10 ]; do echo \"$l\"; total=$((total + ${#l})); i=$((i+1)); done"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S05 : df → CSV",
  answer: "df | while read -r l; do echo \"$l\" | tr -s ' ' ';'; done"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S06 : /etc/passwd → CSV",
  answer: "while read -r l; do echo \"$l\" | cut -d':' -f1,3,6; done < /etc/passwd"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S07 : classer par shell",
  answer: "while read -r l; do shell=$(echo \"$l\" | cut -d':' -f7); echo \"$shell\"; done < /etc/passwd"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S08 : créer N dossiers + fichiers",
  answer: "i=1; while [ $i -le N ]; do mkdir \"dir_$i\"; touch \"dir_$i/fichier_A\"; i=$((i+1)); done"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S09 : fichiers writable",
  answer: "for f in /usr/bin/*; do [ -w \"$f\" ] && echo \"$f\"; done 2>/dev/null"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S10 : phrase 5 mots + compter lettres",
  answer: "phrase=\"\"; i=0; while [ $i -lt 5 ]; do read mot; phrase=\"$phrase $mot\"; i=$((i+1)); done"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S11 : jeu devinette",
  answer: "secret=$((RANDOM%100+1)); while true; do read rep; if [ $rep -lt $secret ]; then echo plus; elif [ $rep -gt $secret ]; then echo moins; else break; fi; done"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S12 : créer fichiers aléatoires",
  answer: "i=0; while [ $i -lt N ]; do nom=$((RANDOM%10000)); touch \"$nom\"; i=$((i+1)); done"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S13 : fichiers lisibles",
  answer: "for f in /etc/*; do [ -r \"$f\" ] && echo \"$f\"; done 2>/dev/null"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S14 : tableau multiplication",
  answer: "i=1; while [ $i -le N ]; do j=1; while [ $j -le N ]; do echo -n \"$((i*j)) \"; j=$((j+1)); done; echo; i=$((i+1)); done"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S15 : factorielle",
  answer: "res=1; i=1; while [ $i -le N ]; do res=$((res*i)); i=$((i+1)); done"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S16 : fichiers lisibles par autres",
  answer: "for f in dossier/*; do [ -r \"$f\" ] && echo \"$f\"; done"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S17 : who parsing",
  answer: "who | while read -r u t h; do echo \"$u;$t;$h\"; done"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S18 : filtrer ps",
  answer: "ps aux | while read -r l; do cpu=$(echo \"$l\" | cut -d' ' -f3); done"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S19 : dés",
  answer: "de1=$((RANDOM%6+1)); de2=$((RANDOM%6+1)); somme=$((de1+de2))"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S20 : dates",
  answer: "if [[ \"$l\" =~ ^[0-9]{2}/[0-9]{2}/[0-9]{4}$ ]]; then j=$(cut -d'/' -f1); m=$(cut -d'/' -f2); a=$(cut -d'/' -f3); fi"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S21 : du logique",
  answer: "for d in dossier/*; do taille=$(du \"$d\"); echo \"$taille\"; done"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S23 : somme tailles",
  answer: "total=0; for f in dossier/*; do taille=$(stat -c%s \"$f\"); total=$((total+taille)); done"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S24 : doublons hash",
  answer: "h=$(sha256sum \"$f\"); comparer avec autres"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S25 : compter lettres",
  answer: "echo \"$mot\" | grep \"a\""
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S26 : exécutable",
  answer: "[ -x \"$f\" ]"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S27 : extension",
  answer: "nom=$(basename \"$f\"); ext=${nom#*.}"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S28 : markdown parsing",
  answer: "grep '|' fichier"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S29 : log analyse",
  answer: "grep \"install\" fichier.log"
},
{
  folder: "Bash",
  subject: "Bash - Pratique",
  question: "S30 : lspci",
  answer: "lspci"
},
   
/* =========================
     🔵 BASH - ARGUMENTS & TESTS
  ========================= */

  {
    folder: "Bash",
    subject: "Bash",
    question: "Comment vérifier qu'un argument est fourni ?",
    answer: "[ -z \"$1\" ]"
  },
  {
    folder: "Bash",
    subject: "Bash",
    question: "Comment vérifier qu'un fichier existe ?",
    answer: "[ -f \"$1\" ]"
  },
  {
    folder: "Bash",
    subject: "Bash",
    question: "Comment vérifier qu'un dossier existe ?",
    answer: "[ -d \"$1\" ]"
  },
  {
    folder: "Bash",
    subject: "Bash",
    question: "Condition complète pour vérifier argument valide fichier ?",
    answer: "[ -z \"$1\" ] || [ ! -f \"$1\" ]"
  },
  {
    folder: "Bash",
    subject: "Bash",
    question: "Comment afficher un message d'erreur et quitter ?",
    answer: "echo \"Erreur\" ; exit 1"
  },

  /* =========================
     🔢 BASH - CALCULS
  ========================= */

  {
    folder: "Bash",
    subject: "Bash",
    question: "Syntaxe pour faire un calcul en Bash ?",
    answer: "$((expression))"
  },
  {
    folder: "Bash",
    subject: "Bash",
    question: "Comment incrémenter i ?",
    answer: "i=$((i + 1))"
  },
  {
    folder: "Bash",
    subject: "Bash",
    question: "Comment initialiser un compteur ?",
    answer: "compteur=0"
  },
  {
    folder: "Bash",
    subject: "Bash",
    question: "Comment générer un nombre aléatoire entre 1 et 6 ?",
    answer: "$((RANDOM % 6 + 1))"
  },
  {
    folder: "Bash",
    subject: "Bash",
    question: "Comment comparer deux nombres ?",
    answer: "[ \"$a\" -eq \"$b\" ]"
  },

  /* =========================
     🔁 BASH - BOUCLES
  ========================= */

  {
    folder: "Bash",
    subject: "Bash",
    question: "Structure d'une boucle while ?",
    answer: "while [ condition ]; do ... done"
  },
  {
    folder: "Bash",
    subject: "Bash",
    question: "Boucle pour compter de 1 à N ?",
    answer: "i=1; while [ $i -le $N ]; do ...; i=$((i+1)); done"
  },
  {
    folder: "Bash",
    subject: "Bash",
    question: "Comment lire une ligne dans un fichier ?",
    answer: "read -r ligne"
  },
  {
    folder: "Bash",
    subject: "Bash",
    question: "Pourquoi utiliser read -r ?",
    answer: "Pour éviter l'interprétation des caractères spéciaux"
  },

  /* =========================
     📄 BASH - FICHIERS
  ========================= */

  {
    folder: "Bash",
    subject: "Bash",
    question: "Comment vider un fichier ?",
    answer: "> fichier.txt"
  },
  {
    folder: "Bash",
    subject: "Bash",
    question: "Comment écrire dans un fichier ?",
    answer: "echo \"texte\" > fichier.txt"
  },
  {
    folder: "Bash",
    subject: "Bash",
    question: "Comment ajouter dans un fichier ?",
    answer: "echo \"texte\" >> fichier.txt"
  },
  {
    folder: "Bash",
    subject: "Bash",
    question: "Comment lire un fichier sans utiliser < ?",
    answer: "exec 3< fichier ; read ligne <&3"
  },

  /* =========================
     🔍 BASH - CONDITIONS & REGEX
  ========================= */

  {
    folder: "Bash",
    subject: "Bash",
    question: "Syntaxe d'un if en Bash ?",
    answer: "if [ condition ]; then ... fi"
  },
  {
    folder: "Bash",
    subject: "Bash",
    question: "Comment tester une regex en Bash ?",
    answer: "[[ \"$var\" =~ regex ]]"
  },
  {
    folder: "Bash",
    subject: "Bash",
    question: "Regex pour JJ/MM/AAAA ?",
    answer: "^[0-9]{2}/[0-9]{2}/[0-9]{4}$"
  },
  {
    folder: "Bash",
    subject: "Bash",
    question: "Comment extraire jour/mois/année avec cut ?",
    answer: "cut -d'/' -f1 -f2 -f3"
  },

  /* =========================
     ⚠️ BASH - PIÈGES EXAM
  ========================= */

  {
    folder: "Bash",
    subject: "Bash",
    question: "Corrige : [ -z $1 ]",
    answer: "[ -z \"$1\" ]"
  },
  {
    folder: "Bash",
    subject: "Bash",
    question: "Corrige : [ -f $1 ]",
    answer: "[ -f \"$1\" ]"
  },
  {
    folder: "Bash",
    subject: "Bash",
    question: "Pourquoi éviter cat fichier | while read ?",
    answer: "Car la boucle s'exécute dans un subshell"
  },
  {
    folder: "Bash",
    subject: "Bash",
    question: "Comment faire un OU logique en Bash ?",
    answer: "[ condition1 ] || [ condition2 ]"
  },
  {
    folder: "Bash",
    subject: "Bash",
    question: "Comment faire un ET logique en Bash ?",
    answer: "[ condition1 ] && [ condition2 ]"
  },

  /* =========================
     🎯 BASH - CAS TP CONCRETS
  ========================= */

  {
    folder: "Bash",
    subject: "Bash",
    question: "Comment compter le nombre de lignes traitées ?",
    answer: "compteur=$((compteur + 1))"
  },
  {
    folder: "Bash",
    subject: "Bash",
    question: "Comment comparer si une valeur est >= N ?",
    answer: "[ \"$val\" -ge \"$N\" ]"
  },
  {
    folder: "Bash",
    subject: "Bash",
    question: "Comment afficher uniquement certaines colonnes ?",
    answer: "cut -d':' -f1"
  },
  {
  folder: "Bash",
  subject: "Bash",
  question: "Comment lire un fichier ligne par ligne ?",
  answer: "while read -r ligne; do ... done"
  },
  {
    folder: "Bash",
    subject: "Bash",
    question: "Comment créer un fichier s'il n'existe pas ?",
    answer: "touch fichier.txt"
  },
   
/* =========================
   🌐 OSI — COUCHES 1 À 4
========================= */

/* 🔵 COUCHE 4 — TRANSPORT */

{
  folder: "Réseaux",
  subject: "OSI",
  question: "Quel est le rôle de la couche Transport ?",
  answer: "Acheminer les données entre applications"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Entre quelles entités communique la couche Transport ?",
  answer: "Entre deux processus applicatifs"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Quels protocoles sont utilisés en couche 4 ?",
  answer: "TCP et UDP"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Qu'est-ce qu'un port ?",
  answer: "Un numéro identifiant une application (0 à 65535)"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Pourquoi utiliser des ports ?",
  answer: "Permettre à plusieurs applications d'utiliser le réseau"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Qu'est-ce que le multiplexage ?",
  answer: "Faire passer plusieurs communications"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Qu'est-ce que la segmentation ?",
  answer: "Découper les données en segments"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Qu'est-ce que le contrôle de flux ?",
  answer: "Adapter la vitesse d'envoi"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "TCP est-il fiable ?",
  answer: "Oui"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "UDP est-il fiable ?",
  answer: "Non"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Quel protocole est le plus rapide ?",
  answer: "UDP"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Quel protocole garantit l'ordre ?",
  answer: "TCP"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "TCP utilise-t-il une connexion ?",
  answer: "Oui"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "UDP utilise-t-il une connexion ?",
  answer: "Non"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Étapes du handshake TCP ?",
  answer: "SYN → SYN-ACK → ACK"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Pourquoi TCP est plus lent ?",
  answer: "Vérification + retransmission"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Que garantit TCP ?",
  answer: "Fiabilité, ordre, intégrité"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Que ne garantit pas UDP ?",
  answer: "Fiabilité et ordre"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Taille en-tête UDP ?",
  answer: "8 octets"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Taille minimale TCP ?",
  answer: "20 octets"
},

/* 🟢 COUCHE 3 — RÉSEAU */

{
  folder: "Réseaux",
  subject: "OSI",
  question: "Quel est le rôle de la couche Réseau ?",
  answer: "Acheminer les paquets entre réseaux"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Quel protocole principal ?",
  answer: "IP"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Qu'est-ce qu'une adresse IP ?",
  answer: "Identifiant unique d'une machine"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "IPv4 taille ?",
  answer: "32 bits"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "IPv6 taille ?",
  answer: "128 bits"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Qu'est-ce que le routage ?",
  answer: "Choisir le meilleur chemin"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Quel équipement couche 3 ?",
  answer: "Routeur"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Qu'est-ce qu'une IP privée ?",
  answer: "Adresse interne"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Exemple IP privée ?",
  answer: "192.168.x.x"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Qu'est-ce que NAT ?",
  answer: "Traduction IP privée/public"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Qu'est-ce qu'un masque ?",
  answer: "Sépare réseau/hôte"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Que signifie /24 ?",
  answer: "24 bits réseau"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Qu'est-ce qu'un paquet ?",
  answer: "Unité couche 3"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Quel protocole teste réseau ?",
  answer: "ICMP"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Ping utilise quoi ?",
  answer: "ICMP"
},

/* 🟡 COUCHE 2 — LIAISON */

{
  folder: "Réseaux",
  subject: "OSI",
  question: "Rôle couche Liaison ?",
  answer: "Transmission locale"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Qu'est-ce qu'une MAC ?",
  answer: "Adresse physique unique"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "MAC longueur ?",
  answer: "48 bits"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Unité couche 2 ?",
  answer: "Trame"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Protocole principal ?",
  answer: "Ethernet"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Quel équipement couche 2 ?",
  answer: "Switch"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "À quoi sert ARP ?",
  answer: "Associer IP à MAC"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Différence hub/switch ?",
  answer: "Switch intelligent"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "MAC signifie ?",
  answer: "Media Access Control"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Transmission locale ou globale ?",
  answer: "Locale"
},

/* 🟣 COUCHE 1 — PHYSIQUE */

{
  folder: "Réseaux",
  subject: "OSI",
  question: "Rôle couche Physique ?",
  answer: "Transmettre les bits"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Unité couche 1 ?",
  answer: "Bit"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Types de signaux ?",
  answer: "Électrique, optique, radio"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Exemples support ?",
  answer: "Câble, fibre"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Équipement couche 1 ?",
  answer: "Hub"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Gère-t-elle les adresses ?",
  answer: "Non"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Que transporte-t-elle ?",
  answer: "0 et 1"
},

/* 🔥 BONUS / PIÈGES */

{
  folder: "Réseaux",
  subject: "OSI",
  question: "Combien de couches OSI ?",
  answer: "7"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Encapsulation ?",
  answer: "Ajout d'en-têtes"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Décapsulation ?",
  answer: "Retrait des en-têtes"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Couche IP ?",
  answer: "3"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Couche MAC ?",
  answer: "2"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Couche ports ?",
  answer: "4"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "Couche signal ?",
  answer: "1"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "TCP ou UDP pour DNS ?",
  answer: "UDP (principalement)"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "DHCP utilise ?",
  answer: "UDP"
},
{
  folder: "Réseaux",
  subject: "OSI",
  question: "ICMP utilise TCP ?",
  answer: "Non"
},

  /* =========================
     🔴 CYBER / RENSEIGNEMENT
  ========================= */

  {
    folder: "Systèmes",
    subject: "Cyber",
    question: "Budget de l'Intelligence Community en 2025 ?",
    answer: "101.1 milliards de dollars"
  },
  {
    folder: "Systèmes",
    subject: "Cyber",
    question: "Service français équivalent à la DIA ?",
    answer: "Direction du Renseignement militaire"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Qu'est-ce que l'accord UKUSA ?",
    answer: "Accord de coopération SIGINT entre 5 pays anglophones"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Milieu principal d'action de l'ONI ?",
    answer: "La mer et les océans"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Nombre de services dans l'Intelligence Community ?",
    answer: "18"
  },

  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Mission principale de la DST ?",
    answer: "Contre-espionnage et antiterrorisme"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Année de création de la DCRI ?",
    answer: "2008"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Pourquoi la DGSI remplace la DCRI ?",
    answer: "Renforcer la lutte antiterroriste après 2012"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Nombre de services dans le premier cercle français ?",
    answer: "6"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Effectif approximatif de la DGSI ?",
    answer: "Environ 5000 agents"
  },

  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Nombre d'agents de la DNRT ?",
    answer: "3000"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Service rattaché au ministère de la justice ?",
    answer: "SNRP"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Service impliqué dans les attentats 2018/2019 ?",
    answer: "DRPP"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Zone d'action du SNRP ?",
    answer: "France métropolitaine et outre-mer"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Année de création du GIC ?",
    answer: "1960"
  },

  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Service de contre-espionnage militaire allemand ?",
    answer: "MAD"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Service allemand créé en 1956 ?",
    answer: "BND"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Service surveillant la population en RDA ?",
    answer: "Stasi"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Budget du BFV ?",
    answer: "500 millions"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Effectif du BND ?",
    answer: "Environ 6500"
  },

  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Filiation directe du FSB et SVR ?",
    answer: "KGB"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Service intérieur russe ?",
    answer: "FSB"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Société privée liée à l'État russe ?",
    answer: "Wagner"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Forces spéciales russes ?",
    answer: "Spetsnaz"
  },

  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Statut du VEVAK ?",
    answer: "Ministère civil d'État"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Mission principale du VEVAK ?",
    answer: "Renseignement et contre-espionnage"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Organisation liée au Guide suprême ?",
    answer: "IRGC"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Année de création de l'IRGC ?",
    answer: "1979"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Nature de l'IRGC ?",
    answer: "Organisation militaire / paramilitaire"
  },

  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Organisation à l'origine des services israéliens ?",
    answer: "Haganah"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Unité spécialisée en guerre électronique ?",
    answer: "Unité 8200"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Service de sécurité intérieure israélien ?",
    answer: "Shin Bet"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Service de renseignement militaire israélien ?",
    answer: "Aman"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Nom des civils aidant les services israéliens ?",
    answer: "Sayanim"
  },

  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Rôle principal du MI5 ?",
    answer: "Contre-espionnage et antiterrorisme"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Année de création du MI6 ?",
    answer: "1909"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Où se situe le GCHQ ?",
    answer: "Cheltenham (The Doughnut)"
  },
  {
   folder: "Systèmes",
    subject: "Cyber",
    question: "Directeur du MI5 (2020+) ?",
    answer: "Ken McCallum"
  },

  /* =========================
     🧠 Physique
  ========================= */

  {
   folder: "Physique",
    subject: "Electricité",
    question: "Quelle est la formule du pont diviseur de tension ?",
    answer: "U_AB = (R2 + R3) / (R1 + R2 + R3) × E"
  },
  {
   folder: "Physique",
    subject: "Electricité",
    question: "À quoi sert un pont diviseur de tension ?",
    answer: "À adapter une tension (ex : passer de 24V à 5V)"
  },
  {
   folder: "Physique",
    subject: "Electricité",
    question: "Quelle est la loi des mailles ?",
    answer: "La somme des tensions dans une maille est nulle"
  },
  {
   folder: "Physique",
    subject: "Electricité",
    question: "Expression de la loi des mailles avec un générateur ?",
    answer: "E = U1 + U2"
  },
  {
   folder: "Physique",
    subject: "Electricité",
    question: "Quelle est la loi des nœuds ?",
    answer: "La somme des courants entrants = somme des courants sortants"
  },
  {
   folder: "Physique",
    subject: "Electricité",
    question: "Formule de la loi d’Ohm ?",
    answer: "U = R × I"
  },
  {
   folder: "Physique",
    subject: "Electricité",
    question: "Comment calculer un courant dans une branche ?",
    answer: "I = U / R"
  },
  {
   folder: "Physique",
    subject: "Ondes",
    question: "Formule de la célérité du son ?",
    answer: "v = distance / temps"
  },
  {
   folder: "Physique",
    subject: "Ondes",
    question: "Relation entre vitesse, longueur d’onde et fréquence ?",
    answer: "v = λ × f"
  },
  {
   folder: "Physique",
    subject: "Ondes",
    question: "Formule de la fréquence ?",
    answer: "f = 1 / T"
  },
  {
   folder: "Physique",
    subject: "Ondes",
    question: "Domaine des sons audibles ?",
    answer: "Entre 20 Hz et 20 kHz"
  },
  {
   folder: "Physique",
    subject: "Ondes",
    question: "Formule de la longueur d’onde ?",
    answer: "λ = v / f"
  },
  {
   folder: "Physique",
    subject: "Ondes",
    question: "Formule de la vitesse de propagation dans un câble ?",
    answer: "v = L / Δt"
  },
  {
   folder: "Physique",
    subject: "Ondes",
    question: "Formule de l’atténuation en dB ?",
    answer: "A_dB = 20 log(Ve / Vs)"
  },
  {
   folder: "Physique",
    subject: "Ondes",
    question: "Pourquoi adapter une ligne de transmission ?",
    answer: "Pour éviter les réflexions du signal"
  },
  {
   folder: "Physique",
    subject: "Ondes",
    question: "Quand y a-t-il réflexion du signal ?",
    answer: "Quand l’impédance n’est pas adaptée"
  },
  {
   folder: "Physique",
    subject: "Ondes",
    question: "Formule du coefficient de vélocité ?",
    answer: "k = v / c"
  },
  {
   folder: "Physique",
    subject: "Ondes",
    question: "Formule de la bande passante ?",
    answer: "B = f_c2 - f_c1"
  },
  {
   folder: "Physique",
    subject: "Ondes",
    question: "Formule du facteur de qualité ?",
    answer: "Q = f0 / B"
  },
  {
   folder: "Physique",
    subject: "Ondes",
    question: "Comment trouver la fréquence centrale (échelle log) ?",
    answer: "f0 = √(f_c1 × f_c2)"
  },
  {
   folder: "Physique",
    subject: "Ondes",
    question: "Que signifie -3 dB ?",
    answer: "La puissance est divisée par 2 (zone utile du filtre)"
  },
  {
   folder: "Physique",
    subject: "Ondes",
    question: "Impédance d’un circuit LC en parallèle (forme générale) ?",
    answer: "Zp dépend de L, C et ω (comportement fréquentiel)"
  },
  {
   folder: "Physique",
    subject: "Ondes",
    question: "Pourquoi ajouter une résistance en parallèle d’un LC ?",
    answer: "Pour adapter l’impédance à la ligne"
  },
  {
   folder: "Physique",
    subject: "Ondes",
    question: "Pourquoi utiliser un circuit LC ?",
    answer: "Pour filtrer les parasites (HF ou DC)"
  }

];
