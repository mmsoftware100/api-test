var SwaggerPetstore = require('swagger_petstore');


var api = new SwaggerPetstore.PetsApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.createPets(callback);