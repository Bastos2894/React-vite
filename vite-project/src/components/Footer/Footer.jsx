import { Link } from "react-router-dom"


// ASSETS
import './Footer.css'
import Logo from '../../assets/DNC-logo.svg'
import BrazilIcon from '../../assets/Brasil.svg'
import EUAIcon from '../../assets/EUA.svg'
import Face from '../../assets/face.svg'
import Insta from '../../assets/instagran.svg'
import X from '../../assets/x.svg'
import Linkedin from '../../assets/linkedin.svg'




function Footer(){
    return(
        <footer className="al-center d-flex">
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                        <img src={Logo} className="footer-logo"/>
                        <p className="gray-1-color">
                            A escola que prepara você para as profissões em alta no mercado de trabalho.
                        </p>
                        <div className="d-flex social-links">
                            <a href="https://google.com" target="_blank">
                                <img src={Face}/>
                            </a>
                            <a href="https://google.com" target="_blank">
                                <img src={X}/>
                            </a>
                           
                            <a href="https://google.com" target="_blank">
                                <img src={Linkedin}/>
                            </a>

                            <a href="https://google.com" target="_blank">
                                <img src={Insta}/>
                            </a>
                        </div>
                    </div>
                    <div className="d-flex mobile-fd-column">
                        <div className="footer-col">
                            <h3>Pages</h3>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>Contact</h3>
                            <p className="gray-1-color">R. Justino Cobra, 61-Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
                            <p className="gray-1-color">suporte@escoladnc.com.br</p>
                            <p className="gray-1-color">(19) 99187-4342</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex jc-space-between footer-copy">
                    <p className="gray-1-color">
                        Copyright © DNC -2024 School.
                    </p>
                    <div className="langs-area d-flex">
                        <img src={BrazilIcon} height="29px"/>
                        <img src={EUAIcon} height="29px"/>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer