import { Link } from "@tanstack/react-router";
import "../styles/Admin.css";

export default function Admin() {
  return (
    <div className="mheight-70 flex flex-center flex-gap-50">
      <button className="button-work flex flex-column flex-center flex-gap-20">
        <img src="./icons/add.svg" alt="Add food" />
        <div>Add Food</div>
      </button>
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
    </div>
  );
}
