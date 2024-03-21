import nodemailer from 'nodemailer'
import { envs } from '../../config/plugins/envs.plugin'

interface SendMailOptions {

    to: string | string[];
    subject: string;
    htmlBody: string;
    attachments: Attachment[];

}

interface Attachment {

    filename: string
    path: string

}


export class EmailService {

    private transporter = nodemailer.createTransport({
        
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY,
        },
        tls: {

            rejectUnauthorized: false
    
          }
    })

    constructor(){}

    async sendEmail( options: SendMailOptions ):Promise<boolean>{

        const { to, subject, htmlBody, attachments = [] } = options
        
        const sentInformation = await this.transporter.sendMail({
                        to: to,
                        subject: subject,
                        html: htmlBody,
                        attachments: attachments,
                    })
        
        try {

            // console.log( sentInformation )

            return true

        } catch (error) {
            
            // console.log( sentInformation )

            return false

        }

    }

    sendEmailWithFileSystemLogs( to: string | string[] ){

        const subject = 'Logs del Servidor'
        const htmlBody = `
        <h3>Logs de Sistema - NOC</h3>
        <p>Lorem ipsum</p>
        <p>Ver logs Adjuntos</p>
        `

        const attachments: Attachment[] = [
            { filename: 'logs-all.log', path: './logs/logs-all.log' },
            { filename: 'logs-high.log', path: './logs/logs-high.log' },
            { filename: 'logs-medium.log', path: './logs/logs-medium.log' },
        ]

        this.sendEmail({
            to, subject, attachments, htmlBody
        })

    }

}
