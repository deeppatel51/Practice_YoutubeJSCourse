function guessNumber() {
    const random = Math.floor(Math.random() * 100) + 1;
    let i=0;
    let number = parseInt(prompt('Guess a number from 1 to 100: '));
    while(number != random) {
        if(number>random)
        {
            number = parseInt(prompt('Enter a smaller Number!'));
            i++;
        }
        else if(number<random)
        {
            number = parseInt(prompt('Enter a Greater Number!'));
            i++;
        }
    }
    if(number == random) {
        console.log('You guessed the correct number.');
        console.log('Your score is: '+ (100-i));
    }
  }
guessNumber();