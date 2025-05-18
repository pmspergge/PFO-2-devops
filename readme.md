Prerequisitos
Tener instalado Docker (Desktop para Windows/Mac o Engine+Compose en Linux)

Clonar este repositorio en la carpeta de tu elección:

git clone https://github.com/pmspergge/PFO-2-devops
cd PFO-2-devops

Estructura

PFO-2-devops/
├── app/                  # Mini-app Node.js
│   ├── Dockerfile
│   ├── package.json
│   └── app.js
├── docker-compose.yml    # Orquestación de Nginx, MySQL y app
└── README.md             # Este archivo

Inicializar y reinicializar volúmenes

Para asegurarte de que MySQL cree la base actividad_docker limpia, elimina contenedores y volúmenes previos:

docker-compose down -v

Levantar todos los servicios
docker-compose up --build -d
Construye la imagen de tu app (--build).

Inicia Nginx en http://localhost:8080.

Inicia MySQL (root:1234) en el puerto 3306.

Espera al healthcheck de MySQL antes de levantar la app 


Verificar servicios
docker ps
curl http://localhost:8080
curl http://localhost:3000

Detener y limpiar
docker-compose down
Publicación en Docker Hub
Etiquetar

docker tag mysql-db   TU_USUARIO/mysql-db:practica2
docker tag web-app    TU_USUARIO/web-app:practica2

Subir
docker push TU_USUARIO/mysql-db:practica2
docker push TU_USUARIO/web-app:practica2

Problemas comunes
BD no recreada: si el volumen ya existe, MYSQL_DATABASE no se re-ejecuta.
Solución: docker-compose down -v para reinicializar 

App inicia antes de MySQL: devuelve “Cannot connect”.
Solución: healthcheck en MySQL + depends_on: condition: service_healthy en web-app 
Reddit

Enlaces
Repo GitHub: https://github.com/pmspergge/PFO-2-devops

Siguiendo estos pasos, cualquier usuario podrá clonar, levantar y probar el stack completo en minutos.