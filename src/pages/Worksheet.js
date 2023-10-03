import { useState, useEffect } from 'react';
import axios from 'axios';
import WorksheetHero from '../components/Worksheets/hero';

const Worksheet = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

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
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx

                setError('No Data Found!');
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js

                setError('Network Error');
            } else {
                // Something happened in setting up the request that triggered an Error
                setError('Something went wrong, Please try again!');
            }
            // console.log(error.toJSON());
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <>
            <WorksheetHero books={books} isLoading={isLoading} error={error} />
        </>
    );
};

export default Worksheet;
