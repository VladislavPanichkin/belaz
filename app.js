$(document).ready(function(){
    $('.list-group-item').on("click", function(event){
        $(event.target).children().show()
    });
    $(document).mouseup(function(e){
        var item = $('.list-group-description')
        if (!item.is(event.target) && item.has(event.target).length === 0){
            item.hide();
        }
    });
});
