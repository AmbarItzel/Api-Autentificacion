# Proyecto 1
Creación del microservicio de autenticacion, mostrando el funcionamiento de express para crear middlewares  y endpoints para el uso de servicios REST.



## Ejecutarlo

### Paso 1
Descargar el repositorio

```bash
git clone https://github.com/LucioHdz/api-auth
```

### Paso 2
Acceder al proyecto e instalar las dependencias del proyecto.

```bash
cd api-auth && npm i
```

### Paso 3 
Ejecutar el entorno de express en produccion
```bash
npm start
```
Tambien puede ser en un entorno de desarrollo
```bash
npm run dev
```

### Paso 4
Acceder a la url http://localhost:3000 para la ruta del servidor express


## Rutas


- `GET`: http://localhost:3000/
    - Usada para mostrar usuarios sin proteccion de datos
- `POST`: http://localhost:3000/login
    - Usado para pasar los parametros username y password para crear un token de usuario
- `GET`: http://localhost:3000/saludo-protegido
    - manda el token en las cabeceras para mostrar un saludo o en caso contrario denegar el acceso con el uso del middleware de validación.