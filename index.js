function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").getElementsByClassName("target")[0]
}

function increaseRankBy(n){
 var list =  document.querySelectorAll("ul.ranked-list li")
  for(let i = 0; i < list.length; i++){
   list[i].innerHTML =  (parseInt(list[i].innerHTML) + n).toString()
   console.log(list[i])
  }
}

function deepestChild(){
  var innerLevel = document.getElementById("grand-node").querySelectorAll("div")
  for(var i = 0; i < innerLevel.length; i++){
    if(innerLevel[i].childElementCount === 0){
      return innerLevel[i]
      }
  }
}