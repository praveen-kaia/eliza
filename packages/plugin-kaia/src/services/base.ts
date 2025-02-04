export abstract class BaseService {
    protected config: any;
    
    constructor(config) {
        this.config = config;
    }
}