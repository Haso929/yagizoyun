function play(secim) {
  const secenekler = ['taş', 'kağıt', 'makas'];
  const comp = secenekler[Math.floor(Math.random() * 3)];
  let sonuc = '';
  if (secim === comp) sonuc = 'Berabere!';
  else if (
    (secim==='taş'&&comp==='makas') ||
    (secim==='kağıt'&&comp==='taş') ||
    (secim==='makas'&&comp==='kağıt')
  ) sonuc = 'Kazandın! 🎉';
  else sonuc = 'Kaybettin 😢';
  document.getElementById('sonuc').innerText = `Sen: ${secim} | Bilgisayar: ${comp} → ${sonuc}`;
}