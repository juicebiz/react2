import HomePage from "@/pages/Home";
import ProductsListPage from "@/pages/Products/List";
import ProductsItemPage from "@/pages/Products/Item";
import SecretPage from "./pages/Secret";
import AuthGuard from "./components/Shared/AuthGuard";

const routes = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/products',
    element: <ProductsListPage />
  },
  {
    path: '/products/:id',
    element: <ProductsItemPage />
  },
  {
    path: '/secret',
    element: <AuthGuard>
      <SecretPage />
    </AuthGuard>
  }
]

export default routes;