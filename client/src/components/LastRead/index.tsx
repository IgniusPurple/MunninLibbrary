import { BookProgress, InfosBookProgress, LastReadWrapper, ProgressBar } from "./styles";
import { useEffect, useState } from "react";
import { getBooks } from "../../services/booksService";

const LastRead: React.FC = () => {
    const [progressInPercents, setProgressInPercents] = useState<number>();
    const [totalPages, setTotalPages] = useState<number>(0);
    const [pagesRead, setPagesRead] = useState<number>(0);
    const [book, setBook] = useState<any>(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const books = await getBooks();
                if (books.length > 0) {
                    setBook(books[0]); // Assume que o primeiro livro é o último lido
                    setTotalPages(books[0].totalPages || 0);
                    setPagesRead(books[0].pagesRead || 0);
                }
            } catch (error) {
                console.error("Failed to fetch books:", error);
            }
        };
        fetchBooks();
    }, []);

    useEffect(() => {
        if (totalPages > 0) {
            const totalConverted = (100 * pagesRead) / totalPages;
            setProgressInPercents(totalConverted);
        }
    }, [totalPages, pagesRead]);

    return (
        book && (
            <LastReadWrapper>
                <img src={book.cover || ""} alt={book.title} />
                <InfosBookProgress>
                    <h4>{book.title}</h4>
                    <span>{book.readingTime || "0"} hora(s) registradas</span>
                    <span>Última vez lido em {book.lastReadDate || "N/A"}</span>

                    <BookProgress>
                        <span>
                            <strong>Progresso de leitura</strong> {pagesRead} de {totalPages}
                        </span>
                        <ProgressBar progress={progressInPercents || 0} />
                    </BookProgress>
                </InfosBookProgress>
            </LastReadWrapper>
        )
    );
};

export default LastRead;
