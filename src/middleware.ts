import { auth } from "./auth";

export default auth;

export const config = {
  matcher: ["/cart", "/checkout", "/orders", "/admin/:path*"],
};