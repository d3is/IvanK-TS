/// <reference path="lib/ivank.d.ts" />

window.onload = () => {
    var stage: Stage;
    var p: Point = new Point(0, 0);
    var cur;

    stage = new Stage("c");

    
    var bd = new BitmapData("images/ball.png");

    for (var i = 0; i < 20; i++) {
        var b = new Bitmap(bd);
        b.x = Math.random() * 900;
        b.y = Math.random() * 500;
        b.buttonMode = true;
        b.alpha = 0.7;
        stage.addChild(b);

        b.addEventListener(MouseEvent2.MOUSE_OVER, onMOv);
        b.addEventListener(MouseEvent2.MOUSE_OUT, onMOu);
        b.addEventListener(MouseEvent2.MOUSE_DOWN, onMD);
        b.addEventListener(MouseEvent2.MOUSE_UP, onMU);
    }

    stage.addEventListener(MouseEvent2.MOUSE_MOVE, onMM);

    function onMOv(e) { e.target.alpha = 1.0; }
    function onMOu(e) { e.target.alpha = 0.7; }
    function onMD(e) { cur = e.target; p.x = cur.mouseX; p.y = cur.mouseY; }
    function onMU(e) { cur = null; }
    function onMM(e) {
        if (cur == null) return;
        cur.x = stage.mouseX - p.x;
        cur.y = stage.mouseY - p.y;
    }
};

