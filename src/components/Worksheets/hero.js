import React, { useState, useEffect } from 'react';
import classes from './hero.module.css';
import axios from 'axios';
import SecondaryButton from '../button/secondary-button';
import BookCard from '../elements/book-card'

const WorksheetHero = () => {
    const [Books, setBooks] = useState([]);
    const [selectedCurriculum, setSelectedCurriculum] = useState('USA');
    
    const getBooks = async () => {
        try {
            axios.get("http://localhost:8880/books").then(response => {
            setBooks(response.data);
        })
        } catch (err) {
            console.log('error while getting books', err)   
        }
    }

    useEffect(() => {
        getBooks()
      },[]);

      const filteredBooks = selectedCurriculum
      ? Books.filter((book) => book.country === selectedCurriculum)
      : Books;

    const handleCurriculumChange = (curriculum) => {
        setSelectedCurriculum(curriculum);
    };

    return (
        <div className={classes.section}>
            <div className={classes.header}> 
                <h1>FREE Curriculum-aligned Workbook</h1>
            </div>
            <div className={classes.container}>
                <div className={classes['section__header']}>
                <SecondaryButton
                        text='All'
                        isActive={selectedCurriculum === '' ? true : false}
                        onClick={() => handleCurriculumChange('')}
                    />
                    <SecondaryButton
                        text='United States'
                        isActive={selectedCurriculum === 'USA' ? true : false}
                        onClick={() => handleCurriculumChange('USA')}
                    />
                    <SecondaryButton
                        text='Canada'
                        isActive={selectedCurriculum === 'CA' ? true : false}
                        onClick={() => handleCurriculumChange('CA')}
                    />
                </div>
                <div className={classes['section__grid']}>
                    {filteredBooks.map((book) => {
                        return (
                            <BookCard
                                key={book.id}
                                name={book.name}
                                image={book.cover_image}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default WorksheetHero;