const mods=[
 {title:"MOD SKIN MŨ TVC MÙA 2 ÁO ĐÁ BÓNG MEXICO",meta:"Nhân Vật: ALOK Thức Tỉnh",img:"sample-card.jpg"},
 {title:"MOD SKIN PRO PLAYER",meta:"Nhân Vật: ALOK",img:"sample-card.jpg"},
 {title:"MOD SKIN MỚI NHẤT",meta:"Nhân Vật: Đang cập nhật",img:"sample-card.jpg"}
];
const list=document.getElementById("mod-list");
mods.forEach((m,i)=>{
 const el=document.createElement("article");
 el.className="card";
 el.innerHTML=`<img class="thumb" src="${m.img}" alt=""><div class="card-body"><h2 class="title">${m.title}</h2><p class="meta">${m.meta}</p></div>`;
 el.onclick=()=>openModal(m);
 list.appendChild(el);
});
function openModal(m){
 document.getElementById("modal-img").src=m.img;
 document.getElementById("modal-title").textContent=m.title;
 document.getElementById("modal-meta").textContent=m.meta;
 document.getElementById("modal").classList.add("show");
}
function closeModal(){document.getElementById("modal").classList.remove("show")}
document.getElementById("modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});
function showToast(t){const x=document.getElementById("toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),2200)}
