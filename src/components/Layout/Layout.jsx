import React, { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.container}>
      <header>
        <div className="logo"></div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <footer>
        <p> &copy; {new Date().getFullYear()} Movie Search</p>
      </footer>
    </div>
  );
};

export default Layout;
