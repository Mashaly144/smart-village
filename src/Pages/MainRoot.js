import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function MainRoot() {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
}
