"use client";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs.send('service_mmcmpgj', 'template_vy08xyo', templateParams, 'opACjFF9xqwolsp_F')
      .then((response) => {
        console.log('Email envoyé avec succès', response.status, response.text);
        alert('Email envoyé avec succes ');
      })
      .catch((error) => {
        console.error('Failed to send email', error);
        alert('erreur dans l envoie');
      });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} >
      <div style={styles.formGroup}>
        <label htmlFor="name" style={styles.label}>Nom:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="email" style={styles.label}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="message" style={styles.label}>Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={styles.textarea}
        />
      </div>
      <button type="submit" style={styles.button}>Envoyer</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '400px',
    margin: '0 auto',
  },
  formGroup: {
    marginBottom: '16px',
    width: '100%',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '1em',
    boxSizing: 'border-box' as 'border-box',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    fontSize: '1em',
    boxSizing: 'border-box' as 'border-box',
    minHeight: '100px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    cursor: 'pointer',
  },
};

export default ContactForm;
