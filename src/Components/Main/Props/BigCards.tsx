interface props{
alt: string
imagem: string
titulo:string
subtitulo:string
descricao: string
}
export default function BigCards(props: props) {
  return (
    <div className="propinside">
        <div className="imgcontainer"><img className="imgcard" src={props.imagem} alt={props.alt} /></div>
        <aside className="aside">
          <div className="descricao">
            <div className="linha">-</div>
            <h3>{props.descricao}</h3>
          </div>
          <h1 className="titulo">{props.titulo}</h1>
          <p className="subtitulo">{props.subtitulo}</p>
          <button>AGENDAR</button>
        </aside>
    </div>
    
  )
}
