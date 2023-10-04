import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './form.module.css';
import axios from 'axios';

const NameForm = () => {
    const [name, setName] = useState('');
    const [grade, setGrade] = useState('');
    const [curriculum, setCurriculum] = useState('');
    const [email, setEmail] = useState('');
    const [ipad, setIpad] = useState('');
    const [isValid, setValid] = useState(false);
    const navigate = useNavigate();

    const validate = () => {
        // return name.length > 0 && grade > 0 && curriculum.length > 0 && email.length >0 && ipad == 1
        return ipad === 1;
    };

    useEffect(() => {
        // console.log('validate results in ' + validate())
        const isValid = validate();
        setValid(isValid);
    }, [ipad]);

    async function submitForm(event) {
        event.preventDefault();

        if (isValid === false) {
            alert('You must have an iPad to sign up');
            return <></>;
        }

        const webhookUrl =
            'https://hooks.slack.com/services/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';

        const data = {
            text: `Free student sign-up request \n Name: ${name} \n Grade: n${grade} \n${email} \n${curriculum}`,
        };

        let res = await axios.post(webhookUrl, JSON.stringify(data), {
            withCredentials: false,
            transformRequest: [
                (data, headers) => {
                    return data;
                },
            ],
        });

        if (res.status === 200) {
            setName('');
            setGrade('');
            setCurriculum('');
            setEmail('');
            navigate('/thankyou', { replace: true });
        }
    }

    return (
        <div className={classes.form}>
            <div className={classes.form__content}>
                <div className={classes.formHeader}>
                    <form className={classes.formBox}>
                        <label>
                            {/* <p>Do you have an iPad?</p> */}
                            <select
                                id='ipad'
                                name='ipad'
                                value={ipad}
                                onChange={(e) => {
                                    setIpad(e.target.value);
                                }}
                            >
                                <option value='' disabled selected>
                                    Have an iPad?
                                </option>
                                <option value='1'>Yes </option>
                                <option value='0'>No</option>
                            </select>
                        </label>
                        <label>
                            {/* <p>Student Name: </p> */}
                            <input
                                type='text'
                                name='name'
                                placeholder='Student Name'
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </label>
                        <label>
                            {/* <p>Grade </p> */}
                            <select
                                id='grade'
                                name='grade'
                                value={grade}
                                onChange={(e) => {
                                    setGrade(e.target.value);
                                }}
                            >
                                <option value='' disabled selected>
                                    Select your Grade
                                </option>
                                <option value='6'>Grade 6 </option>
                                <option value='7'>Grade 7 </option>
                                <option value='8'>Grade 8</option>
                                <option value='9'>Grade 9</option>
                                <option value='10'>Grade 10</option>
                                <option value='11'>Grade 11</option>
                                <option value='12'>Grade 12</option>
                            </select>
                        </label>
                        <label>
                            {/* <p>Curriculum</p> */}
                            <select
                                id='curriculum'
                                name='curriculum'
                                value={curriculum}
                                onChange={(e) => {
                                    setCurriculum(e.target.value);
                                }}
                            >
                                <option value='' disabled selected>
                                    Select your Curriculum
                                </option>
                                <option value='US Common Core'>US Common Core </option>
                                <option value='Canada'>Canada</option>
                                <option value='Pre-Algebra'>Pre-Algebra</option>
                                <option value='Algebra I'>Algebra I</option>
                                <option value='Algebra II'>Algebra II</option>
                                <option value='Grade 8'>AP Calculus AB</option>
                                <option value='Grade 9'>AP Calculus BC</option>
                                <option value='Grade 10'>IB Math Standard Level</option>
                                <option value='Grade 11'>IB Math Higher Level</option>
                                <option value='Grade 12'>Grade 12</option>
                            </select>
                        </label>
                        <label>
                            {/* <p>Email</p> */}
                            <input
                                type='text'
                                name='email'
                                placeholder='Email'
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </label>
                        <button className={classes.button} onClick={(e) => submitForm(e)}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NameForm;
