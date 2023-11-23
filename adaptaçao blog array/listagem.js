const listagemPost = document.querySelector("#listagemDePost");


const dadosDosPosts=[
{titulo : "Gruta do Lago Azul, Bonito, Mato Grosso do Sul",
 resumo:"A Gruta do Lago Azul é um dos símbolos de Bonito e imperdível para visitar e, consequentemente, se encantar", 
 urlImagem:"/img/Gruta.jpg",
 data:"18/10/23",
link:"/post/primeiro_post.html"},


{titulo : "Piscinas naturais de Porto de Galinhas, Ipojuca, Pernambuco",
resumo:" A vila é um dos melhores destinos de praia não apenas do Nordeste, mas do Brasil.", 
urlImagem:"/img/porto.jpeg",
data:"17/10/23",
link:"/post/segundo_post.html"},


{titulo : "Noronha",
resumo:"Ela é considerada a praia mais bonita do Brasil, e não é pra menos",
 urlImagem:"/img/noronha.jpg",
 data:"16/10/23",
link:"/post/terceiro_post.html"}
];


let numPost = dadosDosPosts.length;


for(i=0; i<numPost; i++){
    const dadosDoPost = dadosDosPosts[i];
    const itemLista = document.createElement("article");
    itemLista.innerHTML=`
    <main>
    <header> ${dadosDoPost.titulo}</header>
    <header>${dadosDoPost.data}</header>
    <img src="${dadosDoPost.urlImagem}" width = 100px">
     ${dadosDoPost.resumo} 
    <a href="${dadosDoPost.link}">Ler post completo</a>  
    </main>
    `;

    listagemPost.appendChild(itemLista);
}