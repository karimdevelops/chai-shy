import { Link } from "@tanstack/react-router";
import BorderImage from "../components/BorderImage";

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
        <BorderImage
          src="./hero.avif"
          href="https://unsplash.com/@ananthan8110"
        />
      </div>
    </>
  );
}
