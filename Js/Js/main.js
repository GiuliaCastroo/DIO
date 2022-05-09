
/*  Primeiras anotações de Js
var count;
for (count =0; count <=5; count ++){
    alert(count);
};

*/

/*Primeiras anotações de Js
var count = 0;
while (count<=5){
    console.log(count);
    count ++;
 alert(count);

};

*/




/*Primeiras anotações de Js
var idade = prompt("Qula sua idade?")
if(idade >=18){
    alert("maior de idade");
} else{
    alert("menor de idade");
};
*/


/*Iniciando em coleções com JS  */

/*Método Map */


/*
function getAdm (Map) {
    let adm = [];
for([key, value] of Map){
    if(value === 'Adm'){
        adm.push(key);
    }
}
return adm;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Adm');
usuarios.set('Rayana', 'Adm');
usuarios.set('Leticia', 'User');
usuarios.set('Claudia', 'Adm');
usuarios.set('Lucimar', 'User');
usuarios.set('Cleber', 'User');

console.log(getAdm(usuarios));
 */





/*Método Set */
const  meuArray = [30,30,40,5,223,2049,3034,5];

function valoresunicos (arr){
const mySet = new Set (arr);

return [...mySet];

}

console.log( valoresunicos(meuArray));
