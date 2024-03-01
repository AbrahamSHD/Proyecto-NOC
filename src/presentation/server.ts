
import { CheckService } from "../domain/use-cases/checks/check-service"
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource"
import { LogRepositoryImplementation } from "../infrastructure/repositories/log-impl.repository"
import { CronService } from "./cron/cron-service"

const fileSystemLogRepository = new LogRepositoryImplementation(
    new FileSystemDataSource(),
)

export class Server{

    public static start(){

        console.log('Server started...')

        CronService.createJob( 
            '*/15 * * * * *',
            () => {
                const url = 'https://www.google.com'
                new CheckService(
                    fileSystemLogRepository,
                    () => console.log(`${url} is ok`),
                    ( error ) => console.log( error )
                ).execute( url )
                // new CheckService().excecute('http://localhost:3000/posts')
            }
        )
        

    }

}

