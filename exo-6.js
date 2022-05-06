/* 6°) Somme des entiers pairs
Variante de l’exercice 4, on souhaite additionner uniquement les 30 premiers entiers pairs (privés
de l’entier 0).
Il faudra utiliser la fonction IsEven(number) qui a la valeur true si l’entier number est pair, et
false s’il est impair */



function IsEven(number) {

    if ((number %2) == 0){
        return true;
    }
    else {
        return false;
    }
}

result = 0; 

for (let i = 0; i<= 30;i++) 
{
    if (IsEven(i)){
        result = result +i;
    }
}

console.log(result);