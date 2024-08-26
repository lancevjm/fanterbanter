export default class CustomerService {
    getCustomersSmall() {
        return fetch('/api/customer')
            .then((res) => res.json())
            .then((d) => d.data);
    }

    getCustomersMedium() {
        return fetch('demo/data/customers-medium.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }

    getCustomersLarge() {
        return axios.get('/api/customer');
    }

    getCustomersXLarge() {
        return fetch('demo/data/customers-xlarge.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }

    getCustomers(params) {
        const queryParams = Object.keys(params)
            .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&');
        return fetch('https://www.primefaces.org//demo/data/customers?' + queryParams).then((res) => res.json());
    }
}
