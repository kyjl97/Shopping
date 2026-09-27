export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const isAdminRoute =
      url.pathname === "/admin" ||
      url.pathname === "/api/login" ||
      url.pathname === "/api/logout" ||
      url.pathname.startsWith("/api/admin/");

    if (url.pathname === "/api/offers" || isAdminRoute) {
      return env.DEALS_API.fetch(request);
    }

    return env.ASSETS.fetch(request);
  },
};
