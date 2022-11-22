export default class LogAttactForMagAndDaemon {
  constructor() {
    this.stoned = false;
  }

  get getAttact() {
    return this.attact;
  }

  set setValueAttact(distance) {
    this.attact -= (this.attact * (distance / 10));
    if (this.stoned) {
      // console.log(5 * Math.log2(distance + 1))
      this.attact -= (5 * Math.log2(distance + 1));
    }
  }

  set setStoned(value) {
    this.stoned = value;
  }

  get getStoned() {
    return this.stoned;
  }
}
