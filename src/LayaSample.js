init();
function init() {
    Laya.init(1080, 1920);
    Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
    Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
    Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
    Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;

    createHelloWorld();
    loadImage();
    loadUIView();
}

function createHelloWorld() {
    var textView = new Laya.Text();
    textView.text = "Hello World";
    textView.color = "#32b7b9";
    textView.fontSize = 100;
    textView.pos(Laya.stage.width/2,Laya.stage.height/2);
    textView.pivot(textView.width/2,textView.height/2);
    Laya.stage.addChild(textView);
}

function loadImage() {
    var image = new Laya.Image("img/a.jpg");
    image.size(Laya.stage.width,Laya.stage.height/2 - 100);
    Laya.stage.addChild(image);
}

function loadUIView() {
    Laya.loader.load("res/atlas/comp.atlas",Laya.Handler.create(null,onLoaded),null,Laya.Loader.ATLAS);
}

function onLoaded() {
    console.log("load onLoaded");
    Laya.stage.addChild(new testUI());
}


