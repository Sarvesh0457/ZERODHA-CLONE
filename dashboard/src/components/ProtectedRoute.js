import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    window.location.href = `/signup`;
    return null;
  }

  return children;
}

export default ProtectedRoute;