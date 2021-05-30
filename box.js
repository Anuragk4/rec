class rec{
constructor(x,y,width,height){

var options={
    restutiton:1
}






this.body=Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body)

}

display(){
    var pos=this.bodyposition
    rectMode(CENTER)

    rect(pos.x,pos.y,this.width,this.height)
}
















}