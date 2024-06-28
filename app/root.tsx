import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesAbout from "~/components/about.css";
import stylesAppointments from "~/components/appointments.css";
import stylesContact from "~/components/contact.css";
import stylesFooter from "~/components/footer.css";
import stylesLanding from "~/components/landing.css";
import stylesNavbar from "~/components/navbar.css";
import { getUser } from "~/session.server";
import stylesheet from "~/tailwind.css";

import stylesRoot from "./root.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Great+Vibes&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://api.tiles.mapbox.com/mapbox-gl-js/v3.4.0/mapbox-gl.css",
  },
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: stylesLanding },
  { rel: "stylesheet", href: stylesNavbar },
  { rel: "stylesheet", href: stylesAbout },
  { rel: "stylesheet", href: stylesAppointments },
  { rel: "stylesheet", href: stylesContact },
  { rel: "stylesheet", href: stylesFooter },
  { rel: "stylesheet", href: stylesRoot },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({ user: await getUser(request) });
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body
        className="h-full"
        style={{ backgroundColor: "var(--color-white)" }}
      >
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
