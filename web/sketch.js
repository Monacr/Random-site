
// If you come back do lagged fibonacci gen

function setup(){
  createCanvas(400,400);
  background('#a89d32');
}

function paintbuttonzero(){
  clear()
  background('#a89d32')
  for(var i = 1; i < 20; i++){
    for(var z = 1; z < 20; z++){
      fill(Math.random() * 250);
      stroke('#a89d32');
      circle(i * 20, z * 20, 20);
    }
  }
}

function paintbutton1(){
  clear()
  background('#a89d32')
  seed = document.getElementById('oneone').value;
  
  for(var i = 1; i < 20; i++){
    for(var z = 1; z < 20; z++){
      middleSquareMethod()
      fill(seed / 1000000 * 250);
      stroke('#a89d32');
      circle(i * 20, z * 20, 20);
    }
  }
}

function paintbutton2(){
  clear()
  background('#a89d32')
  seed = document.getElementById('twoone').value; 
  a = document.getElementById('twothree').value;
  m = document.getElementById('twotwo').value;
  if(m.includes('^')){
    m = Math.pow(parseInt(m.substr(0,m.indexOf('^'))), parseInt(m.substr(m.indexOf('^') + 1, m.length)));    
  }
  c = document.getElementById('twofour').value;
  
  for(var i = 1; i < 20; i++){
    for(var z = 1; z < 20; z++){
      num = linearCongruentialGenerator(seed, a, c, m)
      seed = num;
      fill(num * 250);
      stroke('#a89d32');
      
      circle(i * 20, z * 20, 20);
    }
  }
}

function paintbutton3(){
  clear()
  background('#a89d32')
  seed = document.getElementById('xor').value; 
  for(var i = 1; i < 20; i++){
    for(var z = 1; z < 20; z++){
      xorshift();
      x = parseInt(seed.toString().slice(1, 7));
      fill(x / 1000000 * 250);
      stroke('#a89d32');
      circle(i * 20, z * 20, 20);
    }
  }
}

function draw(){
  document.getElementById('btnone').addEventListener('click', paintbutton1)
  document.getElementById('btntwo').addEventListener('click', paintbutton2)
  document.getElementById('zerozero').addEventListener('click', paintbuttonzero)
  document.getElementById('threethree').addEventListener('click', paintbutton3)
}

function middleSquareMethod(){

  var result = (seed * seed).toString().slice(3, 9);
  seed = parseInt(result);

}


function linearCongruentialGenerator(seed, a, c, m){
  seed = (a * seed + c) % m
  return seed / m
}

function xorshift(){
  seed ^= seed << 13;
  seed ^= seed >> 17;
  seed ^= seed << 5;
  seed = (seed <0)?~seed+1:seed;
}


var modal = document.getElementById("myModal");

var btn = document.getElementById("help");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

