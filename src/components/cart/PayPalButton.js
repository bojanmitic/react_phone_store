import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
export default class PayPalButton extends React.Component {
    render() {
        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
                    console.log("The payment was succeeded!", payment);
                    this.props.clearCart();
                    this.props.history.push('/');
        }
 
        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
        }
 
        const onError = (err) => {
            console.log("Error!", err);
        }
 
        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
 
        const client = {
            sandbox: 'AWeRRYnc_i8_4nLgIpMfUe7PN19JbhptwBBgfHWOdW20PXj9KcwQP-XiDXG0p9iPcPpOC3mNHzHgggZt',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        return (
            <PaypalExpressBtn 
                env={env} 
                client={client} 
                currency={currency} 
                total={this.props.total} 
                onError={onError} 
                onSuccess={onSuccess} 
                onCancel={onCancel} />
        );
    }
}