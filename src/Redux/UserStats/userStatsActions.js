import axiosWithAuth from "../../Utils/axiosWithAuth";

export const FETCH_STATS_START = "FETCH_STATS_START";
export const FETCH_STATS_SUCCESS = "FETCH_STATS_SUCCESS";
export const FETCH_STATS_FAILED = "FETCH_STATS_FAILED";

export const SEND_STATS_START = "SEND_STATS_START";
export const SEND_STATS_SUCCESS = "SEND_STATS_SUCCESS";
export const SEND_STATS_FAILED = "SEND_STATS_FAILED";

export const EDIT_STATS_START = "EDIT_STATS_START";
export const EDIT_STATS_SUCCESS = "EDIT_STATS_SUCCESS";
export const EDIT_STATS_FAILED = "EDIT_STATS_FAILED";

export const sendStats = (info, history) => (dispatch) => {
  dispatch({ type: SEND_STATS_START });
  axiosWithAuth()
    .post("/info", info)
    .then((res) => {
      const cal = calculateStats(res.data);
      const protein = Math.floor(cal * 0.075);
      const carbs = Math.floor(cal * 0.1);
      const fats = Math.floor(cal * 0.033);
      const macro = mealPlan(protein, carbs, fats, res.data);
      dispatch({
        type: SEND_STATS_SUCCESS,
        payload: {
          data: res.data,
          calculations: { cal, protein, carbs, fats, macro },
        },
      });
      history.push("/Calculatedpage");
    })
    .catch((err) => console.log(err));
};

export const fetchStats = (id, history) => (dispatch) => {
  dispatch({ type: FETCH_STATS_START });
  axiosWithAuth()
    .get(`/info`)
    .then((res) => {
      const cal = calculateStats(res.data);
      const protein = Math.floor(cal * 0.075);
      const carbs = Math.floor(cal * 0.1);
      const fats = Math.floor(cal * 0.033);
      const macro = mealPlan(protein, carbs, fats, res.data);
      dispatch({
        type: FETCH_STATS_SUCCESS,
        payload: {
          data: res.data,
          calculations: { cal, protein, carbs, fats, macro },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      if (err.message === "Request failed with status code 400") {
        history.push("/WelcomePage");
      }
      dispatch({ type: FETCH_STATS_FAILED });
    });
};

export const editData = (id, formValues, history) => (dispatch) => {
  axiosWithAuth()
    .put(`/info/${id}`, formValues)
    .then(() => {
      history.push("/Dashboard");
    })
    .catch((err) => console.log(err));
};

///// NOT REASIB TO USE THIS !! ONLY FOR REACT 2 MVP ---
export const deleteStats = (id, history) => (dispatch) => {
  axiosWithAuth()
    .delete(`/info/${id}`)
    .then(() => history.push("/Biometric"))
    .catch((err) => console.log(err));
};

export const calculateStats = (user) => {
  let day = "";
  let month = "";
  if (user.birthdate_day <= 9) {
    day = `0${user.birthdate_day}`;
  } else {
    day = `${user.birthdate_day}`;
  }

  if (user.birthdate_month <= 9) {
    month = `0${user.birthdate_month}`;
  } else {
    month = `${user.birthdate_month}`;
  }

  let currentDate = new Date();
  let birthDate = new Date(`${month}/${day}/${user.birthdate_year}`);
  let oneYear = 1000 * 60 * 60 * 24 * 365;
  let difference = Math.floor((currentDate - birthDate) / oneYear);
  let BMR = 0;
  if (user.gender === "male") {
    BMR = 66 + 6.23 * user.weight + 12.7 * user.height - 6.8 * difference;
  } else {
    BMR = 655 + 4.35 * user.weight + 4.7 * user.height - 4.5 * difference;
  }
  return Math.floor(BMR * user.activity_factor * user.goal_multiplier);
};

export const mealPlan = (proteinGrams, carbsGrams, fatsGrams, userInfo) => {
  let mealProtein = proteinGrams;
  let mealCarbs = carbsGrams;
  let mealFats = fatsGrams;
  let snackProtein = proteinGrams;
  let snackCarbs = carbsGrams;
  let snackFats = fatsGrams;

  if (userInfo.snacks_per_day === 0) {
    mealProtein = Math.floor(mealProtein / userInfo.meals_per_day);
    mealCarbs = Math.floor(mealCarbs / userInfo.meals_per_day);
    mealFats = Math.floor(mealFats / userInfo.meals_per_day);
  } else {
    snackProtein = Math.floor(mealProtein / 8);
    mealProtein = Math.floor(snackProtein * 2);
    snackCarbs = Math.floor(mealCarbs / 8);
    mealCarbs = Math.floor(snackCarbs * 2);
    snackFats = Math.floor(mealFats / 8);
    mealFats = Math.floor(snackFats * 2);
  }
  return {
    snackProtein,
    snackFats,
    snackCarbs,
    mealProtein,
    mealCarbs,
    mealFats,
  };
};
