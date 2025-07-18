function play(playerChoice) {
  const choices = ['taş', 'kağıt', 'makas'];
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];
  let result = '';

  if (playerChoice === computerChoice) {
    result = 'Berabere!';
  } else if (
    (playerChoice === 'taş' && computerChoice === 'makas') ||
    (playerChoice === 'kağıt' && computerChoice === 'taş') ||
    (playerChoice === 'makas' && computerChoice === 'kağıt')
  ) {
    result = 'Kazandın! 🎉';
  } else {
    result = 'Kaybettin 😢';
  }

  document.getElementById('sonuc').innerText = `
    Sen: ${playerChoice} | Bilgisayar: ${computerChoice}
    → ${result}
  `;
}
