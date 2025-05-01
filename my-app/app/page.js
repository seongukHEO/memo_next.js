import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  let name = "seongukHeo";

  return (
    <div>
      <h4 style={{ color: "red", fontSize: "30px" }}>{name}후레시</h4>
      <p className="title-sub">dev Heo {name}</p>
    </div>
  );
}
