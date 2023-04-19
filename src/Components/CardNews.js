class Cardnews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode:"open"}); 
        //this = essa classe (constructor) .attachShadow = vai criar uma sombra (attach é de anexar)
        //mode closed = somente oq está aqui dentro pode influenciar. mode open = o mundo exterior pode ver
        shadow.appendChild(this.build());//adiciona todos elementos HTML
        shadow.appendChild(this.styles());//adiciona em seguida todos os styles
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");
        //setAttribute vai setar um atributo que vai ser a classe com valor card que definimos para a div

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");
        //sempre que eu chamar autor no index, vai vir uma tag span onde vai estar escrito "By" antes de qualquer coisa que eu escrever
        //se não for inserido dados de autor, vai escrever By Anonymous

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");    

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");    

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/foto-default.jpg";
        newsImage.alt = "Foto da Noticia";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft); //cria dependencia, ou seja, coloca a div dentro da outra div assim como na estrutura HTML
        componentRoot.appendChild(cardRight); //appendChild fala que as divs são filhas da div componentRoot

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .card {
              width: 80%;
              box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
              -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
              -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
              display: flex;
              flex-direction: row;
              justify-content: space-between;
            }
            
            .card_left {
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding-left: 10px;
            }
            
            .card_left > span {
              font-weight: 400;
            }
            
            .card_left > a {
              margin-top: 15px;
              font-size: 25px;
              color: black;
              text-decoration: none;
              font-weight: bold;
            }
            
            .card_left > p {
              color: rgb(70, 70, 70);
            }
        `;    

        return style;
    }
}

customElements.define('card-news',Cardnews);
//define é o metodo para definir qual elemento customizado estamos criando

//Atenção: A base do shadow DOM é essa
//class Cardnews extends HTMLElement {
//    constructor(){
//        super();
//        const shadow = this.attachShadow({mode:"open"})
//  }
//}
//customElements.define('card-news',Cardnews);