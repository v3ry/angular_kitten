import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit {
  kittenList: Array<Kitten> = [{name: 'toto', race: 'titi',birthday: '2010',image: 'http://placekitten.com/50/75'}];

  kittenAddopt: Array<any> = []

  appDisplayCat:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onReceiv(event:Kitten): void {
    this.kittenList.push(event);
    console.log(event);
    console.log(this.kittenList);
  }
  onAdopt(id:number): void {
    console.log(id);
    this.kittenAddopt?.push(this.kittenList.splice(id,1))
    console.log(this.kittenAddopt);
  }
}
