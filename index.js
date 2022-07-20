const myGPA = (arrOfGrades) => {
  const gpaobj = {
    grade: [
      {
        alpha: 'A+',
        number: 4.33
      },
      {
        alpha: 'A',
        number: 4.00
      },
      {
        alpha: 'A-',
        number: 3.67
      },
      {
        alpha: 'B+',
        number: 3.33
      },
      {
        alpha: 'B',
        number: 3.00
      },
      {
        alpha: 'B-',
        number: 2.67
      },
      {
        alpha: 'C+',
        number: 2.33
      },
      {
        alpha: 'C',
        number: 2.00
      },
      {
        alpha: 'C-',
        number: 1.67
      },
      {
        alpha: 'D+',
        number: 1.33
      },
      {
        alpha: 'D',
        number: 1.00
      },
      {
        alpha: 'D-',
        number: 0.67
      },
      {
        alpha: 'F',
        number: 0
      }
    ]
  }
}

console.log(myGPA(['A+', 'C+', 'B+', 'A-', 'C']))
console.log(myGPA(['B-', 'C+', 'B+', 'C-', 'A+']))

// myGPA(['A+','C+','B+','A-','C']) ==> 3.132
// myGPA(['B-','C+','B+','C-','A+']) ==> 2.866
