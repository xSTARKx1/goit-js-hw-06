import users from './users.js';

// 1 завдання

const getUserNames = users => {
  const allNames = users.map(function(user) {
    return user.name;
  });

  return allNames;
};

console.log(getUserNames(users));

// 2 завдання

const getUsersWithEyeColor = (users, color) => {
  const findEyeColor = users.filter(function(user) {
    return user.eyeColor === color;
  });

  return findEyeColor;
};

console.log(getUsersWithEyeColor(users, 'blue'));

// 3 завдання

const getUsersWithGender = (users, gender) => {
  const findUserGender = users
    .filter(function(user) {
      if (user.gender === gender) {
        return user;
      }
    })
    .map(function(user) {
      return user.name;
    });

  return findUserGender;
};

console.log(getUsersWithGender(users, 'male'));

// 4 завдання

const getInactiveUsers = users => {
  const inactiveUsers = users.filter(function(user) {
    return !user.isActive;
  });

  return inactiveUsers;
};

console.log(getInactiveUsers(users));

// 5 завдання

const getUserWithEmail = (users, email) => {
  const findingUser = users.find(function(user) {
    return user.email === email;
  });

  return findingUser;
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

// 6 завдання

const getUsersWithAge = (users, min, max) => {
  const rightUserAge = users.filter(function(user) {
    return user.age > min && user.age < max;
  });

  return rightUserAge;
};

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));

// 7 завдання

const calculateTotalBalance = users => {
  const totalBalance = users.reduce(function(money, user) {
    return money + user.balance;
  }, 0);

  return totalBalance;
};

console.log(calculateTotalBalance(users));

// 8 завдання

const getUsersWithFriend = (users, friendName) => {
  const findFriends = users
    .filter(function(user) {
      if (user.friends.includes(friendName)) {
        return user;
      }
    })
    .map(function(user) {
      return user.name;
    });

  return findFriends;
};

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

// 9 завдання

const getNamesSortedByFriendsCount = users => {
  const friendsCounter = [...users]
    .sort(function(prev, next) {
      return prev.friends.length - next.friends.length;
    })
    .map(function(user) {
      return user.name;
    });

  return friendsCounter;
};

console.log(getNamesSortedByFriendsCount(users));

// 10 завдання

const getSortedUniqueSkills = users => {
  const allSkills = users
    .reduce(function(acc, user) {
      acc.push(...user.skills);

      return acc;
    }, [])
    .reduce(function(acc, user) {
      if (!acc.includes(user)) {
        acc.push(user);
      }

      return acc;
    }, [])
    .sort();

  return allSkills;
};

console.log(getSortedUniqueSkills(users));
