function forLoop(array){
  for (var i = 0; i <= 25; i++){
    if (i == 1) {
      array = ["I am " + i + " strange loop.\n"]
    } else {
      array += ["I am " + i + " strange loops.\n"]
    }
  }
}
