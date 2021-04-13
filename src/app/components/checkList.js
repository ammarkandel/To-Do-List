function CheckList(title, description, dueDate, priority) {
  const printTitle = title;
  const printDesc = description;
  const printDate = dueDate;
  const printPriority = priority;
  return {
    printTitle,
    printDesc,
    printDate,
    printPriority
  };
}

export default CheckList;
