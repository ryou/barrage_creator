export default class FixedQueue {
  constructor(inLength) {
    this.length = inLength;
    this.array = [];
  }

  enqueue(data) {
    this.array.push(data);

    if (this.array.length > this.length) {
      this.array.shift();
    }
  }

  get() {
    return this.array;
  }
}
