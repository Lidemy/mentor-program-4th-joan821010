const applyForm = document.querySelector('.apply-form');
applyForm.addEventListener('submit', (e) => {
  const ans = [];
  ans[0] = document.querySelector("input[name='nickname']").value;
  ans[1] = document.querySelector("input[name='email']").value;
  ans[2] = document.querySelector("input[name='phone']").value;
  const type1 = document.querySelectorAll("input[name='type']")[0].checked;
  const type2 = document.querySelectorAll("input[name='type']")[1].checked;
  if (type1) {
    ans[3] = document.querySelectorAll("input[name='type']")[0].value;
  }
  if (type2) {
    ans[3] = document.querySelectorAll("input[name='type']")[1].value;
  }
  ans[4] = document.querySelector("input[name='referral']").value;
  ans[5] = document.querySelector("input[name='other']").value;

  if (!ans[0] || !ans[1] || !ans[2] || !ans[3] || !ans[4]) {
    e.preventDefault();
  }

  for (let i = 0; i < ans.length - 1; i += 1) {
    if (!ans[i]) {
      const reminder = document.querySelectorAll('.input-block__reminder')[i];
      reminder.innerText = '請填寫資料';
    }
    if (ans[i]) {
      const reminder = document.querySelectorAll('.input-block__reminder')[i];
      reminder.innerText = '';
    }
  }

  if (ans[0] && ans[1] && ans[2] && ans[3] && ans[4]) {
    const titles = document.querySelectorAll('.input-block__title');
    let display = '';
    for (let i = 0; i < titles.length; i += 1) {
      display += `${titles[i].innerText} ${ans[i]} \n`;
    }
    alert(display);
  }
});
