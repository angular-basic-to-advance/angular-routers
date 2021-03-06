import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersService } from "./servers/servers.service";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from "./app-routing.module";

// const appRoute: Routes = [
//   { path: "", component: HomeComponent },
//   { path: "users", component: UsersComponent, children:[
//     { path: ":id/:name", component: UserComponent },
//   ] },
//   // here the :(e.g :id) informs angular that the path is dynamically updated
//   { path: "servers", component: ServersComponent,children :[
//     { path: ":id", component: ServerComponent },
//     { path: ":id/edit", component: EditServerComponent },
//   ]},
//   // This is an extra component we have made to handle any other path if user enters
//   // then it wiil be get redirected to the component so that error due to unhandled link
//   // can be handled.
//   { path:'page-not-found', component : PageNotFoundComponent},
//   { path: '**', redirectTo:'page-not-found'}
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, FormsModule,AppRoutingModule],
  providers: [ServersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
