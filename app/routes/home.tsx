import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lorenzo Grillo" },
    { name: "description", content: "Welcome to my personal website!" },
  ];
}

export default function Home() {
  return <>Hello world! More to come soon :)</>;
}
