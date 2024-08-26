<template>
    <!-- Accounts table -->
    <div class="container-fluid py-4">
        <div class="row my-4">
            <div class="col-12">
                <div class="card">
                    <div class="table-responsive">
                        <table class="table align-items-center mb-0">
                            <thead>
                                <tr>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Account</th>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Current</th>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">30 Days</th>
                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">60 Days</th>
                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">90 Days</th>
                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Balance</th>
                                    <!-- <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Edit</th> -->
                                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">View</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="customer in items" :key="customer.id">
                                    <td>
                                        <div class="d-flex px-2 py-1">
                                            <div class="d-flex flex-column justify-content-center">
                                                <h6 class="mb-0 text-sm">{{ customer.user.name }} {{ customer.user.surname }}</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="text-sm text-secondary mb-0">{{customer.account.account_number}}</p>
                                    </td>
                                    <td>
                                        <p class="text-sm text-secondary mb-0">{{customer.account.current}}</p>
                                    </td>
                                    <td>
                                        <span class="badge badge-dot me-4">
                                            <i class="bg-info" v-show="!arrears(customer.account.day_30)"></i>
                                            <i class="bg-danger" v-show="arrears(customer.account.day_30)"></i>
                                            <span class="text-dark">{{customer.account.day_30}}</span>
                                        </span>
                                    </td>
                                    <td class="align-middle text-center text-sm">
                                        <span class="badge badge-dot me-4">
                                            <i class="bg-info" v-show="!arrears(customer.account.day_60)"></i>
                                            <i class="bg-danger" v-show="arrears(customer.account.day_60)"></i>
                                            <span class="text-dark">{{customer.account.day_60}}</span>
                                        </span>
                                    </td>
                                    <td class="align-middle text-center text-sm">
                                        <span class="badge badge-dot me-4">
                                            <i class="bg-info" v-show="!arrears(customer.account.day_90)"></i>
                                            <i class="bg-danger" v-show="arrears(customer.account.day_90)"></i>
                                            <span class="text-dark">{{customer.account.day_90}}</span>
                                        </span>
                                    </td>
                                    <td class="align-middle text-center text-sm">
                                        <span class="badge badge-dot me-4">
                                            <i class="bg-info" v-show="!checkBalance(customer.account.balance, customer.account.current)"></i>
                                            <i class="bg-danger" v-show="checkBalance(customer.account.balance, customer.account.current)"></i>
                                            <span class="text-dark">{{customer.account.balance}}</span>
                                        </span>
                                    </td>
                                    <!-- <td class="align-middle text-center">
                                        <span class="text-secondary text-sm"><button class="btn bg-gradient-primary" @click.prevent="editUser(customer.user.id)">Edit</button></span>
                                    </td> -->
                                    <td class="align-middle text-center">
                                        <button class="btn bg-gradient-success" @click.prevent="view(customer.account.id)">View</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <Paginator :dataSet="dataSet" @updated="fetch" />
    </div>
</template>

<script>
import Paginator from '../Paginator.vue'
import Pagination from '../../mixins/Pagination'
export default {
    props:{

        url: {
            type: String,
            required: true,
        }
    },

    components:{
        Paginator,
    },

    mixins: [Pagination],

    methods: {
        arrears(amount){
            return amount > 0
        },

        checkBalance(balance, current){
            // let bool = balance >= current
            // console.log("Balance " + balance + " is more than " + current + " : " + bool)
            return parseFloat(balance) > parseFloat(current)
        },

        view(id){
            this.$router.push('/reseller/view/'+id)
        }
    },
}
</script>