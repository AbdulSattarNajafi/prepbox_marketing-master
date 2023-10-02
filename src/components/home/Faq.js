import { useState } from 'react';

import { ReactComponent as ChevronDown } from './../../assets/icons/chevron-down.svg'
import classes from './Faq.module.css';

const faqs = [
    {
        id: 'q1',
        question: 'Do I need an iPad?',
        answers: [
            'Yes. You need an iPad and a stylus pen to subscribe to PrepBox. We provide rentals for a $300 deposit.'
        ],
    },
    {
        id: 'q2',
        question: 'Is my child a good fit?',
        answers: [
            'Any student above 5th grade that wants to improve on his or her mathematical foundations and become better problem-solvers is a great fit. Our programs cover all subjects from 5th grade to AP Calculus BC or IB Higher Level, ranging from algebra and factoring to advanced calculus.',
        ],
    },
    {
        id: 'q3',
        question: 'How is PrepBox different from other online tutoring services?',
        answers: [
            'Unlike other online tutoring services, PrepBox contains (i) 100k+ tried-and-tested lectures, (ii) 1.2m problems with hints and solutions, (iii) whiteboard submissions requiring  showing proof of work, and (iv) guidance from our A.I. and experienced tutors to enable maximum focus'
        ],
    },
    {
        id: 'q4',
        question: 'Is PrepBox 1:1?',
        answers: [
            'While each student is assigned a Head Tutor and receives a tailored program that they go through together with our tutors, our tutors teach multiple students during sessions. However, students do not interact each other and are not placed in a group environment, giving them a tailored 1:1 experience.',
        ],
    },
    {
        id: 'q5',
        question: 'Does PrepBox assign homework?',
        answers: [
            'We assign homework upon request, which are marked in real time by our A.I.',
        ],
    },
];

const FaqSection = () => {
    const [activeFaq, setActiveFaq] = useState(-1);

    const activateFaqHandler = (index) => {
        if (activeFaq === index) {
            return setActiveFaq(-1);
        }
        setActiveFaq(index);
    };

    return (
        <section className={classes.section} id='faq-section'>
            <div className={classes.container}>
                <h2>FAQs</h2>

                <div className={classes.faq}>
                    <ul className={classes.list}>
                        {faqs.map((faq, i) => {
                            return (
                                <li key={faq.id} className={`${classes['list__item']}`}>
                                    <div
                                        className={classes['list__item-header']}
                                        onClick={activateFaqHandler.bind(null, i)}
                                    >
                                        <p>{faq.question}</p>
                                        <span
                                            className={`${classes.icon} ${
                                                activeFaq === i ? `${classes.rotate}` : ''
                                            }`}
                                        >
                                            <ChevronDown />
                                        </span>
                                    </div>
                                    <div
                                        className={`${classes['list__answers']} ${
                                            activeFaq === i ? `${classes.show}` : ''
                                        }`}
                                    >
                                        <div className={classes['list__answers-content']}>
                                            {faq.answers.map((answer, index) => {
                                                return <p key={index}>{answer}</p>;
                                            })}
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;