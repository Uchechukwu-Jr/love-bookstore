import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { useState } from "react";
import { MobileMenu } from "../components/MobileMenu";
import Loader from "../components/Loader";

const MainLayout = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === "loading" ? <Loader /> : null}
      <Header
        setOpenMobileMenu={setOpenMobileMenu}
        openMobileMenu={openMobileMenu}
      />
      {openMobileMenu && <MobileMenu setOpenMobileMenu={setOpenMobileMenu} />}
      <section className="flex">
        <section className="hidden md:block w-[30%]">
          <Sidebar />
        </section>
        <section className="w-[100%] md:w-[68%] mt-20">
          <Outlet />
        </section>
      </section>
    </>
  );
};

export default MainLayout;
