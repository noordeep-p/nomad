import chance from 'chance';
import mongoose from 'mongoose';

const faker = chance.Chance();

// Generate maps and return a array of maps in json format
function generateMaps(mapIds, userArr) {
  const maps = [];

  for (let i = 0; i < mapIds.length; i += 1) {
    const randomUserId = Math.floor(Math.random() * userArr.length);

    const map = {
      _id: mapIds[i],
      owner: mongoose.Types.ObjectId(userArr[randomUserId]),
      title: faker.sentence(),
      description: faker.paragraph({ sentence: 2 }),
    };
    maps.push(map);
  }
  return maps;
}

function getMapIds() {
  const idArray = [];
  for (let i = 0; i < 5; i += 1) {
    idArray.push(new mongoose.Types.ObjectId());
  }
  return idArray;
}

// Export function to use in seeds.js
export {
  generateMaps,
  getMapIds,
};
