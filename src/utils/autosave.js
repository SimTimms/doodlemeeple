let timer = null;
function autosave(autosaveFunction, identifier) {
  console.log(identifier);
  clearTimeout(timer);
  timer = setTimeout(() => {
    autosaveFunction();
  }, 500);
}

export default autosave;
