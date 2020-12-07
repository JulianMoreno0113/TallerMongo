//crear base de datos
use instituto

//Crear tabla
db.createCollection("Profesores")
db.createCollection("Cursos")
db.createCollection("Estudiantes")

//Crear registros

//profesores
db.Profesores.insertMany([{
    nombre:'Leonardo',
    apellido:'Cardenas',
    correo:'leonard@gamil.com',
    documento:'79567324'
},
{
    nombre:'Sergio',
    apellido:'Romero',
    correo:'romeros@gamil.com',
    documento:'98764532'
},
{
    nombre:'Yuliet',
    apellido:'Castillo',
    correo:'yuliet@gamil.com',
    documento:'14536789'
},{
    nombre:'Sandra',
    apellido:'Ramirez',
    correo:'Sanrar@gamil.com',
    documento:'54297620'
},{
    nombre:'Jesus',
    apellido:'Lopez',
    correo:'lopez@gamil.com',
    documento:'12347593'
}])

//Cursos

db.Cursos.insertMany([{
    nombre:'Matematicas',
    creditos:'10',
    profesor: new ObjectId("5fce762f5b8de76c138bb88b") 
},
{
    nombre:'Geometria',
    creditos:'11',
    profesor: new ObjectId("5fce762f5b8de76c138bb88b") 
},
{
    nombre:'Ingles',
    creditos:'21',
    profesor: new ObjectId("5fce762f5b8de76c138bb88d") 
},
{
    nombre:'Geografia',
    creditos:'5',
    profesor: new ObjectId("5fce762f5b8de76c138bb88c")
},
{
    nombre:'Historia',
    creditos:'8',
    profesor: new ObjectId("5fce762f5b8de76c138bb88e") 
},
{
    nombre:'Frances',
    creditos:'12',
    profesor: new ObjectId("5fce762f5b8de76c138bb88d") 
},
{
    nombre:'Programación',
    creditos:'9',
    profesor: new ObjectId("5fce762f5b8de76c138bb88f") 
},
{
    nombre:'Artes',
    creditos:'11',
    profesor: new ObjectId("5fce762f5b8de76c138bb88c") 
},
])

//Estudiantes

db.Estudiantes.insertMany([{
    nombre:'Julian',
    apellido:'Moreno',
    correo:'jdmroeno@gamil.com',
    documento:'1000228032',
    curso: new ObjectId("5fce82f15b8de76c138bb898")
},
{
    nombre:'Paula',
    apellido:'Garzon',
    correo:'pgarzon@gamil.com',
    documento:'1000998234',
    curso: new ObjectId("5fce82f15b8de76c138bb899")
},
{
    nombre:'Danna',
    apellido:'Melo',
    correo:'dmelo@gamil.com',
    documento:'1002339234',
    curso: new ObjectId("5fce82f15b8de76c138bb898")
},
{
    nombre:'Juan',
    apellido:'Chaves',
    correo:'jchaves@gamil.com',
    documento:'1000887346',
    curso: new ObjectId("5fce82f15b8de76c138bb89b")
},
{
    nombre:'Alvaro',
    apellido:'Acosta',
    correo:'aacosta@gamil.com',
    documento:'1000898435',
    curso: new ObjectId("5fce82f15b8de76c138bb89c")
}
,
{
    nombre:'Yesica',
    apellido:'Garzon',
    correo:'ygarzon@gamil.com',
    documento:'1000225678',
    curso: new ObjectId("5fce82f15b8de76c138bb89d")
},
{
    nombre:'Tatiana',
    apellido:'Martinez',
    correo:'mmaertinez@gamil.com',
    documento:'2223345678',
    curso: new ObjectId("5fce82f15b8de76c138bb89e")
},
{
    nombre:'Camilo',
    apellido:'Bermudez',
    correo:'cbermudez@gamil.com',
    documento:'2333456723',
    curso: new ObjectId("5fce82f15b8de76c138bb89f")
},
{
    nombre:'Gina',
    apellido:'Moscoso',
    correo:'gmoscoso@gamil.com',
    documento:'1000223456',
    curso: new ObjectId("5fce82f15b8de76c138bb89b")
},
{
    nombre:'Michael',
    apellido:'Marulanda',
    correo:'mmarulanda@gamil.com',
    documento:'1222333123',
    curso: new ObjectId("5fce82f15b8de76c138bb89e")
}])

//consultas

//todos los profesores
db.Profesores.find().pretty()
//Todos los cursos
db.Cursos.find().pretty()
//Todos los estudiantes
db.Estudiantes.find().pretty()
//cursos de un profesor 
db.Profesores.aggregate([{
    $match:{
        _id: ObjectId("5fce762f5b8de76c138bb88b"), // cambiar el id por el de cada profesor 
    }
},{
    $lookup:{
        from:'Cursos',
        localField:'_id',
        foreignField:'profesor',
        as:'Cursos de profesor'
    }
}
]).pretty()

//Estudiantes de un curso
db.Cursos.aggregate([{
    $match:{
        _id: ObjectId("5fce82f15b8de76c138bb898"), // cambiar el id por el de cada curso 
    }
},{
    $lookup:{
        from:'Estudiantes',
        localField:'_id',
        foreignField:'curso',
        as:'Estudiantes:'
    }
}
]).pretty()



