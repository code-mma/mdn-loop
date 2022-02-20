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

function checkGuests() {
    const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
    const admitted = document.querySelector('.admitted');
    const refused = document.querySelector('.refused');
    admitted.textContent = 'Admit: ';
    refused.textContent = 'Refuse: ';

    for (const guest of people) {
        if (guest == 'Phil' || guest == 'Lola') {
            refused.textContent += guest + " "; // Append refused guest's name to list
        }
        else {
            admitted.textContent += guest + " "; // Append accepted guest's name to list
        }
    }
}