import MMCRepository from "../../../src/domain/MMCRepository";
import MMCNotAllowed from "../../../src/exceptions/mmcNotAllowed";
import { IntentTransaction } from "../../../src/server/http/controllers/payment";
import CreatePayment from "../../../src/useCases/createPayment";

describe("UseCase CreatePayment", () => {
    const mmcRepositoryMock = new class implements MMCRepository {
        checkIsAllowed(mmc: string): Promise<Boolean> {
            return new Promise((resolve, reject) => resolve(mmc === "123"));
        }
    }
    
    const useCase = new CreatePayment(mmcRepositoryMock);

    test("Should create payment when MMC exists", async () => {
        const intentTransaction: IntentTransaction = {
            seller: "test",
            mmc: "123",
            account: "123",
            amount: 12.3,
            created: new Date()
        }
        
        const result = await useCase.pay(intentTransaction);

        expect(result).toBeTruthy();
    });

    test("Should throw an error when MMC is not allowed", async () => {
        const intentTransaction: IntentTransaction = {
            seller: "test",
            mmc: "123-invalid",
            account: "123",
            amount: 12.3,
            created: new Date()
        }

        await expect(useCase.pay(intentTransaction)).rejects.toThrow(MMCNotAllowed);
    });
});
