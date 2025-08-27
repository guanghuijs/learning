window.electron.ipcRenderer.on('main-to-renderer', (e, data) => {
  let text = document.getElementsByClassName('text')[0];
  let info = document.querySelector('.info');
  let updateShade = document.querySelector('.update-shade');
  if (
    [
      'checking-for-update',
      'update-available',
      'update-not-available',
      'update-downloaded',
      'download-progress',
      'update-type'
    ].includes(data.name)
  ) {
    text.innerText = data.msg;
    if (data.name === 'update-available') {
      updateShade.classList.add('show');
    }
  } else {
    const div = document.createElement('div');
    div.innerText = JSON.stringify(data.msg);
    info.appendChild(div);
  }

  const btns = document.querySelectorAll('.btn');
  for (let i = 0; i < btns.length; ++i) {
    btns[i].addEventListener('click', (e) => {
      e.stopImmediatePropagation();
      window.electron.ipcRenderer.invoke('renderer-to-main', i);
    });
  }
});
