import React from 'react';
import styles from './Banner.module.css';
import { Link } from 'react-router-dom';

function TopBanner(props: any) {
  return (
    <>
      <div className="row bg-info">
        <div className="col-2">
          <img
            className={styles.banner_img}
            src="./JoelHiltonHeadshot.jpg"
            alt="Joel Hilton"
          />
        </div>
        <div className="col align-self-center text-start">
          <h1 className={styles.h1}>{props.title}</h1>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <b>Home</b>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/podcasts">
              <b>Podcasts</b>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/movies">
              <b>Movies</b>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default TopBanner;
