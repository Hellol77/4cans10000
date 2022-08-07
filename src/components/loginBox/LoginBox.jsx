import React, { useState } from "react";
import styles from "./loginBox.module.css";

const LoginBox = () => {
  const [loginState, setLoginState] = useState(true);
  const onClickLoginButton = (e) => {
    e.preventDefault();
    setLoginState(true);
  };
  const onClickSignUpButton = (e) => {
    e.preventDefault();
    setLoginState(false);
  };
  return (
    <div className={styles.main}>
      <div className={styles.loginBox}>
        <div className={styles.imgDiv}>
          <img src="/img/logo.png" alt="네캔만원" className={styles.loginImg} />
        </div>
        {loginState === true ? ( // 로그인 화면
          <>
            <form>
              <button className={styles.Button} onClick={onClickSignUpButton}>
                회원가입
              </button>
              <button
                className={styles.onClickButton}
                onClick={onClickLoginButton}
              >
                로그인
              </button>
              <label className={styles.label}>이메일</label>
              <input type="email" className={styles.loginInput} name="email" />
              <label className={styles.label}>비밀번호</label>
              <input
                type="password"
                className={styles.passwordInput}
                name="password"
              />
              <button className={styles.submitButton} type="submit">
                로그인
              </button>
            </form>
            <div className={styles.loginAnother}>
              <div className={styles.loginAnotherLine}></div>
              <div className={styles.loginAnotherTitle}>
                다른 서비스로 로그인
              </div>
            </div>
            <div className={styles.loginAnotherButtonBox}>
              <button
                className={[styles.loginAnotherButton, styles.naver].join(" ")}
              >
                {/* 라이브러리 classnames 설치해도 된다.*/}
              </button>
              <button
                className={[styles.loginAnotherButton, styles.google].join(" ")}
              ></button>
            </div>
          </>
        ) : (
          // 회원가입 화면
          <>
            <form>
              <button
                className={styles.onClickButton}
                onClick={onClickSignUpButton}
              >
                회원가입
              </button>
              <button className={styles.Button} onClick={onClickLoginButton}>
                로그인
              </button>
              <div className={styles.emailCheckDiv}>
                <label className={styles.label}>이메일</label>
                <button className={styles.emailCheck}>중복검사</button>
              </div>
              <input type="email" className={styles.loginInput} name="email" />
              <label className={styles.label}>닉네임</label>
              <input
                type="text"
                className={styles.loginInput}
                name="nickname"
              />
              <label className={styles.label}>생년월일</label>
              <div className={styles.birthBox}>
                <input
                  type="number"
                  className={styles.birthBoxInput}
                  name="year"
                  min="1000"
                  max="9999"
                  placeholder="년(4자)"
                  required
                />
                <select
                  className={styles.birthBoxInput}
                  aria-label="월"
                  name="month"
                  required
                >
                  <option value="" disabled selected>
                    월
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <input
                  type="text"
                  className={styles.birthBoxInput}
                  name="day"
                  maxLength="2"
                  placeholder="일"
                  required
                />
              </div>
              <label className={styles.label}>비밀번호</label>
              <input
                type="password"
                className={styles.loginInput}
                name="password"
              />
              <label className={styles.label}>비밀번호 확인</label>
              <input
                type="password"
                className={styles.loginInput}
                name="passwordCheck"
              />
              <button className={styles.submitButton} type="submit">
                회원가입
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginBox;
