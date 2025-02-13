function generateLoveLetter() {

    const recipient = document.getElementById('recipient').value.trim();
    if (!recipient) {
        alert('Stop being a special snowflake and put in a name.');
        return;
    }
    
    // Array of love letters
    const templates = [
`${recipient}, if I had to choose between losing you or chicken forever, I would have to hesitate before saying no more ${recipient}`,
`Dearest ${recipient},\n\nRoses are red,\nViolets are blue,\nI love Lebron James\nAlmost as much as I love you <3\n\nEthen`,
`${recipient},\n\nEvery time I look at your face, \nit reminds me of you \n\nEthen`,
`${recipient},\n\nSometimes when it's really cold outside \nor I'm just feeling blue, \nI'll lie in bed scrolling through our photos and smile \nbecause I really miss you :(\n\nEthen`,
`I LOVE YOU ${recipient}`,
`Kissy face, kissy face \nstraight to ${recipient} phone, \nyeah \nI'm tryna kiss your lips for real \nuh huh uh huh \n\nRed hearts red hearts\nyou're all that I want, yeah\nCome back from Australia\nOH OH OH`,
`${recipient}, if I had to choose between losing you or chicken forever, I would have to hesitate before saying no more ${recipient}`,
`Looking to squeeze you like Jamal Pompeii Bartholomew III squeezes that heart, ${recipient}`,
`I love you more than I love the smell of a new book, ${recipient}`,
`${recipient}, be the Feyre to my Rhysand (or Tamlin ig)`,
    ];
   // Select a random template
    const letter = templates[Math.floor(Math.random() * templates.length)];
    
    // display
    const letterDiv = document.getElementById('letter');
    letterDiv.textContent = letter;
    letterDiv.classList.remove('hidden');

}
