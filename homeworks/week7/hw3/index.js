/* eslint-disable no-useless-return */
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

document.querySelector('.submit-form').addEventListener('submit', (e) => {
  e.preventDefault();
  if (document.querySelector("[type='text']").value) {
    const input = document.querySelector("[type='text']").value;
    const div = document.createElement('div');
    div.classList.add('note-list__item');
    div.innerHTML = `
      <label><input class="checkbox" type="checkbox">${escapeHtml(input)}</label>
      <button class="btn-del">delete</button>
    `;
    document.querySelector('.note-list').appendChild(div);
    document.querySelector("[type='text']").value = '';
  } else {
    return;
  }
});


document.querySelector('.note-list').addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-del')) {
    document.querySelector('.note-list').removeChild(e.target.closest('.note-list__item'));
    return;
  }

  if (e.target.classList.contains('checkbox')) {
    if (e.target.checked) {
      e.target.parentNode.parentNode.classList.toggle('done');
    } else {
      e.target.parentNode.parentNode.classList.toggle('done');
    }
  }
});
