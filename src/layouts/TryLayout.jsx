import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "../components/Header";
import Loader from "../components/Loader";

export default function MainLayout() {
  const navigation = useNavigation();
  return (
    <>
      {navigation.state === "loading" ? <Loader /> : null}
      <Header />
      <section className="mt-24">
        <Outlet />
      </section>
    </>
  );
}
