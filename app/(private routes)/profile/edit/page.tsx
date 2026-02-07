"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import css from "./page.module.css";

import { useAuthStore } from "@/lib/store/authStore";
import AvatarPicker from "@/components/AvatarPicker/AvatarPicker";
import { getMe, updateMe } from "@/lib/api/clientApi";

export default function Edit() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    getMe().then((user) => {
      setUsername(user.username ?? "");
      setEmail(user.email ?? "");
      setAvatar(user.avatar ?? "");
    });
  }, []);

  const handleSaveUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedUser = await updateMe({ username });
    setUser(updatedUser);
    router.push("/profile");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleCancel = () => {
    router.push("/profile");
  };

  return (
    <div className={css.mainContent}>
      <div className={css.profileCard}>
        <h1 className={css.formTitle}>Edit profile</h1>
        <AvatarPicker profilePhotoUrl={avatar} />
        <p>
          <span style={{ fontWeight: "bold" }}>Email: </span>
          {email}
        </p>
        <form onSubmit={handleSaveUser} className={css.form}>
          <input
            type="text"
            value={username}
            onChange={handleChange}
            className={css.input}
          />

          <button className={css.saveButton} type="submit">
            Save
          </button>
          <button
            onClick={handleCancel}
            type="button"
            className={css.cancelButton}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
