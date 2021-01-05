const AUTHORIZATION = "/";
const COLLECTION = "/collection";
const EDITOR = "/editor";
const VIEWER = "/viewer/:id";

export const ProtectedRoutes = {
  protected: {
    COLLECTION,
    EDITOR
  }
}

export const AppRoutes = {
  AUTHORIZATION,
  VIEWER,
  ...ProtectedRoutes
}