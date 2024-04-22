
import {Request, Response} from "express"
import { number, object, string, date, InferType } from "yup";
import TransactionNotOk from "../../../exceptions/transactionNotOk";

export default class PaymentController {

    public async payTransaction(req: Request, res: Response): Promise<Response> {
        try {
            const IntentTransaction = await this.createIntentTransaction(req.body);
            return res.status(200).json({status: "paid"});
        } catch (e: any) {
            if (e instanceof TransactionNotOk) {
                return res.status(e.statusCode).json({message: "Transaction is not ok"});
            }

            return res.status(500).json({message: "internal server error"});
        }
    }

    private async createIntentTransaction(obj: any): Promise<IntentTransaction> {
        try {
            return await transactionScheme.validate(obj);
        } catch (e: any) {
            throw new TransactionNotOk(e.message);
        }
    }
}

const transactionScheme = object({
    seller: string().required(),
    mmc: string().required(),
    account: string().required(),
    amount: number().required().positive(),
    created: date().default(() => new Date())
});

export type IntentTransaction = InferType<typeof transactionScheme>;

