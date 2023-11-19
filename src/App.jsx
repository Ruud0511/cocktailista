import React from 'react';
import './App.css'
import { ReactComponent as User } from './assets/user.svg';
import { ReactComponent as Favorite } from './assets/heart.svg';
import { ReactComponent as Logo } from './assets/cocktailista.svg';
import {Routes, Route, NavLink} from "react-router-dom";
import Cocktails from "./pages/cocktails/Cocktails.jsx";
import Home from './pages/home/Home.jsx'
import Mocktails from "./pages/mocktails/Mocktails.jsx";
import VerrasMe from "./pages/verrasme/VerrasMe.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Favorites from "./pages/favorites/Favorites.jsx";
import MijnAccount from "./pages/mijnaccount/MijnAccount.jsx";

function App() {
    return (
        <>
            <section>
                <nav>
                    <div>
                            <NavLink to="/"><Logo className="logo"/></NavLink>
                    </div>
                    <ul>
                            <li><NavLink to="/cocktails">Cocktails</NavLink></li>
                            <li><NavLink to="/mocktails">Mocktails</NavLink></li>
                            <li><NavLink to="/verrasme">Verras me!</NavLink></li>
                    </ul>
                    <div>
                        <ul>
                            <li><User className="user-icon"/></li>
                            <li><Favorite className="favorite-icon"/></li>
                        </ul>
                    </div>
                </nav>
                <header className="header">
                </header>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cocktails" element={<Cocktails/>}/>
                    <Route path="/mocktails" element={<Mocktails/>}/>
                    <Route path="/verrasme" element={<VerrasMe/>}/>
                </Routes>
            <footer className="footer">
                <div className="footer-text">
                    <div>
                        <h3>Gegevens</h3>
                        <p>Cocktailista</p>
                        <p>Utrecht</p>
                    </div>
                </div>
                <div className="footer-text">
                    <div>
                        <h3>Contact</h3>
                        <p><a href="mailto:info@cocktailista.nl">info@cocktailista.nl</a></p>
                        <p>Tel. 06-12345678</p>
                    </div>
                </div>
            </footer>
            </section>
        </>
    )
}

export default App
