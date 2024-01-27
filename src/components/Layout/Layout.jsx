import React, { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className="logo">Logo</div>
        <nav className={styles.nav}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
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
