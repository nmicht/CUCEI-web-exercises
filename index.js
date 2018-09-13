// 1. Ejercicio de alumno
// - datos generales
// - calificaciones de diferentes materias
// - cada materia tiene dos calificaciones
// - la final de cada materia es la maxima
// - existe la manera de obtener el promedio del alumno
// grades = {
//     math: [50, 70, 85],
//     web: [32, 54, 60, 75]
// }

class Student {
  /**
   * Constructor for student object
   * @param  {String} [name='']   The name of the student
   * @param  {String} [email='']  The email of the student
   * @param  {Object} [grades={}] An object with grades by module with array for
   * each one
   */
  constructor(name = '', email = '', grades = {}) {
    this.name = name;
    this.email = email;
    this.grades = grades;
  }

  setGrades(grades, cb) {
    this.grades = grades;
    cb();
  }

  /**
   * Get the final grade, in this case, the max grade for a module
   * @param  {String} module The name of the module
   * @return {number}        The max grade
   */
  getModuleGrade(module) {
    try {
      return Math.max(...this.grades[module]);
    } catch (e) {
      console.log('Ups, algo salió mal. No eres tu, somos nosotros :(');
      return 0;
    }
  }

  /**
   * [getStudentAvg description]
   * @return {[type]} [description]
   */
  getStudentAvg() {
    return new Promise((resolve, reject) => {
      let total = 0;
      let count = 0;
      for (const module in this.grades) {
        total += this.getModuleGrade(module);
        count += 1;
      }

      resolve(total / count);
    });
  }

  addModuleGrade(module, grade) {
    try {
      this.grades[module].push(grade);
    } catch (e) {
      this.addNewModule(module, [grade]);
    }
  }

  addNewModule(module, grades = []) {
    this.grades[module] = grades;
  }

  removeModuleFirstGrade(module) {
    this.grades[module].shift();
  }

  updateModuleGrade(module, number, grade) {
    this.grades[module][number - 1] = grade;
  }
}

const michelle = new Student('michelle', 'correo@correo.com');
michelle.setGrades({
  math: [50, 70, 85],
  web: [32, 54, 60, 75],
}, () => console.log('hola'));

michelle.addModuleGrade('db', 1, 89);


michelle.getStudentAvg()
.then((grade) => {
  console.log(grade);
});

console.log(michelle);
