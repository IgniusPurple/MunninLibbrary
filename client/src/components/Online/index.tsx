import { AnalisysWrapper, Friend, FriendsWrapper, InsigniaWrapper, OnlineWrapper } from "./styles";
import frienProfile from "../../assets/joaq-Profile.png"

const Online: React.FC = () => {
    return (
        <OnlineWrapper>
            <h4>Online</h4>
            <InsigniaWrapper>
                <h5>Insígnias <span>35</span></h5>
                <div></div>
            </InsigniaWrapper>
            <AnalisysWrapper>
                <h5>Análises <span>7</span></h5>
            </AnalisysWrapper>
            <FriendsWrapper>
                <h5>Amigos <span>10</span></h5>
                <Friend>
                    <img src={frienProfile} alt="" />
                    <span>Joaq</span>
                    <span>33</span>
                </Friend>
            </FriendsWrapper>
        </OnlineWrapper>
    )
}

export default Online;