/* Hecho por Erick Fernando Nevarez Avila */


/* Carga del archivo de datos */
// Descarga el archivo grades.json y ejecútalo en la terminal con el siguiente comando:
mongoimport -d students -c grades --file grades.json

// RESPUESTA: 

// 2024-10-29T12:45:09.223-0600    conected to: mongodb://localhost/




/* Verificación de la importación. */
// El conjunto de datos contiene cuatro calificaciones por estudiante.
// Confirma que la colección se ha importado correctamente con estos comandos en la terminal de MongoDB:
/* ¿Cuántos registros resultantes arroja el comando count? */
use students
db.grades.count()

// RESPUESTA: 

// 800



/* Calificaciones de un estudiante específico. */
// Encuentra todas las calificaciones del estudiante con el ID número 4.
db.grades.find({ student_id: 4 })

// RESPUESTA: 

/*
[
  {
    _id: ObjectId('50906d7fa3c412bb040eb587'),
    student_id: 4,
    type: 'exam',
    score: 87.89071881934647
  },
  {
    _id: ObjectId('50906d7fa3c412bb040eb589'),
    student_id: 4,
    type: 'homework',
    score: 5.244452510818443
  },
  {
    _id: ObjectId('50906d7fa3c412bb040eb58a'),
    student_id: 4,
    type: 'homework',
    score: 28.656451042441
  },
  {
    _id: ObjectId('50906d7fa3c412bb040eb588'),
    student_id: 4,
    type: 'quiz',
    score: 27.29006335059361
  }
]
*/



/* Conteo de registros de tipo “exam”. */
// ¿Cuántos registros existen en la colección para el tipo exam?
db.grades.count({ type: "exam" })

// RESPUESTA: 

// 200



/* Conteo de registros de tipo “homework” */
// ¿Cuántos registros existen en la colección para el tipo homework?
db.grades.count({ type: "homework" })

// RESPUESTA: 

// 400



/* Conteo de registros de tipo “quiz”. */
// ¿Cuántos registros existen en la colección para el tipo quiz?
db.grades.count({ type: "quiz" })

// RESPUESTA: 

//200



/* Eliminación de calificaciones */
// Borra todas las calificaciones del estudiante con el ID número 3.
db.grades.deleteMany({ student_id: 3 })

// RESPUESTA: 

// { acknowledged: true, deletedCount: 4 }



/* Búsqueda de estudiantes con una calificación específica */
// ¿Qué estudiantes obtuvieron una calificación de 75.29561445722392 en una tarea?
db.grades.find({score:75.29561445722392 })

// RESPUESTA: 

/*
[
    {
      _id: ObjectId('50906d7fa3c412bb040eb59e'),
      student_id: 9,
      type: 'homework',
      score: 75.29561445722392
    }
]
*/  



/* Actualización de calificación */
// Cambia la calificación del registro con el UUID 50906d7fa3c412bb040eb591 a 100.
db.grades.updateOne({_id:ObjectId("50906d7fa3c412bb040eb591")},{ $set:{score:100}})

// RESPUESTA: 

/*
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
*/  



/* Identificación de estudiante por calificación actualizada */
// ¿A qué estudiante pertenece la calificación actualizada?
db.grades.find({ score: 100 })

// RESPUESTA: 

/*
[
    {
      _id: ObjectId('50906d7fa3c412bb040eb591'),
      student_id: 6,
      type: 'homework',
      score: 100
    }
]
*/  
