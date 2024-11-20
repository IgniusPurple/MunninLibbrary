import { useEffect, useRef, useState } from "react";
import Background from "../../components/Background";
import Header from "../../components/header"
import Recommendations from "../../components/recomendations";
import { Wrapper } from "./styles";

const Profile: React.FC = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [mainHeight, setMainHeight] = useState<number | undefined>(undefined);
    
    useEffect(() => {
        const calculateHeight = () => {
            const headerHeight = headerRef.current?.getBoundingClientRect().height || 0;
            const windowHeight = window.innerHeight;
            setMainHeight(windowHeight - headerHeight);
        }
        calculateHeight();
        window.addEventListener("resize", calculateHeight);

        return () => {
            window.removeEventListener("resize", calculateHeight);
        };
    }, []);
    return (
        <>
            <div ref={headerRef}>
                <Header />
            </div>
            <Wrapper style={{ height: mainHeight ? `${mainHeight}px` : "auto" }}>
                <Background />
                <Recommendations />
            </Wrapper>
        </>
    )
}

export default Profile;