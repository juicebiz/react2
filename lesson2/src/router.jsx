import HomePage from "@/pages/Home";
import ProductsListPage from "@/pages/Products/List";
import ProductsItemPage from "@/pages/Products/Item";
import ProductsAdmin from "@/pages/Products/Admin";
import ProductsAdminCreate from "@/pages/Products/AdminCreate";
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
  },
  {
    path: '/admin/products',
    element: <ProductsAdmin />
  },
  {
    path: '/admin/products/create',
    element: <ProductsAdminCreate />
  }
]

export default routes;