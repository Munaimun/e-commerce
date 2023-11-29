import { Routes, Route } from "react-router-dom";
import Navigation from "./component/routes/navigation/Navigation";
import Home from "./component/routes/home/Home";
import SingIn from "./component/routes/sign-in/SingIn";

const Shop = () => {
  return <div>This is the shop compo</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* index means when the path is just / it will render along with */}
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SingIn />} />
      </Route>
    </Routes>
  );
};

export default App;
