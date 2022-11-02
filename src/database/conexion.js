import sql from 'mssql'

const configuracion = {
  user: "",
  password: "",
  database: "",
  server: "",
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