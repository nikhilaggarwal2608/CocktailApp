import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drink } from '../models/cocktail.model';
import { CocktailService } from '../services/cocktail/cocktail.service';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.css']
})
export class CocktailDetailComponent implements OnInit {

  cocktail: Drink;
  error: string;

  constructor(private _route: ActivatedRoute, private _cocktailService: CocktailService) { }

  ngOnInit(): void {

    this._cocktailService.getCocktailDetailsById(this._route.snapshot.paramMap.get('id')).subscribe(data => this.cocktail = data.drinks[0], error => this.error = error);
  }

}
