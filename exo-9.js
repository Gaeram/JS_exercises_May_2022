/* 9°) Conversion heures:minutes:secondes
Ecrire le programme qui convertit un nombre quelconque de secondes au format hh:mm:ss. Par
exemple 347872s équivaut à 96h37m52s.
Ici, il faudra utiliser des opérateurs arithmétiques spécifiques (division euclidienne). */

let yRef = 347872; 

let heures = Math.floor (yRef / 3600) ;
let minutes =  Math.floor(yRef % 3600 / 60);
let secondes = Math.floor(yRef % 60) ; 

console.log(heures + "h " + minutes + "m " + secondes + "s ")
