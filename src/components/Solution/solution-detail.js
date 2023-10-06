import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../elements/loader';
import classes from './solution-detail.module.css';
import ReactPlayer from 'react-player';
import axios from 'axios';

const SolutionDetail = () => {
    const navigate = useNavigate();
    const { questionId } = useParams();
    const [solutions, setSolution] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [imageId, setImageId] = useState('');

    useEffect(() => {
        const getSolution = async () => {
            try {
                setIsLoading(true);
                setError('');
                const response = await axios.get(
                    `https://app.prepanywhere.com/api/stu/static_books/question_details?id=${questionId}`
                );
                setSolution(response.data);
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
        getSolution();
    }, [questionId]);

    useEffect(() => {
        // Parse the HTML string
        const parser = new DOMParser();
        const doc = parser.parseFromString(solutions.question_html, 'text/html');

        // Find the image element and extract the src
        const imageElement = doc.querySelector('img');
        const imageSrc = imageElement ? imageElement.getAttribute('src') : '';

        // Extract the image ID from the src
        const imageId = imageSrc.substring(imageSrc.lastIndexOf('/') + 1);

        setImageId(imageId);
    }, [solutions.question_html]);

    return (
        <section className={classes.solution}>
            <div className={classes['solution-container']}>
                {isLoading && <Loader />}
                {error && <p className='error-message'>{error}</p>}

                {!error && !isLoading && (
                    <div>
                        {solutions ? (
                            <div className={classes['solution-body']}>
                                <div
                                    className={classes.questionsTexts}
                                    dangerouslySetInnerHTML={{ __html: solutions.question_html }}
                                ></div>
                                {imageId && (
                                    <img
                                        src={`https://prepanywhere.s3.amazonaws.com/qimages/${imageId}-original.png`}
                                        alt={solutions.question}
                                    />
                                )}
                                {solutions.youtube_code && (
                                    <div className={classes['solution-video']}>
                                        <ReactPlayer
                                            url={`https://www.youtube.com/watch?v=${solutions.youtube_code}`}
                                            width='100%'
                                            height='100%'
                                            display='flex'
                                            justify-content='center'
                                            config={{
                                                youtube: {
                                                    playerVars: { showinfo: 1 },
                                                },
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className={classes['post__error']}>
                                <h2 className='text-blue'>Solution video not Found</h2>
                                <p>
                                    The Solution video you are looking for might have been removed,
                                    had it's name changed or is temporary unavailable.
                                </p>
                                <button
                                    type='button'
                                    aria-label='Questions Page'
                                    onClick={() => navigate(-1)}
                                >
                                    Go to Questions
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default SolutionDetail;
