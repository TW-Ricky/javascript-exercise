export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  return collection.filter(item => item.match('粤A\\d{5}')).length;
}
