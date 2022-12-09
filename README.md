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

### Inicializar la base de datos

Primero crea una base de datos con el nombre db_isw luego ejecuta los sigueines querys

> INSERT INTO db_isw.tipo_tarjetas (nombre) VALUES ('AMEX'); 
> INSERT INTO db_isw.tipo_tarjetas (nombre) VALUES ('VISA'); 
> INSERT INTO db_isw.tipo_tarjetas (nombre) VALUES ('MASTER CARD'); 
> INSERT INTO db_isw.paquetes (nombre_paquete, detalles_paquete, canales, precio) VALUES ('LIN100', 'NETLFLIX(2 PERFILES) VIX (2 PERFILES) TELEFONIA 100GB INTERNET', '100', '550.00'); 
> INSERT INTO db_isw.paquetes (nombre_paquete, detalles_paquete, canales, precio) VALUES ('LIN101', 'NETLFLIX(1 PERFILES) VIX (1 PERFILES) TELEFONIA 50GB INTERNET', '120', '400.00'); 
> INSERT INTO db_isw.paquetes (nombre_paquete, detalles_paquete, canales, precio) VALUES ('LIN102', 'NETLFLIX(4 PERFILES) VIX (3 PERFILES) TELEFONIA 100GB INTERNET', '150', '600.00');
> INSERT INTO db_isw.clientes (nombre, apellido, email, telefono, direccion, ciudad, estado, codigo_postal, paqueteId, promociones, portabilidad, descuento, password) VALUES ('Alberto', 'Barrientos', 'hola@gmail.com', '78128293', 'ASDask', 'New York', 'Peru', '81923', '1', '0', '0', 0, 'ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f'); 



