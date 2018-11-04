

$(document).ready(function(){
  // $("#engBtn").click(function(){
  //   // $("#engDiv").css("border", "1px solid rgba(255, 255, 255, 1)");
  //   // $("#engDiv").css("color", "white");
  //   // $("#jpDiv").css("border", "0px");
  //   // $("#jpDiv").css("color", "black");
  //   window.location.assign("sc0000_eng.html");
  // });
  //
  // $("#jpBtn").click(function(){
  //   // $("#jpDiv").css("border", "1px solid rgba(255, 255, 255, 1)");
  //   // $("#jpDiv").css("color", "white");
  //   // $("#engDiv").css("border", "0px");
  //   // $("#engDiv").css("color", "black");
  //   window.location.assign("sc0000_jp.html");
  // });

  $("#eventDiv10").click(function(){
    $.ajax('./event/pst/pst10.html', {
      datatype:'html'
    }).then(function(data){
        var out_html = $($.parseHTML(data));//parse
        $('#contents').empty().append(out_html.filter('#eventResult')[0].innerHTML);//insert
    },function(jqXHR, textStatus) {
        if(textStatus!=="success") {
            $('#contents').html("출력 실패. 버그가 있네요 죄송함다. 인벤 쪽지로 문의주세요");
        }
    });
  })
});
