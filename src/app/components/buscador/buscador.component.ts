import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = []
  termino:string[];

  constructor(private activatedRouted:ActivatedRoute,
              private _heroesService:HeroesService) {

   }

  ngOnInit(): void {
    this.activatedRouted.params.subscribe(params=>{
      this.termino= params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log( this.heroes );
    })
  }

}
