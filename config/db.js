const mongoose = require('mongoose');

async function dbConnection() {
  await mongoose.connect('mongodb+srv://fatimakarout1717:KvkK4RMvgOyldPLn@cluster0.zitfoyi.mongodb.net/?retryWrites=true&w=majority');
}

// async function mainUsingTryCatch() {
//   try {
//     await mongoose.connect(MONGODB_URL);
//     console.log('success');
//   } catch (error) {
//     console.log(error);
//   }
// }

// mainUsingTryCatch();

module.exports = dbConnection;
