buttonCheck.addEventListener('click', checkData, false);

function checkData() {
    var retirementAgeWoman = 56;
    var retirementAgeMan = 61;
    var name = document.getElementById('name');
    name.innerHTML = (typeSecondName.value) + " " + (typeName.value) + " " + (typePatronymic.value);
    ageYear.innerHTML = typeAge.value;
    ageDay.innerHTML = typeAge.value * 365;
    var inp = document.getElementsByName('gender');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            var yourGender = inp[i].value;
        }
    }
    gender.innerHTML = yourGender;
    if ((yourGender == "женщина") && (typeAge.value < retirementAgeWoman)) {
        retirement.innerHTML = "нет";
    } else if ((yourGender == "женщина") && (typeAge.value >= retirementAgeWoman)) {
        retirement.innerHTML = "да";
    }
    else if ((yourGender == "мужчина") && (typeAge.value < retirementAgeMan)) {
        retirement.innerHTML = "нет";
    } else  {
        retirement.innerHTML = "да";
    }
    
}

