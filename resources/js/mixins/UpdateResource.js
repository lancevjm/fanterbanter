export default {

    methods: {
        async updateResource(){
            await this.form.patch(this.updateUrl+"/"+this.id)
        }
    },
}