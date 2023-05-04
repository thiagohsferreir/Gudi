import "./Footer.scss";
import Logo from "../../assets/imgs/Componente 13 – 1@2x.png";
import FooterMenu from "./PropsFooter/FooterMenu";
export default function Footer() {
  return (
    <footer className="footer">
      <section className="sectionfooter">
        <img className="LogoFooter" src={Logo} alt="Gudi O Bom da vida é viver." />
        <ul>
          <li>Sobre nós</li>
          <li>Mural de memórias</li>
          <li>Eventos Gudi</li>
          <li>Nosso blog</li>
        </ul>
      </section>
      <FooterMenu titulo="Contato" lista1="Chat Virtual" lista2=" SAC Onine" lista3="Ouvidoria" lista4="FAQ"/>
      <FooterMenu titulo="Benefícios" lista1="Conta digital Gudi" lista2="Viaje com Milhas" lista3="C6 Átomos" lista4="iD Jovem"/>
      <FooterMenu titulo="Lugares" lista1="O melhor do Brasil" lista2="Cidades frequentes" lista3="Pontos turísticos" lista4="Restaurantes"/>
      <FooterMenu titulo="Curiosidades" lista1="Cultura e tradições" lista2="Pratos típicos" lista3="Mitos brasileiros" lista4="Carnaval"/>
    </footer>
  );
}
