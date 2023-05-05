interface props {
  alt: string;
  imagem: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
}
export default function CardsWhite(props: props) {
  return (
    <div className="CardBranco">
      <div className="CardBrancoInside">
        <div className="imgcontainerbranco">
          <img className="imgcardbranco2" src={props.imagem} alt={props.alt} />
        </div>

        <div className="containtermaster">
          <aside className="aside2">
            <div className="descricao1">
              <div className="linha1">-</div>
              <h3 className="descricaobranco">{props.descricao}</h3>
            </div>
            <h1 className="titulobranco">{props.titulo}</h1>
            <p className="subtitulobranco">{props.subtitulo}</p>
            <button className="btnbranco">AGENDAR</button>
          </aside>
          <div className="imagemcontainerb" >
            <img className="imgcardbranco" src={props.imagem} alt={props.alt} />
          </div>
        </div>
      </div>
    </div>
  );
}
