import React, { useState } from "react";
import styles from "../css/MyPage.module.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";



function MyPage({ user }) {
  const { email, pwd, name } = user || {};
  return (
    <>
      <h1>Profile</h1>
      <dt>Email</dt>
      <dd>{email}</dd>
      <dt>Password</dt>
      <dd>{pwd}</dd>
      <dt>Name</dt>
      <dd>{name}</dd>
    </>
  );
}

export default MyPage;
