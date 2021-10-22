import React from "react";
import Signup from "./Signup";
import "./style.css";
import { Link } from "react-router-dom";

const SignupUI = (props) => {
    const { onSubmit, SignupForm, onChange } = props;
    return (
        <>
            <div className="SignupWrapper">
                <div className="leftContainer">
                    <img
                        alt="McAfeeLogo"
                        className="Logo"
                        src="https://cdn.jsdelivr.net/gh/atulrana007/McAfee-React-Appp/public/images/McAfee-Logo.png"
                    />
                    <div className="Intro">Create your McAfee account</div>
                    <hr className="hr"></hr>
                    <div className="IntroSubHeading">
                        <div className="PointsHeading">Step 1</div>
                        <div className="Points">
                            Enter your email address so we can find your
                            account.
                        </div>
                    </div>
                    <div className="IntroSubHeading">
                        <div className="PointsHeading">Step 2</div>
                        <div className="Points">
                            Set a password and we’ll create your account.
                        </div>
                    </div>
                </div>
                <div className="RightContainer">
                    <Signup
                        onChange={onChange}
                        onSubmit={onSubmit}
                        SignupForm={SignupForm}
                    ></Signup>
                </div>
                <Link to="/login?state=hKFo2SBYT0tHajJaaEZoYXFwMmJuNGdUYzZjZW1DZUlTNlRCcaFupWxvZ2luo3RpZNkgWVJOd0JkWW84clJIcXRaazV1amxxczBDLXFCZTZKUDOjY2lk2SA1ckF1ODB4QXBhRUZ5R3hUQXNXQkVsNUZpTlZZZzFJTA&client=5rAu80xApaEFyGxTAsWBEl5FiNVYg1IL&protocol=oauth2&redirect_uri=http%3A%2F%2Flocalhost%3A3000&fragment=culture%3Dfr-ca%26aff_id%3D0&scope=openid%20profile%20email&response_type=code&response_mode=query&nonce=ZDMzNFlwYn5zTlBVa2ptdjJvTEdSMEF3MEE4c09mRU4tSnZFUE40ZmNMUw%3D%3D&code_challenge=_xgtl-6_B9eMvRZ4MxjS7jjFtPT-5WRJYQofjyvI8Ao&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMS44LjAifQ%3D%3D#culture=fr-ca&aff_id=0">
                    <div>link to login</div>
                </Link>
            </div>
        </>
    );
};

export default SignupUI;
