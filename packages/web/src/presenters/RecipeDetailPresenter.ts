import {Maybe} from "purify-ts";
import {RecipeDetail} from "@feast/domain";
import IngredientPresenter, {toIngredientPresenters} from "./IngredientPresenter";
import StepPresenter, {toStepPresenters} from "./StepPresenter";

export default class RecipeDetailPresenter {
  private readonly ingredientPresenters: Maybe<IngredientPresenter[]>;
  private readonly stepPresenters: Maybe<StepPresenter[]>;

  constructor(private recipe: RecipeDetail) {
    this.ingredientPresenters = toIngredientPresenters(recipe.ingredients);
    this.stepPresenters = toStepPresenters(recipe.steps);
  }

  get name(): string {
    return this.recipe.name;
  }

  get ingredients(): Maybe<IngredientPresenter[]> {
    return this.ingredientPresenters;
  }

  get steps(): Maybe<StepPresenter[]> {
    return this.stepPresenters;
  }
}
