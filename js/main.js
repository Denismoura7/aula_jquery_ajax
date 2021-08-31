
function consultaCep() {
    
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/"  + cep + "/json/";

    console.log(url);

    //função do jQuery - '$.ajax'
    // '$' - cifrão para acessar o jQuery
    $.ajax({

        url: url,
        //tipo de requisição
        type: "GET",
        //traz os dados da url no console
        success: function(response) {
            console.log(response);

            /*
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            */
            
            
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP: " + response.cep);
            //mostrar a div da classe cep
            $(".cep").show();
            $(".barra-progresso").hide();

            //alert(response.logradouro);
        }
    })
}

// esconder a div da classe cep
$(function () {
    $(".cep").hide();
    $(".barra-progresso").hide();
});
