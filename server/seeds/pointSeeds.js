import chance from 'chance';
import mongoose from 'mongoose';

const faker = chance.Chance();

// Generate points and return a array of points in json format
function generatePoints(pointsArr, mapIds) {
  const points = [];

  for (let i = 0; i < pointsArr.length; i += 1) {
    // Get random mapIds
    const random = Math.floor(Math.random() * mapIds.length);
    const coords = faker.coordinates().split(',');
    const point = {
      _id: pointsArr[i],
      name: faker.word(),
      description: faker.paragraph({ sentences: 2 }),
      image_url: 'https://picsum.photos/200/300',
      address: faker.address(),
      lon: Number(coords[1].trim()),
      lat: Number(coords[0].trim()),
      map: mongoose.Types.ObjectId(mapIds[random]),
    };
    points.push(point);
  }

  return points;
}

// Generate array of pointIds
function getPointIds() {
  const idArray = [];
  for (let i = 0; i < 100; i += 1) {
    idArray.push(new mongoose.Types.ObjectId());
  }
  return idArray;
}

// Export both functions to use in seeds.js
export {
  generatePoints,
  getPointIds,
};
