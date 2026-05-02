import { Link } from "@tanstack/react-router";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-12 py-8 md:flex-row md:px-8">
        <div className="flex max-w-lg flex-col gap-10">
          <div>
            <h5 className="font-playfair text-base font-bold md:text-lg">
              Chase The Classic Flavour
            </h5>
            <h1 className="font-playfair text-app-primary text-5xl leading-normal font-bold md:text-6xl">
              The Key to <br /> Fine Chuski Exp.
            </h1>
          </div>
          <p className="text-app-info text-base md:text-lg">
            <strong>Chai Shy.</strong> One of the finest places in some place
            where you can get the desi tea for less than $5, even though the
            taste is worth a million times more! <i>slurps...</i>
          </p>
          <Link
            to="/menu/"
            className="font-playfair text-app-background bg-app-primary max-w-fit px-6 py-4 text-lg duration-200 hover:translate-y-1"
          >
            Explore Menu
          </Link>
        </div>
        <div className="after:bg-app-primary before:bg-app-primary relative hidden before:absolute before:inset-24 before:-bottom-5 before:-left-5 before:-z-1 before:content-[''] after:absolute after:inset-24 after:-top-5 after:-right-5 after:-z-1 after:content-[''] md:flex md:flex-col">
          <figure className="flex">
            <img
              className="max-h-115 w-auto"
              src="./hero.avif"
              alt="Tea cups"
            />
            <figcaption className="absolute bottom-0 -left-5">
              <a
                className="text-app-background [writing-mode:vertical-rl]"
                href="https://unsplash.com/@ananthan8110"
                target="_blank"
              >
                Credit
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
}
