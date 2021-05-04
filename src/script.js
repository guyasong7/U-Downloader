$(".btn").click(function(){
    var link=$(".link").val();
    var formate=$(".formate").children("option:selected").val();
    downloadVideo(link,formate)
})

    function downloadVideo(link,formate){
    $(".download-video").html('<iframe style="width:230px;height:60px;border:0;overflow:hidden;" scrolling="no" src="https://loader.to/api/button/?url='+ link +'&f='+ formate +'"></iframe>')
}