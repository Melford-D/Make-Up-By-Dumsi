import React from 'react'
import { Link } from 'react-router-dom';
import './Contacts.css';


const Contacts = () => {
    return (
        <>
        <section className="contacts-page" style={{textDecoration: "none", color: "#000"}}>
            <Link to="/contacts">
                <h1>hello from contact</h1>
            </Link>
        </section>
        </>
    )
}

export default Contacts
