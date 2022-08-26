import React from 'react';
import {Header} from './components/Menu/Header';
import {Container} from 'react-bootstrap';
import ReactDOM from "react-dom/client";
import App from "./App";
import {characters} from "./routes/characters";
import {mainPage} from "./routes/main-page";
import {races} from "./routes/races";
import {enemies} from "./routes/enemies";
import {weapons} from "./routes/weapons";
import {story} from "./routes/story";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
export const Main = () => {
    root.render(
        <Container>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={App}/>
                    <Route path="/characters" element={characters}/>
                    <Route path="/mainPage" element={mainPage}/>
                    <Route path="/races" element={races}/>
                    <Route path="/enemies" element={enemies}/>
                    <Route path="/weapon" element={weapons}/>
                    <Route path="/story" element={story}/>

                </Routes>
            </BrowserRouter>

            <Header/>
        </Container>
    )
    ;
};
