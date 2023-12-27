function slidingUserWindow() {
  const userIcon = document.querySelector('#profile');
  const userPopup = document.querySelector('#user_window');
  document.addEventListener('click', () => userPopup.classList.add('hidden'));
  userIcon.addEventListener('click', (event) => event.stopPropagation());
  userIcon.addEventListener('click', () => userPopup.classList.remove('hidden'));
}

