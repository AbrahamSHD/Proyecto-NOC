import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entiti";
import { LogRepository } from "../../domain/repository/log.repository";
import { LogDataSource } from '../../domain/datasources/log.datasource';

export class LogRepositoryImplementation implements LogRepository {

    constructor(
        private readonly logDataSource: LogDataSource,
    ){}

    async saveLog(log: LogEntity): Promise<void> {
        return this.logDataSource.saveLog( log )
    }
    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        return this.logDataSource.getLogs( severityLevel )
    }

}
