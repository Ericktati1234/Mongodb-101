# Mongodb 101

En esta tarea, trabajaremos con una colección de calificaciones de estudiantes.

## Vamos a empezar

Si te gustaria tener una copia del tutorial para realizar este proyecto puedes entrar a la siguiente liga https://github.com/Ericktati1234/My_Pro_Git.git

### Prerequisitos

Debemos de tener instalado mongo en nuestra distribucion de linux, para ello podemos ejecutar los siguientes comandos:

```
# Agregar la clave GPG para el repositorio de MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -

# Agregar el repositorio de MongoDB al archivo de fuentes de APT
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

# Actualizar los paquetes de la lista de repositorios
sudo apt update

# Instalar MongoDB
sudo apt install -y mongodb-org

# Iniciar MongoDB
sudo systemctl start mongod

# Habilitar MongoDB para que inicie automáticamente al arrancar el sistema
sudo systemctl enable mongod

# Verificamos que nuestro servicio de mongo se este ejecutando
sudo systemctl status mongod

Nos debe de mostrar algo como lo siguiente:

mongod.service - MongoDB Database Server
     Loaded: loaded (/lib/systemd/system/mongod.service; enabled; vendor preset: enabled)
     Active: active (running) since Tue 2024-10-29 12:44:48 CST; 1h 27min ago
       Docs: https://docs.mongodb.org/manual
   Main PID: 54809 (mongod)
     Memory: 73.6M
        CPU: 24.160s
     CGroup: /system.slice/mongod.service
             └─54809 /usr/bin/mongod --config /etc/mongod.conf

```

### Instalando archivos necesarios

Parte de los primeros comandos que debemos ejecutar es importar el archivo de grades.json a nuestra base de datos de mongo, para ello, ejecutamos el siguiente comando dentro de la carpeta de nuestro proyecto:

```
mongoimport -d students -c grades < grades.json

# Nos deberá mostrar un mensaje como el siguiente:

2024-10-29T12:45:09.223-0600    conected to: mongodb://localhost/

```

Ya habiendo importado nuestro archivo a nuestra base de datos, vamos a ejecutar nuestro shell de mongo donde ejecutaremos los comandos de la siguiente parte:

```
mongosh

# Nos deberá mostrar una shel de la siguiente forma:

test>

```
### Ejecutando nuestros comandos

Dentro del archivo de nuestro proyecto llamado tarea_1.js encontraremos todos los comandos con los que podremos ejecutar comandos, aqui mostramos dichos comandos enlistados:

```
// Verificación de la importación
use students
db.grades.count()

// Calificaciones de un estudiante específico
db.grades.find({ student_id: 4 })

// Conteo de registros de tipo “exam”
db.grades.count({ type: "exam" })

// Conteo de registros de tipo “homework”
db.grades.count({ type: "homework" })

// Conteo de registros de tipo “quiz”
db.grades.count({ type: "quiz" })

// Eliminación de calificaciones
db.grades.deleteMany({ student_id: 3 })

// Búsqueda de estudiantes con una calificación específica
db.grades.find({ score: 75.29561445722392 })

// Actualización de calificación
db.grades.updateOne({ _id: ObjectId("50906d7fa3c412bb040eb591") },{ $set: { score: 100 } }
)

// Identificación de estudiante por calificación actualizada
db.grades.find({ score: 100 })

```

Si queremos comparar las respuestas que obtuvimos con los comandos, podemos observar el codigo del archivo de tarea_1.js, en dicho archivo se muestra como RESPUESTA aquella informacion que se nos retorna con cada comando

### Terminando tutorial

Podemos ejecutar mas comandos modificando los parametros y hacer nuestros propios experimentos. Si deseamos terminar con nuestra practica salimos del shell de mongo con el comando de:

```
exit
```

## Implementacion

Podemos consultar muchas mas comandos de mongo en el siguiente link https://www.mongodb.com/docs/mongodb-shell/run-commands/

## Hecho con

* [VsCode](https://code.visualstudio.com) - Como editor de nuestro codigo fuente
* [GitHub](https://github.com) - Como repositorio remoto que contiene nuestros archivos tutorial

## Contribucion

Si desea contribuir y mejorar el siguiente documento, favor de contactarnos en el siguiente correo (ContactoBinBash@coolmail.com)

## Versionado

Para el versionado y consulta de documento hacemos el uso de [GitHub](https://github.com) en el cual actualizamos, verificamos y probamos 
cada mejora en los codigos y tutoriales realizados

## Authors

* **Erick Nevarez** - *Totalidad del trabajo* - [Ericktati1234](https://github.com/Ericktati1234)

Por el momento a la fecha 29/10/2024 no existen colaboradores que hayan participado en el proyecto

## License

Este proyecto es usado solamente para usos didacticos, no nos hacemos responsables ninguno de los autores por el mal uso del codigo anexado
Todos los documentos y links son una via para obtener mayor conocimiento, no se obtiene ningun beneficio personal por el compartir los links

## Reconocimientos

No hay reconocimientos

