export default function BorderImage({
  src,
  href,
}: {
  src: string;
  href: string;
}) {
  return (
    <div className="after:bg-app-primary before:bg-app-primary relative hidden before:absolute before:inset-24 before:-bottom-5 before:-left-5 before:-z-1 before:content-[''] after:absolute after:inset-24 after:-top-5 after:-right-5 after:-z-1 after:content-[''] md:flex md:flex-col">
      <figure className="flex">
        <img className="max-h-115 w-auto" src={src} alt="Tea cups" />
        <figcaption className="absolute bottom-0 -left-5">
          <a
            className="text-app-background [writing-mode:vertical-rl]"
            href={href}
            target="_blank"
          >
            Credit
          </a>
        </figcaption>
      </figure>
    </div>
  );
}
