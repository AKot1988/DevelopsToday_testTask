"use client";

import { error } from "console";
import { MainPageErrors } from "./helper";
import classes from "./layout.module.scss";

const Error = ({ error }: { error: Error }) => {
  let errorText = "";
  switch (error.message) {
    case MainPageErrors.NOT_FOUND:
      errorText = "page not found";
      break;
    default:
      errorText = "unexpected error";
      break;
  }
  return (
    <div className={classes.container}>
      <div className={classes.filterPageError}>
        <p>{errorText}</p>
      </div>
    </div>
  );
};
