import { Routes, Route } from "react-router-dom";
import Navigation from "./component/routes/navigation/Navigation";
import Home from "./component/routes/home/Home";

const Shop = () => {
  return <div>yes</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* index means when the path is just / it will render along with */}
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
