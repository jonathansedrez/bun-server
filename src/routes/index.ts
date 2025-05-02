import { healthRoutes } from "./health";
import { todoRoutes } from "./todos";

export const routes = {
  "/health": healthRoutes,
  "/todos": todoRoutes,
};
