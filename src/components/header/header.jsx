import React from 'react';
import './header.css';
import logoimg from '../../assets/logo.png';
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <header className='pg_sides header'>
            <div className="header_logo">
                <img src={logoimg} alt="" />
            </div>
            <div className="header_menu">
                <a href="">Rooms</a>
                <a href="">About</a>
                <a href="">Gallery</a>
                <a href="">Contact</a>
                <a href="" className='header_book_now'>Book Now</a>
            </div>
        </header>
    )
}
