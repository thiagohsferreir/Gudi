interface props {
imagem: string
alt: string
texto:string
}
export default function VetorAzul(props: props) {
  return (
    <div className="vetores">
      <img className="imagemvetores" src={props.imagem} alt={props.alt} />
      <h3 className="textovetor">{props.texto}</h3>
    </div>
  )
}
