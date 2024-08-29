alert("ДИСКЛЕЙМЕР! \n Автор не ставил задачу кого-то оскорбить. \n Воспринимайте все как шутку! \n С праздником!")
const gridItem = document.querySelectorAll('.grid__item');
const grid = document.querySelector('.grid');
const riddleContainer = document.querySelector('.riddles__container');
riddleContainer.addEventListener('click', (e) => e.stopPropagation());
function clickBtn(id) {
    grid.classList.toggle('active');
    for (let i = 0; i < gridItem.length; i++) {
        if (id == i) {
            gridItem[i].classList.toggle('active');
        } else {
            gridItem[i].classList.toggle('remove')
        }
    }
}

for (let i = 0; i < gridItem.length; i++) {
    gridItem[i].addEventListener('click', function () {
        clickBtn(i);
    })
}



// Загадки

function riddle() {
    let indexSlide = 0;
    const correctAnswers = ['8 марта', 'цветы', 'весна', 'подснежник', 'солнце', "март","ручеек","конфет","ресторан","сковородка"];

    const riddleContainer = document.querySelector('.riddles__container');
    riddleContainer.addEventListener('click', (e) => e.stopPropagation());

    const zagadkaManagement = document.querySelectorAll('.buttonsi');
    const zagadkaInput = document.querySelectorAll('.riddles__imput');
    const zagadkaBtnAnswer = document.querySelectorAll('.riddles__btn-otvet');
    const zagadkaBtnNext = document.querySelectorAll('.riddles__btn-next');
    const zagadkaItem = document.querySelectorAll('.riddles__item');
    let Smail = document.querySelector(".smail");

    console.log(zagadkaInput[0].value);

    function activeZagadkaSlide(index) {
        for (const z of zagadkaItem) {
            z.classList.remove('active');
        }
        zagadkaItem[index].classList.add('active');
    }

    zagadkaBtnAnswer.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if (zagadkaInput[indexSlide].value == correctAnswers[indexSlide]) {
                zagadkaManagement[indexSlide].classList.add('true');
                zagadkaManagement[indexSlide].classList.remove('false');
                zagadkaBtnNext[indexSlide].disabled = false;
            } else {
                zagadkaManagement[indexSlide].classList.add('false');
                zagadkaManagement[indexSlide].classList.remove('true');
                Smail.classList.add("active")
                setTimeout(
                    () => {
                        Smail.classList.remove("active")
                    },
                    4000
                );
            }
        })
    });

    zagadkaBtnNext.forEach(btn => {
        btn.disabled = true;
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            indexSlide++;
            if (indexSlide > zagadkaItem.length - 1) {
                indexSlide = 0;
                activeZagadkaSlide(indexSlide);
                clickBtn(1);
            } else {
                activeZagadkaSlide(indexSlide);
            }
        });
    })
}
riddle();
document.querySelector('.video__container').addEventListener('click', (e) => e.stopPropagation());