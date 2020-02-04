$(document).ready(function(){

    var nome =  $('#nome').val();
    var urlApi = "http://jsonplaceholder.typicode.com/users";

    $.ajax({
        url: urlApi,
        type:"get",
        dataType:"json",
        success:function(conteudo){

            for(let i = 0; i <= conteudo.length; i++){

                console.log(conteudo[i]);
                $('#nome').append(i + ") " + conteudo[i].name + "<br>");
                $('#userName').append(i + ") " + conteudo[i].username + "<br>");     
                $('#email').append( "<tr> <td>"+ conteudo[i].email + " </tr> </td>");
                $("table#email tr").addClass("linhas");
                $('#celular').append(i + ") " + conteudo[i].phone + "<br>");
                $('#webSite').append(i + ") " + conteudo[i].website + "<br>");
                $('#endereco').append(i + ") Rua: " + conteudo[i].address.city + " / Rua: " + conteudo[i].address.street +
                "/ " + conteudo[i].address.suite  + "<br>" + " Cep: " + conteudo[i].address.zipcode + "<br>" );
            }

        },
        error:function(erro){
            console.log(erro);
        }
    })


  //busca
  function busca(value,targetSelector){
    $(targetSelector).show();
    $(targetSelector+':not(:contains("'+ value +'"))').hide();
}
    $('#search').keyup(function () {
    busca($(this).val(), '.linhas');
    })
});