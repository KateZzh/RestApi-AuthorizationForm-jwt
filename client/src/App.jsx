import RoutesProvides from "./RoutesProvider/RoutesProvider";
import useAuth from "../src/hooks/useAuth";
import AuthContext from "./context/context";

function App() {
  const data = useAuth();
  const route = RoutesProvides(!!data.token);
  return (
    <>
      <AuthContext.Provider value={data}>{route}</AuthContext.Provider>
    </>
  );
}

export default App;
