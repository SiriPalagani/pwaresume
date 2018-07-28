// function Loadjson(file,callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status =="200"){
//       callback(xhr.responseText);
//     }
//   };
//   xhr.send(null);
// }
//
// Loadjson("data.json",function(text){
//   var data= JSON.parse(text);
//   console.log(data);
//   basics(data.details);
//   careerinfo(data.career);
//   education(data.education);
//   skills(data.skills);
//   achivements(data.achivements);
// })
function Loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if (response.ok) {
        resolve(response.json());
      }
      else {
        reject(new Error('error'));
      }
    })
  })
}
var newfile = Loadjson("data.json");
newfile.then(data=>{
  console.log(data);
    basics(data.details);
    careerinfo(data.career);
    education(data.education);
    skills(data.skills);
    achivements(data.achivements);

})
var child1 = document.querySelector(".childone");
function basics(det){
  var image = document.createElement("img");
  image.src = det.image;
  child1.appendChild(image);

  var name = document.createElement("h3");
  name.textContent = det.name;
  child1.appendChild(name);

  var number = document.createElement("h4");
  number.textContent = det.number;
  child1.appendChild(number);

  var email = document.createElement("a");
  email.herf = "siripalagani@gmail.com";
  email.textContent = det.email;
  child1.appendChild(email);

  var add = document.createElement("h2");
  add.textContent = det.address;
  child1.appendChild(add);
}

var child2 = document.querySelector(".childtwo");
function careerinfo(info){
  var heading = document.createElement("h2");
  heading.textContent = "Career objective";
  child2.appendChild(heading);
  var hr = document.createElement("hr");
  child2.appendChild(hr);
  var c = document.createElement("p");
  c.textContent = info.info;
  child2.appendChild(c);
}

  function education(edu){
    var hd = document.createElement("h2");
    hd.textContent="Educational qualification";
    child2.appendChild(hd);

    var hr = document.createElement("hr");
    child2.appendChild(hr);

    var table1 = document.createElement("table");
    table1.border = "1";
    child2.appendChild(table1);

    tabledata=" ";
    for (i=0;i<edu.length;i++) {
      tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";
    }
    table1.innerHTML=tabledata;
    }
    function skills(skillinfo) {
      var hd = document.createElement("h2");
      hd.textContent="Technical Skills";
      child2.appendChild(hd);

      var hr = document.createElement("hr");
      child2.appendChild(hr);

      for (i = 0; i < skillinfo.length; i++) {
        var title = document.createElement("h4");
        title.textContent = skillinfo[i].title;
        child2.appendChild(title);

        var eduul = document.createElement("ul");
        var eduli = document.createElement("li");
        eduli.textContent = skillinfo[i].info;
        eduul.appendChild(eduli);
        child2.appendChild(eduul);
      }
    }
function achivements(ach){
  var hd = document.createElement("h2");
  hd.textContent="Achivements";
  child2.appendChild(hd);

  var hr = document.createElement("hr");
  child2.appendChild(hr);
  for(i=0;i<ach.length;i++){
    var title = document.createElement("h4");
    title.textContent =ach[i].title;
    child2.appendChild(title);

    var eduul = document.createElement("ul");
    var eduli = document.createElement("li");
    eduli.textContent = ach[i].info;
    eduul.appendChild(eduli);
    child2.appendChild(eduul);
  }
}
function openpage(){
  window.open("resume.html", "_self",true)
}
