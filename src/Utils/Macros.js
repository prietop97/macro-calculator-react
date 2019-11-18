const getBMR = (stats,height) => {
    if(stats.gender === "male"){
        return 66 + (6.23 * stats.weight) + (12.7 * height) - (6.8 * stats.age)
    }else{
        return 655 + (6.23 * stats.weight) + (12.7 * height) - (6.8 * stats.age)
    }
}

const getMacros = (stats) => {
    const height = stats.height.feet * 12 + stats.height.inches

    const BMR = getBMR(stats,height)
    const activityLevel = getActivityLevel(stats.activityLevel)

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
        default:
            return 1
    }
}