import React from "react";
import "./style.css";
import Login from "./Login";
import { Link } from "react-router-dom";
import translate from "../../localization/translate";

const LoginUI = (props) => {
    const {
        onChange,
        switchLogin,
        onToggle,
        onSubmit,
        LoginError,
        LoginForm,
        Continue,
        onPressContinue,
        getOtp,
        socialBtn,
        pageConfig,
    } = props;

    const link = `state=${pageConfig.extraParams.state}&client=${pageConfig.clientId}&protocol=${pageConfig.extraParams.protocol}&redirect_uri=${pageConfig.callbackURL}&fragment=${pageConfig.extraParams.fragment}`;
    return (
        <>
            <div className="LoginContainer">
                <div className="LoginLeftWrapper">
                    <div className="LoginWelcomeContainer">
                        <img
                            alt="McAfeeLogo"
                            className="LoginPageLogo"
                            src="https://cdn.jsdelivr.net/gh/atulrana007/McAfee-React-Appp/public/images/McAfee-Logo.png"
                        />
                        <div className="LoginIntro">
                            {translate("Welcome_back_to")} McAfee !
                        </div>
                        <div className="LoginIntroSubHeading">
                            {translate("choose_your_signIn_method_continue")}
                        </div>
                        <div className="BottomHeading">
                            <div>
                                {translate("Do_not_have_an_account")}
                                <span>
                                    <Link
                                        to={`/signUp?state=hKFo2SBYT0tHajJaaEZoYXFwMmJuNGdUYzZjZW1DZUlTNlRCcaFupWxvZ2luo3RpZNkgWVJOd0JkWW84clJIcXRaazV1amxxczBDLXFCZTZKUDOjY2lk2SA1ckF1ODB4QXBhRUZ5R3hUQXNXQkVsNUZpTlZZZzFJTA&client=5rAu80xApaEFyGxTAsWBEl5FiNVYg1IL&protocol=oauth2&redirect_uri=http%3A%2F%2Flocalhost%3A3000&fragment=culture%3Dfr-ca%26aff_id%3D0&scope=openid%20profile%20email&response_type=code&response_mode=query&nonce=ZDMzNFlwYn5zTlBVa2ptdjJvTEdSMEF3MEE4c09mRU4tSnZFUE40ZmNMUw%3D%3D&code_challenge=_xgtl-6_B9eMvRZ4MxjS7jjFtPT-5WRJYQofjyvI8Ao&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMS44LjAifQ%3D%3D#culture=fr-ca&aff_id=0`}
                                    >
                                        {" "}
                                        Create one now
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="LoginRightWrapper">
                    <Login
                        LoginError={LoginError}
                        onChange={onChange}
                        switchLogin={switchLogin}
                        onSubmit={onSubmit}
                        LoginForm={LoginForm}
                        onToggle={onToggle}
                        onPressContinue={onPressContinue}
                        Continue={Continue}
                        getOtp={getOtp}
                        socialBtn={socialBtn}
                    />
                </div>
            </div>
        </>
    );
};

export default LoginUI;
