export class Day{
    constructor(dayID, meals, insulin){
        this.DayID = dayID;
        this.Meals = meals;
        this.Insulin = insulin;
    }

    addMeal(meal){
        this.Meals.push(meal)
    }
    removeMeal(meal){
        let m = meal.mealID;
        this.Meals.splice(m,1);
    }
    addInsulin(Ishot){
        this.Insulin.push(Ishot);
    }
    removeInsulin(Ishot){
        let i = Ishot.InsulinID;
        this.Insulin.splice(i,1);
    }
}