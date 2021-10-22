import React, { useRef } from "react";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";

import { Home, Profile, ExternalApi } from "./views";
import ProtectedRoute from "./auth/protected-route";
import Authorize from "./components/Authorize";
import DashBoard from "./components/dashboard";
import Login from "./components/login/index";
import Signup from "./components/signup/index";
import { AccountProvider } from "./providers/AccountContext";
import LanguageProvider from "./localization/languageProvider";
import { LOCALES } from "./localization/constants";
import { CommonDataProvider } from "./providers/CommonDataContext";

import "./app.css";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const App = ({ pageConfig }) => {
    console.log("Bundle is working fine");
    const parsedHash = new URLSearchParams(window.location.hash.substr(1));

    let query = useQuery();
    let locale = useRef("");
    let lang;
    let culture = query.get("culture") ?? parsedHash.get("culture");

    if (culture === null) {
        if (localStorage.getItem("lang") === null) {
            lang = "en-us";
        } else {
            lang = localStorage.getItem("lang");
        }
    } else {
        lang = culture;
        localStorage.setItem("lang", lang);
    }

    if (lang === "en-us") {
        locale.current = LOCALES.ENGLISH;
    } else if (lang === "fr-ca") {
        locale.current = LOCALES.FRENCH;
    } else {
        locale.current = "en-us";
    }
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
        console.log("ankit bathla");
        return (
            <Redirect to="/login?state=hKFo2SBYT0tHajJaaEZoYXFwMmJuNGdUYzZjZW1DZUlTNlRCcaFupWxvZ2luo3RpZNkgWVJOd0JkWW84clJIcXRaazV1amxxczBDLXFCZTZKUDOjY2lk2SA1ckF1ODB4QXBhRUZ5R3hUQXNXQkVsNUZpTlZZZzFJTA&client=5rAu80xApaEFyGxTAsWBEl5FiNVYg1IL&protocol=oauth2&redirect_uri=http%3A%2F%2Flocalhost%3A3000&fragment=culture%3Dfr-ca%26aff_id%3D0&scope=openid%20profile%20email&response_type=code&response_mode=query&nonce=ZDMzNFlwYn5zTlBVa2ptdjJvTEdSMEF3MEE4c09mRU4tSnZFUE40ZmNMUw%3D%3D&code_challenge=_xgtl-6_B9eMvRZ4MxjS7jjFtPT-5WRJYQofjyvI8Ao&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMS44LjAifQ%3D%3D#culture=fr-ca&aff_id=0" />
        );
    }
    return (
        <CommonDataProvider>
            <LanguageProvider locale={locale.current}>
                <AccountProvider config={pageConfig}>
                    <div id="app" className="d-flex flex-column h-100">
                        <div className="container flex-grow-1">
                            <div className="mt-5">
                                <Switch>
                                    <Route path="/" exact component={Home} />
                                    <Route
                                        path="/login"
                                        exact
                                        component={() => (
                                            <Login pageConfig={pageConfig} />
                                        )}
                                    />
                                    <Route
                                        path="/signUp"
                                        exact
                                        component={Signup}
                                    />
                                    <Route exact path="/authorize">
                                        <Authorize config={pageConfig} />
                                    </Route>
                                    <Route
                                        exact
                                        path="/dashboard"
                                        component={DashBoard}
                                    />
                                    <ProtectedRoute
                                        path="/profile"
                                        component={Profile}
                                    />
                                    <ProtectedRoute
                                        path="/external-api"
                                        component={ExternalApi}
                                    />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </AccountProvider>
            </LanguageProvider>
        </CommonDataProvider>
    );
};

export default App;
