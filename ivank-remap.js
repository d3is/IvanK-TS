/*
Currently this file is required to remap some conflicting class names when working with TypeScript.
*/

function Event2(type, bubbles) {
    if (!bubbles) bubbles = false;
    this.type = type;
    this.target = null;
    this.bubbles = bubbles;
}

Event2.ENTER_FRAME = "enterFrame";
Event2.RESIZE = "resize";
Event2.COMPLETE = "complete";
Event2.ADDED_TO_STAGE = "addedToStage";
Event2.REMOVED_FROM_STAGE = "removedFromStage";//	package net.ivank.display;




function MouseEvent2(type, bubbles) {
    Event.call(this, type, bubbles);
}
MouseEvent2.prototype = new Event();

MouseEvent2.prototype.toString = function () {
    return "MouseEvent2 " + this.type;
}

MouseEvent2.MOUSE_MOVE = "mouseMove";
MouseEvent2.MOUSE_DOWN = "mouseDown";
MouseEvent2.MOUSE_UP = "mouseUp";

MouseEvent2.MOUSE_OVER = "mouseOver";
MouseEvent2.MOUSE_OUT = "mouseOut";




function KeyboardEvent2(type, bubbles) {
    Event.call(this, type, bubbles);

    this.altKey = false;
    this.ctrlKey = false;
    this.shiftKey = false;

    this.keyCode = 0;
    this.charCode = 0;
}
KeyboardEvent2.prototype = new Event();

KeyboardEvent2.prototype.toString = function () {
    return "KeyboardEvent2 " + this.type;
}

KeyboardEvent2.KEY_DOWN = "keyDown";
KeyboardEvent2.KEY_UP = "keyUp";