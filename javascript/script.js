const bodyElement = document.querySelector('body');
const modal = document.querySelector('.modal');
const imagePreviews = document.querySelectorAll('.image-preview');
const innerModal = document.querySelector('.inner-modal');
const modalImage = document.querySelector('.modal-image');
const modalCaption = document.querySelector('.modal-caption');

// Open modal image
imagePreviews.forEach((previewImage) => {
  previewImage.addEventListener('click', () => {
    modalImage.src = previewImage.src;
    modalCaption.innerHTML = previewImage.alt;

    bodyElement.classList.add('modal-on');
    innerModal.classList.add('open');
    modal.classList.add('open');
  });
});

// Close modal image
modal.addEventListener('click', (event) => {
  
  if (event.target.classList.contains('modal')) {
    bodyElement.classList.remove('modal-on');
    innerModal.classList.remove('open')
    modal.classList.remove('open');
  }
})