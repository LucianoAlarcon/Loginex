import React from 'react';
import styles from './login.module.css';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../../Context/AuthContext';

const Login = () => {
  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      console.log('PAso google signin');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.container}>
      <div>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </section>
  );
};

export default Login;
