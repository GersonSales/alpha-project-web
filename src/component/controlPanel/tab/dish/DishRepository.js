import Axios from "axios";


class DishRepository {
  dishUrl = "https://alpha-project-api.herokuapp.com/dish";

  getAllDishes = async () => {
    try {
      return await Axios.get(this.dishUrl);
    } catch (e) {
      return [{name: "NAME"}];
    }
  };

}

const repository = new DishRepository();

export default repository;

