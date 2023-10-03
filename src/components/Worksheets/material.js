import { useNavigate, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import React, { useState, useEffect } from 'react';
import classes from './Bookcover.module.css';
import axios from 'axios';
import Loader from '../elements/loader';

const MaterialPage = () => {
    const [Questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { chapterName } = useParams();
    const [cookie] = useCookies();

    const chapterId = cookie.__chapter_id;
    // `https://app.prepanywhere.com/api/stu/static_books/question_details?id=051fb175-ed70-4e5d-96c0-9ba453b5377a`

    useEffect(() => {
        const getQuestions = async () => {
            try {
                setIsLoading(true);
                setError('');
                const response = await axios.get(
                    `https://app.prepanywhere.com/api/stu/static_books/question_details?id=${chapterId}`
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
    }, [chapterId]);

    return (
        <div className={classes.section}>
            <div className={classes.header}>
                <h1>{chapterName.replace(/-/g, ' ')}</h1>
            </div>
            <div className={classes.container}>
                {isLoading && <Loader />}

                {error && <p className='error-message'>{error}</p>}
                {!error && !isLoading && (
                    <div>
                        <ul>
                            {/* {Questions?.map((question) => {
                            return (
                                <div>
                                    <li> {question.uuid} </li>
                                </div>
                            );
                        })} */}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MaterialPage;
