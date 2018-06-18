  
  
  
  class Hangman {
      constructor(word, noOfGuesses) {
        this.word = word.toLowerCase().split('')
        this.noOfGuesses = noOfGuesses
        this.guessedLetters = []
        this.status = 'playing'
      }

      get puzzle(){
           let puzzle = ''

           this.word.forEach(letter => {
               if (this.guessedLetters.includes(letter) || letter === ' ') {
                   puzzle += letter
               } else {
                   puzzle += '*'
               }
           })
           return puzzle
      }

      getGuessed(char){
           char = char.toLowerCase()
           if (!this.guessedLetters.includes(char)) {
               if (this.word.includes(char)) {
                   this.guessedLetters.push(char)
               } else {
                   this.guessedLetters.push(char)
                   this.noOfGuesses--
               }
           }
      }

     get getStatus() {
         if (this.noOfGuesses > 0) {
             let puzzle = 0

             this.word.forEach(letter => {
                 if (this.guessedLetters.includes(letter) || letter === ' ') {
                     puzzle++
                     puzzle === this.word.length ? this.status = 'finished' : null
                     console.log(this.status)
                 }
             })
         } else {
             this.status = 'failed'
         }
         return this.status
      }

      getGameStatus(){
          if (this.status === 'playing') {
              return `Guesses left: ${this.noOfGuesses}`
          } else if (this.status === 'finished') {
              return 'Great work! You guessed the word'
          } else {
              return `Nice try! The word was "${this.word.join('')}"`
          }
      }
  }
  
  
  
  
  
  
//   const Hangman = function(word, noOfGuesses){
//       this.word = word.toLowerCase().split('')
//       this.noOfGuesses = noOfGuesses
//       this.guessedLetters = []
//       this.status = 'playing'
//   }


//   Hangman.prototype.getPuzzle = function(){
//           let puzzle = ''
           
//           this.word.forEach(letter => {
//               if(this.guessedLetters.includes(letter) || letter === ' '){
//                   puzzle += letter
//               } else {
//                   puzzle += '*'
//               }
//           })
//           return puzzle
//   }

//   Hangman.prototype.getGuessed = function(char){
//          char = char.toLowerCase()
//         if(!this.guessedLetters.includes(char)){
//             if(this.word.includes(char)) {
//                  this.guessedLetters.push(char)
//             } else {
//                  this.guessedLetters.push(char)
//                  this.noOfGuesses--  
//             }      
//         }
//   }

//   Hangman.prototype.getStatus = function(){
//       if(this.noOfGuesses > 0) {
//         let puzzle = 0

//         this.word.forEach(letter => {
//             if(this.guessedLetters.includes(letter) || letter === ' '){
//                 puzzle ++
//                 puzzle === this.word.length ? this.status = 'finished' : null
//                 console.log(this.status)
//             }
//         })
//       } else {
//            this.status = 'failed'
//           console.log(this.status)
//       }
//       return this.status
//   }


//   Hangman.prototype.calculateStatus = function(){

//     const finished = this.word.every((letter) => {
//         return this.guessedLetters.includes(letter) letter || ' '
//     })
    
//     // const lettersUnguessed = this.word.filter(letter => {
//     //     return !this.getGuessedLetters.include(letter)
//     // })

//     // const finished = lettersUnguessed === 0
        
    
//     // let finished = true

//         // this.word.forEach((letter) => {
//         //     if(this.guessedLetters.includes(letter)){

//         //     } else {
//         //         finished = false
//         //     }
//         // })

//         if(this.remainingGuesses === 0) {
//             this.status = 'failed'
//         } else if(finished){
//             this.status = 'finished'
//         } else {
//             this.status = 'playing'
//         }
//   }


// Hangman.prototype.getGameStatus = function() {
//     if(this.status === 'playing') {
//         return `Guesses left: ${this.noOfGuesses}`
//     } else if(this.status === 'finished'){
//         return 'Great work! You guessed the word'
//     } else {
//         return `Nice try! The word was "${this.word.join('')}"`
//     }
// } 
  