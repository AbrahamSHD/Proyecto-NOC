import mongoose from "mongoose"

interface ConecctionOptions {

    mongoUrl: string
    dbName: string

}

export class MongoDatabase {

    static async connect( options: ConecctionOptions ) {

        const { mongoUrl, dbName } = options

        try {
            
            await mongoose.connect( mongoUrl, {
                dbName: dbName,
            })

            console.log( 'Mongo Connected!' )

        } catch (error) {

            console.log( 'Mongo connection error' )
            throw error
            
        }

    }

}