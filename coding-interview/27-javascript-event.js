// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};     //manipulate the events
  }
  
  // Register an event handler
  on(eventName, callback) {   //eventName as string with a callback function
    if (this.events[eventName]) {   //if the value already exist
      this.events[eventName].push(callback);    //push the callback
    } else {
      this.events[eventName] = [callback];    //contains only callbacks
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {    //trigger the event
    if (this.events[eventName]) {   //if it exists
      for (let cb of this.events[eventName]) {
        cb();     //execute the callbacks
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {     //remove the entire key with value array (callbacks) exist there
    delete this.events[eventName];
  }
}

module.exports = Events;
