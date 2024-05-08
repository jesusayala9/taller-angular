import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {

  activado: boolean = true;
  desactivado: boolean = false;


  heroes:string[] = [ "Thor", "Steve", "Tony" ];

  heroes_list:any[] = [
    {"name":"Peter","power":"Fly"},
    {"name":"Lissa","power":"Fire"}
    ];

}
