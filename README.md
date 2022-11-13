# ISW-BackEnd

### Como inicializar los proyectos (WebSite, API Rest)
Primero ejecutar estos comandos

    npm i -g @nestjs/cli
    npm i -g angular-cli@13.3.7

Ejecutar este comando en cada carpeta

    npm install
### Posibles soluciones a errores

    npm install -g win-node-env
 
 ### Ver Pagina Web
Lo primero es dirimirnos a la carpeta de WebSite después de eso ejecutaremos el siguiente comando:

    cd WebSite
    ng build

### Como levantar la Api
Para configurar el tipo de SQL que tienes dirígete los siguientes archivos:

> "API Rest\src\modulos\cliente\cliente.module.ts"
> "API Rest\src\modulos\auth\auth.module.ts"

Si tienes MySQL no es necesario cambiar el type pero si tienes SQL Server Microsoft remplaza por:

> type : 'mssql'

Cambiar el synchronize por true en nuestro primer inicio una vez levantado cambiar a false.
Esto hace que cree las tablas configuradas automáticamente 

Nos dirigimos al archivo 

> "API Rest\dev.env"

Aquí reemplazamos por los datos de nuestro configuración del SQL

Listo podemos levantarla con el siguiente comando pero primero nos dirijimos a la carpeta "API Rest"

    cd "API Rest"
    npm start:dev

Puedes ver los resultados visita `http://localhost:3000/`
Si quieres ver la documentación visita `localhost:3000/api/documentation`

