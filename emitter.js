/*

Write an emitter class:

emitter = new Emitter();

//  1. Support subscribing to events.
sub1 = emitter.subscribe('event_name', callback1);
sub2 = emitter.subscribe('event_name', callback2);

// 2. Support emitting events.
This particular example should lead to the `callback` above being invoked
with `foo` and `bar` as parameters.emitter.emit('event_name', foo, bar);

// 3. Support unsubscribing existing subscriptions by releasing 
them.sub.release(); 

`sub` is the reference returned by `subscribe` above

*/


class EventEmitter {
  constructor() {
    this.events = {};
  }
}

subscribe(eventName, fn) {
  if(!this.events[eventName]) {
     this.events[eventName] = [];
  }
  this.events[eventName].push(fn);
  
  return () => {
    this.events[eventName] = this.events[eventName].filter(eventFn => fn !== eventFn);
  }
}

emit(eventName, data) {
  const event = this.events[eventName];
  if (event) {
    event.forEach(fn => {
      fn.call(null, data);
    });
  }
}

let unsubscribe = emitter.subscribe(eventName, fn);
unsubscribe();