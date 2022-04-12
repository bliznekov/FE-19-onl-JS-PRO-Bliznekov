import React, { useState } from "react";
import "./App.scss";
import Header from "./component/header/Header";
import Login from "./component/login/Login";
import Main from "./component/main/Main";
import Posts from "./component/posts/Posts";
import Registration from "./component/registrtion/Registration";
import Timer from "./component/timer/Timer";
import LanguageContext from "./contexts/LanguageContext";

const App: React.FC = () => {
    const [lang, setLang] = useState("ru");

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            <div className="App">
                <Header />
                <Main />
                <Posts />
                <div className="app-content">
                    <Registration />
                    <Login />
                </div>
            </div>
        </LanguageContext.Provider>
    );
};

export default App;
