import Header from "../../components/header"
import LastRead from "../../components/LastRead";
import Online from "../../components/Online";
import { ProfileInfos, ProfileInfosWrapper } from "./styles";

const Profile: React.FC = () => {
    return (
        <>
            <Header />
            <ProfileInfosWrapper>
                <ProfileInfos>
                    <div>
                        <img src="" alt="" />
                        <div>
                            <h2>Laís</h2>
                            <span>SP, Brasil</span>
                            <p>”Todo dia na tentativa de falhar de um jeito inovador”</p>
                        </div>
                        <div>
                            <div>
                                <span>Nivel</span>
                                <span>18</span>
                            </div>
                            <div>
                                <img src="" alt="" />
                                <div>
                                    <span>Fundador</span>
                                    <span>500 XP</span>
                                </div>
                            </div>
                            <button>Editar perfil</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>
                                Atividade Recente
                            </h3>
                            <span>30.7 horas nas últimas 2 semanas</span>
                        </div>
                    </div>
                    <LastRead />
                </ProfileInfos>
                <Online />
            </ProfileInfosWrapper>
        </>
    )
}

export default Profile;