import { BrowserRouter } from "react-router-dom";
import { SupaBaseConnectionProvider } from "./context";
import routes, { renderRoutes } from "./routes";
import { Toaster } from "sonner";

function App() {
  return (
    <SupaBaseConnectionProvider>
      <Toaster closeButton position="bottom-right" />
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </SupaBaseConnectionProvider>
  );
}

export default App;
