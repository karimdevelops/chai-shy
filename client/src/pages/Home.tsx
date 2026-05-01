import { Link } from "@tanstack/react-router";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-12 py-8 md:flex-row md:px-8">
        <div className="flex max-w-lg flex-col gap-10">
          <div>
            <h5 className="font-playfair text-sm font-bold md:text-base">
              Chase The Classic Flavour
            </h5>
            <h1 className="font-playfair text-primary text-5xl leading-normal font-bold md:text-6xl">
              The Key to <br /> Fine Chuski Exp.
            </h1>
          </div>
          <p className="text-info text-base">
            <strong>Chai Shy.</strong> One of the finest places in some place
            where you can get the desi tea for less than $5, even though the
            taste is worth a million times more! <i>slurps...</i>
          </p>
          <Link
            to="/menu/"
            className="font-playfair text-app-background bg-primary max-w-fit px-6 py-4 text-lg"
          >
            Explore Menu
          </Link>
        </div>
        <div className="hero hidden md:flex md:flex-col">
          <figure className="flex">
            <img
              className="max-h-125 w-auto"
              src="./hero.avif"
              alt="Tea cups"
            />
            <figcaption>
              <a
                className="link-credits"
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
