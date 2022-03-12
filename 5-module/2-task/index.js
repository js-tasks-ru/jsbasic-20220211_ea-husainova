function toggleText() {
  let toggleTextButton = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');
  toggleTextButton.addEventListener('click', function() {
    text.hidden = !text.hidden;
  });
}
