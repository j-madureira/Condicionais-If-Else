/* Criar uma variável do tipo Number "18" esta variável se trata de uma
   idade, utilizar a estrutura condicional if else para verificar se a pessoa
   é autorizada ou não se a idade for >= 18 autorizada se não, não autorizada
*/

var idade = prompt("Informe sua idade");

if( idade >= 18){
    console.log("Autorizado, você tem acesso ao produto!")
}
else{console.log("Não autorizado, acesso ao produto negado!")}

alert(idade);
