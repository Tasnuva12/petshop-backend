import winston from "winston";
import 'winston-daily-rotate-file';

const logger = winston.createLogger({       
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),     
        winston.format.json()
    ),
    transports: [   
        new winston.transports.DailyRotateFile({
            filename: 'logs/application-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            maxFiles: '14d'

        }),
        new winston.trasponts.Console({
            format: winston.format.combine(
                winston.format.colorize(),  
                winston.format.simple()
            )
        })  
    ]
});
export default logger;