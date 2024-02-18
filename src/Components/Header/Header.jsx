import "./Header.scss"
import home_icon from "../../Image/Hdr_Home.svg"
import logo from "../../Image/Logo.svg"
import menu from "../../Image/Menu.svg"

function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <a className="hdr_link" href="#link">
                        <img src={home_icon} alt="Salom" className="hdr__home" width={31} height={31} />
                        <img src={logo} alt="Logo" className="hdr_logo" width={91} height={30} />
                    </a>

                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="https://cofe-lang-6t7ci9umw-quvonchbek.vercel.app/" target="_blank" className="nav__link">About</a>
                            </li>

                            <li className="nav__item">
                                <a href="https://agency-react-1eealxdm1-quvonchbek.vercel.app/" target="_blank" className="nav__link">Blog</a>
                            </li>

                            <li className="nav__item">
                                <a href="https://new-year-msvjig20z-quvonchbek.vercel.app/" target="_blank" className="nav__link">Agency</a>
                            </li>

                            <li className="nav__item">
                                <a href="https://3-oy-imtihonimiz-elsio9fyz-quvonchbek.vercel.app/" target="_blank" className="nav__link">Featured</a>
                            </li>

                            <li className="nav__item">
                                <a href="https://movies-ia2lgkbxp-quvonchbek.vercel.app/" target="_blank" className="nav__link">Price</a>
                            </li>
                        </ul>
                    </nav>

                    <img src={menu} alt="Icon" className="hdr__menu" width={30} height={15} />
                </div>
            </header>
        </>
    )
}

export default Header;