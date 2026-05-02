export function GlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (event) => {
    const targetElement = event.target.closest(selector);
    if (targetElement) {
      callback(event, targetElement);
    }
  });
}
