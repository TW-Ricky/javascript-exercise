// TODO 16: 在这里写实现代码
import Person from './person';

export default class student extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    return `${super.basicIntroduce()} I am a Student. I am at Class ${this.klass}.`;
  }
}
