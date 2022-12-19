import React, { useEffect } from 'react';
import styles from '../css/Alert.module.css';

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2500);
    return () => clearTimeout(timeout);
  });
    return <p class={styles.danger}>{msg}</p>;
  }
  


export default Alert;