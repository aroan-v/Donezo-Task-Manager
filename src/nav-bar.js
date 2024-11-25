import todayIcon from './svg/today-icon.svg';
import overdueIcon from './svg/overdue-icon.svg';
import tomorrowIcon from './svg/tomorrow-icon.svg';
import somedayIcon from './svg/someday-icon.svg';
import importantIcon from './svg/important-icon.svg';
import allTasksIcon from './svg/all-tasks-icon.svg';

const navBarSection = document.createElement('section');
navBarSection.classList.add('nav-bar');
export default navBarSection;

const taskCategoryList = document.createElement('ul');
taskCategoryList.classList.add('task-category-list');

const navBar = [
  {
    category: 'Today',
    class: 'today',
    img: todayIcon,
    value: 0,
    ariaHidden: true,
  },
  {
    category: 'Overdue',
    class: 'overdue',
    img: overdueIcon,
    value: 0,
    ariaHidden: true,
  },
  {
    category: 'Tomorrow',
    class: 'tomorrow',
    img: tomorrowIcon,
    value: 0,
    ariaHidden: true,
  },
  {
    category: 'Someday',
    class: 'someday',
    img: somedayIcon,
    value: 0,
    ariaHidden: true,
  },
  {
    category: 'Important',
    class: 'important',
    img: importantIcon,
    value: 0,
    ariaHidden: true,
  },
  {
    category: 'All Tasks',
    class: 'all-tasks',
    img: allTasksIcon,
    value: 0,
    ariaHidden: true,
  },
];

navBar.forEach((item) => {
  taskCategoryList.appendChild(createListItem(item));
});

navBarSection.appendChild(taskCategoryList);

function createListItem(obj) {
  const taskCategoryItem = document.createElement('li');
  const taskCategoryButton = document.createElement('button');
  taskCategoryButton.className = `task-category__button ${obj.class}`;

  const categoryIconImage = document.createElement('img');
  categoryIconImage.src = obj.img;
  categoryIconImage.ariaHidden = true;
  categoryIconImage.alt = '';

  const taskCategoryCounter = document.createElement('span');
  taskCategoryCounter.className = `task-category__counter ${obj.class}`;
  taskCategoryCounter.textContent = obj.value;

  taskCategoryButton.append(
    categoryIconImage,
    obj.category,
    taskCategoryCounter
  );
  taskCategoryItem.appendChild(taskCategoryButton);

  return taskCategoryItem;
}
