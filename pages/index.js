import Link from "next/link";
import Header from "../components/header";

export default () => (
  <main>
    <Header />
    <section>
      <Link href="/users">
        <a>Go to users</a>
      </Link>
    </section>
  </main>
);