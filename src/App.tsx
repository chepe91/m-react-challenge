import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FavoriteContextProvider } from "./context/FavoriteContext";
import ArtistDetailPage from "./components/ArtistDetailPage";
import FavoritePage from "./components/FavoritePage";
import SearchPage from "./components/SearchPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SearchPage />,
    },
    {
      path: "favorites",
      element: <FavoritePage />,
    },
    {
      path: "artist/:id",
      element: <ArtistDetailPage />,
    },
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FavoriteContextProvider>
          <RouterProvider router={router} />
        </FavoriteContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
