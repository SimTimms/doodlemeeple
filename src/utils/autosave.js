let timer = null;
function autosave(autosaveFunction) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    autosaveFunction();
  }, 500);
}

export default autosave;
