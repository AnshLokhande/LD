import React from 'react';

function App() {
  // Inline styles for the login page
  const styles = {
    container: {
      display: 'flex',
      width: '80%',
      height: '70%',
      maxWidth: '1200px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
      borderRadius: '10px',
      overflow: 'hidden',
    },
    formContainer: {
      width: '50%',
      height: '100%',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(15px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '40px',
    },
    imageContainer: {
      width: '50%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    heading: {
      color: 'white',
      marginBottom: '20px',
      textAlign: 'center',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      color: 'white',
      display: 'block',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      color: 'white',
      outline: 'none',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#3949ab',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s',
      marginBottom: '10px', // Space between buttons
    },
    buttonHover: {
      backgroundColor: '#283593',
    },
    googleButton: {
      width: '100%',
      padding: '10px',
      backgroundColor: 'white',
      color: '#555',
      border: '1px solid #ccc',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color 0.3s',
    },
    googleIcon: {
      width: '20px',
      height: '20px',
      marginRight: '10px',
    },
    body: {
      fontFamily: "'Arial', sans-serif",
      backgroundColor: '#1a237e',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.formContainer}>
          <h2 style={styles.heading}>Login</h2>
          <form>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input type="email" placeholder="Enter your email" style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Password</label>
              <input type="password" placeholder="Enter your password" style={styles.input} />
            </div>
            <button type="submit" style={styles.button}>Login</button>
          </form>
          {/* Google Login Button */}
          <button style={styles.googleButton}>
            <img
              src="/google.png"
              alt="Google logo"
              style={styles.googleIcon}
            />
            Login with Google
          </button>
        </div>
        <div style={styles.imageContainer}>
          {/* Using the image from the public folder */}
          <img src="/LoginImg.png" alt="Login visual" style={styles.image} />
        </div>
      </div>
    </div>
  );
}

export default App;



