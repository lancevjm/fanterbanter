export default {
    data(){
        return{
            newResource: {}
        }
    },

    methods: {
        async createResource(){
            await this.form.post(this.newUrl)

            this.newResource = this.form.getData()

            this.form.reset()

            this.update()
        },
    },
}