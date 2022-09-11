/* eslint-disable class-methods-use-this */
import httpReq from "./http.service";

class CheckoutServices {
    async checkoutSession(payload: any) {
        const { data } = await httpReq.post("/api/create-checkout-session", payload);
        return data;
    }
}

const checkoutServices = new CheckoutServices();

export default checkoutServices;
