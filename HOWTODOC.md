
# modèle README

Les composants et modèles suivants sont basés sur les commentaires de nombreux participants à la discussion « créer un README.modèle txt ». Pour avoir un exemple étoffé, nous utilisons un exemple de texte. La majeure partie provient du module README du menu D’Administration.txt.

## table des matières

les TOCs sont facultatifs mais appréciés pour les longs fichiers README.,

### Introduction

l’introduction (obligatoire) consiste en un bref paragraphe ou deux qui résume l’objet et la fonction de ce projet. Cette introduction peut être la même que le premier paragraphe de la page du projet.

l’introduction doit inclure un lien vers la page du projet et la file d’attente d’émission. Si le projet est un bac à sable, ces liens doivent aller au bac à sable jusqu’à la promotion.

### exigences

la section Exigences (obligatoire) doit indiquer clairement si ce projet nécessite quelque chose en dehors du noyau Drupal pour fonctionner (modules, bibliothèques, etc.)., Énumérez ici toutes les exigences, y compris celles qui découlent indirectement d’un autre module, etc. L’idée est d’informer les utilisateurs de ce qui est nécessaire, afin que tout ce dont ils ont besoin puisse être acheté et inclus avant de tenter d’installer le module. S’il n’y a pas d’exigences, écrivez « pas d’exigences particulières ».


### modules recommandés

Cette section facultative répertorie les modules qui ne sont pas requis, mais qui peuvent améliorer l’utilité ou l’expérience utilisateur de votre projet. Assurez-vous de décrire les avantages de l’activation de ces modules.,

### Installation

La section installation (requis*) doit préciser comment installer le module.
Envisagez de remplacer cette section par une installation autonome.,fichier txt si vos instructions d’installation sont particulièrement complexes.

### Configuration

la section configuration (obligatoire) est nécessaire même lorsque peu de configuration est requise. Utilisez cette section pour répertorier des notes spéciales sur la configuration de ce module, y compris, mais sans s’y limiter, les autorisations. Cette section est particulièrement importante si le module nécessite une configuration supplémentaire en dehors de L’interface utilisateur Drupal.,

Si le module a peu ou pas de configuration, vous devez utiliser cet espace pour expliquer comment l’activation / la désactivation du module affectera le site.

CONFIGURATION------------- * Configure the user permissions in Administration " People " Permissions: - Use the administration pages and help (System module) The top-level administration categories require this permission to be accessible. The administration menu will be empty unless this permission is granted. - Access administration menu Users with this permission will see the administration menu at the top of each page. - Display Drupal links Users with this permission will receive links to drupal.org issue queues for all enabled contributed modules. The issue queue links appear under the administration menu icon. * Customize the menu settings in Administration " Configuration and modules " Administration " Administration menu. * To prevent administrative menu items from appearing twice, you may hide the "Management" menu block.


### Dépannage & FAQ

Ces articles sont en option. S’ils sont présents, ils doivent répondre aux questions fréquemment posées dans la file d’attente des problèmes (cela vous fera gagner du temps à l’avenir). Décrivez les problèmes communs que les gens rencontrent avec des solutions (les liens sont corrects si les étapes sont longues, mais il est souvent utile de fournir un résumé car les liens sont parfois périmés).,
mainteneurs

Cette section est facultative et devrait remplacer tous les mainteneurs autonomes préexistants.fichier txt.
aide Avancée

L’aide Avancée affichera le fichier README à l’écran s’il est activé.
tout sur Markdown

Si vous utilisez Markdown, votre fichier doit être nommé README.md (et utilisez une syntaxe Markdown valide), sinon il devrait être nommé README.txt.

## conseils de mise en forme rapide

Voici un résumé du format préféré pour README.txt:

    En-têtes en majuscules.
    En-têtes soulignés avec===/--- à la longueur de l’en-tête, suivi d’une ligne vide.
    deux lignes avant les en-têtes (sauf la première).
    puces désignées par des astérisques (*) avec des retraits suspendus.
    listes numérotées en retrait de 4 espaces.,
    listes à puces indentées 1 espace.
    texte manuellement word-enveloppé dans environ 80 cols.

