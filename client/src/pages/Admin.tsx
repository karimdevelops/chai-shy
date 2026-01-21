import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { BarChart } from "@mui/x-charts";
import AddForm from "../components/AddForm";
import "../styles/Admin.css";

export default function Admin() {
  const [isForm, setIsForm] = useState(false);

  function toggleForm() {
    if (isForm === false) setIsForm(true);
    else setIsForm(false);
  }

  return (
    <div className="grid grid-2fr-1fr">
      <div className="margint-auto">
        <h2>Sales (In Last 7 days)</h2>
        <BarChart
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
            {
              label: "drinks",
              data: [2, 5, 3, 4, 4, 2, 5, 3, 4, 4],
              stack: "menu",
            },
            {
              label: "Something",
              data: [2, 5, 3, 4, 4, 2, 5, 3, 4, 4],
              stack: "menu",
              color: "gray",
            },
            {
              data: [2, 5, 3, 4, 4, 2, 5, 3, 4, 4],
              stack: "menu",
            },
            {
              data: [2, 5, 3, 4, 4, 2, 5, 3, 4, 4],
              stack: "menu",
            },
            {
              data: [2, 5, 3, 4, 4, 2, 5, 3, 4, 4],
              stack: "menu",
            },
          ]}
          xAxis={[
            {
              id: "barCategories",
              data: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
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
          <button className="button-work flex flex-column flex-center flex-gap-20">
            <img src="./icons/approve.svg" alt="Verify" />
            <div>Aprove</div>
          </button>
          <button className="button-work flex flex-column flex-center flex-gap-20">
            <img src="./icons/support.svg" alt="Verify" />
            <div>Support</div>
          </button>
          <button className="button-work flex flex-column flex-center flex-gap-20">
            <img src="./icons/history.svg" alt="Verify" />
            <div>History</div>
          </button>
          <button
            className="button-work flex flex-column flex-center flex-gap-20"
            onClick={toggleForm}
          >
            <img src="./icons/add.svg" alt="Add food" />
            <div>Add</div>
          </button>
          <button
            className="button-work flex flex-column flex-center flex-gap-20"
            onClick={toggleForm}
          >
            <img src="./icons/edit.svg" alt="Add food" />
            <div>Edit</div>
          </button>
          <button
            className="button-work flex flex-column flex-center flex-gap-20"
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
