import React from "react"
import "./Hero.scss"
import Sahifalar from "../../Image/Sahifalar.png"
import Chair1 from "../../Image/Chair1.png"
import Chair2 from "../../Image/Sofe-2.png"
import Chair3 from "../../Image/Sofa.png"
import True from "../../Image/True_modal.png"

const allChairs = [
    {
        id: 1,
        imgSrc: Chair1,
        sentences: 'Comfort Launge Chairs',
    },

    {
        id: 2,
        imgSrc: Chair2,
        sentences: 'Comfort Launge Chairs',
    },

    {
        id: 3,
        imgSrc: Chair3,
        sentences: 'Comfort Launge Chairs',
    },
]


function Hero() {

    const [sofaSelects, setsofeSelects] = React.useState(Chair1)
    const xRef = React.useRef();

    return (
        <>
            <section className="hero">
                <div className="container">
                    <a className="hero__links" href="#link">
                        <img src={Sahifalar} alt="Icons" className="hero__tarmoq" />
                    </a>

                    <div className="hero__info">
                        <span className="hero__span">100% Quality Guranty</span>
                        <h1 className="hero__heading">
                            Find Classy Furnitures For Your Comfort
                        </h1>
                        <p className="hero__text">
                            All the Lorem Ipsum generators on the Internet tend to predefined chunks  this the first true generator on the Internet.
                        </p>
                        <span className="hero__span2">Start From</span>
                        <p className="hero__p">102.99 USD</p>
                        <button className="hero__btn" onClick={() => {
                            xRef.current.classList.add("blok")
                        }}>Buy Now</button>





                        <div className="modal" ref={xRef}>

                            <div className="hero__modal">
                                <button className="modal__exit" onClick={()=> {
                                    xRef.current.classList.remove('blok')
                                }}>x</button> <br />
                                <img src={True} alt="Icon" className="modal__img" width={50} height={50} />

                                <p className="modal__p">
                                    Muvaffaqatli sotib oldingiz!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="hero__list">

                        {sofaSelects && (
                            <div className="salom">
                                <img
                                    className="hero__firstImg"
                                    src={sofaSelects.imgSrc}
                                    alt="Katta rasm" width={562} height={562} />
                            </div>
                        )}

                        <div className="hero__spans">
                            <p className="hero__span--p">Popular shades</p>
                            <span className="span__col1"></span>
                            <span className="span__col2"></span>
                            <span className="span__col3"></span>
                            <span className="span__col4"></span>
                        </div>

                        <div className="hero__second">
                            {allChairs.map((chair) => (
                                <div className="hero__item" key={chair.id}>
                                    <img
                                        className="hero__smallImg"
                                        src={chair.imgSrc} alt="Img"
                                        onClick={() => setsofeSelects(chair)} />

                                    <p className="hero__mappp">{chair.sentences}</p>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Hero;