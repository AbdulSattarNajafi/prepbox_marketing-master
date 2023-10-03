import React, { useState } from 'react';
import classes from './hero.module.css';
import Loader from '../elements/loader';
import SecondaryButton from '../button/secondary-button';
import BookCard from '../elements/book-card';

const WorksheetHero = ({ books, isLoading, error }) => {
    const [selectedCurriculum, setSelectedCurriculum] = useState('USA');

    const filteredBooks = selectedCurriculum
        ? books.filter((book) => book.country === selectedCurriculum)
        : books;

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

                {isLoading && <Loader />}

                {error && <p className='error-message'>{error}</p>}

                {!error && !isLoading && (
                    <div className={classes['section__grid']}>
                        {filteredBooks.map((book) => {
                            return (
                                <BookCard
                                    key={book.id}
                                    id={book.id}
                                    name={book.name}
                                    image={book.cover_image}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default WorksheetHero;
