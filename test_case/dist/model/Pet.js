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

import ApiClient from '../ApiClient';

/**
 * The Pet model module.
 * @module model/Pet
 * @version 1.0.0
 */
class Pet {
  /**
   * Constructs a new <code>Pet</code>.
   * @alias module:model/Pet
   * @param id {Number} 
   * @param name {String} 
   */
  constructor(id, name) {
    Pet.initialize(this, id, name);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, id, name) {
    obj['id'] = id;
    obj['name'] = name;
  }

  /**
   * Constructs a <code>Pet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Pet} obj Optional instance to populate.
   * @return {module:model/Pet} The populated <code>Pet</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Pet();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>Pet</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Pet</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of Pet.RequiredProperties) {
      if (!data[property]) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // ensure the json data is a string
    if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
      throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
    }
    // ensure the json data is a string
    if (data['tag'] && !(typeof data['tag'] === 'string' || data['tag'] instanceof String)) {
      throw new Error("Expected the field `tag` to be a primitive type in the JSON string but got " + data['tag']);
    }
    return true;
  }
}
Pet.RequiredProperties = ["id", "name"];

/**
 * @member {Number} id
 */
Pet.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Pet.prototype['name'] = undefined;

/**
 * @member {String} tag
 */
Pet.prototype['tag'] = undefined;
export default Pet;