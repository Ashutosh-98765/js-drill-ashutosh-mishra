import { arrayOfObjects } from "./persons.js";
import {emailOfPerson } from "./solution.js"
import { getNameAndAge } from "./solution.js"
import { personWhoIsStudent} from "./solution.js"
import { getIndexNo3} from "./solution.js";
import { allPersonAge } from "./solution.js";
import { firstHobby } from "./solution.js";
import { nameEmailOfAge25 } from "./solution.js";
import { cityAndCountry } from "./solution.js";

emailOfPerson(arrayOfObjects);
emailOfPerson();
emailOfPerson(null);
emailOfPerson(undefined)


getNameAndAge(arrayOfObjects,30);
getNameAndAge();
getNameAndAge(arrayOfObjects,45);
getNameAndAge(arrayOfObjects,35);

personWhoIsStudent(arrayOfObjects);

getIndexNo3(arrayOfObjects,3 );

allPersonAge(arrayOfObjects);

firstHobby(arrayOfObjects);

nameEmailOfAge25(arrayOfObjects);

cityAndCountry(arrayOfObjects);
