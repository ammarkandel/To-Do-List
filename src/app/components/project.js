import CheckList from './checkList';

function Project(name, checkList) {
  const projectName = name;
  const list = checkList;
  return { projectName, list }
}

export default Project;
