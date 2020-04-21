import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <ul>
            <li>
                <Link to="/">Beranda</Link>
            </li>
            <li>
                <Link to="/github">Github</Link>
            </li>
            <li>
                <Link to="/mockapi">Mock API</Link>
            </li>
            <li>
                <Link to="/countries">Countries API</Link>
            </li>
            <li>
                <Link to="/signin">Masuk</Link>
            </li>
            <li>
                <Link to="/signup">Daftar</Link>
            </li>
        </ul>
    );
};

export default Navigation;