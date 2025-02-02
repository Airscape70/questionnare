import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import QuestionnairePage from "../pages/QuestionnairePage";
import RegisterPage from "../pages/RegisterPage";
import RemindPage from "../pages/RemindPage";

export const authRoutes = [
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/reminder", element: <RemindPage /> },
];

export const mainRoutes = [
  { path: "/home", element: <HomePage /> },
  { path: "/questionnaire", element: <QuestionnairePage /> },
];