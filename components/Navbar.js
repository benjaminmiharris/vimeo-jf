import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PrimaryBtn from "./PrimaryBtn";
import { useRouter } from "next/router";
import Form from "react-bootstrap/Form";
import { SearchContext } from "@/context/SearchContext";

const NavbarCustom = () => {
  const { logoutLocalStorageHandler, authToken, setAuthToken } =
    useContext(AuthContext);
  const router = useRouter();

  const { setSearchTerm, searchTerm } = useContext(SearchContext);

  const logoutHandler = () => {
    setAuthToken(false);
    router.push(`${process.env.NEXT_PUBLIC_DOMAIN}`);
  };

  useEffect(() => {
    logoutLocalStorageHandler();
  }, [authToken]);

  return (
    <>
      {authToken ? (
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/media">
              <img
                src={
                  "https://pet-adoption-project.s3.eu-west-2.amazonaws.com/Jewish+Futures+logo+white.png"
                }
                height="80"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            {/* <Nav className="me-auto">
              <Nav.Link href="/media">All Media</Nav.Link>
            </Nav> */}
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-4 "
                aria-label="Search"
                onClick={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
            </Form> */}
            <PrimaryBtn btnText={"Logout"} onClick={logoutHandler} />
          </Container>
        </Navbar>
      ) : null}
    </>
  );
};

export default NavbarCustom;
