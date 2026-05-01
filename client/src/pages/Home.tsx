import { Link } from "@tanstack/react-router";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center gap-12 p-8">
        <div className="flex flex-col max-w-lg gap-10">
          <div>
            <h5 className="font-playfair text-base font-bold">
              Chase The Classic Flavour
            </h5>
            <h1 className="font-bold">
              The Key to <br /> Fine Chuski Exp.
            </h1>
          </div>
          <p className="text-info text-lg">
            <strong>Chai Shy.</strong> One of the finest places in some place
            where you can get the desi tea for less than $5, even though the
            taste is worth a million times more! <i>slurps...</i>
          </p>
          <Link
            to="/menu/"
            className="font-playfair text-lg text-app-background bg-primary max-w-fit px-6 py-4"
          >
            Explore Menu
          </Link>
        </div>
        <div className="flex flex-col hero">
          <figure className="flex">
            <img className="h-125 w-auto" src="./hero.avif" alt="Tea cups" />
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
