interface props {
botao:string
botao2:string
botao3:string
botao4:string
}

export default function Galeria(props: props) {
  return (
    <div className="imagem-container">
        <div className=" imagem imagem1 imagem-w">
        <button className="botaogaleria">{props.botao}</button>

        </div>
        <div className="imagem2 imagem-w">
            <button className="botaogaleria">{props.botao2}</button>
        </div>
        <div className="imagem3 imagem-w">
            <button className="botaogaleria">{props.botao3}</button>
        </div>
        <div className="imagem4 imagem-w">
            <button className="botaogaleria">{props.botao4}</button>
        </div>
  
    </div>
  )
}
