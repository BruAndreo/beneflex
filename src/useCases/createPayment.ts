import MMCRepository from "../domain/MMCRepository";
import MMCNotAllowed from "../exceptions/mmcNotAllowed";
import { IntentTransaction } from "../server/http/controllers/payment";

export default class CreatePayment {

    private mmcRepository: MMCRepository;

    constructor(mmcRepository: MMCRepository) {
        this.mmcRepository = mmcRepository;
    }

    public async pay(transactionIntent: IntentTransaction): Promise<boolean> {
        const mmcAllowed = await this.mmcRepository.checkIsAllowed(transactionIntent.mmc);
        if (!mmcAllowed) {
            throw new MMCNotAllowed("Transaction not allowed");
        }

        return true;
    }

}
