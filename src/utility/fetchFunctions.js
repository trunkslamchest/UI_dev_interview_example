// SUMMARY:
//    This Immidiately Invoked Function Constructor is designed to abstract/boilerplate basic JS GET/POST requests, 
//    specifically with React & Redux.
//
//    I wrote a 7 part blog series detailing how this file works:
//      - https://levelup.gitconnected.com/function-construction-whats-your-function-5a282b81fc62
//
//  USAGE:
//    - import this file into your component:
//        - import fetchFunctions from <your path to the file>

//    - GET request syntax in your component:
//        fetchFunctions('get', <insert HTTP endpoint to send a request to>)
//        .then(res => { <do whatever you want with the response you get from your GET request> })

//    - POST request syntax in your component:
//        fetchFunctions('post', <insert HTTP endpoint to send a request to>, <insert obj to send with your HTTP request>)
//        .then(res => { <do whatever you want with the response you get from your POST request> })

;(function(env) {

  // Function set to return a Class that contains the method definition invoked by the Class constructor
  var fetchFunctions = function(method, url, obj){ return new fetchFunctions.init(method, url, obj)[method] }

  // Defines the init Class's method definition with the return value of the method's invocation
  fetchFunctions.init = function(method, url, obj){ this[method] = this[method](url, obj) }

  // Defined methods within the Class's Prototype Chain
  fetchFunctions.prototype = {

    // Request responses are returned so that response objects are availble outside of the request's execution context 
    get: function(url) {
      return fetch(url)
      .then(res => res.json())
    },

    post: function(url, obj){
      return fetch(url, {
        method: "POST",
        mode: 'cors',
        headers: {
          "content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(obj)
      })
      .then(res => res.json())
    },

    patch: function(url, obj){
      return fetch(url, {
        method: "PATCH",
        mode: 'cors',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(obj)
      })
      .then(res => res.json())
    },

    delete: function(url) {
      return fetch(url, {
        method: 'DELETE'
      })
    }
  }

  // Redefines the init Class's prototype object with the prototype object containing the requested HTTP response 
  fetchFunctions.init.prototype = fetchFunctions.prototype

  // Binds the requested HTTP response to the global execution context
  // Might be unessesary when working with React, but I haven't bothered testing it.
  env.fetchFunctions = fetchFunctions

  // Exports the object containing the requested HTTP response
  module.exports = fetchFunctions

// Defines the Global Execution Context. Global = VS Code, window = browser.
// Might be unessesary when working with React, but I haven't bothered testing it.
})(typeof window === 'undefined' ? global : window)