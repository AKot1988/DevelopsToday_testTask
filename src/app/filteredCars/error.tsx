"use client";

import classes from "./page.module.scss";

const HomePageError = ({ error }: { error: Error }) => {
  let errorToDisplay = "";
  if (error.message === "404" || error.message === "not found") {
    errorToDisplay = "Not Found";
  } else {
    errorToDisplay = "Оце ти забрався";
  }
  return (
    <div className={classes.container}>
      <div className={classes.filterPageError}>
        <h3>Smth gone wrong</h3>
        <p>{errorToDisplay}</p>
      </div>
    </div>
  );
};

export default HomePageError;
