// TODO 20: 在这里写实现代码
import Person from './person';

export default class teacher extends Person {
  constructor(...args) {
    const [name, age, klass] = args;
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    if (this.klass == null) {
      return `${super.introduce()} I am a Teacher. I teach No Class.`;
    }
    return `${super.introduce()} I am a Teacher. I teach Class ${this.klass}.`;
  }
}
