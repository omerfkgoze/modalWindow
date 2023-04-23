'use strict';

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

// document.querySelectorAll() metodu obje olarak döndürür. Bu yüzden dönen objeyi bir diziye atayıp diziye erişebiliriz.
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModel);

  btnCloseModal.addEventListener('click', closeModel);
}

overlay.addEventListener('click', closeModel);

// Kullanıcı klavyeden Escape tuşuna bastığında modal kapanacak.
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});
