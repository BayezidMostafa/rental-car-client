import { RouterProvider } from "react-router-dom";
import { routes } from "./Router/Routes";

const App = () => {
  return (
    <div className="bg-gray-100">
      <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
