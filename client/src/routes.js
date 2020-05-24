// import React from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
// import Primary from "./page/Primary";
// import Auth from "./page/Auth";

// export const useRoutes = (isAuthenticated) => {
//   if (isAuthenticated) {
//     return (
//       <Switch>
//         <Route exact path="/primary" component={Primary} />
//         <Redirect to="/primary" />
//       </Switch>
//     );
//   }
//   return (
//     <Switch>
//       <Route exact path={["/", "/login", "/register"]} component={Auth} />
//       <Redirect to="/" />
//     </Switch>
//   );
// };
