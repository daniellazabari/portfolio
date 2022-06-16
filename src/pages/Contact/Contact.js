import React, { useState } from 'react'
import styles from './Contact.module.css'
import Section from '../../components/Section/Section'
import { send } from 'emailjs-com';
// service_0vemwlp

function Contact() {
    const [toSend, setToSend] = useState({
        firstName: '',
        lastName: '',
        message: '',
        email: '',
      });

    const handleChange = (e) => {
        setToSend({
            ...toSend,
            [e.target.firstName]: e.target.value,
        });
        console.log(toSend);

    }
    
    const onFormSubmit = (e) => {
        // send email to my email address
        e.preventDefault();
        send("service_0vemwlp","template_467m71g")
        .then(res => {
            console.log('SUCCESS!', res.status, res.text);
        })
        .catch(err => {
            console.log('FAILED...', err);
        })

    }
  return (
    <div id="contact" style={{ marginBottom: "3vw"}}>
        <Section className={styles.contact}>
            <h1 className={styles.title}>
                Let's keep in touch
            </h1>
            <div className={styles.contact_form}>
            <input
            type='text'
            name='from_name'
            placeholder='from name'
            value={toSend.from_name}
            onChange={handleChange}
            />
            <input
                type='text'
                name='to_name'
                placeholder='to name'
                value={toSend.to_name}
                onChange={handleChange}
            />
            <input
                type='text'
                name='message'
                placeholder='Your message'
                value={toSend.message}
                onChange={handleChange}
            />
            <input
                type='text'
                name='reply_to'
                placeholder='Your email'
                value={toSend.reply_to}
                onChange={handleChange}
            />
            <button type='submit'>Submit</button>
            </div>
        </Section>
    </div>
  )
}

export default Contact