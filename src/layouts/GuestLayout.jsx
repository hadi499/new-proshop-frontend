import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { Container } from "react-bootstrap";

export default function GuestLayout() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  if (userInfo) {
    return <Navigate to="/admin" />;
  }
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
