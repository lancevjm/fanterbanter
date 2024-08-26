class Yoco {
    /**
     * Create a new Yoco instance.
     *
     */
    constructor() {
        //add the script to the head of our html page
        // let headScript = document.createElement('script')
        // headScript.setAttribute('src', 'https://js.yoco.com/sdk/v1/yoco-sdk-web.js')
        // document.head.append(headScript)

        this.inline = {}

        this.sdk = new YocoSDK({
            publicKey: 'pk_live_89c0a516M5zbLmL992a4'
        })
    }

    /**
     * Create a new Form instance.
     *
     * @param {object} data
     */
    init(data){

        this.layout = data.layout,
        this.amountInCents = data.amountInCents,
        this.currency = data.currency

        this.inline = this.sdk.inline({
            layout: this.layout,
            amountInCents: this.amountInCents,
            currency: this.currency
        })

        this.inline.mount('#card-frame')
    }
}

export default Yoco