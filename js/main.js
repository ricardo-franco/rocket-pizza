//Esconde os selects quandoo site é aberto
function hideSelect() {
    $('#col2').hide()
    $('#col3').hide()
}
hideSelect();
//faz a listagem do cardápio
function listar() {
    $.ajax({
        url: 'https://pizzaria.roxo.dev.br/',
        method: 'get',
        success(data) {
            $('#tabela').html(('<tr><td>Sabor</td><td>Valor</td></tr>'))
            data.forEach(function(item) {
                var valorBR = JSON.stringify(item.valor);
                valorBR = valorBR.slice(1, length - 1)
                valorBR = valorBR.replaceAll('.', ',');
                $('#tabela').append(`<tr><td>` + item.nome + `</td><td>` + `R$ ${valorBR}` + `</td></tr>`)
            });
        }
    });
}
listar();

//popula os select
function preencherSelect() {
    var qtd = $('#selSabores').val()
    var $select1 = $('#sabor1')
    var $select2 = $('#sabor2')
    var $select3 = $('#sabor3')

    $.getJSON('https://pizzaria.roxo.dev.br/', function(data) {
        //$select1.html('')
        //$select2.html('')
        //$select3.html('')
        if (qtd == 1) {
            for (let i = 0; i < data.length; i++) {
                $select1.append($('<option></option>').attr('value', parseFloat(data[i].valor)).text(data[i].nome));
            }
        } else if (qtd == 2) {
            for (let i = 0; i < data.length; i++) {
                $select1.append($('<option></option>').attr('value', parseFloat(data[i].valor)).text(data[i].nome));
                $select2.append($('<option></option>').attr('value', parseFloat(data[i].valor)).text(data[i].nome));
            }
        } else if (qtd == 3) {
            for (let i = 0; i < data.length; i++) {
                $select1.append($('<option></option>').attr('value', parseFloat(data[i].valor)).text(data[i].nome));
                $select2.append($('<option></option>').attr('value', parseFloat(data[i].valor)).text(data[i].nome));
                $select3.append($('<option></option>').attr('value', parseFloat(data[i].valor)).text(data[i].nome));
            }
        }
    })

}
//pega o valor
var sabor1 = 0;
var sabor2 = 0;
var sabor3 = 0;

function getSabor1() {

    sabor1 = $('#sabor1').val();
    sabor1 = parseFloat(sabor1)
    console.log(sabor1)
    //onfocusout
}

function getSabor2() {
    sabor2 = $('#sabor2').val();
    sabor2 = parseFloat(sabor2)
    console.log(sabor2)
    //onfocusout
}

function getSabor3() {
    sabor3 = $('#sabor3').val();
    sabor3 = parseFloat(sabor3)
    console.log(sabor3)
    //onfocusout
}

//Calcula o valor da pizza ao clicar no botao "calcular"
function calcValor() {

    //alert("Valor: " + (sabor1 + sabor2 + sabor3))
    if (parseInt($('#selSabores').val()) == 1) {
        var total1 = (sabor1)
        $('#valor').val((total1).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))
        //console.log("1 - " + total1)
    }
    if ($('#selSabores').val() == 2) {
        var total2 = (sabor1 / 2) + (sabor2 / 2)
        $('#valor').val((total2).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))
        //console.log("1 - " + valor2)
    }
    if ($('#selSabores').val() == 3) {
        var total3 = (sabor1 / 3) + (sabor2 / 3) + (sabor3 / 3)
        $('#valor').val((total3).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))
        //console.log("1 - " + valor3)
    }


    //cria os select novamente
}
//oculta e zera os campos nao utilizados
function campos() {
    if ($('#selSabores').val() == 1) {
        $('#col2').hide()
        //$('#col2').remove();
        $('#col3').hide()
        //$('#col3').remove()
    } else if ($('#selSabores').val() == 2) {
        $('#col2').show()
        $('#col3').hide()
        //$('#col3').remove()
    } else if ($('#selSabores').val() == 3) {
        $('#col2').show()
        $('#col3').show()
    }

    preencherSelect()

}