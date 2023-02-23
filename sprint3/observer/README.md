app.js
theme.js (metodo para añadir usuario y emitir mensaje)
user.js (escribir mensaje al tema)


# !!!IN PROGRESS barebone structure!!!!

__The challenge:__ an app that creates different users, different themes, and subscribes the users to them. When a user adds a message to a theme, an alert is displayed on the console. All the subscribers to a theme (i.e who receive the message) are displayed to the console. Create a theme with a user and another one with two users, and show the reception of the messages of the users. 


# The Observer Pattern 

Observer is a __behavioral__ pattern.
This means that is concerned about __communication between objects__.

The pattern takes care of the communication between a __Subject__ (Observable / objects with methods) and multiple __observers__. The subject target is to notify observers the state changes. Observers can __subscribe__ to the subject to keep track of any change of state of the subject. Observers can __unsubscribe__ as well, stopping to watch the subject.

In Node.js the Observer Pattern is available through __EventEmitter__ class. (Module: events)
EventEmitter allows to register functions as listeners, that will be called when an specific event is fired.

The EventEmitter class is defined and exposed by the events module.

### Some methods available:
Observable: eventName 

Observers: listener. 

```
on(eventName:string, listener: Function):
```

Assigns a listener callback function to a named event.
No checks are made to see if the listener has already been added to the array list. 
Multiple calls passing the same combination results in the listener being added, and called, multiple times.

```
once(eventName:string, listener: Function) 
```
Adds a one-time listener function for the event named eventName. 
The next time eventName is triggered, this listener is removed and then invoked.

```
emit(eventName:string, [...args])
```
Announces a named event has occurred.
Synchronously passing the supplied arguments to each of the listeners by register order to the event.

```
removeListener(eventName:string, listener: Function)
```
Removes the specified listener from the listener array for the event named eventName.

A generic object observable created by extending the class Eventemitter, is the best solution most times. 








source list: https://itnext.io/the-observer-pattern-in-nodejs-c0cfffb4744a
https://betterprogramming.pub/the-observer-pattern-in-javascript-4f4e0b908d5e
