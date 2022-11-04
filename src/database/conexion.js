import sql from 'mssql'
import { config } from 'dotenv'

config()

const configuracion = {
  user: process.env.USUARIO_BDD,
  password: process.env.CONTRASENIA_BDD,
  database: process.env.BASE_DE_DATOS,
  server: process.env.SERVIDOR_BDD,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
}

export async function conectar(){
    try {
        const pool = await sql.connect(configuracion)
        return pool
    } catch (error) {
        console.error(error)
    }
}

export function cerrarConexion(){
  sql.close()
}