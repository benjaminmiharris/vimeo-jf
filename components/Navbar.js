import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PrimaryBtn from "./PrimaryBtn";
import { useRouter } from "next/router";
import { LOCAL_DEV } from "@/globals";

const NavbarCustom = () => {
  const { logoutLocalStorageHandler, authToken, setAuthToken } =
    useContext(AuthContext);
  const router = useRouter();

  const logoutHandler = () => {
    setAuthToken(false);
    router.push(`${LOCAL_DEV}`);
  };

  useEffect(() => {
    logoutLocalStorageHandler();
  }, [authToken]);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/media">
            <img
              src={
                "https://pet-adoption-project.s3.eu-west-2.amazonaws.com/Jewish+Futures+logo+white.png"
              }
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/media">All Media</Nav.Link>
          </Nav>
          <PrimaryBtn btnText={"Logout"} onClick={logoutHandler} />
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarCustom;
