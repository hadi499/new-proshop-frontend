import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { Container } from "react-bootstrap";

export default function DefaultLayout() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // if (!userInfo) {
  //   return <Navigate to="/" />;
  // }

  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
