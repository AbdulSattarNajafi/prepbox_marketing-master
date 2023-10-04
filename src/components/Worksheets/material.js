import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import classes from './Bookcover.module.css';
import axios from 'axios';
import Loader from '../elements/loader';

const MaterialPage = () => {
    const [Questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { materialName } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const materialId = localStorage.getItem('__material_id');
        const getQuestions = async () => {
            try {
                setIsLoading(true);
                setError('');
                const response = await axios.get(
                    `https://app.prepanywhere.com/api/stu/static_books/all_questions?id=${materialId}`
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

        if (materialId) {
            getQuestions();
        }
    }, []);

    const questionNavigationHandler = (url) => {
        navigate(url);
    };

    return (
        <div className={classes.section}>
            <div className={classes.header}>
                <h3>{materialName.replace(/-/g, ' ')}</h3>
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
