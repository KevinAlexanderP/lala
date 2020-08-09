class Person {
  constructor(_nombre, _edad, _sexo, _altura, _peso) {
    this.nombre = _nombre;
    this.edad = _edad;
    this.sexo = _sexo;
    this.altura = _altura;
    this.peso = _peso;
  }
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
      return "Es Hombre ";
    } else if (this.sexo === "Mujer") {
      return "Es mujer";
    }
  }
}
