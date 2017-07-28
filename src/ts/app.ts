namespace module1 {
    export class span{
        constructor(private element:JQuery){}

        public setText(text:string){
            this.element.text(text);
        }   
    }
}

$(function(){
  var span1 = new module1.span($('#wd'));
  var span2 = new module1.span($('#hi'));
  
  span1.setText('' + innerWidth);
  span2.setText('' + innerHeight);
});