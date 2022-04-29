import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { NavigationBar } from "./components/Navigation";
import style from "./styles/appstyles.css"

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: style
    }
  ]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "PTTS",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <NavigationBar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
