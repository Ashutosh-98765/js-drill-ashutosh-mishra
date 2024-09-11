import {users} from "./users.js"

// Q1 Find all users who are interested in playing video games.

const findUsersWithVideoGameInterest = (users) => {
const usersWithVideoGameInterest = [];

  for (const user in users) {
    const userData = users[user];

    // Alternative check using indexOf to find "Video Games"
    if (userData.interests && userData.interests.filter(interest => interest.indexOf("Video Games") !== -1).length > 0) {
      usersWithVideoGameInterest.push(user);
    }
  }
  console.log(usersWithVideoGameInterest);

  return usersWithVideoGameInterest;
};

export {findUsersWithVideoGameInterest};


// Q2 Find all users staying in Germany.

const findUsersInGermany = (users) => {
    const usersInGermany = [];
  
    // Iterate over each user in the 'users' object
    for (let user in users) {
      // Check if the nationality is 'Germany'
      if (users[user].nationality === "Germany") {
        usersInGermany.push(user);
      }
    }
    console.log(usersInGermany);
  
    return usersInGermany;
}

export {findUsersInGermany};


// Q3 Find all users with masters Degree.

const findUsersWithMasterDegree = (users) => {
    const usersWithMasterDegree  = [];
  
    // Iterate over each user in the 'users' object
    for (let user in users) {
      // Check if the nationality is 'Germany'
      if (users[user].qualification === "Masters") {
        usersWithMasterDegree .push(user);
      }
    }
    console.log(usersWithMasterDegree );
  
    return usersWithMasterDegree ;
}

export {findUsersWithMasterDegree };


// Q4 Group users based on their Programming language mentioned in their designation.

const groupUsersByProgrammingLanguage = (users) => {
    const groupedUsers = {
      Golang: [],
      Javascript: [],
      Python: [],
    };
  
    for (const user in users) {
      const designation = users[user].desgination.toLowerCase();
  
      // Check for Golang in designation
      if (designation.includes('golang')) {
        groupedUsers.Golang.push(user);
      }
      // Check for Javascript in designation
      else if (designation.includes('javascript')) {
        groupedUsers.Javascript.push(user);
      }
      // Check for Python in designation
      else if (designation.includes('python')) {
        groupedUsers.Python.push(user);
      }
    }

    console.log(groupedUsers);
  
    return groupedUsers;
  };

  export {groupUsersByProgrammingLanguage};
