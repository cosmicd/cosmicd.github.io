$(document).ready(function(){  
    // $('#locationfrm').submit(function (){
    //    gmap.mapAddressToLatLng($('#address').val(),skyview.gmapCallback);         
    //    return false;
    //});     
    document.getElementById('locationfrm').addEventListener('submit',function (evt){
        gmap.mapAddressToLatLng($('#location-search').val(),'locmap',skyview.gmapcallback);       
        evt.preventDefault();//equivalent of jquery return false to avoid form submission
    });
    document.getElementById('latlng_btn').addEventListener('click',function(evt) {
        var loc= {lat: parseFloat($('#lat').val()), lng:parseFloat($('#lng').val())};
        gmap.mapLatLngToAddress(loc,'locmap',skyview.gmapcallback);        
        evt.preventDefault();
    });                 
});
//settings modal
$(document).ready(function(){ 
    $('.modal-dialog').draggable({
        handle: '.modal-header'
    });  
    document.getElementById('btn-expand').addEventListener('click',function() {                          
        el=$('#'+skyview.ptm.id);
        if (el.hasClass("fullscreen") ){
            el.removeClass('fullscreen'); 
            el.addClass(skyview.ptm.id+'-default');
            skyview.ptm.resize(el.width(),el.height());
            misc.show($('.navbar-default'));

        }
        else{
            el.removeClass(skyview.ptm.id+'-default'); 
            el.addClass('fullscreen');               
            skyview.ptm.resize(el.width(),el.height());
            misc.hide($('.navbar-default'));
        }            
        var tmp=skyview.ptm.wide+'x'+skyview.ptm.tall;
        $('#dimensions').val(tmp);
        skyview.ptm.draw();
    });        
});  



// begin general settings //
$(document).ready(function(){           
    $("#projection").change(function (){
        skyview.ptm.selectProjection(this.value)
    });          
    $('#dimensions').change(function (){            
        var dim = this.value.split('x');
        if(dim.length == 2){
            skyview.ptm.resize(dim[0],dim[1]);
            $('#'+skyview.ptm.id+'').css({'height':skyview.ptm.tall,'width':skyview.ptm.wide})
        }
        else{window.alert('need two values separated by "x" for the dimension')}

    });
    $('#az_off').change(function (){   
        skyview.ptm.az_off = (parseFloat(this.value)%360)-180;
    });         
    $('#ground').change(function (){ 
        skyview.ptm.ground = this.checked ? true: false;           
    });
    $('#live').change(function (){            
        skyview.ptm.liveSky();
        if(skyview.ptm.islive){
            $("#dtpicker").val('live'); 
            skyview.ptm.spinIt(0);
            $("#spin").val(''); 
        }
        else $("#dtpicker").val(''); 
    });          
    $('#spin').change(function (){   
        if(skyview.ptm.islive){
            $('#live').prop('checked', false);skyview.ptm.liveSky();$("#dtpicker").val(''); 
        }
        skyview.ptm.spinIt(0);//remove any existing rotation factor
        skyview.ptm.spinIt(parseFloat(this.value));
    });

    $('#language').change(function (){ 
        skyview.ptm.changeLanguage(this.value); 
    });       
});    

// end general settings //
// objects settings //    
$(document).ready(function(){    
    $('#showplanets').change(function (){   
        skyview.ptm.showplanets = this.checked ? true: false;
    });                 
    $('#showplanetlabels').change(function (){   
        skyview.ptm.showplanetlabels = this.checked ? true: false;
    });         
    $('#showstars').change(function (){ 
        skyview.ptm.showstars = this.checked ? true: false;
    });
    $('#showstarlabels').change(function (){   
        skyview.ptm.showstarlabels = this.checked ? true: false;
    });         
    document.getElementById("magnitude").oninput =function (){ 
        skyview.ptm.magnitude = parseFloat(this.value);
    }    
    document.getElementById("scalestars").oninput =function (){   
        skyview.ptm.scalestars = parseFloat(this.value);
    }        
    $('#meteorshowers').change(function (){ 
        skyview.ptm.meteorshowers = this.checked ? true: false;
    });
    $('#showgalaxy').change(function (){ 
        skyview.ptm.showgalaxy = this.checked ? true: false; 
    });    
}); 
// end objects settings //  
// begin line settings //   
$(document).ready(function(){
    $('#constellations').change(function (){ 
        skyview.ptm.constellation.lines = this.checked ? true: false;
    });
    $('#constellationlabels').change(function (){ 
        skyview.ptm.constellation.labels = this.checked ? true: false;
    });
    $('#constellationboundaries').change(function (){ 
        skyview.ptm.constellation.boundaries = this.checked ? true: false;
    });
    $('#showorbits').change(function (){ 
        skyview.ptm.showorbits = this.checked ? true: false;
    });
    $('#ecliptic').change(function (){ 
        skyview.ptm.ecliptic = this.checked ? true: false;            
    });
    $('#meridian').change(function (){ 
        skyview.ptm.meridian = this.checked ? true: false;
    });
    $('#gridlines_az').change(function (){ 
        skyview.ptm.grid.az = this.checked ? true: false;            
    });
    $('#gridlines_eq').change(function (){ 
        skyview.ptm.grid.eq = this.checked ? true: false;
    });
    $('#gridlines_gal').change(function (){ 
        skyview.ptm.grid.gal = this.checked ? true: false;
    });
}); 
// end line settings //    
$(document).ready(function(){  
    //var ad=A.aladin('#ADdiv', {survey:"P/DSS2/color",target:"m31", fov:3});  
    skyview.ad=A.aladin('#ADdiv');   
    document.getElementById('findobjfrm').addEventListener('submit',function (evt){
        var target=$('#findme').val();
        skyview.ad.gotoObject(target); 

        misc.show($('#addpointfrm'));    
        $("#pAddpoint").html("Add "+target+ " to map (all fields optional):");        
        evt.preventDefault();
    }); 
    document.getElementById('addpointfrm').addEventListener('submit',function (evt){ 
        var radec=skyview.ad.getRaDec()
        var label=$('#label').val();
        if(label=='')label=radec;
        window.alert("adding at (ra,dec): "+radec); 
        skyview.ptm.addPointer({
            'ra':radec[0],
            'dec':radec[1],
            'label':label,
            'img':$('#imagelink').val(),
            'url':$('#infolink').val(),
            'credit':$('#linktip').val(),
            'colour':$('#color').val()
        })   
        skyview.ptm.draw();  
        misc.hide($('#findobjfrm'));
        misc.hide($('#addpointfrm')); 
        misc.show($('#removeobj'));
        misc.show($('#addmoreobj')); 
        evt.preventDefault();
    });  
    document.getElementById('removeobj').addEventListener('click',function() {
        skyview.viewskymap(); 
        misc.show($('#findobjfrm')); 
        misc.hide($('#removeobj'));
        misc.hide($('#addmoreobj'));
    });       
    document.getElementById('addmoreobj').addEventListener('click',function() {
        misc.show($('#findobjfrm')); 
        misc.hide($('#removeobj'));
        misc.hide($('#addmoreobj'));
        document.forms['findobjfrm'].reset();
        document.forms['addpointfrm'].reset(); 
    }); 
});
$(document).ready(function(){     
    // style="background-color:hsl(0,0%,100%);position:absolute;left:0px;top:0px;display:none"     
    $('#dtpicker').datetimepicker();                              
    $("#dtpicker").datetimepicker().on('dp.hide', function (e) {
        var d1=$('#dtpicker').data('DateTimePicker').date(); 
        var d = new Date(d1);
        //Sun, 02 Jan 2011 14:46:28 +0000
        //var d2=moment(d1, "MM/DD/YYYY hh:mm a").format("ddd, DD MMM YYYY HH:mm")              
        //el=document.getElementById("clock"); 
        //el.value=d1;
        //el.value=d2+":00 +0000";    
        //window.alert(el.value);                                
        //var d = new Date(1999,1, 29, 15, 31,0,0);
        window.alert("setting date: "+d); 
        //planetarium.clock = new Date("October 25, 1985 01:21:00");
        if(skyview.ptm.islive)
        { 
            skyview.ptm.liveSky();$('#live').prop('checked', false);
        }
        skyview.ptm.updateClock(d);
        skyview.ptm.draw();//changedtime = true;
    });   
});             