export default function Button({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-app-primary text-app-background rounded-full p-2 font-bold"
    >
      {text}
    </button>
  );
}
