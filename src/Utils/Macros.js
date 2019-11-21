const getBMR = (stats,height) => {
    if(stats.gender === "male"){
        return 66 + (6.23 * stats.weight) + (12.7 * height) - (6.8 * stats.age)
    }else{
        return 655 + (6.23 * stats.weight) + (12.7 * height) - (6.8 * stats.age)
    }
}


const getActivityLevel = (activityLevel) => {
    switch(activityLevel){
        case 'none':
            return 1.2;
        case 'light':
            return 1.375;
        case 'medium':
            return 1.55;
        case 'moderate':
            return 1.725;
        case 'heavy':
            return 1.9;
        default:
            return 1.55
        }
}

const getGoals = (goal) => {
    switch(goal){
        case 'aggressive':
            return 0.8;
        case 'moderate':
            return 0.85;
        case 'light':
            return 0.9;
        case 'maintain':
            return 1;
        case 'moderate-gain':
            return 1.1;
        case 'aggressive-gain':
            return 1.15;
        default:
            return 1
    }
}
   
export const getMacros = (stats) => {
    const height = stats.height.feet * 12 + stats.height.inches

    const BMR = getBMR(stats,height)
    // console.log(BMR)
    const activityLevel = getActivityLevel(stats.activityLevel)
    // console.log(activityLevel)
    const getGoal = getGoals(stats.goal)
    // console.log(getGoal)
    const totalCalories = Math.floor(BMR * activityLevel * getGoal)
    const gramsOfProtein = totalCalories * 0.075
    const gramsOfCarbs = totalCalories * 0.1
    const gramsOfFats = totalCalories * 0.033

    return {gramsOfProtein,gramsOfCarbs,gramsOfFats,totalCalories}
}