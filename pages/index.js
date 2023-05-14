import LoginModal from "@/components/LoginModal";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect } from "react";
import style from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const { authToken } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (authToken == true) {
      router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/media`);
    }
  }, [authToken]);

  return (
    <div className={style.loginModalContainer}>
      <div className={style.loginModal}>
        <LoginModal />
      </div>
    </div>
  );
}
