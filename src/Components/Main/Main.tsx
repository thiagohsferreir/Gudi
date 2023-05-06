import "../../Sass/global.scss";
import "./Main.scss";
//COMPONENTS
import Props from "./Props/BigCards.tsx";
import Prop from "./Props/CardsWhite.tsx";
import Galeria from "./Props/Galeria.tsx";
import VetorAzul from "./Props/VetorAzul.tsx";

//ASSETS
import bigcard from "../../assets/imgs/bigcard-1.png";
import bigcard2 from "../../assets/imgs/bigcard-2.png";
import bigcard3 from "../../assets/imgs/bigcard-3.png";

//VETORES
import Pins from "../../assets/imgs/Pins.png";
import Coco from "../../assets/imgs/Coco.png";
import Montanha from "../../assets/imgs/Montanha.png";
import Cardapio from "../../assets/imgs/Cardapio.png";

export default function Main() {
  return (
    <main className="root">
      <section className="Main">
        <form>
          <h1>Para qual estado você deseja ir?</h1>
          <input
            type="text"
            placeholder="Pesquisar"
            name="Pesquisar"
            id="main-input"
          />
          <div className="btncontainer">
            <button>BUSCAR</button></div>
        </form>
      </section>
      <section className="Big-Card-Main">
        <Props
          imagem={bigcard}
          alt="Dois amigos sorrindo"
          descricao="VIAGENS NACIONAIS"
          titulo="O clima perfeito, no lugar perfeito"
          subtitulo="Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço."
        />
        <Prop
          imagem={bigcard2}
          alt="Amigos pulando"
          descricao="VIAGENS NACIONAIS"
          titulo="Curta uma nova vibe entre amigos"
          subtitulo="Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos. Conheça nossos Planos Multi."
        />
        
          <Props
            imagem={bigcard3}
            alt="Dois amigos sorrindo"
            descricao="VIAGENS NACIONAIS"
            titulo="Algumas experiências são inexplicáveis"
            subtitulo="Conheça as fontes termais de Caldas Novas, Goiás. Águas quentes, num clima sereno, relaxante e natural."
          />
          <div className="galeria">
            <Galeria  botao="RIO DE JANEIRO" botao2="RIO DAS OSTRAS" botao3=" CALDAS NOVAS" botao4="AMAZÔNIA" />
            
          </div>
         
            
      </section>
      <div className="galeria-branca">
            <div className="texto-container">
              <div className="textos">
                <h3>use a hashtag #brasilisverigudi</h3>
                <h1>Nosso mural de Experiências</h1>
              </div>
            </div>
            <div className="galeriacontainer">
              <div className="galeria-branca-fotos">
                <div className="foto foto1">a</div>
                <div className="foto foto2">a</div>
                <div className="foto foto3">a</div>
                <div className="foto foto4">a</div>
                <div className="foto foto5">a</div>
                <div className="foto foto6">a</div>
            </div>
          </div>
          </div>

          <section className="vetores-container">
              <div className="grey-bg">
                <VetorAzul
                  imagem={Pins}
                  alt="Um vetor com pins de localizações"
                  texto="O melhor do Brasil"
                />
              </div>
              <div className="blue-bg">
                <VetorAzul
                  imagem={Montanha}
                  alt="Duas montanhas, estrada e avião"
                  texto="Cidades mais frequentadas"
                />
              </div>
              <div className="grey-bg">
                <VetorAzul imagem={Coco} alt="Coco" texto="Pontos turísticos" />
              </div>
              <div className="blue-bg">
                <VetorAzul
                  imagem={Cardapio}
                  alt="Cardápio"
                  texto="Restaurantes"
                />
              </div>
            </section>
      <section className="fale-conosco">
              <h1>Fale conosco</h1>
              <form action="">
                <input className="input" type="email" placeholder="Digite seu melhor email" />
                <input className="input" type="text" placeholder="Assunto" />
                <textarea className="input" id="msg" placeholder="Escreva sua mensagem"></textarea>
                <button className="buttoninput">ENVIAR</button>
              </form>
            </section>
    </main>
  );
}
