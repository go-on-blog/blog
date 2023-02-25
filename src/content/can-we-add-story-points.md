---
title: "Peut-on additionner les story points ?"
date: "2023-01-31"
slug: "/can-we-add-story-points/"
---
Quand nous disons d'un élément de backlog qu'il vaut "8", cela signifie-t-il qu'il est huit fois plus complexe qu'un autre qui vaut "1" ?<!-- end -->

Dans l'approche Agile, les estimations visent à évaluer la complexité d'un problème plutôt que le temps qu'un individu mettrait à le résoudre. Elles se font habituellement en *story points* et les valeurs possibles sont des nombres entiers. Mais pas 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, comme on pourrait s'y attendre. Nous utilisons la suite de Fibonacci : 1, 2, 3, 5, 8, etc. (où chaque nombre et la somme des deux précédents).
Pourquoi cela ? Principalement parce que nous faisons l'hypothèse que la complexité ne croît pas de façon linéaire.

Quand nous disons d'un élément de backlog qu'il vaut "8", cela signifie-t-il qu'il est huit fois plus complexe qu'un autre qui vaut "1" ?[^1]

C'est ce que la logique voudrait. Cependant, à mon sens, nous ne sommes pas capables de réfléchir ainsi parce que nous n'avons pas l'outil de mesure adapté. Nous avons le chronomètre pour mesurer le temps, la règle pour mesurer la distance, la balance pour mesurer le poids. Il existe aussi des mesures de la complexité. Par exemple le nombre de pièces détachées d'une machine, l'espace mémoire consommé pour conserver une image, la richesse de vocabulaire d'un langage, le nombre de lignes de code d'un programme... Mais rien qui nous aide à dire si une chose qui n'existe pas encore est 8 fois plus complexe qu'une autre.

Mais alors, si nous disons que 8 points n'égalent pas 8 x 1 point, la somme que nous calculons pendant le planning, pour déterminer si nous pouvons faire tenir un élément de plus dans notre sprint, est fausse.

En effet ; et je crois qu'il faut admettre que ce calcul puisse être faux... tout au moins au début.

Nous ne savons pas dire *a priori* si le "8" que nous pronostiquons correspond bien à ce niveau de complexité. Mais, nous pouvons le dire *a posteriori*. Ainsi, itération après itération, nous comprenons mieux si une valeur choisie était sur- ou sous-évaluée et nous améliorons nos estimations en éliminant celles du passé qui étaient les moins bonnes. En nous fondant sur les meilleurs valeurs de référence passées, nous améliorons avec l'expérience nos estimations. C'est la nature même d'une approche empirique.

[^1]: Inspiré d'une conversation avec des Scrum Masters de L-Acoustics en janvier 2023.