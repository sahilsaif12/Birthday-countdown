const day=document.getElementById('day')
const hour=document.getElementById('hour')
const minute=document.getElementById('minute')
const second=document.getElementById('second')

setInterval(() => {
    

const currDate=Date.now()
const wishDate=new Date(`12 march  ${new Date().getFullYear()+1} 00:00:00`)
const diff=(wishDate-currDate)
const dd=(Math.floor(diff/1000/60/60/24))
const hh=(Math.floor(diff/1000/60/60)%24)
const mm=(Math.floor(diff/1000/60)%60)
const ss=(Math.floor(diff/1000)%60)
day.innerHTML=dd<10?"0"+dd:dd
hour.innerHTML=hh<10?"0"+hh:hh
minute.innerHTML=mm<10?"0"+mm:mm
second.innerHTML=ss<10?"0"+ss:ss
if (dd>100) {
    document.getElementById('day-box').style.marginRight="30px"
}
}, 1000);