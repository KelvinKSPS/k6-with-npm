import http from 'k6/http';

const { setHeader } = require('../helpers/headers')

export default class ServiceOne {

    constructor() {
        // TO-DO: Add environments support
        this.baseUrl = 'https://www.google.com';
    }

    myAwesomeRequest(authorization, queryParams = "", body = {}) {
        let path = `${this.baseUrl}`;
        
        //Exemplo com path
        // let path = `${this.baseUrl}/pathExample?${queryParams}`;

        // Exemplo com Headers
        // let headers = setHeader(authorization);
        // let response = http.get(path, { headers });
        let response = http.get(path);

        // Exemplo com outras chamadas
        // let response =   http.post(path, body, { headers });
        // let response =   http.put(path, body, { headers });
        // let response =   http.delete(path, body, { headers });
        return response;
    }

}