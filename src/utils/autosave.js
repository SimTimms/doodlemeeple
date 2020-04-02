let timer = null;
function autosave(autosaveFunction, identifier) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    autosaveFunction();
  }, 500);
}

export default autosave;
