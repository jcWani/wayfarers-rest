import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";

import Spinner from "../ui/Spinner";
import styled from "styled-components";

const Fullpage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3. While loading show a spinner
  if (isLoading)
    return (
      <Fullpage>
        <Spinner />
      </Fullpage>
    );

  // 4. if there is a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
