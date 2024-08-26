export default {
    data(){
        return{
            deleteResource: {}
        }
    },

    methods: {
        editResource(id){
            this.form.delete(this.deleteUrl+"/"+id)

            this.deleteResource = this.form.getData()
        }
    },
}