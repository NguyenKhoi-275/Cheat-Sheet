const data=[


["🐧 Linux",[
["ls -la","Xem file"],
["cd folder","Vào thư mục"],
["mkdir app","Tạo folder"],
["rm -rf file","Xóa"],
["top","Xem process"]
]],



["🐙 Git",[
["git status","Kiểm tra"],
["git add .","Thêm file"],
["git commit -m msg","Lưu code"],
["git push","Đẩy Github"],
["git pull","Kéo code"]
]],



["🟢 NodeJS",[
["node app.js","Chạy JS"],
["npm install","Cài package"],
["npm run dev","Dev server"],
["npm build","Build"]
]],



["🐍 Python",[
["python main.py","Chạy file"],
["pip install package","Cài thư viện"],
["python -m venv env","Tạo môi trường"],
["pip list","Xem package"],
["pip freeze","Export package"]
]],



["☕ Java",[
["javac Main.java","Compile"],
["java Main","Chạy chương trình"],
["jar cvf app.jar","Tạo jar"],
["java -version","Xem version"]
]],



["🟨 JavaScript",[
["node file.js","Chạy JS"],
["console.log()","In ra màn hình"],
["npm init","Tạo project"],
["npm install","Cài module"]
]],



["🐳 Docker",[
["docker ps","Xem container"],
["docker build","Build image"],
["docker run","Chạy container"],
["docker logs id","Xem log"]
]],



["☸ Kubernetes",[
["kubectl get pods","Xem pod"],
["kubectl logs pod","Log"],
["kubectl apply -f file.yaml","Deploy"]
]],



["⚡ Terminal",[
["history","Lịch sử"],
["clear","Xóa màn hình"],
["man command","Hướng dẫn"],
["Ctrl + C","Dừng lệnh"]
]]

];



const app=document.querySelector("#app");



function render(find=""){


app.innerHTML="";


data.forEach(d=>{


let html=`

<div class="section">

<div class="box">


<div class="title">

${d[0]}

</div>

`;



d[1].forEach(c=>{


if(c[0]
.toLowerCase()
.includes(find.toLowerCase())){


html+=`

<div class="cmd">

${c[0]}


<button onclick="copy('${c[0]}')">
COPY
</button>


<div class="desc">

${c[1]}

</div>


</div>

`;

}


});



html+=`

</div>

</div>

`;



app.innerHTML+=html;


});

}



function copy(x){

navigator.clipboard.writeText(x);

}



search.oninput=e=>{

render(e.target.value);

}


render();
