import Link from "next/link";
import React from "react";
import styles from "../styles/login.module.css";

export default function login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginInnerWrapper}>
        <div className={styles.loginIcon} />
        <div className={styles.closeBtn}>
          <button>x</button>
        </div>
        <div className={styles.loginTitle}>
          <h1>로그인</h1>
        </div>

        <div className={styles.inputId}>
          <label for="id">아이디</label>
          <input id="id" type="text"></input>
        </div>
        <div className={styles.inputPwd}>
          <label for="pwd">비밀번호</label>
          <input id="pwd" type="password"></input>
        </div>

        <Link href={"/main"}>
          <div className={styles.loginBtnWrapper}>
            <button className={styles.loginBtn}>로그인</button>
          </div>
        </Link>

        <hr style={{ width: "500px" }} />

        <div className={styles.loginScript}>
          <h3>아직 회원이 아니시라면 회원가입 후 이용해 주시기 바랍니다.</h3>
        </div>

        <Link href={"/signUp"}>
          <div className={styles.signUpBtnWrapper}>
            <button className={styles.signUpBtn}>회원가입</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
