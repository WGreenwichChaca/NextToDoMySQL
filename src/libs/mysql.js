import mysql from 'serverless-mysql'

export const conn = mysql({
    config: {
        host: 'byDefaultlocalhost',
        user: 'byDefaultroot',
        password: 'yourPassword',
        port: 3306,
        database: 'yourDatabase'
    }
})