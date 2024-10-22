import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,

  
} from "@remix-run/react";
import "./tailwind.css";
import { MyHeader } from "./components/MyHeader";
import { MyFotter } from "./components/MyFotter";


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <MyHeader/>
        {children}
        <MyFotter/>
        

      
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
