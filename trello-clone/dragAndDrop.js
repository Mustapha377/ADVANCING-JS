import addGlobalEventListener from "./utils/addGlobalEventListener";

export default function setup() {
  addGlobalEventListener("mousedown", "[data-draggable]", (e) => {
    console.log("mousedown");
  });
}
