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

>insert into paquetes values (001, 'basico', 80, 200) ;

>insert into paquetes values (002, 'avanzado', 140, 300); 

>insert into paquetes values (003, 'plata', 200, 400) ;

>insert into paquetes values (004, 'oro', 320, 500) ;

>insert into paquetes values (005, 'diamante', 450, 650);

>INSERT INTO db_isw.tipo_tarjetas (nombre) VALUES ('AMEX'); 

>INSERT INTO db_isw.tipo_tarjetas (nombre) VALUES ('VISA');

>INSERT INTO db_isw.tipo_tarjetas (nombre) VALUES ('MASTER CARD');


>INSERT INTO db_isw.clientes (nombre, apellido, email, telefono, direccion, ciudad, estado, codigo_postal, planId, descuento, promociones, portabilidad, password) VALUES ('Alberto', 'Barrientos', 'hola@gmail.com', '78128293', 'ASDask', 'New York', 'Peru', '81923', '2', '10', '0', '0', 'ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f');

>INSERT INTO db_isw.clientes (nombre, apellido, email, telefono, direccion, ciudad, estado, codigo_postal, planId, descuento, promociones, portabilidad, password) VALUES (‘Emilio’, 'Sanchez Enriquez', 'emilio@gmail.com', '19480713', 'Algo', 'Guadalupe', 'Nuevo Leon', '66112', '4', '0', '0', '0', 'ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f');


