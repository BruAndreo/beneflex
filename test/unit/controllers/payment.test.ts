import { Request, Response } from "express";
import PaymentController from "../../../src/server/http/controllers/payment";

describe("Payment Controller", () => {
    const controller = new PaymentController();

    const mockRequest = (headers: any = {}, body: any = {}) => {
        return {
            headers: {...headers},
            body: {...body}
        } as Request;
    };

    const mockResponse = () => {
        const res = {} as Response;

        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);

        return res;
    };

    test("Should be paid when transaction is correct", async () => {
        const headers = {};
        const transaction = {
            seller: "Zé lojinha",
            amount: 15.56,
            mmc: "123",
            account: 5894
        };
        
        const response = await controller.payTransaction(mockRequest(headers, transaction), mockResponse());

        expect(response.status).toHaveBeenCalledWith(200);
        expect(response.json).toHaveBeenCalledWith({status: "paid"});
    });

    test("Should fail when transaction data is not valid", async () => {
        const headers = {};
        const transactionNotOk = {
            seller: "Zé lojinha",
            amount: "abc"
        };

        const response = await controller.payTransaction(mockRequest(headers, transactionNotOk), mockResponse());

        expect(response.status).toHaveBeenCalledWith(400);
        expect(response.json).toHaveBeenCalledWith({"message": "Transaction is not ok"});
    });
});
