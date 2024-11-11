import recomendationBanner from "../../assets/anatomia.png"
import writterPhoto from "../../assets/frank.png"
import medicina from "../../assets/medicina.png"
import derma from "../../assets/derma.png"
import nova from "../../assets/nova.png"
import plants from "../../assets/plants.png"


import { Highlighted, ReadingList, ReadingWrapper, RecommendationWrapper, Writter } from "./styles";
const Recommendations: React.FC = () => {
    return (
        <RecommendationWrapper>
            <h2>Achamos que você vai curtir:</h2>

            <Highlighted>
                <img src={recomendationBanner} alt="" />
                <div>
                <div>
                    <h3>Anatomia Geral</h3>
                    <p>
                        Reconhecer os órgãos do corpo humano, e como estes se comportam para a formação dos sistemas, 
                        bem como conceitos de posição e variação anatômica, biótipo, características morfológicas e 
                        a terminologia anatômica. A Anatomia é a ciência que estuda a constituição e o desenvolvimento 
                        dos seres organizados.
                    </p>
                </div>
                <Writter>
                    <img src={writterPhoto} alt="" />
                    <span>Frank H. Netter</span>
                </Writter>
                </div>
            </Highlighted>

            <ReadingWrapper>
                <h2>Continuar lendo</h2>

                <ReadingList>
                    <img src={medicina} alt="" />
                    <img src={derma} alt="" />
                    <img src={nova} alt="" />
                    <img src={plants} alt="" />
                </ReadingList>
            </ReadingWrapper>
        </RecommendationWrapper>
    )

}

export default Recommendations;