import Errors from './Error'

class Form {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     */
    constructor(data) {
        this.originalData = data;

        for (let field in data) {
            this[field] = data[field];
        }

        this.inputData = new FormData();
        this.errors = new Errors();
        this.message = {};
    }

    /**
     * Fetch all relevant data for the form.
     */
    data() {
        // let data = Form data to process file uploads;
        

        for (let property in this.originalData) {
            if(this[property] != ''){
                this.inputData.append([property], this[property]);
            }
        }

        //return data;
    }


    /**
     * Reset the form fields.
     */
    reset() {
        for (let field in this.originalData) {
            this[field] = '';
        }

        this.errors.clear();
    }

    /**
     * Send a GET request to the given URL.
     * .
     * @param {string} url
     */
    get(url) {
        return this.submit('get', url);
    }


    /**
     * Send a POST request to the given URL.
     * .
     * @param {string} url
     */
    post(url) {
        return this.submit('post', url);
    }


    /**
     * Send a PUT request to the given URL.
     * .
     * @param {string} url
     */
    put(url) {
        //for browser compatibility, spoof the form action
        this.inputData.append('_method', 'PUT');
        return this.submit('post', url);
    }


    /**
     * Send a PATCH request to the given URL.
     * .
     * @param {string} url
     */
    patch(url) {
        //for browser compatibility, spoof the form action
        this.inputData.append('_method', 'PATCH');
        return this.submit('post', url);
    }


    /**
     * Send a DELETE request to the given URL.
     * .
     * @param {string} url
     */
    delete(url) {
        return this.submit('delete', url);
    }


    /**
     * Submit the form.
     *
     * @param {string} requestType
     * @param {string} url
     */
    submit(requestType, url) {
        //initiate the form data
        this.data()

        //process http request
        return new Promise((resolve, reject) => {
            axios[requestType](url, this.inputData)
                .then(response => {
                    this.onSuccess(response.data);

                    resolve(response.data);
                })
                .catch(error => {
                    this.onFail(error.response.data.errors);

                    reject(error.response.data);
                });
        });
    }


    /**
     * Handle a successful form submission.
     *
     * @param {object} data
     */
    onSuccess(data) {

        this.message = data

    }


    /**
     * Handle a failed form submission.
     *
     * @param {object} errors
     */
    onFail(errors) {
        this.errors.record(errors);
    }

    /**
     * Return the data
     * 
     * @string
     */
    getData(){
        return this.message
    }
}

export default Form