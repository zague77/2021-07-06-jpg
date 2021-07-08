export const BASE_SRV_URL='http://localhost:5629'
export const RESSOURCE=Object.freeze({ products:'/products', categories:'/categories'})

export default class FetchCrud {
    #baseurl;
    constructor(baseUrl) {
        this.#baseurl = baseUrl;
    }
    /**
     * private function to execute request
     * @param {string} ressourceUrl uri of ressource in server  
     * @param {Function} callback 
     * @param {string?} method HTTP method
     * @param {string?} bodyStr json str of value to send
     * @param {Function?} unsuccessCallback 
     * @returns {Promise} promise of fetch
     */
    #_request = (ressourceUrl, callback, method = 'GET', bodyStr, unsuccessCallback) => {
        // definition de val. par def. en es5 -->if(undefined===method)method='GET';
        return fetch(`${this.#baseurl}${ressourceUrl}`, {
            method: method,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: (undefined !== bodyStr && typeof bodyStr == 'string' ? bodyStr : undefined)
        })
            .then((resp) => resp.json(), (resp) => {
                if (undefined !== unsuccessCallback) { unsuccessCallback(resp) }
            })
            .then((returnedValue) => {
                if (undefined !== callback) {
                    callback(returnedValue);
                }
                return returnedValue;
            })
    }
    /**
     * post a new ressource
     * @param {string} ressourceUrl uri of ressource in server  
     * @param {Function} callback 
     * @param {object} object 
     * @param {Function?} unsuccessCallback 
     * @returns {Promise}
     */
    post(ressourceUrl, callback, object, unsuccessCallback) {
        return this.#_request(ressourceUrl, callback, 'POST', JSON.stringify(object), unsuccessCallback)
    }
    /**
     * update a ressource
     * @param {string} ressourceUrl uri of ressource in server  
     * @param {Function} callback 
     * @param {object} object 
     * @param {Function?} unsuccessCallback 
     * @returns {Promise}
     */
    put(ressourceUrl, callback, object, unsuccessCallback) {
        return this.#_request(ressourceUrl, callback, 'PUT', JSON.stringify(object), unsuccessCallback)
    }
    /**
     * merge new ressource with old ressource values
     * @param {string} ressourceUrl uri of ressource in server  
     * @param {Function} callback 
     * @param {object} object 
     * @param {Function?} unsuccessCallback 
     * @returns {Promise}
     */
    patch(ressourceUrl, callback, object, unsuccessCallback) {
        return this.#_request(ressourceUrl, callback, 'PATCH', JSON.stringify(object), unsuccessCallback)
    }
    /**
     * get a ressource
     * @param {string} ressourceUrl uri of ressource in server  
     * @param {Function} callback 
     * @param {Function} unsuccessCallback 
     * @returns {Promise}
     */
    get(ressourceUrl, callback, unsuccessCallback) {
        return this.#_request(ressourceUrl, callback, undefined, undefined, unsuccessCallback)
    }
     /**
     * delete a ressource
     * @param {string} ressourceUrl uri of ressource in server  
     * @param {Function} callback 
     * @param {Function?} unsuccessCallback 
     * @returns {Promise}
     */
    del(ressourceUrl, callback, unsuccessCallback) {
        return this.#_request(ressourceUrl, callback, 'DELETE', undefined, unsuccessCallback)
    }
}