export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  return Object.values(source).reduce((first, second) => {
    return Number.parseInt(first, 10) + Number.parseInt(second, 10);
  });
}
