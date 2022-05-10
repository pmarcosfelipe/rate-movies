import GithubIcon from 'assets/images/GithubIcon';

import './styles.css';

const Header = () => {
  return (
    <header>
      <nav className="container">
        <div className="nav-content">
          <h1>Rate Movies</h1>
          <a
            href="https://github.com/pmarcosfelipe"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-container">
              <GithubIcon />
              <p className="contact-link">/pmarcosfelipe</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
