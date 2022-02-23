import chance from 'chance';
import mongoose from 'mongoose';

const faker = chance.Chance();

// Generate users and return an array of users in json format.
function generateUsers(usersArr) {
  const userSeeds = [];

  for (let i = 0; i < usersArr.length; i += 1) {
    const user = {
      _id: usersArr[i],
      username: faker.name(),
      email: faker.email({ domain: 'example.com' }),
      password: 'password',
    };
    userSeeds.push(user);
  }
  return userSeeds;
}

// Generate array of mongoose userIds
function getUserIds() {
  const idArray = [];
  for (let i = 0; i < 2; i += 1) {
    idArray.push(new mongoose.Types.ObjectId());
  }
  return idArray;
}

// Export both functions to use in seeds.js
export {
  generateUsers,
  getUserIds,
};
