import { BookProgress, InfosBookProgress, LastReadWrapper, ProgressBar } from "./styles";

import bookCover from "../../assets/medicina.png"
import { useEffect, useState } from "react";

const LastRead: React.FC = () => {
    const [progressInPercents, setProgressInPercents] = useState<number>()
    const [totalPages, setTotalPages ] = useState<number>(416)
    const [pagesRead, setPagesRead] = useState<number>(114)

    useEffect(() => {
        const pagesReadPercents = () => {
            const totalConverted = (100 * pagesRead) / totalPages;
            setProgressInPercents(totalConverted);
        }
        pagesReadPercents();
    })

    return (
        <LastReadWrapper>
            <img src={bookCover} alt="" />
            <InfosBookProgress>
                <h4>
                    Medicina Macabra 2
                </h4>
                <span>4.0 hora(s) registradas</span>
                <span>Última vez lido em 7 de set.</span>

                <BookProgress>
                    <span>
                        <strong>Progresso de leitura</strong> 114 de 416
                    </span>
                    <ProgressBar progress={progressInPercents as number}/>
                </BookProgress>
            </InfosBookProgress>
        </LastReadWrapper>
    )
}

export default LastRead;