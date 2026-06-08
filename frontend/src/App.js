import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { PageLoader } from "./components/Loader";

const Login               = lazy(() => import("./pages/Login"));
const CadetDashboard      = lazy(() => import("./pages/CadetDashboard"));
const AdminDashboard      = lazy(() => import("./pages/AdminDashboard"));
const ProfilePage         = lazy(() => import("./pages/ProfilePage"));
const NoticesPage         = lazy(() => import("./pages/NoticesPage"));
const EventsPage          = lazy(() => import("./pages/EventsPage"));
const AttendancePage      = lazy(() => import("./pages/AttendancePage"));
const AdminAttendancePage = lazy(() => import("./pages/AdminAttendancePage"));
const MarkAttendancePage  = lazy(() => import("./pages/MarkAttendancePage"));
const ChangePasswordPage  = lazy(() => import("./pages/ChangePasswordPage"));
const AdminCadetsPage     = lazy(() => import("./pages/AdminCadetsPage"));
const DeveloperPage       = lazy(() => import("./pages/DeveloperPage"));

import "./styles.css";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (adminOnly && user.role !== "admin") return <Navigate to="/dashboard" />;
  return children;
};

const AppRoutes = () => {
  const { user } = useAuth();
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />

        <Route path="/dashboard" element={
          <ProtectedRoute>
            {user?.role === "admin" ? <AdminDashboard /> : <CadetDashboard />}
          </ProtectedRoute>
        } />

        <Route path="/profile"         element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        <Route path="/notices"         element={<ProtectedRoute><NoticesPage /></ProtectedRoute>} />
        <Route path="/events"          element={<ProtectedRoute><EventsPage /></ProtectedRoute>} />
        <Route path="/attendance" element={
          <ProtectedRoute>
            {user?.role === "admin" ? <AdminAttendancePage /> : <AttendancePage />}
          </ProtectedRoute>
        } />
        <Route path="/change-password" element={<ProtectedRoute><ChangePasswordPage /></ProtectedRoute>} />
        <Route path="/developer"       element={<ProtectedRoute><DeveloperPage /></ProtectedRoute>} />

        <Route path="/cadets"                    element={<ProtectedRoute adminOnly><AdminCadetsPage /></ProtectedRoute>} />
        <Route path="/mark-attendance/:eventId"  element={<ProtectedRoute adminOnly><MarkAttendancePage /></ProtectedRoute>} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;