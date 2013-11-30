$(document).ready(function(){switchTo("free");$("#scroller-free-window").scrollable({easing:"swing",size:"1",items:"#scroller-free-wrap",loop:"true",next:"#button-next-project-free",navi:"#project-dots-free",naviItem:"a",keyboard:false,speed:"500"})

;$("#scroller-trinity-window").scrollable({easing:"swing",size:"1",items:"#scroller-trinity-wrap",loop:"true",next:"#button-next-project-trinity",navi:"#project-dots-trinity",naviItem:"a",keyboard:false,speed:"500"})

;$("#scroller-football-window").scrollable({easing:"swing",size:"1",items:"#scroller-football-wrap",loop:"true",next:"#button-next-project-football",navi:"#project-dots-football",naviItem:"a",keyboard:false,speed:"500"})

;$("#scroller-lbi-window").scrollable({easing:"swing",size:"1",items:"#scroller-lbi-wrap",loop:"true",next:"#button-next-project-lbi",navi:"#project-dots-lbi",naviItem:"a",keyboard:false,speed:"500"});$

("#scroller-wgsn-window").scrollable({easing:"swing",size:"1",items:"#scroller-wgsn-wrap",loop:"true",next:"#button-next-project-wgsn",navi:"#project-dots-wgsn",naviItem:"a",keyboard:false,speed:"500"});$

("#scroller-freelance-window").scrollable({easing:"swing",size:"1",items:"#scroller-freelance-wrap",loop:"true",next:"#button-next-project-freelance",navi:"#project-dots-freelance",naviItem:"a",keyboard:false,speed:"500"});$

("#scroller-comm-illus-window").scrollable({easing:"swing",size:"1",items:"#scroller-comm-illus-wrap",loop:"true",next:"#button-next-project-comm-illus",navi:"#project-dots-comm-illus",naviItem:"a",keyboard:false,speed:"500"});$("#scroller-per-illus-window").scrollable({easing:"swing",size:"1",items:"#scroller-per-illus-wrap",loop:"true",next:"#button-next-project-per-illus",navi:"#project-dots-per-illus",naviItem:"a",keyboard:false,speed:"500"});$

("#MainWrapper .trinity a ").bind("click",function(){switchTo("trinity")});$

("#MainWrapper .football a ").bind("click",function(){switchTo("football")});$

("#MainWrapper .lbi a ").bind("click",function(){switchTo("lbi")});$

("#MainWrapper .wgsn a ").bind("click",function(){switchTo("wgsn")});$

("#MainWrapper .freelance a ").bind("click",function(){switchTo("freelance")});$

("#MainWrapper .free a ").bind("click",function(){switchTo("free")});$

("#MainWrapper .comm-illus a ").bind("click",function(){switchTo("comm-illus")});$

("#MainWrapper .per-illus a ").bind("click",function(){switchTo("per-illus")})});


var curSect="";function switchTo(a){jQuery.easing.def="easeInOutSine";h=$(".project").height();if(a==curSect){return}

if(a=="free"){$(".button-next-project").hide();$("#button-next-project-free").show();$(".project-dots").hide();$("#scroller-vertical").animate({top:"0"},{duration:500});$("#project-dots-free").show(0)}

if(a=="lbi"){$(".button-next-project").hide();$("#button-next-project-lbi").show();$(".project-dots").hide();$("#scroller-vertical").animate({top:"-"+(h)+"px"},{duration:500});$("#project-dots-lbi").show(0)}

if(a=="trinity"){$(".button-next-project").hide();$("#button-next-project-trinity").show();$(".project-dots").hide();$("#project-dots-trinity").show(0);$("#scroller-vertical").animate({top:"-"+(h*2)+"px"},{duration:500})}


if(a=="football"){$(".button-next-project").hide();$("#button-next-project-football").show();$(".project-dots").hide();$("#project-dots-football").show(0);$("#scroller-vertical").animate({top:"-"+(h*3)+"px"},{duration:500})}


if(a=="wgsn"){$(".button-next-project").hide();$("#button-next-project-wgsn").show();$(".project-dots").hide();$("#scroller-vertical").animate({top:"-"+(h*4)+"px"},{duration:500});$("#project-dots-wgsn").show(0)}

if(a=="freelance"){$(".button-next-project").hide();$("#button-next-project-freelance").show();$(".project-dots").hide();$("#scroller-vertical").animate({top:"-"+(h*5)+"px"},{duration:500});$("#project-dots-freelance").show(0)}

if(a=="comm-illus"){$(".button-next-project").hide();$("#button-next-project-comm-illus").show();$(".project-dots").hide();$("#scroller-vertical").animate({top:"-"+(h*6)+"px"},{duration:500});$("#project-dots-comm-illus").show(0)}

if(a=="per-illus"){$(".button-next-project").hide();$("#button-next-project-per-illus").show();$(".project-dots").hide();$("#scroller-vertical").animate({top:"-"+(h*7)+"px"},{duration:500});$("#project-dots-per-illus").show(0)}curSect=a};