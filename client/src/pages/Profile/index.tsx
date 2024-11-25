// src/pages/Profile.tsx
import React, { useEffect, useState } from 'react';
import Header from "../../components/header";
import LastRead from "../../components/LastRead";
import Online from "../../components/Online";
import { ProfileInfos, ProfileInfosWrapper } from "./styles";
import { getUserProfile, updateUserProfile } from '../../services/usersService'; // Corrigido: Importando o serviço para manipulação de perfil
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const profileData = await getUserProfile();
                setUser(profileData);
            } catch (error) {
                console.error('Erro ao carregar perfil', error);
                navigate('/login');
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [navigate]);

    const handleSave = async () => {
        try {
            await updateUserProfile(user);
            alert('Perfil atualizado com sucesso!');
        } catch (error) {
            alert('Erro ao atualizar perfil!');
        }
    };

    if (loading) return <div>Carregando...</div>;

    return (
        <>
            <Header />
            <ProfileInfosWrapper>
                <ProfileInfos>
                    <div>
                        <img src="" alt="Foto de Perfil" />
                        <div>
                            <h2>{user?.name || 'Nome do Usuário'}</h2>
                            <span>{user?.location || 'Localização'}</span>
                            <p>{user?.bio || 'Bio do Usuário'}</p>
                        </div>
                        <div>
                            <div>
                                <span>Nível</span>
                                <span>{user?.level || 0}</span>
                            </div>
                            <div>
                                <img src="" alt="Icone de Nível" />
                                <div>
                                    <span>Fundador</span>
                                    <span>{user?.xp || '0 XP'}</span>
                                </div>
                            </div>
                            <button onClick={handleSave}>Editar perfil</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Atividade Recente</h3>
                            <span>{user?.activity || 'Sem dados recentes'}</span>
                        </div>
                    </div>
                    <LastRead />
                </ProfileInfos>
                <Online />
            </ProfileInfosWrapper>
        </>
    );
};

export default Profile;
