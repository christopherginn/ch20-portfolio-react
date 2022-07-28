import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <div className="navbar navbar-expand-lg bg-light">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

        <ul>
            <li>
                <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                >
                    About
                </a>
            </li>
            <li>
                <a
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                >
                    Portfolio
                </a>
            </li>
            <li>
                <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                >
                    Contact
                </a>
            </li>
            <li>
                <a
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                >
                    Resume
                </a>
            </li>
        </ul>
        </div>
    )
}

export default Navigation;