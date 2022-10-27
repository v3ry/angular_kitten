import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent implements OnInit {

  kitten: Kitten = {name: '', race: '',birthday: '',image: ''}

  @Output()
    kitt: EventEmitter<Kitten> = new EventEmitter(); 

onSubmit() {
  this.kitt.emit(this.kitten);
  this.kitten = {name: '', race: '',birthday: '',image: ''}
  console.log(this.kitten);
}

  constructor() { }

  ngOnInit(): void {
  }

}
