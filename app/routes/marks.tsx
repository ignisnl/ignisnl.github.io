import type { Route } from "./+types/marks";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "UNSW Marks" },
    { name: "description", content: "Notable marks from my time at UNSW." },
  ];
}

export default function Marks() {
  return <>Graduated in 2024 with Distinction average</>;
}
