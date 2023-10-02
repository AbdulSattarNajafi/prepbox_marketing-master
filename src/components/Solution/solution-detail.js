import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import Solutions from '../../constant/solution';
import classes from './solution-detail.module.css';
import ReactPlayer from 'react-player';
import axios from 'axios';

const SolutionDetail = () => {
    const navigate = useNavigate();
    const { solutionId } = useParams();

    const gotToHomepage = () => navigate('/', { replace: true });
    
    const [Solutions, setSolution] = useState('');
    
    useEffect(() => {
        const getSolution = async () => {
            try {
                axios.get("http://localhost:8880/"+solutionId).then(response => {
                console.log(response)
                console.log(response.data)
                setSolution(response.data);
                
                // const data = await axios.get('http://localhost:8880/'+solutionId)
                // console.log(data)
                // setSolution(data)
            })
            } catch (err) {
                console.log('error while getting solution', err)   
            }
        }
        getSolution()
        console.log(Solutions)
      },[]);
    
    const solution = Solutions[0]

    return (
        <section className={classes.solution}>
            <div className={classes['solution-container']}>
                {solution ? (
                    <div className={classes['solution-body']}>
                        <h2> {solution.edition} </h2>
                        <h4>{solution.tag}</h4>
                        <p>{solution.section} - {solution.sub_section}</p>
                        <div className={classes['solution-video']}>
                            <ReactPlayer
                            url={solution.url}
                            width='100%'
                            height= '100%'
                            display='flex'
                            justify-content='center'
                            config={{
                            youtube: {
                            playerVars: { showinfo: 1 },
                                },
                                }}
                            />
                        </div>
                    </div>
                ) : (
                    <div className={classes['post__error']}>
                        <h2 className='text-blue'>Solution video not Found</h2>
                        <p>
                            The Solution video you are looking for might have been removed, had it's name
                            changed or is temporary unavailable.
                        </p>
                        <button type='button' aria-label='Home Page' onClick={gotToHomepage}>
                            Go to Home page
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default SolutionDetail;
