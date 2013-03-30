class Bitmap extends InteractiveObject {
    bitmapData: BitmapData;
    constructor(bData: BitmapData);
}

class BitmapData {
    width: number;
    height: number;
    rect: Rectangle;
    loader: EventDispatcher;
    setPixels(r: Rectangle, srcAr: ArrayBufferView);
    getPixels(r: Rectangle, tgtAr?: ArrayBufferView);
    draw(o: DisplayObject);
    empty(w: number, h: number): BitmapData;
    constructor(url: string);
}

class DisplayObject extends EventDispatcher {
    alpha: number;
    mouseX: number;
    mouseY: number;
    parent: DisplayObjectContainer;
    rotation: number;
    scaleX: number;
    scaleY: number;
    stage: Stage;
    visible: bool;
    x: number;
    y: number;
    getBounds(tcs: DisplayObject): Rectangle;
    getRect(tcs: DisplayObject): Rectangle;
    globalToLocal(p: Point): Point;
    localToGlobal(p: Point): Point;
    hitTestPoint(x: number, y: number): Boolean;
    hitTestObject(o: DisplayObject): Boolean;
    GetWidth(): number;
    GetHeight(): number;
    SetWidth(w: number);
    SetHeight(h: number);
    static ADDED_TO_STAGE: string;
    static REMOVED_FROM_STAGE: string;
    static ENTER_FRAME: string;
}

class DisplayObjectContainer extends InteractiveObject {
    numChildren: number;
    mouseChildren: bool;
    addChild(o: DisplayObject);
    removeChild(o: DisplayObject);
    contains(o: DisplayObject): bool;
    getChildIndex(o: DisplayObject): number;
    setChildIndex(o: DisplayObject, i: number);
    getChildAt(i: number): DisplayObject;
    removeChildAt(i: number);
}

class Graphics {
    lineStyle(width: number, color: number, alpha?: number);
    beginBitmapFill(bd: BitmapData);
    beginFill(color: number, alpha: number);
    curveTo(cX: number, cY: number, aX: number, aY: number);
    cubicCurveTo(cX1: number, cY1: number, cX2: number, cY2: number, aX: number, aY: number);
    endFill();
    moveTo(x: number, y: number);
    lineTo(x: number, y: number);
    drawCircle(x: number, y: number, radius: number);
    drawEllipse(x: number, y: number, width: number, height: number);
    drawRect(x: number, y: number, width: number, height: number);
    drawRoundRect(x: number, y: number, w: number, h: number, elWidth: number, elHeight: number);
    drawTriangles(verices: Array, indices: Array, uvt: Array);
    clear();
}

class InteractiveObject extends DisplayObject {
    buttonMode: bool;
    mouseEnabled: bool;
    static CLICK: string;
    static MOUSE_UP: string;
    static MOUSE_DOWN: string;
    static MIDDLE_CLICK: string;
    static MIDDLE_MOUSE_UP: string;
    static MIDDLE_MOUSE_DOWN: string;
    static RIGHT_CLICK: string;
    static RIGHT_MOUSE_UP: string;
    static RIGHT_MOUSE_DOWN: string;
    static MOUSE_OVER: string;
    static MOUSE_OUT: string;
    static MOUSE_MOVE: string;
}

class MBitmap extends Bitmap {
    currentFrame: number;
    totalFrames: number;
    gotoAndStop(i: number);
    nextFrame();
    prevFrame();
    constructor(bdata: BitmapData, rows: number, cols: number);
}

class Sprite extends DisplayObjectContainer {
    graphics: Graphics;
}

class Stage extends DisplayObjectContainer {
    stageWidth: number;
    stageHeight: number;
    focus: InteractiveObject;
    static RESIZE: string;
    constructor(canvID: string);
}

class Point {
    x: number;
    y: number;
    clone(): Point;
    copyFrom(p: Point);
    setTo(x: number, y: number);
    static distance(a: Point, b: Point): number;
    constructor(x: number, y: number);
}

class Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
    clone(): Rectangle;
    contains(x: number, y: number): bool;
    containsPoint(p: Point): bool;
    copyFrom(r: Rectangle);
    intersects(r: Rectangle): bool;
    union(r: Rectangle): Rectangle;
}


class Event2 {
    bubbles: bool;
    currentTarget: EventDispatcher;
    target: EventDispatcher;
    type: string;
    static ENTER_FRAME: string;
    static COMPLETE: string;
    static CHANGE: string;
    static RESIZE: string;
    static ADDED_TO_STAGE: string;
    static REMOVED_FROM_STAGE: string;
    constructor(type: string, bubbles: bool);
}

class EventDispatcher {
    addEventListener(t: String, f: Function);
    addEventListener2(t: String, f: Function, o: Object);
    hasEventListener(t: String): Boolean;
    removeEventListener(t: String, f: Function);
    dispatchEvent(e: Event);
}

class MouseEvent2 extends Event2 {
    static MOUSE_MOVE: String;
    static CLICK: String;
    static MOUSE_UP: String;
    static MOUSE_DOWN: String;
    static MIDDLE_CLICK: String;
    static MIDDLE_MOUSE_UP: String;
    static MIDDLE_MOUSE_DOWN: String;
    static RIGHT_CLICK: String;
    static RIGHT_MOUSE_UP: String;
    static RIGHT_MOUSE_DOWN: String;
    static MOUSE_OVER: String;
    static MOUSE_OUT: String;
}

class KeyboardEvent2 extends Event2 {
    altKey: bool;
    ctrlKey: bool;
    shiftKey: bool;
    keyCode: number;
    charCode: number;
    static KEY_DOWN: String;
    static KEY_UP: String;
}


class TextField extends DisplayObject {
    text: string;
    width: number;
    height: number;
    textWidth: number;
    textHeight: number;
    wordWrap: bool;
    setTextFormat(tf: TextFormat);
    getTextFormat(): TextFormat;
}

class TextFormat {
    font: string;
    size: number;
    color: number;
    bold: bool;
    italic: bool;
    align: string;
    leading: number;
    constructor(font: string, size: number, color: number, bold: bool, italic: bool, align: string, leading: number);
}

class TextFormatAlign {
    LEFT: string;
    CENTER: string;
    RIGHT: string;
    JUSTIFY: string;
}
