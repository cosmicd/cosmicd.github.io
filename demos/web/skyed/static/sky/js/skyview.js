(function( skyview, $,undefined) {       
    skyview.ptm=null;//virtualsky
    skyview.ad=null;//aladin  
    var location=null;// location latitude and longitude
    skyview.gmapcallback=function gmapcallback(loc){ 
        $("#lat").val(loc.lat);
        $("#lng").val(loc.lng);
        location=loc;
        skyview.viewskymap();
    };
    skyview.viewskymap=function viewskymap(){
        var fnm=['objsetfrm','linesetfrm','gensetfrm','findobjfrm','addpointfrm'];
        misc.clearforms(fnm);      
        misc.show($("#skymaprow"));
        vsky('starmap',location);
        skyview.ptm.draw();
        skyview.ptm.liveSky();
        $("#dtpicker").val('live');
        $('#scalestars').val(skyview.ptm.scalestars);  
        $('#magnitude').val(skyview.ptm.magnitude); 
        var tmp=skyview.ptm.wide+'x'+skyview.ptm.tall;
        $('#dimensions').val(tmp);
        var tmp=(skyview.ptm.az_off+180.)%360;
        $('#az_off').val(tmp);        
        if(location.lat==null || location.lng==null)window.alert("warning: skyview did not get your latitude or longitude! arbitrary value was used to display skymap");        
    };     
    function vsky(divID,loc){
        //var projection=['polar', 'stereo', 'lambert', 'equirectangular','ortho','planechart','fisheye','gnomic'];           
        skyview.ptm = $.virtualsky({
            id: divID,
            latitude: loc.lat, 
            longitude: loc.lng,                               
            projection: 'stereo',            
            magnitude:6,
            scalestars:1,
            showstarlabels:true,
            az: 0,
            fov:10,
            gradient:false,
            constellations:true,
            constellationlabels:true,
            gridlines_az:true,
        });
    };   

}( window.skyview = window.skyview || {}, jQuery ));

   