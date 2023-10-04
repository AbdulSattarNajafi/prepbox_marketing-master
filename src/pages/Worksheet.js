import { useState, useEffect } from 'react';
import axios from 'axios';
import WorksheetHero from '../components/Worksheets/hero';

const Worksheet = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getBooks = async () => {
            try {
                setIsLoading(true);
                setError('');
                const response = await axios.get(
                    'https://app.prepanywhere.com/api/stu/static_books/all_books'
                );
                setBooks(response.data);
            } catch (error) {
                if (error.response) {
                    setError('No Data Found!');
                } else if (error.request) {
                    setError('Network Error');
                } else {
                    setError('Something went wrong, Please try again!');
                }
            } finally {
                setIsLoading(false);
            }
        };

        getBooks();
    }, []);

    return (
        <>
            <WorksheetHero books={books} isLoading={isLoading} error={error} />
        </>
    );
};

export default Worksheet;
