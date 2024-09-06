import {users} from "./users.js";
import {findUsersWithVideoGameInterest , findUsersInGermany , 
    findUsersWithMasterDegree, groupUsersByProgrammingLanguage}  from "./solution.js"

findUsersWithVideoGameInterest(users);

findUsersInGermany(users);

findUsersWithMasterDegree(users); 

groupUsersByProgrammingLanguage(users);