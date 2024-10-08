 let d_body=document.body
console.log(d_body.innerText)

 var head= document.getElementById("head")
console.log(head.innerText)
head.innerText="PERSONAL DETAILS"

 var para=document.getElementsByClassName("text")
   console.log(para)
   console.log(para[4].innerHTML)

 var tag_n= document.getElementsByTagName("div")
 console.log(tag_n)
tag_n[1].innerHTML="<p><b>Phone no:</b>9704252107</p>"

 var quer = document.querySelector(".text")
 console.log(quer)
 console.log(quer.innerHTML)


 var quer1 = document .querySelectorAll (".text")
     console.log(quer1)
     quer1[4].innerHTML="<b> Pincode:</b> 531025"
