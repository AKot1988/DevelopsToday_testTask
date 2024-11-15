import { FC } from "react";
import classes from "./Footer.module.scss";

const Footer: FC = () => {
  const dateFullYear = new Date().getFullYear();
  return (
    <div className={classes.container}>
      <footer className={classes.footer}>
        <p>{`© ${dateFullYear} NEXT_JS develops today test task`}</p>
      </footer>
    </div>
  );
};

export default Footer;
