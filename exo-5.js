/* 5°) Entier pair ?
1°) Ecrire le programme qui détermine si un nombre entier est pair ou non.
2°) Transformer ce programme en fonction : IsEven(number) */

	
function IsEven(number) {

	if ((number %2) == 0){
		console.log(" Pair")
	}
	else {
		console.log(" Impair")
	}
}

IsEven(59)