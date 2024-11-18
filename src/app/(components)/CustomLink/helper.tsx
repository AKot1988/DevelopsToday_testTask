import { UrlObject } from "url";

export type CustomLinkProps = {
  href: string | UrlObject;
  disabled?: boolean;
  children: React.ReactNode;
};
