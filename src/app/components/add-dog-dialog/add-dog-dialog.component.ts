import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Dog} from '../../model/Dog';
import {Color} from '../../model/Color';

@Component({
  selector: 'app-add-dog-dialog',
  templateUrl: './add-dog-dialog.component.html',
  styleUrls: ['./add-dog-dialog.component.css']
})
export class AddDogDialogComponent implements OnInit {
  name: string;
  color: string;  //e string aici  ca sa putem gestiona enumul
  breed: string;
  colors: string[]=["BROWN","GOLDEN","BLACK","SILVER"];
  playful: boolean;

  constructor(private dialogRef: MatDialogRef<AddDogDialogComponent>,) { }

  ngOnInit() {

  }

  close(){
      var toBeAddedDog: Dog;
      //in variabilele acestei componente se salveaza valorile din form.  fiind ca e n mock si nu exista baza de date, dam un numar random pt id
      var idDog: number;
      idDog= Math.floor(Math.random()*10+1);
      if (this.color=="BROWN"){
        toBeAddedDog= {idDog: idDog, name: this.name, breed: this.breed, color : Color.BROWN, playful: this.playful };

      }else if(this.color=="GOLDEN"){
        toBeAddedDog = {idDog: idDog, name: this.name, breed: this.breed, color : Color.GOLDEN, playful: this.playful  };
      }else if (this.color=="SILVER"){
        toBeAddedDog= {idDog: idDog, name: this.name, breed: this.breed, color : Color.SILVER, playful: this.playful  };
      }
      else if (this.color=="BLACK"){
        toBeAddedDog= {idDog: idDog, name: this.name, breed: this.breed, color : Color.BLACK, playful: this.playful  };
      }
         this.dialogRef.close(toBeAddedDog);
  }

}
