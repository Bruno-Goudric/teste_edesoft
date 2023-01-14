import { Routes as RoutesWrapper, Route } from "react-router-dom";

import routesNames from "config/routesNames";
import * as Pages from "pages";

export default function Routes() {
  return (
    <RoutesWrapper>
      <Route path={routesNames.ROOT} element={<Pages.Home />} />
    </RoutesWrapper>
  );
}
