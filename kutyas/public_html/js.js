$(function() {
    var tomb = [
    {
        fajt: "Kuvasz",
        szin: "Fekete",
        kor: 12
    },
    {
        fajt: "Mopsz",
        szin: "Zsemle",
        kor: 3
    },
    {
        fajt: "Shiba inu",
        szin: "Aranybarna",
        kor: 2
    },
    {
        fajt: "Huskey",
        szin: "Ezüst",
        kor: 10
    }
];
    $('article div:nth-child(2)').append('<table>');
    $('article div:nth-child(2) table').append('<tr><th>Fajta</th><th>Szín</th><th>Kor</th></tr>');
    for (var i = 0; i < tomb.length; i++) {
        $('article div:nth-child(2) table').append('<tr><td>'+tomb[i].fajt+'</td><td>'+tomb[i].szin+'</td><td>'+tomb[i].kor+'</td></tr>');
        }
        
    $('#submit').click(function(){
        tomb.push()
    var fajt = $('input {name="fajta")').val('#fajta');
    var szin = $('input {name="szin")').val('#szin');
    var kor = $('input {name="kor")').val('#kor');
          
    var tr ='<tr><td>'+fajt+'</td><td>'+szin+'</td><td>'+kor+'</td><tr>';
    $('article div:nth-child(2) table').append(tr);
        
   
   
});

                    /*<table>
                        <tr><th>Fajta</th></tr>
                        <tr>
                            <td>Kuvasz</td>
                        </tr>
                        <tr>
                            <td>Husky</td>
                        </tr>
                        <tr>
                            <td>Mopsz</td>
                        </tr>
                    </table>*/