import React from "react";

import NavGroup from "./NavGroup";
import NavLink from "./NavLink";
import NavSectionTitle from "./NavSectionTitle";

interface IListItems {
  navItems: INavItems;
}

const resolveNavItemComponent = (
  item: INavGroup | INavLink | INavSectionTitle,
) => {
  if ((item as INavSectionTitle).sectionTitle) return NavSectionTitle;
  if ((item as INavGroup).children) return NavGroup;

  return NavLink;
};

const ListItems: React.FC<IListItems> = ({ navItems, ...props }) => {
  const RenderMenuItems = navItems?.map(
    (item: INavGroup | INavLink | INavSectionTitle, index: number) => {
      const TagName: any = resolveNavItemComponent(item);

      return <TagName {...props} key={index} item={item} />;
    },
  );

  return <>{RenderMenuItems}</>;
};

export default ListItems;
