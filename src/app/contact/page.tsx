import React from 'react';
import ContactForm from './contactform';

const App: React.FC = () => {
  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.title}>Contactez Nous</h1>
        <ContactForm />
      </header>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  app: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f2f5',
    padding: '20px',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '2.5em', // Taille de texte plus grande
    margin: '0 0 20px', // Espace inférieur pour le titre
    color: '#333', // Couleur du texte
  },
};

export default App;
