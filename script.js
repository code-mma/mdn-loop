function countdown() {
    const output = document.querySelector('#outputOne');

    let i = 10;

    while (i >= 0) {
        const para = document.createElement('p');

        if (i == 10) {
            para.textContent = "Countdown 10";
        }
        else if (i == 0) {
            para.textContent = "Blast off!";
        }
        else {
            para.textContent = i;
        }

        output.appendChild(para);
        i--;
    }

}

/*

function checkGuests() {
    const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
    const admitted = document.querySelector('.admitted');
    const refused = document.querySelector('.refused');
    admitted.textContent = 'Admit: ';
    refused.textContent = 'Refuse: ';

    let i = 0;

    while (i <= (people.length - 1)) {
        if (people[i] == 'Phil') {
            let refusedPerson = people.splice(i,1);
            refused.textContent += refusedPerson + " ";
        }
        else {
            admitted.textContent += people[i] + " ";
        }
        i++;
    }
}

 function checkGuestsAgain() {
    const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
    const admitted = document.querySelector('.admitted');
    const refused = document.querySelector('.refused');
    admitted.textContent = 'Admit: ';
    refused.textContent = 'Refuse: ';

    function refuse(guest) {
        if (guest == 'Phil' || guest == 'Lola') {
            return guest;
        }
    }

    function admit(guest) {
        if (guest !== 'Phil' || guest !== 'Lola') {
            return guest;
        }
    }
    const refusedPersons =  people.filter(refuse);
    const admittedPersons =  people.filter(admit);

    refused.textContent += refusedPersons.toString();
    admitted.textContent += admittedPersons.toString();
}

*/

function checkGuestsAgainAndAgain() {
    const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
    const admitted = document.querySelector('.admitted');
    const refused = document.querySelector('.refused');
    admitted.textContent = 'Admit: ';
    refused.textContent = 'Refuse: ';

    for (const guest of people) {
        if (guest == 'Phil' || guest == 'Lola') {
            refused.textContent += guest + " ";
        }
        else {
            admitted.textContent += guest + " ";
        }
    }
}