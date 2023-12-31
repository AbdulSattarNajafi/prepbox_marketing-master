import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Loader from '../elements/loader';
import classes from './Bookcover.module.css';
import axios from 'axios';

const BookCover = () => {
    const [Chapters, setChapters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { bookName } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getChapters = async () => {
            try {
                setIsLoading(true);
                setError('');
                const response = await axios.get(
                    `https://app.prepanywhere.com/api/stu/static_books/all_chapters?book_name=${bookName}`
                );
                setChapters(response.data);
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

        getChapters();
    }, [bookName]);

    const navigationHandler = (chapterName, materialName) => {
        navigate(`${chapterName}/${materialName}`);
    };

    return (
        <div className={classes.section}>
            <div className={classes.header}>
                <h1> {bookName.replace(/-/g, ' ')} </h1>
            </div>
            <div className={classes.container}>
                {isLoading && <Loader />}

                {error && <p className='error-message'>{error}</p>}

                {!error && !isLoading && (
                    <div>
                        {Chapters.map((chapter) => {
                            return (
                                <div key={chapter.id}>
                                    <div className={classes.chapterTitle}>
                                        <h2>{chapter.name}</h2>
                                    </div>
                                    <ul className={classes.chapterContainer}>
                                        <div className={classes.chapterTextContainer}>
                                            <li className={classes.listItem}>
                                                <div className={classes.materialWrapper}>
                                                    <div className={classes.material}>
                                                        {chapter.materials.map((material) => {
                                                            return (
                                                                <div
                                                                    key={material.id}
                                                                    onClick={() =>
                                                                        navigationHandler(
                                                                            chapter.common_name,
                                                                            material.common_name
                                                                        )
                                                                    }
                                                                >
                                                                    <p>{material.name}</p>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </li>
                                        </div>
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookCover;
