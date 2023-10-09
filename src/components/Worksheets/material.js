import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import classes from './Bookcover.module.css';
import axios from 'axios';
import Loader from '../elements/loader';

const MaterialPage = () => {
    const [Questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { bookName, chapterName, materialName } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getQuestions = async () => {
            try {
                setIsLoading(true);
                setError('');
                const response = await axios.get(
                    `https://app.prepanywhere.com/api/stu/static_books/all_questions?book_name=${bookName}&chapter_name=${chapterName}&material_name=${materialName}`
                );
                setQuestions(response.data);
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

        getQuestions();
    }, [bookName, chapterName, materialName]);

    const questionNavigationHandler = (url) => {
        navigate(url);
    };

    return (
        <div className={classes.section}>
            <div className={classes.header}>
                <h3>{materialName.replace('-', '.').replace(/-/g, ' ')}</h3>
            </div>
            <div className={classes.container}>
                {isLoading && <Loader />}

                {error && <p className='error-message'>{error}</p>}
                {!error && !isLoading && (
                    <div>
                        <ul className={classes.materialList}>
                            {Questions.length > 0 ? (
                                Questions?.map((question) => {
                                    return (
                                        <li
                                            onClick={() => questionNavigationHandler(question.uuid)}
                                            key={question.uuid}
                                        >
                                            {question.uuid}{' '}
                                        </li>
                                    );
                                })
                            ) : (
                                <p className='text-center text-blue'>Qustions Not Found!</p>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MaterialPage;
