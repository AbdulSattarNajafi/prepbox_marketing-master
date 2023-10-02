import { useNavigate, useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import React, { useState, useEffect } from 'react';
import classes from './Bookcover.module.css';
import axios from 'axios';

const MaterialPage = () => {
    const [Questions, setQuestions] = useState([])
    const { bookName, materialName } = useParams();
    const getQuestions = async () => {
        try {
            axios.get("http://localhost:8880/questions").then(response => {
            setQuestions(response.data);
            // console.log(Book.chapters)
        })
        } catch (err) {
            console.log('error while getting questions', err)   
        }
    }

    useEffect(() => {
        getQuestions()
        console.log(bookName)
        console.log(materialName)
      },[]);

    return (
        <div className={classes.section}>
            <div className={classes.header}> 
                <h1> Chapter Name </h1>
            </div>
            <div className={classes.container}>
                <div>
                   <ul>
                    {Questions.map((question) => {
                        return (
                            <div>
                                <li> {question.uuid} </li>
                            </div>
                        )
                    })}
                   </ul>
                </div>
            </div>
        </div>
    );
};

export default MaterialPage;