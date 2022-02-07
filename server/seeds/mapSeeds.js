import chance from 'chance';
import mongoose from 'mongoose';

const faker = chance.Chance();

// Generate maps and return a array of maps in json format
function generateMaps(mapIds, userArr, pointArr) {
  const maps = [];
  const randomPointId = () => Math.floor(Math.random() * pointArr.length);

  for (let i = 0; i < mapIds.length; i += 1) {
    const randomUserId = Math.floor(Math.random() * userArr.length);

    const map = {
      _id: mapIds[i],
      owner: mongoose.Types.ObjectId(userArr[randomUserId]),
      title: faker.sentence(),
      description: faker.paragraph({ sentence: 2 }),
      image_url: 'https://picsum.photos/200/300',
      points: [{ _id: mongoose.Types.ObjectId(pointArr[randomPointId()]) },
        { _id: mongoose.Types.ObjectId(pointArr[randomPointId()]) },
        { _id: mongoose.Types.ObjectId(pointArr[randomPointId()]) }],

    };
    maps.push(map);
  }
  return maps;
}

function getMapIds() {
  const idArray = [];
  for (let i = 0; i < 100; i += 1) {
    idArray.push(new mongoose.Types.ObjectId());
  }
  return idArray;
}

// Export function to use in seeds.js
export {
  generateMaps,
  getMapIds,
};
