const intro=document.getElementById('intro');const skip=document.getElementById('skipIntro');function closeIntro(){intro.classList.add('done');document.body.classList.add('ready')}const introTimer=setTimeout(closeIntro,3900);skip.addEventListener('click',()=>{clearTimeout(introTimer);closeIntro()});
const cardNumber='6219861902550887';const feedback=document.getElementById('copyFeedback');document.getElementById('copyCard').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(cardNumber);feedback.textContent='شماره کارت کپی شد.'}catch(e){const t=document.createElement('textarea');t.value=cardNumber;document.body.appendChild(t);t.select();document.execCommand('copy');t.remove();feedback.textContent='شماره کارت کپی شد.'}setTimeout(()=>feedback.textContent='',2600)});
document.getElementById('saveCard').addEventListener('click',()=>{const c=document.createElement('canvas');c.width=900;c.height=1280;const x=c.getContext('2d');const g=x.createLinearGradient(0,0,900,1280);g.addColorStop(0,'#7134a1');g.addColorStop(.48,'#35164f');g.addColorStop(1,'#100a1a');x.fillStyle=g;x.fillRect(0,0,900,1280);x.strokeStyle='rgba(255,207,83,.28)';x.lineWidth=3;x.beginPath();x.ellipse(280,820,700,390,-.55,0,Math.PI*2);x.stroke();x.fillStyle='rgba(255,255,255,.04)';x.font='900 500px Montserrat';x.fillText('D',15,1130);x.fillStyle='#fff';x.font='800 72px Vazirmatn';x.fillText('بلو بانک',70,140);x.fillStyle='#e7d5f3';x.font='34px Vazirmatn';x.fillText('اطلاعات کارت',70,205);x.fillStyle='#f7f2ff';x.font='600 72px Montserrat';['6219','8619','0255','0887'].forEach((v,i)=>x.fillText(v,70,440+i*120));x.fillStyle='#d8c3e8';x.font='32px Vazirmatn';x.fillText('به نام',70,1030);x.fillStyle='#fff';x.font='600 48px Vazirmatn';x.fillText('علی حیدری',70,1095);x.fillStyle='#ffd52e';x.font='28px Vazirmatn';x.fillText('طراحی اختصاصی دیده‌شو',70,1200);const a=document.createElement('a');a.download='didehshow-bank-card.png';a.href=c.toDataURL('image/png');a.click();feedback.textContent='تصویر کارت برای ذخیره آماده شد.';setTimeout(()=>feedback.textContent='',3000)});
const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)';reveal.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.service-row,.manifesto-layout,.section-head,.contact-layout').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(18px)';el.style.transition='opacity .8s ease,transform .8s ease';reveal.observe(el)});


document.getElementById('saveContact').addEventListener('click',()=>{
 const vcard=['BEGIN:VCARD','VERSION:3.0','N:;گروه تبلیغاتی دیده‌شو;;;','FN:گروه تبلیغاتی دیده‌شو','ORG:گروه تبلیغاتی دیده‌شو','TEL;TYPE=CELL,VOICE:09049718280','URL:https://didehshowads.ir','URL;TYPE=Instagram:https://www.instagram.com/didehshowadsir/','URL;TYPE=Telegram:https://t.me/didehshowadsir','URL;TYPE=Rubika:https://rubika.ir/didehshowadsir','URL;TYPE=YouTube:https://www.youtube.com/@didehshowadsir','URL;TYPE=Aparat:https://www.aparat.com/didehshowadsir','END:VCARD'].join('\r\n');
 const blob=new Blob([vcard],{type:'text/vcard;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='Didehshow-Contact.vcf';a.click();URL.revokeObjectURL(a.href);
});


// Tehran wall clock + Persian calendar date + ordinal day of the Persian year.
(function(){
 const tz='Asia/Tehran';
 const dateEl=document.getElementById('tehranDate');
 const timeEl=document.getElementById('tehranTime');
 const dayEl=document.getElementById('tehranDay');
 if(!dateEl||!timeEl||!dayEl)return;
 const dateFmt=new Intl.DateTimeFormat('fa-IR-u-ca-persian-nu-latn',{timeZone:tz,year:'numeric',month:'long',day:'numeric'});
 const partsFmt=new Intl.DateTimeFormat('en-US-u-ca-persian-nu-latn',{timeZone:tz,year:'numeric',month:'numeric',day:'numeric'});
 const timeFmt=new Intl.DateTimeFormat('fa-IR-u-nu-latn',{timeZone:tz,hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false});
 const faDigits=s=>s.replace(/[0-9]/g,d=>'۰۱۲۳۴۵۶۷۸۹'[Number(d)]);
 function update(){
   const now=new Date();
   const parts=Object.fromEntries(partsFmt.formatToParts(now).filter(x=>x.type!=='literal').map(x=>[x.type,Number(x.value)]));
   const month=parts.month,day=parts.day;
   const ordinal=(month<=6?(month-1)*31:(month<=11?186+(month-7)*30:336))+day;
   dateEl.textContent=dateFmt.format(now);
   timeEl.textContent=timeFmt.format(now);
   dayEl.textContent='روز '+faDigits(String(ordinal))+' سال';
 }
 update();setInterval(update,1000);
})();
