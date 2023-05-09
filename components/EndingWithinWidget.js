import React from "react";
const EndingWithinData = [
  {
    id: 1,
    catagoryName: "1 Day",
  },
  {
    id: 2,
    catagoryName: "1 Week",
  },
  {
    id: 3,
    catagoryName: "1 Month",
  },
  {
    id: 4,
    catagoryName: "3 Month",
  },
  {
    id: 5,
    catagoryName: "6 Month",
  },
  {
    id: 6,
    catagoryName: "1 Year",
  }
];
const EndingWithinWidget = () => {
  return (
    <div>
      <h3 className="bg-Pcolor px-2 py-2 rounded-md text-center text-xl font-medium capitalize text-white mb-7">
      Ending Within
      </h3>
      <ul className="space-y-2.5">
        {EndingWithinData.map((curElm) => {
            const {id,catagoryName} = curElm;
          return (
            <li className="flex items-center" key={id}>
              <input
                id={`ending-within-${id}`}
                type="checkbox"
                className="w-3.5 h-3.5 rounded-full appearance-none border-2 border-Pcolor checked:bg-Pcolor"
              />
              <label
                htmlFor={`ending-within-${id}`}
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

export default EndingWithinWidget;
