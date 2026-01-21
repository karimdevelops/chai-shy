import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { BarChart } from "@mui/x-charts";
import AddForm from "../components/AddForm";
import "../styles/Admin.css";

export default function Admin() {
  const [isForm, setIsForm] = useState(false);
  const salesData = [
    { day: "Monday", drinks: 10, special: 5, wraps: 8, kids: 6, sweets: 3 },
    { day: "Tuesday", drinks: 10, special: 5, wraps: 8, kids: 6, sweets: 3 },
    { day: "Wednesday", drinks: 10, special: 5, wraps: 8, kids: 6, sweets: 3 },
    { day: "Thursday", drinks: 10, special: 5, wraps: 8, kids: 6, sweets: 3 },
    { day: "Friday", drinks: 12, special: 4, wraps: 4, kids: 2, sweets: 4 },
    { day: "Saturday", drinks: 6, special: 11, wraps: 9, kids: 7, sweets: 6 },
    { day: "Sunday", drinks: 5, special: 15, wraps: 9, kids: 8, sweets: 6 },
  ];
  function toggleForm() {
    if (isForm === false) setIsForm(true);
    else setIsForm(false);
  }

  return (
    <div className="grid grid-2fr-1fr">
      <div className="margint-auto">
        <h2>Sales (In Last 7 days)</h2>
        <BarChart
          dataset={salesData}
          sx={{
            "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
              fill: "white",
            },
            "& .MuiChartsAxis-line": {
              strokeWidth: "2px",
              stroke: "white",
            },
            "& .MuiChartsLegend-label": {
              color: "white",
            },
          }}
          series={[
            { dataKey: "drinks", label: "Drinks", stack: "menu" },
            { dataKey: "special", label: "Special", stack: "menu" },
            { dataKey: "wraps", label: "Wraps", stack: "menu" },
            { dataKey: "kids", label: "Kids", stack: "menu" },
            { dataKey: "sweets", label: "Sweets", stack: "menu" },
          ]}
          xAxis={[
            {
              id: "barCategories",
              dataKey: "day",
            },
          ]}
          height={500}
          width={700}
        />
      </div>
      <div className="flex flex-column flex-gap-20">
        <h2>Statistics</h2>
        <div className="grid grid-1fr-1fr grid-gap-20">
          <div className="stats stats-products">
            <div className="flex flex-items-center flex-gap-5">
              <img src="/icons/product.svg" alt="product" />
              <h4>Products</h4>
            </div>
            <h4>13</h4>
          </div>
          <div className="stats stats-sales">
            <div className="flex flex-items-center flex-gap-5">
              <img src="/icons/sales.svg" alt="product" />
              <h4>Sales</h4>
            </div>
            <h4>$55.9</h4>
          </div>
          <div className="stats stats-orders">
            <div className="flex flex-items-center flex-gap-5">
              <img src="/icons/orders.svg" alt="product" />
              <h4>Orders</h4>
            </div>
            <h4>14</h4>
          </div>
          <div className="stats stats-users">
            <div className="flex flex-items-center flex-gap-5">
              <img src="/icons/users.svg" alt="product" />
              <h4>Users</h4>
            </div>
            <h4>55</h4>
          </div>
        </div>
        <h2>Admin Controls</h2>
        <div className="grid grid-1fr-1fr-1fr grid-gap-20">
          <button className="button-work flex flex-column flex-center flex-gap-5">
            <img src="./icons/approve.svg" alt="Verify" />
            <div>Aprove</div>
          </button>
          <button className="button-work flex flex-column flex-center flex-gap-5">
            <img src="./icons/support.svg" alt="Verify" />
            <div>Support</div>
          </button>
          <button className="button-work flex flex-column flex-center flex-gap-5">
            <img src="./icons/history.svg" alt="Verify" />
            <div>History</div>
          </button>
          <button
            className="button-work flex flex-column flex-center flex-gap-5"
            onClick={toggleForm}
          >
            <img src="./icons/add.svg" alt="Add food" />
            <div>Add</div>
          </button>
          <button
            className="button-work flex flex-column flex-center flex-gap-5"
            onClick={toggleForm}
          >
            <img src="./icons/edit.svg" alt="Add food" />
            <div>Edit</div>
          </button>
          <button
            className="button-work flex flex-column flex-center flex-gap-5"
            onClick={toggleForm}
          >
            <img src="./icons/delete.svg" alt="Add food" />
            <div>Delete</div>
          </button>

          {isForm ? <AddForm /> : null}
        </div>
      </div>
    </div>
  );
}
