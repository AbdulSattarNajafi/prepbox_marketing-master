import { useState } from 'react';

import { blogPosts } from '../../constant';
import SecondaryButton from '../button/secondary-button';
import BlogCard from '../elements/blog-card';

import classes from './blog-posts.module.css';

const BlogPosts = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const filteredPosts = selectedCategory
        ? blogPosts.filter((post) => post.category === selectedCategory)
        : blogPosts;

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <section className={classes.blog}>
            <div className={classes['blog-container']}>
                <h1>Our Blog</h1>

                <div className={classes['blog__header']}>
                    <SecondaryButton
                        text='Education'
                        isActive={selectedCategory === 'education' ? true : false}
                        onClick={() => handleCategoryChange('education')}
                    />
                    <SecondaryButton
                        text='Youtube'
                        isActive={selectedCategory === 'youtube' ? true : false}
                        onClick={() => handleCategoryChange('youtube')}
                    />
                    <SecondaryButton
                        text='Student Highlight'
                        isActive={selectedCategory === 'student' ? true : false}
                        onClick={() => handleCategoryChange('student')}
                    />
                    <SecondaryButton
                        text='Tutor Highlight'
                        isActive={selectedCategory === 'tutor' ? true : false}
                        onClick={() => handleCategoryChange('tutor')}
                    />
                </div>

                <div className={classes['blog__grid']}>
                    {filteredPosts.map((post) => {
                        return (
                            <BlogCard
                                key={post.id}
                                image={post.image}
                                title={post.title}
                                date={post.date}
                                subtitle={post.subtitle}
                                description={post.description}
                                postId={post.id}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BlogPosts;
