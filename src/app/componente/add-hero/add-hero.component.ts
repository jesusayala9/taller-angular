import { Component } from '@angular/core';
import { HttpRequestService } from '../../services/http-request.service';


@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrl: './add-hero.component.css'
})
export class AddHeroComponent {
  constructor(private _http_service: HttpRequestService) {}

  public heroe: any = {
    nombre: "My Hero!!",
    poder: 2
    }

    public hazClick():any {
      console.log(`Capturando el formulario:`, this.heroe);
      }

      public myService():any {
        // Obtener la data que trae httpRequestService desde el servidor
        this._http_service.postRequestWithParams( "Yilmar",
        "yilmar.alzate@correounivalle.edu.co" )
        .subscribe( ( data: any ) => {
        console.log(`Data en la peticion: `, data);
        });
        }


}
