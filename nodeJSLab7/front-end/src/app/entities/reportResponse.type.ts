import { Record } from '../entities/record.type';

export class ReportResponse {
    constructor(
        public balanceForMonth?: number,
        public balanceForPeriod?: number,
        public recordsForPeriod?: Record[]
    ) {}
}