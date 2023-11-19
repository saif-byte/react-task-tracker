import React from "react";
import Button from "./Button";

const Header = ({onAdd , showAdd}) => {
    return (
        <header className="header">
        <h1>Tracker App</h1>
        <Button color = {showAdd ? 'red' : 'green'}
         text = {showAdd ? 'Minimize' : 'Add'}
        onclick = {onAdd} />
        </header>
    );
    }

export default Header;