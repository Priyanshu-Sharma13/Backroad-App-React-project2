import imgLog from '../images/logo.svg'
import React from 'react'

import {pageLinks} from '../links';
import {socialLinks} from '../links';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={imgLog} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        
        {/* <!-- left this comment on purpose --> */}



        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
          return (
            <li key={pageLinks.id}>
              <a href={link.href} className="nav-link">
                {' '}
                {link.text}{' '}
              </a>
          </li>

          );
          })}

          
          
{/* 
          <li>
              <a href="#about" className="nav-link">
                {' '}
                about{' '}
              </a>
          </li>

          <li>
            <a href='#services' className="nav-link">
              {' '}
              services{' '}
            </a>
          </li>

          <li>
            <a href='#tours' className="nav-link">
              {' '}
              tours
            </a>
          </li> */}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const {id, icon, href,} = link;
            return (
              <li key={id}>
                <a
                  href={href}
                  rel="noreferrer"
                  target="_blank"
                  className="nav-icon"
                >
                  <i className={icon}></i>
                </a>
              </li>
            )
          })}
          {/* <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="nav-icon"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="nav-icon"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="nav-icon"
            >
              <i className="fab fa-squarespace"></i>
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
