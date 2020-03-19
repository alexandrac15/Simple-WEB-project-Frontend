import { Component, OnInit } from '@angular/core';
import {OwnerService} from '../../services/owner_service/owner.service';
import {Owner} from '../../model/Owner';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {

   owners: Owner[];

  constructor(private ownerservice: OwnerService) { }

  ngOnInit() {
    this.update();
  }
  update() {
    this.getAllOwners();
  }

  getAllOwners(){
    this.ownerservice.getOwners().subscribe(owners => {
      this.owners = owners;
    });
  }

}
