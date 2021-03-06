/* Nivell 1
- Exercici 1
Crea una funci贸 que retorni una Promise que invoqui la funci贸 resolve() o reject() que rep.
Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent
de si la Promise es resol o no. */

function getPromise() {
  return new Promise((res, rej) => {
    let myPhone = {
      name: "Iphone",
      year: "2022",
    };
    if (myPhone.year === "2022") {
      res(`Producte satisfactori, tens un bon m貌bil ${myPhone.name} 馃憣`);
    } else {
      rej(`Frac脿s absolut,el teu ${myPhone.name} 茅s m貌bil antic 馃槣`);
    }
  });
}
getPromise()
  .then((message) => {
    console.log(`脠xit ${message}`);
  })
  .catch((err) => {
    console.log(`OHHHHHH ${err}`);
  });

/* - Exercici 2
Crea una arrow function que rebi un par脿metre i una funci贸 callback i li passi a la funci贸 un missatge o un altre 
(que s'imprimir脿 per consola) en funci贸 del par脿metre rebut. */

//Sense arrow function
/* function calculate(num1, callbackFunction) {
  return callbackFunction(num1);
}
function doubleNumber(num1) {
  return num1 * 2;
}
console.log(calculate(10, doubleNumber));
 */
const calculate = (num1, callbackFunction) => {
  return callbackFunction(num1);
};

const doubleNumber = (num1) => {
  return num1 * 2;
};

console.log(calculate(10, doubleNumber));

/* Nivell 2
- Exercici 1
Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise 
efectuant la cerca en l'objecte pel seu id. */

let employees = [
  {
    id: 1,
    name: "Linux Torvalds",
  },
  {
    id: 2,
    name: "Bill Gates",
  },
  {
    id: 3,
    name: "Jeff Bezos",
  },
];

let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];

const getEmployee = (employeesId) => {
  return new Promise((res, rej) => {
    let foundEmployee = employees.find((element) => element.id == employeesId);
    if (foundEmployee) {
      res(`El nom del teu empleat 茅s ${foundEmployee.name}`);
    } else {
      rej(`No existeix cap persona`);
    }
  });
};
getEmployee(2)
  .then((message1) => {
    console.log(`Aqu铆 tens"馃榾 ${message1}`);
  })
  .catch((err) => {
    console.log(`Error:馃槺馃槺馃槺 ${err}`);
  });

/* - Exercici 2
Crea una altra arrow function getSalary() similar a l'anterior que rebi com a par脿metre un objecte employee 
i retorni el seu salari. */

const getSalary = (employee) => {
  return new Promise((res, rej) => {
    let totalSalary = salaries.find((element) => element.id == employee);
    if (totalSalary) {
      res(`El teu salari 茅s ${totalSalary.salary}`);
    } else {
      rej(`No existeix cap salari`);
    }
  });
};
getSalary(4)
  .then((message2) => {
    console.log(`Aqu铆 tens"馃榾 ${message2}`);
  })
  .catch((err) => {
    console.log(`Error:馃槺馃槺馃槺 ${err}`);
  });

/* - Exercici 3
Invoca la primera funci贸 getEmployee() i despr茅s getSalary() niant l'execuci贸 de les dues promises 
de manera que es retorni per la consola el nom de l'empleat i el seu salari.
 */

getEmployee(2)
  .then((message1) => {
    getSalary(2)
    .then((message2)=>{
      console.log (`${message1.name} ${message2.salary}`)
    })
  })

//No s茅 el motiu pel qual falla, surt undefined!!!
