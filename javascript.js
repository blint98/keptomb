$(function() {
kepgaleria();
});

var kep1 = {
    eleresiut:'valami3.jpg',
    cim: '1. kép címe',
    leiras:'1. kép leírása'
};
var kep2 = {
    eleresiut:'valami2.jpg',
    cim: '2. kép címe',
    leiras:'2. kép leírása'
};
var kep3 = {
   
    eleresiut:'valami1.jpg',
    cim: '3. kép címe',
    leiras:'3. kép leírása'
};
var kepTomb=[kep1,kep2,kep3];

function kepgaleria() {
kepCsere(0);


 console.log(kepTomb);

    for (var i = 0; i < kepTomb.length; i++) {
     var elem = '<div><img data-id="'+i+'" src="'+kepTomb[i].eleresiut+'"alt=""/><h3>"'+kepTomb[i].cim+'"</h3><p>"'+kepTomb[i].leiras+'"</p></div>';
     console.log('elem');
     $('article').append(elem);   
    }
  
$('article div img').click(kepBetolt);
    


  
    
}
function kepBetolt() {
   
   var index =$(this).attr('data-id');
   console.log(index);
   kepCsere(index);
}


function kepCsere(mire){
    
$("#nagyKep h3").text(kepTomb[mire].cim);
$("#nagyKep p").html(kepTomb[mire].leiras);
$("#nagyKep img").attr("src", kepTomb[mire].eleresiut);
    
}