  // Primitive value: string, boolean, null, undefined 

  // Object: myObject --> product --> Object.prototype --> null 
  //Array: myArray ---> Array.prototype ---> Object.prototype --> null 
  // Function: myFunc ---> Function.prototype ---> Object.prototype --> null
  // String: myString ---> Sring.prototype ---> Object.prototype ---> null 
  // Number: myNumber ---> Number.prototype ---> Object.proptotype ---> null 
  // Boolean: myBoolean ---> Boolean.prototypr ---> Object.prototype ---> null 

  // HTTP (Hypertext Transfer protocol)
  // Request - What do want to do
  // Response - What was actually done



const puzzle = document.querySelector('#puzzle')
const guesses = document.querySelector('#guesses')
  let hangman1

  






  const startGame = async () => {
    const puzzle = await getPuzzle('2')
    hangman1 = new Hangman(puzzle, 5)
    render()
  }

  const render = () => {
    hangman1.getStatus
    puzzle.innerHTML = ''
    guesses.textContent = hangman1.getGameStatus()
    hangman1.puzzle.split('').forEach(letter => {
      const spanEl = document.createElement('span')
      spanEl.textContent = letter
      puzzle.appendChild(spanEl)
    })
  }

  startGame()

  window.addEventListener('keypress', function (e) {
    if(hangman1.noOfGuesses > 0){
        const guess = String.fromCharCode(e.charCode)
        hangman1.getGuessed(guess)
        render()
    } 
  })







document.querySelector('#reset').addEventListener('click', startGame)




//  getPuzzle('2').then((data) =>{
//     console.log(data)
//  }).catch((error) =>{
//     console.log(`Error: ${error}`)
//  })
   
  




// getCurrentCountry().then(country => console.log(country))
//                    .catch(error => console.log(error))


