const DEFAULT_CARDS = [

  // 🧱 COUCHE 4
  {
    subject: "Réseaux",
    question: "Quel est le rôle de la couche 4 (transport) ?",
    answer: "Acheminer les données vers la bonne application"
  },
  {
    subject: "Réseaux",
    question: "Qu'est-ce qu'un port ?",
    answer: "Un numéro identifiant une application (0 à 65535)"
  },
  {
    subject: "Réseaux",
    question: "Entre quelles entités communique la couche 4 ?",
    answer: "Entre deux processus applicatifs"
  },

  // 📋 SERVICES COUCHE 4
  {
    subject: "Réseaux",
    question: "Qu'est-ce que le multiplexage ?",
    answer: "Permet à plusieurs applications d'utiliser le réseau"
  },
  {
    subject: "Réseaux",
    question: "À quoi sert la segmentation ?",
    answer: "Découper les données en segments"
  },
  {
    subject: "Réseaux",
    question: "Qu'est-ce que le contrôle de flux ?",
    answer: "Réguler la vitesse d'envoi"
  },
  {
    subject: "Réseaux",
    question: "Quel protocole gère la retransmission ?",
    answer: "TCP"
  },
  {
    subject: "Réseaux",
    question: "Quel protocole gère la connexion ?",
    answer: "TCP"
  },
  {
    subject: "Réseaux",
    question: "Quel protocole numérote les segments ?",
    answer: "TCP"
  },

  // ⚔️ TCP vs UDP
  {
    subject: "Réseaux",
    question: "UDP est-il fiable ?",
    answer: "Non"
  },
  {
    subject: "Réseaux",
    question: "TCP est-il fiable ?",
    answer: "Oui (ACK + retransmission)"
  },
  {
    subject: "Réseaux",
    question: "Quel protocole est le plus rapide ?",
    answer: "UDP"
  },
  {
    subject: "Réseaux",
    question: "Quel protocole garantit l'ordre des paquets ?",
    answer: "TCP"
  },
  {
    subject: "Réseaux",
    question: "UDP utilise-t-il un handshake ?",
    answer: "Non"
  },
  {
    subject: "Réseaux",
    question: "TCP utilise-t-il un handshake ?",
    answer: "Oui"
  },

  // 🔢 EN-TÊTES
  {
    subject: "Réseaux",
    question: "Taille de l'en-tête UDP ?",
    answer: "8 octets"
  },
  {
    subject: "Réseaux",
    question: "Taille minimale en-tête TCP ?",
    answer: "20 octets"
  },

  // 🔗 HANDSHAKE
  {
    subject: "Réseaux",
    question: "Étapes du 3-way handshake ?",
    answer: "SYN → SYN-ACK → ACK"
  },
  {
    subject: "Réseaux",
    question: "Pourquoi 3 étapes ?",
    answer: "Synchroniser les deux sens de communication"
  },
  {
    subject: "Réseaux",
    question: "Combien d'étapes pour fermer TCP ?",
    answer: "4 étapes"
  },
  {
    subject: "Réseaux",
    question: "Pourquoi 4 étapes pour fermer ?",
    answer: "Connexion bidirectionnelle"
  },

  // 🚩 FLAGS
  {
    subject: "Réseaux",
    question: "SYN signifie ?",
    answer: "Ouverture de connexion"
  },
  {
    subject: "Réseaux",
    question: "ACK signifie ?",
    answer: "Accusé de réception"
  },
  {
    subject: "Réseaux",
    question: "FIN signifie ?",
    answer: "Fermeture de connexion"
  },
  {
    subject: "Réseaux",
    question: "RST signifie ?",
    answer: "Reset brutal"
  },
  {
    subject: "Réseaux",
    question: "PSH signifie ?",
    answer: "Traitement immédiat des données"
  },

  // 📦 MÉCANISMES
  {
    subject: "Réseaux",
    question: "À quoi sert le Sequence Number ?",
    answer: "Remettre les paquets dans l'ordre"
  },
  {
    subject: "Réseaux",
    question: "À quoi sert le ACK Number ?",
    answer: "Confirmer réception"
  },
  {
    subject: "Réseaux",
    question: "Quel champ gère le flux TCP ?",
    answer: "Window Size"
  },

  // 📐 BOURRAGE
  {
    subject: "Réseaux",
    question: "Pourquoi il y a du bourrage en TCP ?",
    answer: "Aligner sur 32 bits"
  },
  {
    subject: "Réseaux",
    question: "Pourquoi pas en UDP ?",
    answer: "En-tête fixe"
  },

  // 🌐 PROTOCOLES
  {
    subject: "Réseaux",
    question: "HTTP utilise quel protocole ?",
    answer: "TCP"
  },
  {
    subject: "Réseaux",
    question: "FTP utilise ?",
    answer: "TCP"
  },
  {
    subject: "Réseaux",
    question: "DHCP utilise ?",
    answer: "UDP"
  },
  {
    subject: "Réseaux",
    question: "SNMP utilise ?",
    answer: "UDP"
  },
  {
    subject: "Réseaux",
    question: "Pourquoi les jeux utilisent UDP ?",
    answer: "Moins de latence"
  },

  // 🛡️ FIREWALL
  {
    subject: "Réseaux",
    question: "Que fait ufw deny in 22/tcp ?",
    answer: "Bloque SSH entrant"
  },
  {
    subject: "Réseaux",
    question: "Que contient un log UFW ?",
    answer: "IP source/destination, ports, protocole, flags"
  },
  {
    subject: "Réseaux",
    question: "Pourquoi un ping peut échouer ?",
    answer: "ICMP bloqué en sortie"
  }

];
