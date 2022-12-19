import React from 'react';

function Footer(props) {
    return (
        <div>
            <footer className="page-footer  green darken-3">
                <div className="footer-copyright">
                    <div className="container">
                        © {new Date().getFullYear()} Copyright Text
                        <a
                            className="grey-text text-lighten-4 right"
                            href="https://magamed-ali.github.io/react-shop/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            React Food</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;