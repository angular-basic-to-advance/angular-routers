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
    this.route.navigate(['edit'],{relativeTo:this.router})
  }

}
