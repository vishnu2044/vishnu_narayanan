function btnClick(){
  let btn
  var Name=document.getElementById("contact_name").value.trim()
  var mail=document.getElementById("contact_email").value.trim()
  var Phone=document.getElementById('contact_phn_number').value.trim()
  var subject=document.getElementById('subject').value.trim()
  var message=document.getElementById("message").value.trim()

  if(Name===""||mail===""||Phone===""||message==="" || subject==="")
  {
    alert("Please fill all fields")
    btn=false
  }else if(!/^([a-zA-Z0-9\_.]+)@([a-zA-Z0-9]+).([a-z]+).([a-z]+)?$/.test(mail)){
    alert("Please re-check at email")
    btn=false
  }else if(!/^\d+$/.test(Phone)){
    alert("Please enter your phone number correctly")
    btn=false
  }
  return btn;

}
