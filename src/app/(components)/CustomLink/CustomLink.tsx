"use client"

import Link from "next/link";
import { CustomLinkProps } from "./helper";


const CustomLink = ({ href, disabled, children }: CustomLinkProps) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (disabled) {
          e.preventDefault();
        }
      };
  return (
    <Link href={href} passHref legacyBehavior>
    <a
      onClick={handleClick}
      style={{
        pointerEvents: disabled ? 'none' : 'auto',
        color: disabled ? 'black' : 'green',
      }}
      aria-disabled={disabled}
    >
      {children}
    </a>
  </Link>
  );
};

export default CustomLink;
