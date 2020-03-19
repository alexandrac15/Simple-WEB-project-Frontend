import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DogService} from '../../services/dog_service/dog.service';
import {Color} from '../../model/Color';
import {Dog} from '../../model/Dog';
import {DogsComponent} from '../dogs/dogs.component';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit ,OnChanges{
  @Input() idDog: number=5 // Componenta asta se ocupa sa afiseze informatii despre catel. Avem nevoie de id-ul lui ca sa obtinem
  //informatiile corespunzatoare. Componenta va fi apelata dintr-o pagina html a altei componente, care ii va da si id.ul. In
  //cazul asta  o sa apelam componenta in pagina html de la dogs component.Pe ui,  cand apasam pe unul din cateii din lista
  // se va activa componenta asta.
  //Am pus un numar random initial ca daca nu are posibil sa faca probleme la compilare mai incolo.

  name: string;
  color: string;  //e string aici  ca sa putem gestiona enumul
  breed: string;
  colors: string[]=["BROWN","GOLDEN","BLACK","SILVER"];
  playful: boolean;

  constructor(private dogService: DogService, public parent: DogsComponent) { }

  ngOnInit() { // in functia asta se pune ce vrei  sa faci cand  se initializeaza componenta
   this.update();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }

  update(){
    this.getDog();
  }
  getDog(){
    if(this.idDog!=-1) {
      this.dogService.getDog(this.idDog).subscribe(
        dog => {
          this.name = dog.name;
          this.breed = dog.breed;
          this.color = dog.color.toString();
          this.playful = dog.playful;
        }
      );
    }
  }

  updateDog(name: string, breed: string, color: string, playful: boolean){

    var color1: Color;
    var updatedDog: Dog;
    //nu prea stiu cum e cu enumurile in angular de aia e toata cascada aia de if-uri aici:
    if (color=="BROWN"){
      updatedDog = {idDog: this.idDog, name: name, breed: breed, color: Color.BROWN, playful: playful };

    }else if(color=="GOLDEN"){
      updatedDog = {idDog: this.idDog, name: name, breed: breed, color: Color.GOLDEN, playful: playful };
    }else if (color=="SILVER"){

      updatedDog = {idDog: this.idDog, name: name, breed: breed, color: Color.SILVER, playful: playful };

    }else if (color=="BLACK"){

      updatedDog= {idDog: this.idDog, name: name, breed: breed, color: Color.BLACK, playful: playful };
    }
    this.dogService.updateDog(updatedDog).subscribe(() => {
      this.update(); //se reinitializeaza componenta ca sa se vada modificarile
      this.parent.update(); //ca se updateze si componenta Dogs, sa se vada modificarile in lista de catei
      console.log("updated dog!");
    });


  }



  deleteDog(){
     this.dogService.deleteDog(this.idDog).subscribe(
       //nu se asteapta nimic de pe backend dar tot trebuie sa avem acest subscribe. Vreau  sa se vada modificarile facute
       //asa ca apelez functia de update ca rezultat al acestul call
       ()=>{
         this.idDog=-1; //ca sa nu  ramana componenta afisata  (a se vedea acel ngif din html)
             this.parent.update();


       }
     )
  }

}
