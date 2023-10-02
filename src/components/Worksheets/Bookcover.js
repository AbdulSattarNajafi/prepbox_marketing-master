import { useNavigate, useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import React, { useState, useEffect } from 'react';
import classes from './Bookcover.module.css';
import axios from 'axios';

const BookCover = () => {
    const [Book, setBook] = useState('');
    const [Chapters, setChapters] = useState([])
    const [Materials, setMaterials] = useState([])
    const { bookName, materialName } = useParams();

    const navigate = useNavigate();
    
    const getBook = async () => {
        try {
            axios.get("http://localhost:8880/book").then(response => {
            setBook(response.data);
            // console.log(Book.chapters)
        })
        } catch (err) {
            console.log('error while getting books', err)   
        }
    }

    const getChapters = async () => {
        try {
            axios.get("http://localhost:8880/chapters").then(response => {
            setChapters(response.data)
            setMaterials(response.data.materials)
            console.log(response.data)
        })
        } catch (err) {
            console.log('error while getting books', err)   
        }
    }

    useEffect(() => {
        getBook()
        getChapters()
        console.log(Book)
        console.log(Materials)
        console.log(bookName)
      },[]);

    return (
        <div className={classes.section}>
            <div className={classes.header}> 
                <h1> {Book.name} </h1>
            </div>
            <div className={classes.container}>
                <div>
                    {Chapters.map((chapter) => {
                        return (
                            <div>
                                <div className={classes.chapterTitle} >
                                    <h2>{chapter.name}</h2>
                                </div>
                            <ul className={classes.chapterContainer}>
                                <div className={classes.chapterTextContainer}> 
                                    <li key={chapter.id} className={classes.listItem}>
                                        <div className={classes.materialWrapper}>
                                                <div className={classes.material}>
                                                    {chapter.materials.map((material) => {
                                                            return (
                                                                <div onClick={()=> {
                                                                        navigate(material.name.replace(/ /g,"-"))}
                                                                        }>
                                                                    <p key={material.id}>{material.name}</p>
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
            </div>
        </div>
    );
};

export default BookCover;