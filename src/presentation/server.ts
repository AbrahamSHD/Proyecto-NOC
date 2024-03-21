
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple"
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource"
import { MongoLogDataSource } from "../infrastructure/datasources/mongo-log.datasource"
import { PostgresLogDatasource } from "../infrastructure/datasources/postgres-log.datasource"
import { LogRepositoryImplementation } from "../infrastructure/repositories/log-impl.repository"
import { CronService } from "./cron/cron-service"
import { EmailService } from "./email/email-service"

const fsLogRepository = new LogRepositoryImplementation(
    new FileSystemDataSource(),
)

const mongoLogRepository = new LogRepositoryImplementation(
    new MongoLogDataSource(),
)

const postgresLogRepository = new LogRepositoryImplementation(
    new PostgresLogDatasource(),
)

const emailService = new EmailService()

export class Server{

    public static async start(){

        
        console.log('Server started...')

        // Todo: Mandar Email

        // new SendEmailLogs(
        //     emailService,
        //     fileSystemLogRepository,
        // ).execute(
        //     [ 'abraham82514456@gmail.com', 'abraham7606742@gmail.com' ]
        // )
        // emailService.sendEmailWithFileSystemLogs(
        //     [ 'abraham82514456@gmail.com', 'abraham7606742@gmail.com' ]
        // )

        // console.log( envs.MAILER_SECRET_KEY, envs.MAILER_EMAIL )

        // const logs = await logRepository.getLogs( LogSeverityLevel.low )

        // console.log( logs )

        // CronService.createJob( 
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'https://www.google.com'

        //         new CheckServiceMultiple(
        //             [fsLogRepository, mongoLogRepository, postgresLogRepository],
        //             () => console.log(`${url} is ok`),
        //             ( error ) => console.log( error )
        //         ).execute( url )
        //     }
        // )
        
    }

}

