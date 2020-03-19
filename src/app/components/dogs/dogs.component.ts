import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Dog} from '../../model/Dog';
import {DogService} from '../../services/dog_service/dog.service';
import {Color} from '../../model/Color';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AddDogDialogComponent} from '../add-dog-dialog/add-dog-dialog.component';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit,OnChanges {

  dogs: Dog[];
  idDog: number; //pentru componenta ce va fi apelata in interiorul acesteia
  constructor( private dogService: DogService, public dialog: MatDialog) { }


  ngOnChanges(changes: SimpleChanges): void { //acest simple changes e ca sa detecteze ca ai dat click pe alt caine , ca sa ii vezi detaliile
    //aka sa se incarce componenta dog cu alt id de dog.
    this.ngOnInit();
  }

  ngOnInit() {
     this.update()
  }
  update() {
    this.getAllDogs()
  }
  getAllDogs() {
    this.dogService.getDogs().subscribe(dogs => {
      this.dogs = dogs;
      console.log("lungime: "+this.dogs.length)
    });
    // Cand apelezi o functie din service trebuie sa ii pui .subscribe( ).
    // In interiorul parantezelor la subscribe ai urmatoarea idee:  rezultat => {...} ," rezultat" poate fi orice ce vine din backend,
    //daca un get request asteapta o lista de catei asa va fi acel "rezultat". In interiorul acestor paranteze il poti numi cum vrei.
    //  In acolade specifici ce vrei sa faci cu acel "rezultat". In cazul de aici , am in componenta o variabila "dogs" care e o lista de catei,
    //si vreau ca lista mea de aici sa  devina lista care vine din backend, deci  o sa am :
    //  rezultat => { this.dogs=rezultat } .
  }

  addDog(name: string, breed: string, color: string, playful: boolean){
    var toBeAddedDog: Dog;

    if (color=="BROWN"){
      toBeAddedDog= {idDog: this.idDog, name: name, breed: breed, color: Color.BROWN, playful: playful };

    }else if(color=="GOLDEN"){
      toBeAddedDog = {idDog: this.idDog, name: name, breed: breed, color: Color.GOLDEN, playful: playful };
    }else if (color=="SILVER"){

      toBeAddedDog= {idDog: this.idDog, name: name, breed: breed, color: Color.SILVER, playful: playful };
    }
    else if (color=="BLACK"){

      toBeAddedDog= {idDog: this.idDog, name: name, breed: breed, color: Color.BLACK, playful: playful };
    }
    this.dogService.addDog(toBeAddedDog).subscribe(() => {
      this.update();
      console.log("added dog!");
    });


  }

  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    let addDogDialog=this.dialog.open(AddDogDialogComponent,dialogConfig);

    addDogDialog.afterClosed().subscribe(dogtoadd=>{

      this.dogService.addDog(dogtoadd).subscribe(() => {
        console.log("added dog!");
      });
      this.update();

    });
  }
  onSelect(idDog: number){

    this.idDog=idDog;
  }
}
