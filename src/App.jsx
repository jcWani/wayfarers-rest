import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

import GlobalStyles from "./styles/GlobalStyles";

import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Rooms from "./pages/Rooms";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

import AppLayout from "./ui/AppLayout";
import Booking from "./pages/Booking";
import CheckIn from "./pages/CheckIn";
import ProtectedRoute from "./ui/ProtectedRoute";
import { DarkModeProvider } from "./context/DarkModeContext";

function shouldForwardProp(propName, target) {
  if (typeof target === "string") {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName);
  }
  // For other elements, forward all props
  return true;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />

          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route
                  index
                  element={<Navigate replace to="dashboard" />}
                ></Route>
                <Route path="dashboard" element={<Dashboard />}></Route>
                <Route path="bookings" element={<Bookings />}></Route>
                <Route path="bookings/:bookingId" element={<Booking />}></Route>
                <Route path="checkin/:bookingId" element={<CheckIn />}></Route>
                <Route path="rooms" element={<Rooms />}></Route>
                <Route path="users" element={<Users />}></Route>
                <Route path="settings" element={<Settings />}></Route>
                <Route path="account" element={<Account />}></Route>
              </Route>

              <Route path="login" element={<Login />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </BrowserRouter>

          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{
              margin: "8px",
            }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "var(--color-grey-0)",
                color: "var(color-grey-700)",
              },
            }}
          />
        </QueryClientProvider>
      </StyleSheetManager>
    </DarkModeProvider>
  );
}

export default App;
