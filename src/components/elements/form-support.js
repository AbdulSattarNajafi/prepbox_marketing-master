import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './form-support.module.css';
import axios from 'axios';

const SupportForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('')
    const navigate = useNavigate();

    async function submitForm(event) {

        event.preventDefault()
        
        const webhookUrl = 'https://hooks.slack.com/services/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';

        const data = {
            "text": `SUPPORT FORM filled out \n Name: ${name} \n${email} \n${body}`,
        }

        let res = await axios.post(webhookUrl, JSON.stringify(data), {
            withCredentials: false,
            transformRequest: [(data, headers) => {
                return data
            }]
        })

        if (res.status === 200) {
            setName('');
            setEmail('');
            setBody('');
            navigate('/thankyou', { replace: true })
        }
    }

    return (
        <div className={classes.form}>
            <div className={classes.form__content}>
                <div className={classes.formHeader}>
                    <form className={classes.formBox}>
                        <label>
                            {/* <p>Student Name: </p> */}
                            <input type="text" name="name" placeholder="Student Name" value={name} onChange={(e) => { setName(e.target.value)}} />
                        </label>
                        <label>
                            <input type="text" name="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value)}} />
                        </label>
                        <label>
                            <input type="body" name="body" className={classes.bodyMessage} placeholder="Support details" value={email} onChange={(e) => { setBody(e.target.value)}} />
                        </label>
                        <button className={classes.button} onClick={(e) => submitForm(e)}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
      )
  }

  export default SupportForm
