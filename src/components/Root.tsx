import { Outlet } from "react-router-dom";
import NavBar from "../sections/NavBar/NavBar";
import Footer from "../sections/Footer/Footer";
import { FooterData } from "../dataContent/Data";
import FloatingButton from "./FloatingButton/FloatingButton";

function Root() {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main>
        <Outlet />
         <FloatingButton />
      </main>

      <footer>
        <Footer FooterData={FooterData}/>
      </footer>
    </div>
  );
}

export default Root;
