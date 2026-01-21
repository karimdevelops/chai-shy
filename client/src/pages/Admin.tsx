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
          }}
          series={[
            {
              data: [2, 5, 3, 4, 4, 2, 5, 3, 4, 4],
            },
          ]}
          xAxis={[
            {
              id: "barCategories",
              data: [
                "bar A",
                "bar B",
                "bar C",
                "bar D",
                "bar E",
                "bar F",
                "bar G",
                "bar H",
                "bar I",
                "bar J",
              ],
            },
          ]}
          height={600}
          width={700}
        />
      </div>
      <div className="flex flex-column flex-gap-20">
        <h2>Statistics</h2>
        <div className="grid grid-1fr-1fr grid-gap-20">
          <div className="stats stats-products">
            <div className="flex flex-items-center flex-gap-5">
              <img src="/icons/product.svg" alt="product" />
              <h3>Products</h3>
            </div>
            <h4>$55.9</h4>
          </div>
          <div className="stats stats-sales">
            <div className="flex flex-items-center flex-gap-5">
              <img src="/icons/sales.svg" alt="product" />
              <h3>Sales</h3>
            </div>
            <h4>$55.9</h4>
          </div>
          <div className="stats stats-orders">
            <div className="flex flex-items-center flex-gap-5">
              <img src="/icons/orders.svg" alt="product" />
              <h3>Orders</h3>
            </div>
            <h4>$55.9</h4>
          </div>
          <div className="stats stats-users">
            <div className="flex flex-items-center flex-gap-5">
              <img src="/icons/users.svg" alt="product" />
              <h3>Users</h3>
            </div>
            <h4>$55.5</h4>
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
            <div>Add Product</div>
          </button>
          <button
            className="button-work flex flex-column flex-center flex-gap-20"
            onClick={toggleForm}
          >
            <img src="./icons/edit.svg" alt="Add food" />
            <div>Edit Product</div>
          </button>
          <button
            className="button-work flex flex-column flex-center flex-gap-20"
            onClick={toggleForm}
          >
            <img src="./icons/delete.svg" alt="Add food" />
            <div>Delete Product</div>
          </button>

          {isForm ? <AddForm /> : null}
        </div>
      </div>
    </div>
  );
}
