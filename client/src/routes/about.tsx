import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-center padding-2 flex-gap-50">
      <div className="feature">
        <div className="flex flex-column hero">
          <figure className="flex">
            <img width="auto" height="550px" src="./about.jpg" alt="Tea cups" />
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
      <div>
        <p className="tagline">Our Story</p>
        <p className="info about-info">
          Started in 1985, Chai Shy was a small place started by an unemployed
          father of two. Poverty and inflation at the time forced him to take a
          step forward, the only direction he saw was to serve people with what
          he is good at. With ever growing success, Chai Shy is a home to over
          20,000 employees now. Carrying the legacy of this place forward with
          great love.
        </p>
      </div>
    </div>
  );
}
