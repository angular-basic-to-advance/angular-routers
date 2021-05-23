import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoute: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "users",
    component: UsersComponent,
    children: [{ path: ":id/:name", component: UserComponent }],
  },
  // here the :(e.g :id) informs angular that the path is dynamically updated
  {
    path: "servers",
    component: ServersComponent,
    children: [
      { path: ":id", component: ServerComponent },
      { path: ":id/edit", component: EditServerComponent },
    ],
  },
  // This is an extra component we have made to handle any other path if user enters
  // then it wiil be get redirected to the component so that error due to unhandled link
  // can be handled.
  { path: "page-not-found", component: PageNotFoundComponent },
  { path: "**", redirectTo: "page-not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports:[RouterModule]
})
export class AppRoutingModule {}
