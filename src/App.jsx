import { useSelector } from "react-redux";

import Counter from "./Components/Counter";
import Navbar from "./Components/Navbar";
import Welcome from "./Components/Welcome";

function App() {

  const isLogin = useSelector((state) => state.auth.isLogin)

  return (
    <>
        <Navbar />
        {
          !isLogin && <Welcome />
        }
        {
          isLogin && <Counter />
        }
    </>
  );
}

export default App;
