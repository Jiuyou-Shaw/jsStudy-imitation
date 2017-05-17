var DialogStyle = {
	mask: {
		'position': 'fixed',
		'top': 0,
		'left': 0,
		'right': 0,
		'bottom': 0,
		'font-size': '16px',
		'background': 'rgba(0, 0, 0,0.65)',
		'z-index':999
	},
	container: {
		'position': 'absolute',
		'top': '35%',
		'min-height': '6.250em',
		'width': '14.375em',
		'color': 'black',
		'background': 'white',
		'border-radius': '0.2em'
	},
	title: {
		'text-indent': '20px',
		'line-height': '35px',
		'border-bottom': '1px solid #eee'
	},
	content: {
		'padding': '15px',
		'min-height': '50px',
		'max-width': '300px',
		'font-size': '13px',
		'line-height': '1.2',
		'text-align': 'center',
		'color': '#888',
		'border-bottom': '1px solid #D5D5D6'
	},
	btns: {
		'display': '-webkit-flex',
		'display': 'flex'
	},
	btn: {
		'-webkit-flex': 1,
		'flex': 1,
		'height': '35px',
		'line-height': '35px',
		'border-right': '1px solid #D5D5D6',
		'text-align': 'center'
	}
}
function Dialog(opts) {                     //opts?
    if (!(this instanceof Dialog)) {        //?
        return new Dialog(opts);
    }
    this.title = opts.title || null;        //opts.title?
    this.content = opts.content || null;
    this.btns = opts.btns || null;
    this.init();
}
Dialog.prototype.init = function() {
    var SW = window.screen.width;
    var self = this;
    this.maskNode = document.createElement("div");
    this.addStyle(this.maskNode, DialogStyle.mask);         //this?
    this.container = document.createElement("div");     
    this.addStyle(this.container, DialogStyle.container);
    this.container.style.left = (SW - 230) / 2 + "px";
    if(this.title) {
        var titleNode = document.createElement("div");
        this.addStyle(titleNode, DialogStyle.title);        //this?
        titleNode.innerHTML = this.title;                   //this.title="这里是标题"? Dialog({});和function Dialog, Dialog.prototype是什么关系?
        this.container.appendChild(titleNode);
    }
    if(this.content) {
        var contentNode = document.createElement("div");
        this.addStyle(contentNode, DialogStyle.content);
        contentNode.innerHTML = this.content;
        this.container.appendChild(contentNode);
    }
    if(this.btns) {
        var btnsNode = document.createElement("div");
        this.addStyle(btnsNode, DialogStyle.btns);
        for(let i in this.btns) {                           //this.btns
            var btn = document.createElement("div");
            this.addStyle(btn, DialogStyle.btn);
            btn.innerHTML = this.btns[i].value;
            btn.addEventListener("click", function() {
                self.btns[i].callback();
                self.close(self);                           
            }, false);
            btnsNode.appendChild(btn);
        }
        this.container.appendChild(btnsNode);
    }
    this.maskNode.appendChild(this.container);
    document.querySelector("body").appendChild(this.maskNode);
};
Dialog.prototype.addStyle = function(ele, style) {
    for(var item in style) {
        ele.style[item] = style[item];
    }
};
Dialog.prototype.close = function(self) {
    document.querySelector("body").removeChild(self.maskNode);          //self
    self = null;                                                        //null?
};
