/*
Version: 1.0
Author:  suffering
Email:   zhuboliu@gmail.com
*/
(function($){
 jQuery.fn.extend({
  autoScroll:function(obj){
  var widths,heights,delay,speed,num,_this,_ul,myTimmer,index,style,style_hover
    index=0;
    /*读取或设置默认参数*/     
    widths=obj.width?parseInt(obj.width,10):_this.find("img:first").width();//读取盒子的尺寸，或者将之设置为第一张图片的尺寸。
    heights=obj.height?parseInt(obj.height,10):_this.find("img:first").height();
    delay=obj.delay?parseInt(obj.delay,10):2000;//读取或设置滚动时间间隔。
    speed=obj.speed?parseInt(obj.speed,10):1000; //读取或者设置默认滚动速度。
    /*设置页数按钮样式*/
    style={float:"left",color:"#FF7300",textAlign:"center",lineHeight:"16px",width:"16px",height:"16px",fontFamily:"Arial",fontSize:"12px",cursor:"pointer",overflow:"hidden",margin:"3px 1px",border:"1px solid #FF7300",background:"#fff"}
    style_hover={color:"#fff",lineHeight:"21px",width:"21px",height:"21px",fontSize:"16px",margin:"0 1px",border:"0",background:"#FF7300",fontWeight:"bold"}//丑陋的行内样式,用于设置 index数字的样式。
    $(this).wrapInner("<div id='_innerbox'></div>");//插入运动的盒子。
    $(this).find("*").css({padding:0,border:0,margin:0})//去掉默认盒子样式。
    $(this).css({overflow:"hidden",width:widths,height:heights,position:"relative"})
    
    _this=$("#_innerbox");
     num=_this.find("img").length;
     _this.find("img").css({width:widths,height:heights})
     _this.css({position:'absolute',overflow:'hidden',whiteSpace:'nowrap' });
     _this.find("a img").css({display:"block"})//display:block用于解决IE下图片出现一像素空白的情况。此外还可以使用vertical-align:top来解决。
    //添加按钮
     _this.parent().append("<ul id='num_ul'></ul>")
    _ul=$("#num_ul")
    $("#num_ul").css({position:'absolute',right:'1em',bottom:'1em'})
    for(var i=1;i<=num;i++){
      _ul.append("<li>"+i+"</li>");
    }

    $("#num_ul li").css(style)

    /*设置鼠标触发滚动行为*/
    $("#num_ul li").mouseover(function(){
      index=$("#num_ul li").index(this);
      showImg(index);
      clearInterval(myTimmer);
    })

    _this.hover(
      function(){
        if(myTimmer) clearInterval(myTimmer)
      },function(){
        myTimmer=setInterval(function(){
          showImg(index);
          index++;
          if(index==num) index=0;
        },delay)
      }
    )

    function showImg(i){
      _this.stop(true,false).animate({top:-heights*i},speed);
      _ul.find("li").eq(i).css(style_hover).siblings().css(style);
    }
    /*设置自动滚动行为*/
    myTimmer=setInterval(function(){
      showImg(index);
      index++;
      if(index==num) index=0;
    },delay)
  }//end of the autoScroll
 })
})(jQuery)