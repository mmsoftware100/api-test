/**
 * Swagger Petstore
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import Error from '../model/Error';
import Pet from '../model/Pet';

/**
* Pets service.
* @module api/PetsApi
* @version 1.0.0
*/
export default class PetsApi {
  /**
  * Constructs a new PetsApi. 
  * @alias module:api/PetsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the createPets operation.
   * @callback module:api/PetsApi~createPetsCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a pet
   * @param {module:api/PetsApi~createPetsCallback} callback The callback function, accepting three arguments: error, data, response
   */
  createPets(callback) {
    let postBody = null;
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = [];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = null;
    return this.apiClient.callApi('/pets', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }

  /**
   * Callback function to receive the result of the listPets operation.
   * @callback module:api/PetsApi~listPetsCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/Pet>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * List all pets
   * @param {Object} opts Optional parameters
   * @param {Number} [limit] How many items to return at one time (max 100)
   * @param {module:api/PetsApi~listPetsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/Pet>}
   */
  listPets(opts, callback) {
    opts = opts || {};
    let postBody = null;
    let pathParams = {};
    let queryParams = {
      'limit': opts['limit']
    };
    let headerParams = {};
    let formParams = {};
    let authNames = [];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = [Pet];
    return this.apiClient.callApi('/pets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }

  /**
   * Callback function to receive the result of the showPetById operation.
   * @callback module:api/PetsApi~showPetByIdCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Pet} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Info for a specific pet
   * @param {String} petId The id of the pet to retrieve
   * @param {module:api/PetsApi~showPetByIdCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Pet}
   */
  showPetById(petId, callback) {
    let postBody = null;
    // verify the required parameter 'petId' is set
    if (petId === undefined || petId === null) {
      throw new Error("Missing the required parameter 'petId' when calling showPetById");
    }
    let pathParams = {
      'petId': petId
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = [];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = Pet;
    return this.apiClient.callApi('/pets/{petId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }
}