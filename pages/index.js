import LoginModal from "@/components/LoginModal";
import style from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={style.loginModalContainer}>
      <div className={style.loginModal}>
        <LoginModal />
      </div>
    </div>
  );
}
