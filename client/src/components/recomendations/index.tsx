import { useEffect, useState } from "react";
import { getBooks } from "../../services/booksService";
import {
    Highlighted,
    ReadingList,
    ReadingWrapper,
    RecommendationWrapper,
    Writter,
} from "./styles";

const Recommendations: React.FC = () => {
    const [books, setBooks] = useState<any[]>([]);
    const [highlightedBook, setHighlightedBook] = useState<any | null>(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const booksData = await getBooks();
                setBooks(booksData);
                if (booksData.length > 0) {
                    setHighlightedBook(booksData[0]); // Define o primeiro livro como destaque
                }
            } catch (error) {
                console.error("Failed to fetch books:", error);
            }
        };
        fetchBooks();
    }, []);

    return (
        <RecommendationWrapper>
            <h2>Achamos que você vai curtir:</h2>

            {highlightedBook && (
                <Highlighted>
                    <img src={highlightedBook.cover || ""} alt={highlightedBook.title} />
                    <div>
                        <div>
                            <h3>{highlightedBook.title}</h3>
                            <p>{highlightedBook.description || "Descrição não disponível."}</p>
                        </div>
                        <Writter>
                            <img src={highlightedBook.authorPhoto || ""} alt={highlightedBook.author} />
                            <span>{highlightedBook.author || "Autor desconhecido"}</span>
                        </Writter>
                    </div>
                </Highlighted>
            )}

            <ReadingWrapper>
                <h2>Continuar lendo</h2>

                <ReadingList>
                    {books.slice(1, 5).map((book) => (
                        <img
                            key={book.id}
                            src={book.cover || ""}
                            alt={book.title}
                            title={book.title}
                        />
                    ))}
                </ReadingList>
            </ReadingWrapper>
        </RecommendationWrapper>
    );
};

export default Recommendations;
