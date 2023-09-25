import RoutesProvides from "./RoutesProvider/RoutesProvider";
import useAuth from "../src/hooks/useAuth";

function App() {
  const { token } = useAuth();
  const route = RoutesProvides(!!token);
  return <>{route}</>;
}

export default App;
