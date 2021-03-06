import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Footer, NavigationBar } from "./components/shared";
import appstyle from "./styles/appstyles.css"

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: appstyle
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
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
