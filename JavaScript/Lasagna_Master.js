/// <reference path="./global.d.ts" />
// @ts-check
/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime) {
    if (remainingTime == undefined) return "You forgot to set the timer.";
    else if (remainingTime === 0) return "Lasagna is done.";
    else return "Not done, please wait.";
}
export function preparationTime(layers, avgPrepTimePerLayer = 2) {
    return layers.length * avgPrepTimePerLayer;
}
export function quantities(layers) {
    let res = { noodles: 0, sauce: 0 };
    for (let layer of layers) {
        if (layer.localeCompare("noodles") === 0) {
            res.noodles += 50;
        } else if (layer.localeCompare("sauce") === 0) {
            res.sauce += 0.2;
        }
    }

    return res;
}
export function addSecretIngredient(friendIngredients, myIngredients) {
    myIngredients.push(friendIngredients[friendIngredients.length - 1]);
}
export function scaleRecipe(recipe, noOfPortions = 2) {
    let newRecipe = { ...recipe };
    let ratio = noOfPortions / 2;
    for (let ingredient in newRecipe) {
        newRecipe[ingredient] *= ratio;
    }
    return newRecipe;
}
