export declare global {
  interface INavSectionTitle {
    sectionTitle: string;
  }

  interface INavLink {
    icon?: string;
    path?: string;
    title: string;
    externalLink?: boolean;
    openInNewTab?: boolean;
  }

  interface INavGroup {
    icon?: string;
    title: string;
    children?: (INavGroup | INavLink)[];
  }
  type INavItems = (INavLink | INavGroup | INavSectionTitle)[];
}
