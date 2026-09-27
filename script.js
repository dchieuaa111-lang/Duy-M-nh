const mods = [
  {
    title:"MOD SKIN MŨ TVC MÙA 2 ÁO ĐÁ BÓNG MEXICO",
    meta:"Nhân Vật: ALOK Thức Tỉnh",
    img:"sample-card.svg",
    date:"27/09/2026",
    character:"ALOK Thức Tỉnh",
    versions:["FF Thường","FF Max"],
    ffThuong:"#",
    ffMax:"#"
  },
  {
    title:"MOD SKIN QUÁI NHÂN HU KHÔNG MŨ TVC 2",
    meta:"Nhân Vật: ALOK Thức Tỉnh",
    img:"sample-card.svg",
    date:"27/09/2026",
    character:"ALOK Thức Tỉnh",
    versions:["FF Thường","FF Max"],
    ffThuong:"#",
    ffMax:"#"
  },
  {
    title:"MOD SKIN PRO PLAYER",
    meta:"Nhân Vật: ALOK",
    img:"sample-card.svg",
    date:"27/09/2026",
    character:"ALOK",
    versions:["FF Thường","FF Max"],
    ffThuong:"#",
    ffMax:"#"
  }
];

const list=document.getElementById("mod-list");

mods.forEach(m=>{
  const el=document.createElement("article");
  el.className="card";
  el.innerHTML=`
    <img class="thumb" src="${m.img}" alt="">
    <div class="card-body">
      <h2>${m.title}</h2>
      <p>${m.meta}</p>
    </div>`;
  el.onclick=()=>openModal(m);
  list.appendChild(el);
});

function openModal(m){
  document.getElementById("modal-img").src=m.img;
  document.getElementById("modal-title").textContent=m.title;
  document.getElementById("modal-date").textContent="Ngày đăng: "+(m.date||"Đang cập nhật");
  document.getElementById("modal-character").textContent=m.character||m.meta||"Đang cập nhật";
  document.getElementById("modal-versions").innerHTML=(m.versions||[]).map(v=>`<div class="version">✅ ${v}</div>`).join("");
  document.getElementById("modal-ff-thuong").href=m.ffThuong||"#";
  document.getElementById("modal-ff-max").href=m.ffMax||"#";
  document.getElementById("modal").classList.add("show");
  document.getElementById("modal").setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
}

function closeModal(){
  document.getElementById("modal").classList.remove("show");
  document.getElementById("modal").setAttribute("aria-hidden","true");
  document.body.style.overflow="";
}

document.getElementById("modal").addEventListener("click",e=>{
  if(e.target.id==="modal") closeModal();
});

document.addEventListener("keydown",e=>{
  if(e.key==="Escape") closeModal();
});

function showToast(t){
  const x=document.getElementById("toast");
  x.textContent=t;
  x.classList.add("show");
  setTimeout(()=>x.classList.remove("show"),2500);
}
