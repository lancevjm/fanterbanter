export default {
    data(){
        return{
            resource: {},
            resource1: {},
            resource2: {},
            resource3: {}
        }
    },

    methods: {
        async getResource(){

            await this.getRes()
        },

        getRes(){
            return new Promise((resolve, reject) => {
                axios.get(this.getUrl)
                .then(response => {
                    this.resource = response.data

                    resolve(response.data);
                })
                .catch(error => {

                    reject(error.response.data)
                });
            });
        },

        getResource1(){
            return new Promise((resolve, reject) => {
                axios.get(this.get1Url)
                    .then(response => {
                        this.resource1 = response.data
    
                        resolve(response.data);
                    })
                    .catch(error => {
    
                        reject(error.response.data);
                    });
            });
        },

        getResource2(){
            return new Promise((resolve, reject) => {
                axios.get(this.get2Url)
                    .then(response => {
                        this.resource2 = response.data
    
                        resolve(response.data);
                    })
                    .catch(error => {
    
                        reject(error.response.data);
                    });
            });
        },

        getResource3(){
            return new Promise((resolve, reject) => {
                axios.get(this.get3Url)
                    .then(response => {
                        this.resource3 = response.data
    
                        resolve(response.data);
                    })
                    .catch(error => {
    
                        reject(error.response.data);
                    });
            });
        }
    }
}