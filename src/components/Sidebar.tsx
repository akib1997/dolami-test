import { useState } from "react";

function Sidebar() {
  const [checked, setChecked] = useState<string[]>([]);

  const handleCheck = (event: Event) => {
    let updatedList = [...checked];
    let target = event.target as HTMLInputElement;
    if (target.checked) {
      updatedList = [...checked, target.value];
    } else {
      updatedList.splice(checked.indexOf(target.value), 1);
    }
    setChecked(updatedList);
  };

  return (
    <>
      <div className="fixed top-20 left-3 grid gap-4">
        <div className="sidebar-item">
          <p className="text-lg font-bold text-black mb-2">Category</p>
          <ul>
            {categories.map((item) => (
              <li className="text-xs font-medium" key={item.id}>
                <a href={item.url} className="text-black">
                  {" "}
                  {item.title}{" "}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar-item">
          <p className="text-lg font-bold text-black mb-2">Contents</p>
          <ul>
            {contents.map((item) => (
              <li className="text-xs font-medium" key={item.id}>
                <label>
                  <input
                    type="checkbox"
                    className="accent-purple-700 mr-1 inline-block"
                    onChange={() => handleCheck}
                  />
                  {item.title}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar-item">
          <p className="text-lg font-bold text-black mb-2">Price</p>
          <ul>
            {prices.map((item) => (
              <li className="text-xs font-medium" key={item.id}>
                <label>
                  <input
                    type="checkbox"
                    className="accent-purple-700 mr-1 inline-block"
                    onChange={() => handleCheck}
                  />
                  {item.title}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Polygon amount */}
        <div className="sidebar-item">
          <p className="text-lg font-bold text-black mb-2">Polygon amount</p>
          <ul>
            {polygonAmounts.map((item) => (
              <li className="text-xs font-medium" key={item.id}>
                <label>
                  <input
                    type="checkbox"
                    className="accent-purple-700 mr-1 inline-block"
                    onChange={() => handleCheck}
                  />
                  {item.title}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Auto upload support */}
        <div className="sidebar-item">
          <p className="text-lg font-bold text-black mb-2">Auto upload support</p>
          <ul>
            {supportedItems.map((item) => (
              <li className="text-xs font-medium" key={item.id}>
                <label>
                  <input
                    type="checkbox"
                    className="accent-purple-700 mr-1 inline-block"
                    onChange={() => handleCheck}
                  />
                  {item.title}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

const categories = [
  {
    id: 1,
    title: "Full avatar",
    url: "example.com",
  },
  {
    id: 2,
    title: "Others",
    url: "example.com",
  },
];

const contents = [
  {
    id: 1,
    title: "VRChat(Quest)",
    value: "example.com",
  },
  {
    id: 2,
    title: "VRChat(PCVR)",
    value: "example.com",
  },
  {
    id: 3,
    title: "Others",
    value: "example.com",
  },
];
const prices = [
  {
    id: 1,
    title: "Under $10",
    value: "1",
  },
  {
    id: 2,
    title: "$10 to $20",
    value: "2",
  },
  {
    id: 3,
    title: "$20 to $30",
    value: "3",
  },
  {
    id: 4,
    title: "$30 to $40",
    value: "4",
  },
  {
    id: 5,
    title: "$40 & above",
    value: "5",
  },
];
const supportedItems = [
  {
    id: 1,
    title: "Supported",
    value: "1",
  },
  {
    id: 2,
    title: "Unsupported",
    value: "2",
  }
];
const polygonAmounts = [
  {
    id: 1,
    title: "Under △7,500",
    value: "1",
  },
  {
    id: 2,
    title: "△7,500 to △10,000",
    value: "2",
  },
  {
    id: 3,
    title: "△15,000 to △20,000",
    value: "3",
  },
  {
    id: 4,
    title: "△20,000 to △32,000",
    value: "4",
  },
  {
    id: 5,
    title: "△70,000 & Above",
    value: "5",
  },
];
