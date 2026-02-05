import Link from "next/link";

import { getServerMe } from "@/lib/api/serverApi";

import css from "./page.module.css";

export default async function Profile() {
  const user = await getServerMe();

  return (
    <div>
      <section>
        <div>
          <h1>My Profile</h1>
          <Link href="/profile/edit" className={css.button}>
            Edit profile
          </Link>
        </div>
        <div>
          <h2>Name: {user.userName}</h2>
          <h2>Email: {user.email}</h2>
          <p>
            Some description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit...
          </p>
        </div>
      </section>
    </div>
  );
}
