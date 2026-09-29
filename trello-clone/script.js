import addGlobalEventListener from "./utils/addGlobalEventListener";
import setupDragAndDrop from "./dragAndDrop.js";
import { v4 as uuidv4 } from "uuid";

const STORAGE_PREFIX = "TRELLO_CLONE";
const LANES_STORAGE_KEY = `${STORAGE_PREFIX}_LANES`;
const DEFAULT_LANES = {
  backlogs: [{ id: uuidv4(), text: "create your first tasks" }],
  doing: [],
  done: [],
};

const lanes = loadLanes();
renderTasks();

setupDragAndDrop(onDragComplete);

addGlobalEventListener("submit", "[data-task-form]", (e) => {
  e.preventDefault();

  const taskInput = e.target.querySelector("[data-task-input]");
  const taskText = taskInput.value;
  if (taskText === "") return;

  const task = { id: uuidv4(), text: taskText };
  const laneElement = e.target.closest(".lane").querySelector("[data-lane-id]");
  lanes[laneElement.dataset.laneId].push(task);

  const taskElement = createTaskElement(task);
  laneElement.append(taskElement);
  taskInput.value = "";

  saveLanes();
});

function onDragComplete(e) {
  const startLaneId = e.startZone.dataset.laneId;
  const endLaneId = e.endZone.dataset.laneId;
  const startLaneTasks = lanes[startLaneId];
  const endLaneTasks = lanes[endLaneId];

  const task = startLaneTasks.find((task) => task.id === e.dragElement.id);
  startLaneTasks.splice(startLaneTasks.indexOf(task), 1);
  endLaneTasks.splice(e.index, 0, task);

  saveLanes();
}

function loadLanes() {
  const lanesJson = localStorage.getItem(LANES_STORAGE_KEY);
  return JSON.parse(lanesJson) || DEFAULT_LANES;
}

function saveLanes() {
  localStorage.setItem(LANES_STORAGE_KEY, JSON.stringify(lanes));
}

function renderTasks() {
  Object.entries(lanes).forEach((obj) => {
    const [laneId, tasks] = obj;
    const lane = document.querySelector(`.tasks[data-lane-id="${laneId}"]`);
    tasks.forEach((task) => {
      const taskElement = createTaskElement(task);
      lane.append(taskElement);
    });
  });
}

function createTaskElement(task) {
  const element = document.createElement("div");
  element.id = task.id;
  element.innerHTML = task.text;
  element.classList.add("task");
  element.dataset.draggable = true;
  return element;
}
