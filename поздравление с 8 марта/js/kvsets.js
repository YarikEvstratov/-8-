const kvsets = document.querySelector('.kvsets__container');
const kvsetsItem = document.querySelectorAll('.kvsets__item');
const allBtn = document.querySelectorAll('.kvsets__btn');

let index = 0;

function activeSlide(index) {
    for (const kvset of kvsetsItem) {
        kvset.classList.remove('active');
    }
    kvsetsItem[index].classList.add('active');
}


allBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();

        index++;
        if (index > kvsetsItem.length - 1) {
            index = 0;
            activeSlide(index);
            clickBtn(0);
        } else {
            activeSlide(index);
        }

    })
})