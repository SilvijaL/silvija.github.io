$(document).ready(function(){
    var i=0;
    $("#reset").click(function(){
        var name=$("#name").val();
        var email=$("#email").val();
        var phone=$("#phone").val();
        i++;
        $("#tab").append("<tr> <td>"+i+"</td> <td class='name'>"+name+"</td> <td class='email'>"+email+"</td> <td class='phone'>"+phone+"</td> <td> <input type='button' value='Delete' class='delete'>"+"</td> <td> <input type='button' value='Edit' class='edit'></td> <td>")
        $(".delete").click(function(){
            $(this).closest("tr").remove();
        });
        $(".edit").click(function(){
            $("#name").val($(this).closest("tr").find('td.name').text());
            $("#email").val($(this).closest("tr").find('td.email').text());
            $("#phone").val($(this).closest("tr").find('td.phone').text());
        });
    });
})