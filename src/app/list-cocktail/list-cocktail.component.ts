import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng-lts/api';
import { Drink } from '../models/cocktail.model';
import { CocktailService } from '../services/cocktail/cocktail.service';

@Component({
  selector: 'app-list-cocktail',
  templateUrl: './list-cocktail.component.html',
  styleUrls: ['./list-cocktail.component.css']
})
export class ListCocktailComponent implements OnInit {

  cocktails: Drink[];
  filteredCocktails: Drink[];
  Categories: Drink[];
  Ingredients: Drink[];
  sortOptions: SelectItem[];
  filterOptions: SelectItem[];
  sortKey: string;
  filterKey: string;
  selectedCategory: Drink;
  selectedIngredient: Drink;

  private _searchTerm: string;
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredCocktails = this.filterCocktails(value);
  }

  filterCocktails(searchString: string) {
    return this.cocktails.filter(cocktail =>
      cocktail.strDrink.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  constructor(private _cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.getCocktails("a");

    this._cocktailService.getDrinkCategories().subscribe(data => this.Categories = data.drinks, error => alert(error));

    this._cocktailService.getDrinkIngredients().subscribe(data => this.Ingredients = data.drinks, error => alert(error));

    this.sortOptions = [
      { label: 'Name', value: 'strDrink' },
      { label: 'Category', value: 'strCategory' }
    ];

    this.filterOptions = [
      { label: 'Name', value: 'name' },
      { label: 'Category', value: 'category' },
      { label: 'Ingredient', value: 'ingredient' }
    ];
  }

  getCocktails(firstLetter: string) {
    this.sortKey = null;
    this.filterKey = null;
    this._cocktailService.getCocktailsByFirstLetter(firstLetter).subscribe(data => {
      this.cocktails = data.drinks;
      this.filteredCocktails = this.cocktails;
    }, error => alert(error));
  }

  onSortChange() {
    this.filteredCocktails.sort((a, b) => a[this.sortKey].localeCompare(b[this.sortKey]));
  }

  onFilterChange() {
    this.searchTerm = '';
    this.selectedCategory = null;
    this.selectedIngredient = null;
  }

  onCategoryOrIngredientChange() {
    if (this.filterKey == 'category') {
      this.filteredCocktails = this.cocktails.filter(cocktail =>
        cocktail.strCategory == this.selectedCategory.strCategory);
    } else {
      this.filteredCocktails = this.cocktails.filter(cocktail =>
        cocktail.strIngredient1 == this.selectedIngredient.strIngredient1 ||
        cocktail.strIngredient2 == this.selectedIngredient.strIngredient1 ||
        cocktail.strIngredient3 == this.selectedIngredient.strIngredient1);
    }
  }

  clearFilters() {
    this.getCocktails('a');
  }

}
