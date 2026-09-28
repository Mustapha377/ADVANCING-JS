import setupDragAndDrop from "./dragAndDrop.js";
import { v4 as uuidv4 } from "uuid";

const STORAGE_PREFIX = "TRELLO_CLONE";
const LANES_STORAGE_KEY = `${STORAGE_PREFIX}_LANES`;
const DEFAULT_LANES = {
  backlogs: [{ id: uuidv4(), texts: "create your first tasks" }],
  doing: [],
  done: [],
};

const lanes = loadLanes();
renderTasks();

setupDragAndDrop(onDragComplete);

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
  element.innerHTML = task.texts;
  element.classList.add("task");
  element.dataset.draggable = true;
  return element;
}
