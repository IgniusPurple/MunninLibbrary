import { BackgroundImage } from "./styles";

import back from '../../assets/back.jpeg'
import { FaPaintBrush } from "react-icons/fa";


const Background: React.FC = () => {
    return (
        <BackgroundImage path={back}>
            <div>
                <button> <FaPaintBrush /> </button>
            </div>
        </BackgroundImage>
    )
}

export default Background;