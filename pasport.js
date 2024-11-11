
document.getElementById('translateButton').addEventListener('click', function() {
    const issuedText = document.getElementById('issued');
    const surnameText = document.getElementById('surname');
    const nameText = document.getElementById('name');
    const patronymicText = document.getElementById('father');
    const genderText = document.getElementById('gender');
    const birthplaceText = document.getElementById('birthplace');

    if (issuedText.innerText = 'ГУ МВД РОССИИ ПО Г.МОСКВЕ') {
        issuedText.innerText = "GU MVD ROSSII IN Vologodskaya oblast";
        surnameText.innerText = 'Korchagin';
        nameText.innerText = 'Zakhar';
        patronymicText.innerText = 'Andreevich';
        genderText.innerText = 'Male';
        birthplaceText.innerText = 'c.Kharovsk';
    } else {
        issuedText.innerText = 'ГУ МВД РОССИИ ПО Вологодской области';
        surnameText.innerText = 'Корчагин';
        nameText.innerText = 'Захар';
        patronymicText.innerText = 'Андреевич';
        genderText.innerText = 'Муж';
        birthplaceText.innerText = 'г.Харовск';
    }
});
document.getElementById('getInfoButton').addEventListener('click', function() {
    // Считываем информацию из DOM
    var lastName = document.getElementById('lastName').innerText;
    var firstName = document.getElementById('firstName').innerText;
    var birthYear = document.getElementById('birthYear').innerText;

    // Отображаем информацию в div
    var infoDiv = document.getElementById('info');
    infoDiv.innerHTML = `<strong>Считанная информация:</strong><br>
                         Фамилия: ${lastName}<br>
                         Имя: ${firstName}<br>
                         Год рождения: ${birthYear}`;
});