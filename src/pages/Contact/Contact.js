import React, { useState, useRef } from 'react'
import styles from './Contact.module.css'
import Section from '../../components/Section/Section'
import emailjs from 'emailjs-com';
import NormalButton from '../../components/NormalButton/NormalButton';
// service_0vemwlp
// mailjs.send("service_0vemwlp","template_0jw37mf",{
// fname: "nknknkn",
// lname: "nkn",
// email: "dai",
// message: "desks",
// });

function Contact() {
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [email, setEmail] = useState('')
  // const [message, setMessage] = useState('')
  const formRef = useRef();
  const [error, setError] = useState(null);
  const SERVICE_ID = 'service_0vemwlp';
  const TEMPLATE_ID = 'template_0jw37mf';
  const PUBLIC_KEY = 'rXIGrSZ3cCuG9oiDd';
  const submitButton = document.getElementById('submit_button');

  const validateForm = () => {
    const inputs = formRef.current.querySelectorAll('input');
    const textarea = formRef.current.querySelector('textarea');
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (inputs[0].value.length < 2 || inputs[1].value.length < 2 || textarea.value.length < 2) {
      setError('Please fill out all fields');
      return false;
    }

    if (!inputs[2].value.match(validRegex)) {
      setError('Please enter a valid email');
      console.log(inputs[2].value);
      return false;
    }

    return true;
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then((res) => {
          formRef.current.reset();
          setError("Thank you for your message!");
        }, (error) => {
          setError("There was an error sending your message. Please try again.");
        });
    }
  }

  return (
    <div className={styles.contact}>
      <Section className={styles.contact_section}>
      <h1>Let's keep in touch</h1>
      <h3>whether you want to discuss a new project or just want to say hi, my inbox is always open!</h3>
        <form id="contact_form" className={styles.contact_form} onSubmit={handleSubmit} ref={formRef}>
          <div className={styles.name} style={{ borderBottom: "1.5px solid"}}>
            <div className={styles.field} style={{ borderRight: "1.5px solid"}}>
              <label htmlFor="fname">First Name</label>
              <input type="text" name="fname" id="fname" placeholder="michael" />
            </div>
            <div className={styles.field}>
              <label htmlFor="lname">Last Name</label>
              <input type="text" name="lname" id="lname" placeholder="scott" />
            </div>
          </div>
          <div className={styles.form_row} style={{ borderBottom: "1.5px solid"}}>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="michaelscott@dundermifflin.com" />
            </div>
          </div>
          <div className={styles.form_row}>
            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" cols="30" rows="10" placeholder="There is no way i will resign - it wouldn't be fair. Not to the good workers i work with, not to my clients and especially not to me. let's not forget who this whole resigning business is about, anyway. if i could leave you with one thought, remember it wasn't me - they're trying to make me an escape goat. if i am fired, i swear to god, that every single piece of copier paper in this town is going to have the f-word on it." />
            </div>
          </div>
        </form>
        <div className={styles.submit_button_wrapper}>
            {/* <button id="submit_button">send</button> */}
            <NormalButton text="send" />
        </div>
        <div className={styles.error}>{error}</div>
      </Section>
    </div>
  )
}

export default Contact