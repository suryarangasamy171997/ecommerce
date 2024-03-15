const invoice =()=>{
    let st = document.getElementById("stackitem").value;
   
    let qty = document.getElementById("quantity").value;
    let rate = document.getElementById("rate").value;
    let amt = document.getElementById("amount").value=qty*rate;

    let file = document.getElementById("image").files[0];
    let r = new FileReader();
    r.readAsDataURL(file);
    r.onloadend = function(){
     document.getElementById("imgid").src=r.result;
    }
    document.getElementById("tableid").innerHTML+=`<tr><td>${st}</td><td><img id='imgid'></td><td>${qty}</td><td>${rate}
    </td><td>${amt}</td></tr>`
    // document.getElementById("stockitem").value="";
    // document.getElementById("qty").value="";
    // document.getElementById("img").value="";
    // document.getElementById("rate").value="";
    // document.getElementById("amount").value="";
}
document.getElementById("btn").addEventListener("click",invoice)