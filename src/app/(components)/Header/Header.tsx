import { FC } from "react";
import classes from "./Header.module.scss";

const Header: FC = () => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1>NEXT_JS develops today test task</h1>
      </header>
    </div>
  );
};

export default Header;
