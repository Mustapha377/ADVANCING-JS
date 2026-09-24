export default function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (event) => {
    if (event.target.matches(selector)) {
      callback(event);
    }
  });
}
