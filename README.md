Auto Scroll jQeury Plugin
=========================
This is a simple Plugin helps you generate a Scrolling Banner.
Install
-------
```javascript
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script type="text/javascript" src="Path/to/auto_scroll_jquery_plugin.js"></script>
```
How to Use:
-----------
```javascript
$("#hock").autoScroll({
      width:937,
      height:275,
      delay:3000,
      speed:1000
      });
}
```
As you loaded the plugin, you get a function called autoScroll. 
Thif function gets 3 arguments: width, height and delay.
**width**  : specify the width for all images displayed in the element you specified(#hock here)
**height** : specify the height for all images displayed in the element you specified(#hock here)
**delay**  : specify the time between two scrolling animations. 3000 means every image will show in the banner for 3 seconds. 
**speed**  : specify the time during one scrolling animation. 1000 means every image will show in the banner for 1 seconds. 
If you do not specify the argument, The plugin will make the first image's size as the standard size. For example, the first image's width is 100 and its' height is 150, you will get a banner in the size 100 * 150.
The default delay is 2000(2 seconds) and the default speed is 1000(1 seconds)

Usage:
-----
```html
  <div id="banner">
    <a href='#'><img alt="banner" src="images/index.jpg" /></a>
    <a href='#'><img alt="banner" src="images/office.jpg" /></a>
    <a href='#'><img alt="banner" src="images/household.jpg" /></a>
    <a href='#'><img alt="banner" src="images/outerdoor.jpg" /></a>
  </div>
```

Make sure that you have loaded jquery and the plugin file before.
What you need to do is just put image elements in a div.
You can even remove a tags, leaving img tags listed alone.

```javascript
<script type="text/javascript">
  $(document).ready(function(){
    $("#banner").autoScroll({
      width:937,
      height:275,
      delay:3000
      });
  })
</script>
```

Demo:
-----
[http://codes.jndchina.com/demo.html] (http://codes.jndchina.com/demo.html)