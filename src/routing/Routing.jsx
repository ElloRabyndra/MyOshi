import { Route, Routes } from "react-router";
import Home from "@/pages/Home";

const Routing = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </section>
  );
};

export default Routing;
