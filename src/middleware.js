export { default } from "next-auth/middleware";

// specify routes to protect that requires auth
export const config = {
  matcher: ["/properties/add", "/profile", "/properties/saved", "/messages"],
};
