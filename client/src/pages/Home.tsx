export default function Home() {
  return (
    <div className="main flex flex-center">
      <div className="flex flex-column intro">
        <div>
          <h5>Chase The Classic Flavour</h5>
          <h1>
            The Key to <br /> Fine Chuski Exp.
          </h1>
        </div>
        <p className="info">
          <strong>Chai Shy.</strong> One of the finest places in some place
          where you can get the desi tea for less than $5, even though the taste
          is worth a million times more! <i>slurps...</i>
        </p>
        <a className="link-button" href="">
          Explore Menu
        </a>
      </div>
      <div className="flex flex-column hero">
        <img width="auto" height="550px" src="./hero.avif" alt="Tea cups" />
      </div>
    </div>
  );
}
