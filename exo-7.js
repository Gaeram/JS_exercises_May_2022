/* 7°) Factorielle
Ecrire le programme qui calcule la valeur factorielle d’un nombre. Par exemple, 5! = 5*4*3*2*1
correspond à la valeur factorielle du nombre 5. Le principe est le même que celui de l’exercice 4.*/

let result = 1 ;

for(let i = 5; i >= 1; i++)
{
	result = result * i;
	
}

console.log(result);