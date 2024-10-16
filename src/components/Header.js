import React from "react";


function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/listings">Job Listings</a></li>
                    <li><a href="/apply">Apply Now</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;