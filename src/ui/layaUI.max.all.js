var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var testUI=(function(_super){
		function testUI(){
			

			testUI.__super.call(this);
		}

		CLASS$(testUI,'ui.testUI',_super);
		var __proto__=testUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(testUI.uiView);

		}

		testUI.uiView={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":64,"x":49,"width":256,"skin":"comp/bg.png","height":199}},{"type":"Button","props":{"y":236,"x":71,"width":211,"skin":"comp/button.png","sizeGrid":"0,0,0,0","rotation":0,"labelSize":50,"labelFont":"SimSun","labelColors":"#a2b546","label":"我的你","height":118}},{"type":"ProgressBar","props":{"y":298,"x":347,"width":212,"skin":"comp/progress.png","pivotY":1,"pivotX":8,"height":14}}]};
		return testUI;
	})(View);