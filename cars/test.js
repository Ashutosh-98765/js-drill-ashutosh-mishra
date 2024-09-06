import {inventory} from "./cars.js";
import {findCarById , findLastCar , sortCarModels, getCarYears, getCarsOlderThan2000 , getBMWAndAudiCars} from "./solution.js";

findCarById(inventory , 35);
findCarById(inventory , "40");
findCarById();
findCarById(inventory , 33);

findLastCar(inventory);
findLastCar();

sortCarModels(inventory);

getCarYears(inventory);

getCarsOlderThan2000(inventory);

getBMWAndAudiCars(inventory);

