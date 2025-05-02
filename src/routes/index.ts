import { healthRoutes } from "./health";
import { todoRoutes } from "./todos";
import { htmlRoutes } from "./html";

export const routes = {
  "/health": healthRoutes,
  "/todos": todoRoutes,
  "/html": htmlRoutes,
};
