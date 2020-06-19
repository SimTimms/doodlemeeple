let timer = null;
function autosave(autosaveFunction, debugStr) {
  clearTimeout(timer);
  debugStr && console.log(debugStr);
  timer = setTimeout(() => {
    autosaveFunction();
  }, 500);
}

export default autosave;
