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
      <div>
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
          height={500}
          width={500}
        />
      </div>
      <div className="flex flex-column flex-gap-50">
        <div className="grid grid-1fr-1fr grid-gap-20">
          <div>
            <h3>Total Sales</h3>
            <h4>$55.9</h4>
          </div>
          <div>
            <h3>Total Sales</h3>
            <h4>$55.9</h4>
          </div>
          <div>
            <h3>Total Sales</h3>
            <h4>$55.9</h4>
          </div>
          <div>
            <h3>Total Sales</h3>
            <h4>$55.9</h4>
          </div>
        </div>
        <div className="grid grid-1fr-1fr-1fr grid-gap-20">
          <button className="button-work flex flex-column flex-center flex-gap-20">
            <img src="./icons/approve.svg" alt="Verify" />
            <div>Aprove Staff</div>
          </button>
          <Link
            className="button-work flex flex-column flex-center flex-gap-20"
            to="/support-chat"
          >
            <img src="./icons/support.svg" alt="Support" />
            <div>Support Chat</div>
          </Link>
          <button className="button-work flex flex-column flex-center flex-gap-20">
            <img src="./icons/approve.svg" alt="Verify" />
            <div>Order History</div>
          </button>
          <button
            className="button-work flex flex-column flex-center flex-gap-20"
            onClick={toggleForm}
          >
            <img src="./icons/add.svg" alt="Add food" />
            <div>Add Food</div>
          </button>
          <button
            className="button-work flex flex-column flex-center flex-gap-20"
            onClick={toggleForm}
          >
            <img src="./icons/add.svg" alt="Add food" />
            <div>Add Food</div>
          </button>
          <button
            className="button-work flex flex-column flex-center flex-gap-20"
            onClick={toggleForm}
          >
            <img src="./icons/add.svg" alt="Add food" />
            <div>Add Food</div>
          </button>

          {isForm ? <AddForm /> : null}
        </div>
      </div>
    </div>
  );
}
