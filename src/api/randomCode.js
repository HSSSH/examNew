window.Captcha = captcha;

function captcha(canvas){
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.x = this.width / 5;
    this.y = this.height / 2;
    this.cvs = canvas.getContext("2d");
    this.color = "#333";
    this.cvs.font = '25px bold sans-serif';
    this.str = '';
    this.colors = ['#247ad6', '#3c763d', '#a94442', '#e02b28', '#333'];
}

captcha.prototype.getNumber = function(){ //生成随机数字

    this.cvs.clearRect(0, 0, this.width, this.height);
    this.str = '';
    
    for(var i = 1; i < 5; i++ ){
        var str = parseInt( Math.random() * 10 );
        this.str += str;
        this.draw({text: str ,x: this.x * i ,y:this.y});
    }

}

captcha.prototype.getvarter = function(){ //生成随机字母

    this.cvs.clearRect(0, 0, this.width, this.height)
    this.str = ''

    for( var i = 1; i<5; i++ ){
        var str = String.fromCharCode(65 + parseInt(Math.random() * (91-65)));
        this.str += str;
        this.draw({text: str ,x: this.x * i ,y:this.y});
    }
}

captcha.prototype.NumberOrvarter = function(){ //生成随机数字字母组合

    this.cvs.clearRect(0, 0, this.width, this.height);
    this.str = '';

    for( var i = 1; i < 5; i++ ){
        var a = parseInt(Math.random() * 10);
        var str = '';
            str = a>5 ? String.fromCharCode(  65 + parseInt(Math.random() * (91-65)) ) : parseInt( Math.random() * 10 );
        this.str += str;
        this.draw({text: str ,x: this.x * i ,y:this.y});
    }

}

captcha.prototype.character = function(){  //随机汉字

    this.cvs.clearRect(0,0,this.width,this.height)
    this.str = ''
    for( var i=1;i<5;i++ ){
        var str = eval('"\\u' + (Math.round(Math.random() * 20901) + 19968).toString(16)+'"')
        this.str += str
        this.draw({text: str ,x: this.x * i ,y:this.y})
    }
}

captcha.prototype.setCode = function(str){

    if(typeof str === 'string' || typeof str === 'number'  ){
        str += ''
        this.str = ''
        this.str = str
        this.x = this.width / (str.length+1)
        for( var i=1; i < str.length +1; i++ ){
            this.draw( {text:str[i-1],x:this.x*i,y:this.y} )
        }
    }else{
        console.error("arguments is not string or number")
    }
}

captcha.prototype.disturb = function(){ //混淆背景

    for( var i = 0; i < 500; i++ ){

        var start = {
            x: parseInt( Math.random()*this.width ),
            y: parseInt( Math.random()*this.height )
        }	
        
        this.cvs.beginPath();
        this.cvs.moveTo(start.x, start.y);
        this.cvs.lineTo(start.x + 1, start.y + 1);
        this.cvs.strokeStyle = this.colors[Math.round(Math.random()*5)] || 'red';
        this.cvs.stroke();
        this.cvs.closePath();
    }

}

captcha.prototype.draw = function(obj){ //绘制
    
    this.cvs.save();
    this.cvs.beginPath();
    this.cvs.fillStyle = this.colors[Math.round(Math.random()*5)] || '#333';
    this.cvs.textAlign = 'center';
    this.cvs.textBaseline = 'middle';
    this.cvs.font = "25px bold sans-serif";
    this.cvs.translate(obj.x, obj.y);
    var rotate = (Math.PI/6)*Math.random()*(-1* Math.round(Math.random()*10)%2+0);
    this.cvs.rotate(rotate);
    this.cvs.translate(-obj.x, -obj.y);
    this.cvs.fillText(obj.text,obj.x,obj.y);
    this.cvs.closePath();
    this.cvs.restore();
}