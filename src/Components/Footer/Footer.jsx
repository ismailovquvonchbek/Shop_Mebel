import "./Footer.scss"
import Big_Sofa from "../../Image/footer_chair.png"
import People from "../../Image/People.svg"

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <ul className="ftr__list">

                        <li className="ftr__item">
                            <img src={Big_Sofa} alt="Image" className="ftr__img" />
                        </li>

                        <li className="ftr__item item2">
                            <h2 className="ftr__heading">Luxury & Fancy Chair</h2>
                            <p className="ftr__text">
                                All the Lorem Ipsum generators on the Internet tend to predefined chunks  this the first true generator on the Internet.
                            </p>
                            <span className="ftr__span"></span>
                        </li>

                        <li className="ftr__item item3">
                            <div className="ftr__info">
                                <h3 className="ftr__title">20K+ <span className="heading__span">People Visiting this year</span></h3>
                                <h3 className="ftr__title">15 <span className="heading__span">Years Experience</span></h3>
                            </div>

                            <div className="ftr__div">
                                <img className="ftr__icons" src={People} alt="Icon" />
                                <span className="ftr__line"></span>
                                <h4 className="ftr__sarlavha">Trust Members <br />
                                    <span className="title__span">
                                        More than 50k peoples integrate with us.
                                    </span>
                                </h4>
                            </div>
                        </li>

                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;