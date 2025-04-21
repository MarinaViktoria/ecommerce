import { Outlet } from "react-router-dom";

export default function ProductsLayout({ products, loading }) {
  return (
    <div>
      <Outlet context={{ products, loading }} />
    </div>
  );
}
