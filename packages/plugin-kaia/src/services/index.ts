import { AccountService } from "./account";
import { TransactionService } from "./transaction";
import { KaiaInfoService } from "./kaiaInfo";
import { Config } from "../types/account";
import { API_DEFAULTS } from "../constants";
export class KaiaScanService {
    private config: Config;
    private accountService: AccountService ;
    private transactionService: TransactionService;
    private kaiaInfoService: KaiaInfoService;

    constructor(config) {
        let network = Object.keys(API_DEFAULTS.BASE_URL).includes(String(config.network)) ? config.network : "kairos";
        this.config = {
            apiKey: config.apiKey,
            baseUrl: API_DEFAULTS.BASE_URL[network]
        };

        this.accountService = new AccountService(this.config);
        this.transactionService = new TransactionService(this.config);
        this.kaiaInfoService = new KaiaInfoService(this.config);
    }

    async getCurrentBalance(accountAddress: string) {
        return this.accountService.getCurrentBalance(accountAddress);
    }

    async getLatestBlock() {
        return this.transactionService.getLatestBlock();
    }

    async getBlock(blockNumber: string) {
        return this.transactionService.getBlock(blockNumber);
    }

    async getTransactionsByBlockNumber(blockNumber: string) {
        return this.transactionService.getTransactionsByBlockNumber(blockNumber);
    }

    async getTransactionsByAccount(blockNumber: string) {
        return this.transactionService.getTransactionsByAccount(blockNumber);
    }
    
    async getNFTBalance(accountAddress: string) {
        return this.accountService.getNFTBalance(accountAddress);
    }

    async getFTBalanceDetails(accountAddress: string) {
        return this.accountService.getFTBalanceDetails(accountAddress);
    }

    async getAccountOverview(accountAddress: string) {
        return this.accountService.getAccountOverview(accountAddress);
    }

    async getKaiaInfo() {
        return this.kaiaInfoService.getKaiaInfo();
    }
}