

function getData(){
  var input_1 = document.getElementById("input_1").value;
  var x = document.getElementById("modal_body");
  $.ajax({
  		url: "./admin/find",
  		type:"post",
  		async: false,
      data:{
      filter :  input_1
      },
  		dataType:"JSON",
  		success:function(result){
          x.innerHTML = JSON.stringify(result);
  		},
      error:function(request,status,error){
        x.innerHTML = "code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error
       }
  	});
}

function insertData(){
  var input_1 = document.getElementById("input_1").value;
  var x = document.getElementById("modal_body");
  $.ajax({
  		url: "./admin/insert",
  		type:"post",
  		async: false,
      data:{
      query :  input_1
      },
  		dataType:"text",
  		success:function(result){
          x.innerHTML = result;
  		},
      error:function(request,status,error){
          x.innerHTML = "code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error
       }
  	});
}
