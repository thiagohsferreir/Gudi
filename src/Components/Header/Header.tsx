

import "../../Sass/global.scss";
import "./Header.scss";
import Logo from "../../assets/imgs/Componente 13 – 1@2x.png";
import LogoPhone from "../../assets/imgs/logophone.png";

export default function Header() {
  return (
    <header>
      <nav>
        <figure>
          <img className="logo2" src={Logo} alt="logo-gudi" />
          <img className="logophone" src={LogoPhone} alt="logo-gudi" />
          
          </figure>
        <div>
          <ul>
            <li>Sobre</li>
            <li>Beneficios</li>
            <li>Contato</li>
            <li className="agendar">AGENDAR</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
