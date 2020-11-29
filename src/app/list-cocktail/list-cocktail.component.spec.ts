import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CocktailService } from '../services/cocktail/cocktail.service';

import { ListCocktailComponent } from './list-cocktail.component';

describe('ListCocktailComponent', () => {
  let component: ListCocktailComponent;
  let fixture: ComponentFixture<ListCocktailComponent>;
  let _cocktailService: CocktailService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ListCocktailComponent],
      providers: [CocktailService, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCocktailComponent);
    component = fixture.componentInstance;
    _cocktailService = TestBed.inject(CocktailService);
    component.cocktails = [
      {
        "idDrink": "17222",
        "strDrink": "A1",
        "strCategory": "Cocktail",
        "strAlcoholic": "Alcoholic",
        "strGlass": "Cocktail glass",
        "strInstructions": "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
        "strIngredient1": "Gin",
        "strIngredient2": "Grand Marnier",
        "strIngredient3": "Lemon Juice"
      },
      {
        "idDrink": "13501",
        "strDrink": "ABC",
        "strCategory": "Shot",
        "strAlcoholic": "Alcoholic",
        "strGlass": "Shot glass",
        "strInstructions": "Layered in a shot glass.",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
        "strIngredient1": "Amaretto",
        "strIngredient2": "Baileys irish cream",
        "strIngredient3": "Cognac"
      },
      {
        "idDrink": "17225",
        "strDrink": "Ace",
        "strCategory": "Cocktail",
        "strAlcoholic": "Alcoholic",
        "strGlass": "Martini Glass",
        "strInstructions": "Shake all the ingredients in a cocktail shaker and ice then strain in a cold glass.",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg",
        "strIngredient1": "Gin",
        "strIngredient2": "Grenadine",
        "strIngredient3": "Heavy cream"
      },
      {
        "idDrink": "17837",
        "strDrink": "Adam",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strGlass": "Cocktail glass",
        "strInstructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/v0at4i1582478473.jpg",
        "strIngredient1": "Dark rum",
        "strIngredient2": "Lemon juice",
        "strIngredient3": "Grenadine"
      },
      {
        "idDrink": "13938",
        "strDrink": "AT&T",
        "strCategory": "Ordinary Drink",
        "strAlcoholic": "Alcoholic",
        "strGlass": "Highball Glass",
        "strInstructions": "Pour Vodka and Gin over ice, add Tonic and Stir",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/rhhwmp1493067619.jpg",
        "strIngredient1": "Absolut Vodka",
        "strIngredient2": "Gin",
        "strIngredient3": "Tonic water"
      }
    ]
    component.filteredCocktails = component.cocktails;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('clear filters', () => {
    component.clearFilters();

    expect(component.sortKey).toBeNull();
    expect(component.filterKey).toBeNull();
  });

  it('on filter change', () => {
    component.onFilterChange();

    expect(component.selectedCategory).toBeNull();
    expect(component.selectedIngredient).toBeNull();
    expect(component.searchTerm).toEqual('');
  });

  it('on search term change', () => {
    component.searchTerm = "ABC";

    expect(component.filterCocktails.length).toEqual(1);
  });

  it('on category Change', () => {
    component.filterKey = 'category';
    component.selectedCategory = {
      strCategory: 'Ordinary Drink'
    };

    component.onCategoryOrIngredientChange();

    component.filteredCocktails.forEach(function (cocktail) {
      var category = cocktail.strCategory;
      expect(category).toEqual('Ordinary Drink');
    });
  });

  it('on ingredient Change', () => {
    component.filterKey = 'ingredient';
    component.selectedIngredient = {
      strIngredient1: 'Gin'
    };

    component.onCategoryOrIngredientChange();

    expect(component.filteredCocktails.length).toEqual(3);
  });

});
