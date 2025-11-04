import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mi app remix" },
    { name: "description", content: "Bienvenido a mi app remix!" },
  ];
}

export default function Home() {
  return <>Hola mundo desde Remix</>;
}
