const express = require('express');
const fs = require('fs');
const uuid = require('uuid');
const person = require('../person');



const router = express.Router();


let persons = []
// let personswithOverweight= JSON.parse(json_persons);

router.get('/', (req, res) => {
  res.render('index', { persons });
});

router.get('/new-entry', (req, res) => {
  res.render('new-entry');
});

// POST OBJECTS
router.post('/new-entry', (req, res) => {
//ENTRADAS
  const { nombre, edad , sexo, altura , peso } = req.body;
//  persons.push(req.body)
 console.log(req.body)

 const express = require('express');
// CLASS PERSONA
class Personclase {
  //CONSTRUCTOR
    constructor(nombre, edad, sexo, altura, peso) {
      //PARAMETROS POR BINDING
      this.nombre = req.body.nombre;
      this.edad = req.body.edad;
      this.sexo = req.body.sexo;
      this.altura = req.body.altura;
      this.peso = req.body.peso;
    }
    //METODOS
    getBMI() {
      return this.altura * this.peso;
    }
  
    esMayordeEdad() {
      if (this.edad >= 18) {
        return true;
      } else {
        return false;
      }
    }
    charSexo() {
      if (this.sexo === "Hombre") {
     console.log("Es Hombre ");
      } else if (this.sexo === "Mujer") {
        return "Es mujer";
      }
     
    }
    toString(){
      return `Personclase: (${this.nombre} ${this.edad} ${this.sexo} ${this.altura} ${this.peso})`
    }
    generaNSS(length){
      var result= '';
   var characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength= characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
    }
  }

  console.log(new Personclase())
  console.log( new Personclase().getBMI())
  console.log( new Personclase().esMayordeEdad())
  console.log( new Personclase().charSexo())
  console.log(new  Personclase().toString())
  console.log(new  Personclase().generaNSS(8))


 


  // var newPerson = {
  //   id: uuid.v4(),
  //   nombre,
  //   edad,
  //   sexo,
  //   altura,
  //   peso
  // };



  // add a new book to the array
  // persons.push(newPerson);

//   // saving the array in a file
//   const json_persons = JSON.stringify(persons);
//   fs.writeFileSync('src/persons.json', json_persons, 'utf-8');
// console.log(json_persons)
//   res.redirect('/');
});

// router.get('/delete/:id', (req, res) => {
//   console.log({persons})
//   persons = persons.filter(person => person.id != req.params.id);

//   // saving data
//   const json_persons = JSON.stringify(persons);
//   fs.writeFileSync('src/persons.json', json_persons);

//   res.redirect('/')
// });



module.exports = router;