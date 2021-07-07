/***
 *  Class de fetch
 * 
 *  @param {String} baseUrl value  baseUrl
 * 
 */

class Fetch {
    #baseurl;
    constructor(baseUrl) {
        this.#baseurl = baseUrl;
    }



/***
 *  Private method of call
 *  @param {String} ressourceUrl value  ressourceUrl
 *  @param {Function} callback value  callback
 *  @param {String} method value  method
 *  @param {String} bodyStr value  bodyStr
 *  @param {Function} unsuccessCallback value  unsuccessCallback
 *  @returns  {Promise} promise of fetch
 * 
 */

    #_request = (ressourceUrl, callback, method = 'GET', bodyStr, unsuccessCallback) => {
        // if(undefined===method)method='GET';
       return  fetch(`${this.#baseurl}${ressourceUrl}`, {
            method: method,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: (undefined !== bodyStr && typeof bodyStr == 'string' ? bodyStr : undefined)
        })
            .then((resp) => resp.json(), (resp) => {
                if (undefined !== unsuccessCallback) { unsuccessCallback(resp) } // si rien
            })
            .then((returnedValue) => {
                if (undefined !== callback) {
                    callback(returnedValue);
                }
                return returnedValue;
            }
            )
    }

/***
 *  Private method of post
 *  @param {String} ressourceUrl value  ressourceUrl
 *  @param {Function} callback value  callback
 *  @param {Object} Object value  Object
 *  @param {Function} unsuccessCallback value  unsuccessCallback
 *  @returns  {Promise} promise of fetch
 * 
 */
    post(ressourceUrl, callback, object, unsuccessCallback) {
        this.#_request(ressourceUrl, callback, 'POST', JSON.stringify(object), unsuccessCallback)
    }

/***
 *  Private method of put
 *  @param {String} ressourceUrl value  ressourceUrl
 *  @param {Function} callback value  callback
 *  @param {Object} Object value  Object
 *  @param {Function} unsuccessCallback value  unsuccessCallback
 *  @returns  {Promise} promise of fetch
 * 
 */
    put(ressourceUrl, callback, object, unsuccessCallback) {
        this.#_request(ressourceUrl, callback, 'PUT', JSON.stringify(object), unsuccessCallback)
    }


    /***
 *  Private method of get
 *  @param {String} ressourceUrl value  ressourceUrl
 *  @param {Function} callback value  callback
 *  @param {Object} Object value  Object
 *  @param {Function} unsuccessCallback value  unsuccessCallback
 *  @returns  {Promise} promise of fetch
 * 
 */
    get(ressourceUrl, callback, object, unsuccessCallback) {
        this.#_request(ressourceUrl, callback, 'GET', undefined, unsuccessCallback)
    }

    /***
 *  Private method of del
 *  @param {String} ressourceUrl value  ressourceUrl
 *  @param {Function} callback value  callback
 *  @param {Object} Object value  Object
 *  @param {Function} unsuccessCallback value  unsuccessCallback
 *  @returns  {Promise} promise of fetch
 * 
 */
    del(ressourceUrl, callback, object, unsuccessCallback) {
        this.#_request(ressourceUrl, callback, 'DELETE', undefined, unsuccessCallback)
    }


   // 
    //patch(ressourceUrl, callback, object, unsuccessCallback) {
     //   this.#_request(ressourceUrl, callback, 'PATCH', JSON.stringify(object), unsuccessCallback)
   // }








}