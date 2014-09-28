/**
 * Created by HaiNNT on 9/28/2014.
 */
function Map(){
  this.ready = true;
  this.background = new Image();
  this.background.onload = function(){
        this.ready = true;
    }
  this.background.src = STR_BACKGROUND_IMG;
  this.things = [];
}