/* stylehistory.js v.1.0.1
 ** http://stephanjaeger-public.sharepoint.com
 ** stephan@stephanjaeger.onmicrosoft.com
 ** https://github.com/stephanj79/styleHistory
 ** https://www.npmjs.com/package/stylehistory
 ** Live-demo: http://jsfiddle.net/stephanj79/g7631mhf/
 **
 **
 ** Copyright (c) 2015 Stephan Jäger
 ** Available under the MIT license
 ** https://github.com/stephanj79/styleHistory/blob/master/LICENSE-MIT
 */
if(typeof jQuery==='undefined'){
    throw new Error('stylehistory.js requires jQuery')
}
+function($){
    'use strict';
    var version=$.fn.jquery.split(' ')[0].split('.');
    if((version[0]<1&&version[1]<11||(version[0]==1&&version[1]==11&&version[2]<2))){
        throw new Error('stylehistory.js requires jQuery version 1.11.2 or higher')
    }
}(jQuery);
jQuery.fn.stylehistory=function(options){
    $(window).resize(function(){
        var cW=$('.'+sh).width;
        if(cW>$(window).width){
            $('.'+sh).width=$(window).width;
        }
    });
    var v=jQuery.extend({
        chronologically:true,reverseYear:false,reverseMonth:false,itemCount:0,marker:'dot'
    },options);
    var sh="style-history";
    var shi="style-history-item";
    var shiy="style-history-item-year";
    var shim="style-history-item-month";
    var shit="style-history-item-text";
    var shii="style-history-inner-item";
    var shiiy="style-history-inner-item-year";
    var shiim="style-history-inner-item-month";
    var shiimoi="style-history-inner-item-mo-inner";
    var shiimi="style-history-inner-item-month-inner";
    var shiimim="style-history-inner-item-month-inner-month";
    var po;
    var dot='<div class="dot"></div>';
    var aup='<div class="arrow up"></div>';
    var ado='<div class="arrow down"></div>';
    var sep='<div class="septor"></div>';
    var iA=[];
    var tA=[];
    var mA=[];
    var j;
    var mo;
    var mM=false;

    function init(){
        $.each($('.'+shi),function(index,div){
            if(div.children.length>0){
                var y="";
                var m="";
                $.each(div.children,function(i,d){
                    if(d.className==shiy){
                        if(!mM){
                            y=d.innerHTML;
                        }
                    }
                    if(d.className==shim){
                        if(mM){
                            mM=false;
                            mA.push({m:m,t:tA});
                            tA=[];
                        }
                        m=d.innerHTML;
                        var l=d.nextElementSibling;
                        while(l!=null){
                            if(l.className==shim){
                                mM=true;
                                break;
                            }
                            l=l.nextElementSibling;
                        }
                        var n=d.nextElementSibling;
                        if(n.className==shit){
                            tA.push(n.innerHTML);
                            if(n.nextElementSibling!=null){
                                while(n.nextElementSibling!=null&&n.nextElementSibling.className==shit){
                                    if(n.nextElementSibling!=null){
                                        n=n.nextElementSibling;
                                        tA.push(n.innerHTML);
                                    }
                                    else{
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    if(d.className==shit){
                        if(!mM){
                            if(tA.length==0){
                                if(mA.length==0){
                                    tA.push(d.innerHTML);
                                }
                            }
                            if(mA.length==0){
                                mA.push({m:m,t:tA});
                                tA=[];
                            }
                        }
                    }
                });
                if(tA.length>0){
                    mA.push({m:m,t:tA})
                }
                iA.push({y:y,m:mA});
                tA=[];
                mA=[];
            }
        });
    }

    function sD(){
        if(v.marker=='dot'){
            po=dot;
        }
        else if(v.marker=='arrow'){
            if(!v.reverseYear){
                po=aup;
            }
            else{
                po=ado;
            }
        }
    }

    function cV(){
        sD();
        $.each(iA,function(index,item){
            if(v.itemCount==0){
                j=item.y;
                $('.'+sh).append(po+'<div class="'+shii+'"><div class="'+shiiy+'">'+j+'</div><div class="'+shiim+j+'"></div>'+sep+'</div>');
                $.each(item.m,function(i,m){
                    mo=m.m;
                    $("."+shiim+j+"").append('<div class="'+shiimi+j+'"><div class='+shiimi+j+'-month'+mo+'><div class="'+shiimim+'">'+(m.m==undefined?"":m.m)+'</div></div></div>');
                    $.each(m.t,function(ind,t){
                        $("."+shiimi+j+'-month'+mo+"").append('<div class="'+shiimi+j+'-text'+mo+'">'+(t==undefined?"":t)+'</div>');
                    });
                });
            }
            else{
                if(index<v.itemCount){
                    j=item.y;
                    $('.style-history').append(po+'<div class="'+shii+'"><div class="'+shiiy+'">'+j+'</div><div class="'+shiim+j+'"></div>'+sep+'</div>');
                    $.each(item.m,function(i,m){
                        mo=m.m;
                        $("."+shiim+j+"").append('<div class="'+shiimi+j+'"><div class='+shiimi+j+'-month'+mo+'><div class="'+shiimim+'">'+(m.m==undefined?"":m.m)+'</div></div></div>');
                        $.each(m.t,function(ind,t){
                            $("."+shiimi+j+'-month'+mo+"").append('<div class="'+shiimoi+j+'-text'+mo+'">'+(t==undefined?"":t)+'</div>');
                        });
                    });
                }
            }
        });
        $('.'+shiiy+'').css({
            'float':'left'
        });
        $('.'+shiim).css({
            'float':'left'
        });
    }

    function gf(a,b){
        return b-a;
    }

    function sf(a,b){
        return a-b;
    }

    function cY(){
        iA.sort(function(a,b){
            var r;
            if(v.reverseYear){
                r=sf(parseInt(a.y),parseInt(b.y));
            }
            else{
                r=gf(parseInt(a.y),parseInt(b.y));
            }
            return r;
        });
    }

    function cM(){
        $.each(iA,function(i,d){
            if(d.m.length>1){
                d.m.sort(function(a,b){
                    var r;
                    if(v.reverseMonth){
                        r=sf(parseInt(a.m),parseInt(b.m));
                    }
                    else{
                        r=gf(parseInt(a.m),parseInt(b.m));
                    }
                    return r;
                });
            }
        });
        iA.sort(function(a,b){
            var r;
            r=sf(parseInt(a.y),parseInt(b.y));
            return r;
        });
    }

    function hOV(){
        $('.'+shi).remove();
    }

    return this.each(function(){
        if($(this).length>0){
            init();
            if(v.chronologically){
                cM();
                cY();
            }
            cV();
            hOV();
        }
    });
};