import React from 'react';
import styles from './profile.module.css';
import { UserAuth } from '../../Context/AuthContext';


const Profile = () => {
    const { logOut } = UserAuth();

    const handleLogOut = async () => {
    try {
        await logOut();
    } catch (error) {
        console.log(error);
    }
    };

  return (
<div className={styles.title}>
  WELCOME!!
    <div>
        <button onClick={ handleLogOut }>
            Log Out
        </button>
    </div>
</div>
  );
};
export default Profile;