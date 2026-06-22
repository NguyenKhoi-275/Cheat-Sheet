const data=[


{
title:"🐙 Git",

cmd:[

["git status","Check trạng thái"],

["git add .","Add code"],

["git commit -m msg","Commit"],

["git push","Push Github"],

["git pull","Update code"]

]

},



{
title:"🟢 NodeJS / NPM",

cmd:[

["node -v","Node version"],

["npm install","Install package"],

["npm run dev","Run project"],

["npm build","Build app"],

["npm test","Test code"]

]

},



{
title:"🐳 Docker",

cmd:[

["docker ps","List container"],

["docker images","Images"],

["docker build","Build"],

["docker logs id","Logs"],

["docker stop id","Stop"]

]

},



{
title:"☸ Kubernetes",

cmd:[

["kubectl get pods","Show pods"],

["kubectl logs pod","Logs"],

["kubectl apply -f yaml","Deploy"]

]

},




{
title:"🐧 Linux",

cmd:[

["ls -la","List file"],

["cd folder","Move"],

["mkdir app","Create folder"],

["rm file","Delete"],

["top","System monitor"]

]

}



];



let app=document.querySelector("#app");



function load(search=""){


app.innerHTML="";


data.forEach(x=>{


let html=`

<div class="card">

<h2>${x.title}</h2>

`;



x.cmd.forEach(c=>{


if(c[0].includes(search)){


html+=`

<div class="cmd">

${c[0]}

<button onclick="copy('${c[0]}')">
COPY
</button>


<br>

<small>

${c[1]}

</small>


</div>

`;

}


});



html+="</div>";


app.innerHTML+=html;


});

}



function copy(t){

navigator.clipboard.writeText(t);

}



document
.querySelector("#search")
.oninput=e=>

load(e.target.value);



load();
