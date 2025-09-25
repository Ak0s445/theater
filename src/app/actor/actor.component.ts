import { Component } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-actor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './actor.component.html',
  styleUrl: './actor.component.css'
})
export class ActorComponent {
  actors: any;
  actorForm: any;

  constructor(private api:ApiService,
    private builder: FormBuilder //formbuilderrel dolgozunk
  ){}

ngOnInit(){
  this.getActors()
  this.actorForm = this.builder.group({
    //objektumként kell megadni a mezőket

    name: '',
    city: '',
    birthDate: ''
    //kezdetben ezek most lehetnek üresek
  })
}

  getActors(){
    this.api.getActors().subscribe({
      next: (result:any) => {  //ha csak az adatokat szeretném, utána irom :any
        console.log(result.data) //megnézzük jön e a válasz a rest apiról
        this.actors=result.data 
      },
    })
  }
  addActor() {
    console.log(this.actorForm.value) //megnézzük a submit esemény működik-e
    this.api.addActor(this.actorForm.value).subscribe({
      next: (result) => {
        console.log(result) //kiirjuk mit ad vissza a szerver
        this.getActors()
        this.actorForm.reset() //ez törli automatikusan a tartalmat

      }
    })
  }

}
