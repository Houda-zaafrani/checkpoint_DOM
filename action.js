/*****select elements*****/
var total=document.getElementById('total')
var quantity=document.getElementById('quantity')
var cart=document.getElementById('cart')
var list_cart=document.getElementById('list_cart')

var sho1=document.getElementById('sho1')
var sho2=document.getElementById('sho2')
var sho3=document.getElementById('sho3')
var sho4=document.getElementById('sho4')
var sho5=document.getElementById('sho5')
var sho6=document.getElementById('sho6')


var qtit1=document.getElementById('qtit1')
var qtit2=document.getElementById('qtit2')
var qtit3=document.getElementById('qtit3')
var qtit4=document.getElementById('qtit4')
var qtit5=document.getElementById('qtit5')
var qtit6=document.getElementById('qtit6')
var test_toggle = false
/**add event to heart ****************************/
/*select the id*/
var heart1=document.querySelector('.heart1')
/**add event*/
heart1.addEventListener('click',heart_ch1)
/* call function*/ 
function heart_ch1(event) {
   test_toggle = !test_toggle
   heart1.classList.toggle('heart1')
   event.target.parentElement.setAttribute("style", `color: ${test_toggle  ? "red" : "black"}`)

}

var heart2=document.querySelector('.heart2')
heart2.addEventListener('click',heart_ch2)

function heart_ch2(event) {
   test_toggle = !test_toggle

   heart2.classList.toggle('heart2')
   event.target.parentElement.setAttribute("style", `color: ${test_toggle  ? "red" : "black"}`)

}

var heart3=document.querySelector('.heart3')
heart3.addEventListener('click',heart_ch3)
function heart_ch3(event) {

     test_toggle = !test_toggle

   heart3.classList.toggle('heart3')
   event.target.parentElement.setAttribute("style", `color: ${test_toggle  ? "red" : "black"}`)

}

var heart4=document.querySelector('.heart4')
heart4.addEventListener('click',heart_ch4)
function heart_ch4(event) {
   test_toggle = !test_toggle

   heart4.classList.toggle('heart4')
   event.target.parentElement.setAttribute("style", `color: ${test_toggle  ? "red" : "black"}`)
}

var heart5=document.querySelector('.heart5')
heart5.addEventListener('click',heart_ch5)
function heart_ch5(event) {
   test_toggle = !test_toggle

   heart5.classList.toggle('heart5')
   event.target.parentElement.setAttribute("style", `color: ${test_toggle  ? "red" : "black"}`)
}
var heart6=document.querySelector('.heart6')
heart6.addEventListener('click',heart_ch6)
function heart_ch6() {
   test_toggle = !test_toggle

   heart6.classList.toggle('heart6')
   event.target.parentElement.setAttribute("style", `color: ${test_toggle  ? "red" : "black"}`)
}
/***********bout add *****************************/

var add_sh1=document.getElementById('add_sh1')
add_sh1.addEventListener('click',add1)
function add1() {
   quantity.value=parseInt(quantity.value)+1 

   qtit1.value=parseInt(qtit1.value)+1

   
   list_cart.innerHTML=`<td><img src="${sho1.src}"></td>
                        <td><p>the price : 30dt</p></td>`
total.value=parseInt(total.value)+30
}

var add_sh2=document.getElementById('add_sh2')
add_sh2.addEventListener('click',add2)
function add2() {
   quantity.value=parseInt(quantity.value)+1

      qtit2.value=parseInt(qtit2.value)+1

   total.value=parseInt(total.value)+30
    

   list_cart.innerHTML=`<td><img src="${sho2.src}"></td><td><p>the price : 30dt</p></td>`
}

var add_sh3=document.getElementById('add_sh3')
add_sh3.addEventListener('click',add3)
function add3(params) {
      quantity.value=parseInt(quantity.value)+1 
  
      qtit3.value=parseInt(qtit3.value)+1

   total.value=parseInt(total.value)+30
   list_cart.innerHTML=`<td><img src="${sho3.src}"></td><td><p>the price : 30dt</p></td>`
}

var add_sh4=document.getElementById('add_sh4')
add_sh4.addEventListener('click',add4)
function add4(params) {
      quantity.value=parseInt(quantity.value)+1 

      qtit4.value=parseInt(qtit4.value)+1

   total.value=parseInt(total.value)+40
   list_cart.innerHTML=`<td><img src="${sho4.src}"></td><td><p>the price : 40dt</p></td>`
}

var add_sh5=document.getElementById('add_sh5')
add_sh5.addEventListener('click',add5)
function add5(params) {
      quantity.value=parseInt(quantity.value)+1 
  
      qtit5.value=parseInt(qtit5.value)+1

   total.value=parseInt(total.value)+40
   list_cart.innerHTML=`<td><img src="${sho5.src}"></td><td><p>the price : 40dt</p></td>`
}

var add_sh6=document.getElementById('add_sh6')
add_sh6.addEventListener('click',add6)
function add6(params) {
      quantity.value=parseInt(quantity.value)+1 
  
      qtit6.value=parseInt(qtit6.value)+1

   total.value=parseInt(total.value)+40
   list_cart.innerHTML=`<td><img src="${sho6.src}"></td><td><p>the price : 40dt</p></td>`
}
/***********bout remove *****************************/
var rem_sh1=document.getElementById('rem_sh1')
rem_sh1.addEventListener('click',remove1)
function remove1() {
   if ((quantity.value=='0')||(qtit1.value=='0')) {
      alert("add first choes")
      list_cart.innerHTML=``
   } else {   
      list_cart.innerHTML=`<td><img src="${sho1.src}"></td><td><p>the price : 40dt</p></td>`
   total.value=parseInt(total.value)-30
   quantity.value=parseInt(quantity.value)-1
   qtit1.value=parseInt(qtit1.value)-1
   }
 
}

var rem_sh2=document.getElementById('rem_sh2')
rem_sh2.addEventListener('click',remove2)
function remove2() {
   if ((quantity.value=='0')||(qtit2.value=='0')) {
      alert("add first choes")
      list_cart.innerHTML=``
   } else { 
      list_cart.innerHTML=`<td><img src="${sho2.src}"></td><td><p>the price : 40dt</p></td>`
   total.value=parseInt(total.value)-30
   quantity.value=parseInt(quantity.value)-1
   qtit2.value=parseInt(qtit2.value)-1
}
}

var rem_sh3=document.getElementById('rem_sh3')
rem_sh3.addEventListener('click',remove3)
function remove3(params) {
   if ((quantity.value=='0')||(qtit3.value=='0')) {
      alert("add first choes")
      list_cart.innerHTML=``
   } else { 
      list_cart.innerHTML=`<td><img src="${sho3.src}"></td><td><p>the price : 40dt</p></td>`
   total.value=parseInt(total.value)-30
   quantity.value=parseInt(quantity.value)-1
   qtit3.value=parseInt(qtit3.value)-1
}
}

var rem_sh4=document.getElementById('rem_sh4')
rem_sh4.addEventListener('click',remove4)
function remove4(params) {
   if ((quantity.value=='0')||(qtit4.value=='0')) {
      alert("add first choes")
      list_cart.innerHTML=``
   } else { 
      list_cart.innerHTML=`<td><img src="${sho4.src}"></td><td><p>the price : 40dt</p></td>`
   total.value=parseInt(total.value)-40
   quantity.value=parseInt(quantity.value)-1
   qtit4.value=parseInt(qtit4.value)-1
}
}

var rem_sh5=document.getElementById('rem_sh5')
rem_sh5.addEventListener('click',remove5)
function remove5(params) {
   if ((quantity.value=='0')||(qtit5.value=='0')) {
      alert("add first choes")
      list_cart.innerHTML=``
   } else { 
      list_cart.innerHTML=`<td><img src="${sho5.src}"></td><td><p>the price : 40dt</p></td>`
   total.value=parseInt(total.value)-40
   quantity.value=parseInt(quantity.value)-1
   qtit5.value=parseInt(qtit5.value)-1
}
}

var rem_sh6=document.getElementById('rem_sh6')
rem_sh6.addEventListener('click',remove6)
function remove6(params) {
   if ((quantity.value=='0')||(qtit6.value=='0')) {
      alert("add first choes")
      list_cart.innerHTML=``
   } else { 
      list_cart.innerHTML=`<td><img src="${sho6.src}"></td><td><p>the price : 40dt</p></td>`
   total.value=parseInt(total.value)-40
   quantity.value=parseInt(quantity.value)-1
   qtit6.value=parseInt(qtit6.value)-1

}
}