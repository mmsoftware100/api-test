# How to test API


## Setup Guide

- [ ] Clone this repo
- [ ] Run this commands

```bash
cd js_generator
npm install
npm test
```


*** yaml file မှာ specification တွေ မှန်အောင် ထည့်ပေးရန် ***

မဟုတ်ရင် Http Client က စပြီး ခေါ်သုံးတဲ့ API တစ်ခုချင်းစီ endpoint နဲ့ data တွေ လိုက်ပြင်နေရ။

### Example Test Code

```js
describe('PetsApi', function () {
    this.timeout(30000);
    describe('createPets', function () {
      let postBody = {
        "id": 0,
        "category": {
          "id": 0,
          "name": "Myanmar"
        },
        "name": "အင်းခွေး",
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 0,
            "name": "tag one"
          }
        ],
        "status": "available"
      };

      it('should call createPets successfully with '+ postBody.name, function (done) {
        instance.createPets(({ error, data, response }) => {
          if (error) throw error;
          // Add assertions to check the response
          expect(response.statusCode).to.equal(200);  // Check the HTTP status code
          expect(JSON.parse(response.text).name).to.equal(postBody.name);
          done();  // Indicate that the test is complete
        }, postBody);
      });
    });
  });
```


```bash
  PetsApi
    createPets
      ✓ should call createPets successfully with အင်းခွေး (2104ms)
```
## ရေးထားတဲ့ API Client ကို ပြင်ရန်။

{ destructuring နဲ့ သွားမယ်။​ }

** လက်ရှိ အလုပ်လုပ်နေတဲ့ API ကို Postman မှာ စမ်းနိုင်ရမယ် **

ဒါမှ Test Code ရေးတဲ့အချိန် အဆင်ပြေ။




Input နဲ့ Output Response တွေကို ပြင်ရန်။

API Call တွေကို စောင့်ရန်။



## Sample API Documentation

https://documenter.getpostman.com/view/6000182/2s9YXfc4Bq


ဒီ (၄) ခု အလုပ် လုပ်/မလုပ် ကို JS နဲ့ ရေးမယ်။

mocha နဲ့။




```bash
openapi-generator-cli generate -i petstore.yaml -o generated_js -g javascript   
openapi-generator-cli generate -i petstorev2.yaml -o js_generator_two -g javascript   
openapi-generator-cli generate -i petstorev2.json -o js_generator_two -g javascript   
```

```bash
msd@MSDs-Mac-mini js_generator % openapi-generator-cli generate -i petstorev2.yaml -o js_generator_two -g javascript
Did set selected version to 7.0.1
[error] The spec file is not found: petstorev2.yaml
[error] Check the path of the OpenAPI spec and try again.
```



[](https://petstore.swagger.io/v1/pets/1)


https://petstore.swagger.io/v1/pets/1

https://petstore.swagger.io/v2/pet/1