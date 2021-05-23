import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
// ActivatedRoute : Holds the path of the current component
  constructor(private serversService: ServersService, private router : ActivatedRoute,
    private route : Router) { }

  ngOnInit() {
    // to change the getServer() param value i.e to make it  dynamic we need to implimemnt the Activated Route Concept
    // so that we can acess the parametrs of the clicks(i.e if we click productionserver the id =1 mentioned ij the array and so on)
    // but this will only effect for the first time as we have written snapshot.params
    // this.server = this.serversService.getServer(1);
    const id = +this.router.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.router.params.subscribe(
      (params : Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    );
  }

  onEdit(){
    this.route.navigate(['edit'],{relativeTo:this.router,queryParamsHandling:'preserve'})
    // this.route.navigate(['/servers', this.server.id, 'edit'], { queryParamsHandling: 'preserve' })

    //relativeTo : if we are already in a child component(server component) and 
    // if we want to navigate to another child component then we dont need to specify the full path('severs/:id/edit')
    // but we can provide the route of the component we want to navigate (if we want to go edit server and we are already in the server component
    // then we just need to navigate to /edit and add the remaining path using the angular provided name 'relativeTo'
    // and assign this to the activated route(this.route))

  }

}
