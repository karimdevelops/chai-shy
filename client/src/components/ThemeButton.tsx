import type { MouseEventHandler } from "react";

export default function Button({
  text,
  onClick,
}: {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-app-primary text-app-background rounded-full px-5 py-2 font-bold"
    >
      {text}
    </button>
  );
}
