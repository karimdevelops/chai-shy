import { createFileRoute } from "@tanstack/react-router";
import BorderImage from "../components/BorderImage";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex items-center justify-center gap-20 p-4 md:p-8">
      <BorderImage
        src="./about.jpg"
        href="https://unsplash.com/@ananthan8110"
      />
      <div className="max-w-105">
        <h4 className="font-playfair text-xl">Our Story</h4>
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
