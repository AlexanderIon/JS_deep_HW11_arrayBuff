import LogAttactForMagAndDaemon from './log_trig.js';

export default class Daemon extends LogAttactForMagAndDaemon {
  constructor(stoned, name, health, attact, level) {
    super(stoned);
    this.name = name;
    this.health = health;
    this.attact = attact;
    this.level = level;
  }
}
