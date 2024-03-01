
export enum LogSeverityLevel {

    low = 'low',
    medium = 'medium',
    high = 'high',

}

export class LogEntity {

    public level: LogSeverityLevel;
    public mesagge: string;
    public createAt: Date;

    constructor( message: string, level: LogSeverityLevel ){

        this.mesagge = message
        this.level = level
        this.createAt = new Date()

    }

    static fromJson = ( json: string ): LogEntity => {

        const { message, level, createdAt } = JSON.parse( json )
        
        const log = new LogEntity( message, level )
        log.createAt = new Date( createdAt )
        return log

    }

}

