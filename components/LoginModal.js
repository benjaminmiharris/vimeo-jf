import Modal from "react-bootstrap/Modal";
import PrimaryBtn from "./PrimaryBtn";
import Form from "react-bootstrap/Form";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "@/context/AuthContext";

const LoginModal = () => {
  const [password, setPassword] = useState();
  const router = useRouter();
  const { loginLocalForageHandler, setAuthToken, authToken } =
    useContext(AuthContext);

  const passwordValue = process.env.NEXT_PUBLIC_SITE_PASSWORD;

  const notify = () => toast("Wrong password. Please try again!");

  const passwordHandler = () => {
    if (passwordValue === password) {
      router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/media`);
      setAuthToken(true);
    } else {
      notify();
    }
  };

  useEffect(() => {
    loginLocalForageHandler();
  }, [authToken]);
  return (
    <>
      <ToastContainer />
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onKeyPress={(e) => {
                e.key === "Enter" && passwordHandler();
              }}
            />
            <Form.Text id="passwordHelpBlock" muted>
              This has been assigned by the JF Media Team.
            </Form.Text>
          </Modal.Body>

          <Modal.Footer>
            <PrimaryBtn onClick={passwordHandler} btnText={"Enter"} />
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>
  );
};

export default LoginModal;
