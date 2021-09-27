// Para fazer as questões 1, 2 e 3, dê preferência aos recursos de ES6 como template literals, desestruturação, arrow-functions e outros, pois será um diferencial na hora de somar os pontos.


// --------------------- Questão 01 ---------------------
// Responda no console o que é cada um dos itens nativos do javaScript abaixo. 
// Exemplo: const item1 = "CAEd"; 
// No console responda: console.log("item1 é do tipo string");  
// Dica: Existem métodos e propriedades do JavaScript para verificar o tipo;

const item1 = "Escola";
const item2 = 598;
const item3 = 19 + "895";
const item4 = true;
const item5 = {
  instituation: "CAEd"
};
const item6 = [function () {}];

// Resposta aqui

console.log("O item1 é do tipo: "+typeof item1)
console.log("O item2 é do tipo: "+typeof item2)
console.log("O item3 é do tipo: "+typeof item3)
console.log("O item4 é do tipo: "+typeof item4)
console.log("O item5 é do tipo: "+typeof item5)
console.log("O item6 é do tipo: "+typeof item6)


// --------------------- Questão 02 ---------------------
// Baseado no objeto person abaixo, construa uma função que mostre no console a seguinte frase: "Menu nome é Arthur Gabriel, tenho 34 anos e trabalho no CAEd". Utilize as variáveis name, surname, age e job para construir a frase.

const person = {
  name: "Arthur",
  surname: "Gabriel",
  age: 34,
  job: "CAEd",
  developer: false
};

// Ainda dentro dessa função, construa outro console que verifique a seguinte condição: 
// Se developer for false, deverá retornar a frase, "Mentira eu sou desenvolvedor web fron-end". Caso contrário, não retornar nada.

// Resposta aqui
function mostraNome(pessoa){
  console.log("Meu nome é "+person.name+" "+person.surname+", tenho "+person.age+" anos e trabalho no "+person.job+".")

  if(person.developer == false){
  console.log("Mentira eu sou desenvolvedor fron-end")
  }
}


// --------------------- Questão 03 ---------------------
// Partindo dos arrays 1 e 2 faça:

// Crie uma constante array final que receba os 2 arrays e junte em apenas 1 array.

// Faça uma iteração no array 1 de forma que verique se existe o item História. Se existir, retorne no console true e se não existir, retorne false

const array1 = ['Lingua Portuguesa', 'Matemática'];
const array2 = ['Ciências', 'Geografia'];

// Resposta aqui


const arrayFinal = array1.concat(array2);

console.log(arrayJunto);

arrayFinal.includes('Geografia');


// --------------------- Questão 04 ---------------------
// Utilizando JavaScript puro ou jQuery, selecione o botão de abrir modal no document do index.html e faça um evento de clique.

// Após o clique, o botão deve ficar na cor verde #97A43C e com borda verde escuro na cor #48753A. 

// Ao clicar no botão novamente, ele deve retornar a cor azul anterior e sempre que clicar outras vezes, ele deve alternar entre o azul e o verde.

// Dica: Pode-se adicionar uma classe após o clique e a cor ser alterada através do CSS.

// Resposta aqui

<script type="text/javascript">

  var count = 1;

  document.getElementById("botao-modal").onclick = function() {mudaCor()};

  function mudaCor(){
    var propriedade = document.getElementById("botao-modal");
    if(count == 0){
      propriedade.style.backgroundColor = "#1975fd";
      propriedade.style.borderColor = "none";
        count = 1;
      }else{
        propriedade.style.backgroundColor = "#97A43C";
        propriedade.style.borderColor = "#48753A";
        count = 0;
      }
   }

</script>