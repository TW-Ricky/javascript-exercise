export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  let personName;
  collection.forEach(item => {
    if (item.age > 10 && item.age <= 20) {
      personName = item.name;
    }
  });
  return personName;
}
