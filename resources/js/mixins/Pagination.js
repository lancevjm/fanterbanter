export default {
    data(){
        return{
            items: {},
            dataSet: false,
            hasItems: false
        }
    },

    methods: {

        nextUrl(page){
            return this.url + '?page=' + page
        },
    
        fetch(page){
            if(! page){
                let query = location.search.match(/page=(\d+)/)
    
                page = query ? query[1] : 1
            }
            return new Promise((resolve, reject) => {
                
                axios.get(this.nextUrl(page))
                .then(response => {
                    this.refresh(response.data)
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error.response.data);
                });
            });
        },
    
        refresh(data){
            this.dataSet = data
            this.items = data.data
            this.hasItems = data.total > 0
        },
    },

    mounted(){
        this.fetch()
    }
}