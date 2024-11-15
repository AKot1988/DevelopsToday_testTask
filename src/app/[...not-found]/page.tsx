"use client";

import classes from "./page.module.scss";

const NotFound = () => {

  return (
    <div className={classes.container}>
      <div className={classes.filterPageError}>
        <p>{'page not found'}</p>
      </div>
    </div>
  );
};

export default NotFound;