<template>
    <td>
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" @change="updateStatus()" v-model="status">
            <label class="form-check-label" for="flexSwitchCheckDefault">
                <span v-show="status" class="badge badge-success badge-sm">Active</span>
                <span v-show="!status" class="badge badge-danger badge-sm">Inactive</span>
            </label>
        </div>
    </td>
</template>

<script>
import Form from '@/utilities/Form'
export default {

    props: {
        initialStatus: {
            type: String,
            required: true
        },

        url: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            status: false,
            form: new Form({
                status: ''
            })
        }
    },

    methods: {

        setStatus(){
            if(this.initialStatus == 'active'){
                this.status = true
            }
        },

        updateStatus(){
            this.form.reset()
            if(this.status){
                this.form.status = "active"
            } else {
                this.form.status = "inactive"
            }
            console.log(this.form.status)
            this.submitChanges()
        },

        async submitChanges(){
            await this.form.post(this.url)
            this.form.reset()
        }
    },
    
    mounted() {
        this.setStatus()
    },

}
</script>