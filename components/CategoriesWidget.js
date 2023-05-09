import React from "react";
const CategoriesData = [
  {
    id: 1,
    catagoryName: "Real Estate",
  },
  {
    id: 2,
    catagoryName: "Electronics",
  },
  {
    id: 3,
    catagoryName: "Phones",
  },
  {
    id: 4,
    catagoryName: "Jewelry",
  },
  {
    id: 5,
    catagoryName: "Sport items",
  },
  {
    id: 6,
    catagoryName: "Art",
  },
  {
    id: 7,
    catagoryName: "Vehicle",
  },
  {
    id: 8,
    catagoryName: "Ancient",
  },
  {
    id: 9,
    catagoryName: "Camera",
  },
  {
    id: 10,
    catagoryName: "Foods",
  },
];
const CategoriesWidget = () => {
  return (
    <div>
      <h3 className="bg-Pcolor px-2 py-2 rounded-md text-center text-xl font-medium capitalize text-white mb-7">
        Categories
      </h3>
      <ul className="space-y-2.5">
        {CategoriesData.map((curElm) => {
            const {id,catagoryName} = curElm;
          return (
            <li className="flex items-center" key={id}>
              <input
                id={`items-${id}`}
                type="checkbox"
                className="w-3.5 h-3.5 rounded-full appearance-none border-2 border-Pcolor checked:bg-Pcolor"
              />
              <label
                htmlFor={`items-${id}`}
                className="ml-2 text-sm font-medium cursor-pointer"
              >
                {catagoryName}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesWidget;
