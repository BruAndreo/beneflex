
import {Request, Response} from "express"
import { number, object, string, date, InferType, ValidationError } from "yup";

export default class PaymentController {

    public async payTransaction(req: Request, res: Response): Promise<Response> {
        try {
            transactionScheme.validateSync(req.body);
            return res.status(200).json({status: "paid"});
        } catch (e: any) {
            if (e instanceof ValidationError) {
                return res.status(400).json({message: "Transaction is not valid"});
            }

            return res.status(500).json({message: "internal server error"});
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
