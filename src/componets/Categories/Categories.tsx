import React from "react";

type CategoriesProps = {
  activeCategory: string;
  onClickCategory: (category: string) => void;
};
export type SortsType = {
  name: string;
  value: string;
};
const Categories: React.FC<CategoriesProps> = ({
  activeCategory,
  onClickCategory,
}) => {
  const categories: Array<SortsType> = [
    { name: "All", value: "" },
    { name: "Art", value: "Art" },
    { name: "Biography", value: "Biography" },
    { name: "Computers", value: "Computers" },
    { name: "History", value: "History" },
    { name: "Medical", value: "Medical" },
    { name: "Poetry", value: "Poetry" },
  ];
  return (
    <div className="categories">
      <ul>
        {categories.map((c, i) => (
          <li
            key={i}
            onClick={() => {
              onClickCategory(c.value);
            }}
            className={c.value === activeCategory ? "active" : ""}
          >
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
