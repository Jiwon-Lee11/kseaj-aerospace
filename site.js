// 가입 신청 Google Form URL — 폼을 만든 뒤 여기에 주소를 넣으면 버튼이 나타납니다
const FORM_URL = "";
if(FORM_URL){const b=document.getElementById('formBtn');b.href=FORM_URL;b.target="_blank";b.rel="noopener";b.style.display="inline-flex";}
document.body.classList.add('js');
// starfield
const cv=document.getElementById('stars'),cx=cv.getContext('2d');let stars=[];
function size(){cv.width=cv.offsetWidth;cv.height=cv.offsetHeight;
  stars=Array.from({length:Math.floor(cv.width*cv.height/9000)},()=>({
    x:Math.random()*cv.width,y:Math.random()*cv.height,
    r:Math.random()*1.2+.2,a:Math.random(),da:(Math.random()*.012+.004)*(Math.random()<.5?-1:1)}));}
function tick(){cx.clearRect(0,0,cv.width,cv.height);
  for(const s of stars){s.a+=s.da;if(s.a>1||s.a<.08)s.da*=-1;
    cx.globalAlpha=Math.max(.05,Math.min(1,s.a));cx.fillStyle='#cdd9ff';
    cx.beginPath();cx.arc(s.x,s.y,s.r,0,7);cx.fill();}
  requestAnimationFrame(tick);}
size();addEventListener('resize',size);tick();
// reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
