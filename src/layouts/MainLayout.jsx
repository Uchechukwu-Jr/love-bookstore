import { Outlet, useNavigation, ScrollRestoration } from "react-router-dom";
import { Header } from "../components/Header";
import Loader from "../components/Loader";

export default function MainLayout() {
  const navigation = useNavigation();
  return (
    <>
      {navigation.state === "loading" ? <Loader /> : null}
      <ScrollRestoration />
      <Header />
      <section className="mt-[3.5rem]">
        <Outlet />
      </section>
    </>
  );
}
