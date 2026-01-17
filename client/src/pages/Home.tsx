import { Link } from "@tanstack/react-router";

export default function Home() {
  return (
    <>
      <div className="flex flex-center flex-gap-50 padding-2">
        <div className="flex flex-column intro flex-gap-50">
          <div>
            <h5>Chase The Classic Flavour</h5>
            <h1>
              The Key to <br /> Fine Chuski Exp.
            </h1>
          </div>
          <p className="info">
            <strong>Chai Shy.</strong> One of the finest places in some place
            where you can get the desi tea for less than $5, even though the
            taste is worth a million times more! <i>slurps...</i>
          </p>
          <Link to="/menu/" className="link-button">
            Explore Menu
          </Link>
        </div>
        <div className="flex flex-column hero">
          <figure className="flex">
            <img width="auto" height="500px" src="./hero.avif" alt="Tea cups" />
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
