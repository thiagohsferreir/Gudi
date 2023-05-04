interface props{
titulo: string
lista1: string
lista2:string
lista3:string
lista4: string
}
export default function FooterMenu(props:props) {
  return (
    <div className="footer-menu">
        <h1>{props.titulo}</h1>
        <ul>
            <li>{props.lista1}</li>
            <li>{props.lista2}</li>
            <li>{props.lista3}</li>
            <li>{props.lista4}</li>
        </ul>
    </div>
  )
}
