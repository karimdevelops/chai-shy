import { Link } from "@tanstack/react-router";
import { useState } from "react";

export default function OrderConfirm({ id }) {
  const orderId = id;

  return (
    <div className="confirm flex flex-column flex-center flex-gap-50">
      <div className="flex flex-column flex-center flex-gap-20">
        <h1>Order Placed</h1>
        {orderId ? <h3>id: #{String(orderId).padStart(5, "0")}</h3> : null}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={96}
        height={96}
        viewBox="0 0 24 24"
      >
        <defs>
          <mask id="SVG5AkzhcyZ">
            <path
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 -8c0 2 -2 2 -2 4s2 2 2 4s-2 2 -2 4s2 2 2 4M12 -8c0 2 -2 2 -2 4s2 2 2 4s-2 2 -2 4s2 2 2 4M16 -8c0 2 -2 2 -2 4s2 2 2 4s-2 2 -2 4s2 2 2 4"
            >
              <animate
                attributeName="d"
                dur="3s"
                repeatCount="indefinite"
                values="M8 0c0 2 -2 2 -2 4s2 2 2 4s-2 2 -2 4s2 2 2 4M12 0c0 2 -2 2 -2 4s2 2 2 4s-2 2 -2 4s2 2 2 4M16 0c0 2 -2 2 -2 4s2 2 2 4s-2 2 -2 4s2 2 2 4;M8 -8c0 2 -2 2 -2 4s2 2 2 4s-2 2 -2 4s2 2 2 4M12 -8c0 2 -2 2 -2 4s2 2 2 4s-2 2 -2 4s2 2 2 4M16 -8c0 2 -2 2 -2 4s2 2 2 4s-2 2 -2 4s2 2 2 4"
              ></animate>
            </path>
            <path d="M4 7h16v0h-16v12h16v-32h-16Z">
              <animate
                fill="freeze"
                attributeName="d"
                begin="1s"
                dur="0.6s"
                to="M4 2h16v5h-16v12h16v-24h-16Z"
              ></animate>
            </path>
          </mask>
        </defs>
        <path
          fill="#dcca87"
          fillOpacity={0}
          d="M17 14v4c0 1.66 -1.34 3 -3 3h-6c-1.66 0 -3 -1.34 -3 -3v-4Z"
        >
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="1.6s"
            dur="0.4s"
            to={1}
          ></animate>
        </path>
        <g
          fill="none"
          stroke="#dcca87"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path
            strokeDasharray={48}
            d="M17 9v9c0 1.66 -1.34 3 -3 3h-6c-1.66 0 -3 -1.34 -3 -3v-9Z"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.6s"
              values="48;0"
            ></animate>
          </path>
          <path
            strokeDasharray={16}
            strokeDashoffset={16}
            d="M17 9h3c0.55 0 1 0.45 1 1v3c0 0.55 -0.45 1 -1 1h-3"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.6s"
              dur="0.3s"
              to={0}
            ></animate>
          </path>
        </g>
        <path fill="#dcca87" d="M0 0h24v24H0z" mask="url(#SVG5AkzhcyZ)"></path>
      </svg>
      <p>Thank you for ordering from Chai Shy.</p>
      <Link to="/" className="link-theme link-default">
        Return
      </Link>
    </div>
  );
}
