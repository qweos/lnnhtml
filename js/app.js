!function(a){"use strict";function d(){a(".dropdown-backdrop").remove(),a(b).each(function(){e(a(this)).removeClass("open")})}function e(b){var d,c=b.attr("data-target");return c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,"")),d=c&&a(c),d&&d.length||(d=b.parent()),d}var b="[data-toggle=dropdown]",c=function(b){var c=a(b).on("click.dropdown.data-api",this.toggle);a("html").on("click.dropdown.data-api",function(){c.parent().removeClass("open")})};c.prototype={constructor:c,toggle:function(){var f,g,c=a(this);if(!c.is(".disabled, :disabled"))return f=e(c),g=f.hasClass("open"),d(),g||("ontouchstart"in document.documentElement&&a('<div class="dropdown-backdrop"/>').insertBefore(a(this)).on("click",d),f.toggleClass("open")),c.focus(),!1},keydown:function(c){var d,f,h,i,j;if(/(38|40|27)/.test(c.keyCode)&&(d=a(this),c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled"))){if(h=e(d),i=h.hasClass("open"),!i||i&&27==c.keyCode)return 27==c.which&&h.find(b).focus(),d.click();f=a("[role=menu] li:not(.divider):visible a",h),f.length&&(j=f.index(f.filter(":focus")),38==c.keyCode&&j>0&&j--,40==c.keyCode&&j<f.length-1&&j++,~j||(j=0),f.eq(j).focus())}}};var f=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var d=a(this),e=d.data("dropdown");e||d.data("dropdown",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.dropdown.Constructor=c,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=f,this},a(document).on("click.dropdown.data-api",d).on("click.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.dropdown.data-api",b,c.prototype.toggle).on("keydown.dropdown.data-api",b+", [role=menu]",c.prototype.keydown)}(window.jQuery);
!function(a){"use strict";var b=null,c=function(b,d,e){e&&(e.stopPropagation(),e.preventDefault()),this.$element=a(b),this.$newElement=null,this.button=null,this.options=a.extend({},a.fn.selectpicker.defaults,this.$element.data(),"object"==typeof d&&d),null==this.options.title&&(this.options.title=this.$element.attr("title")),this.val=c.prototype.val,this.render=c.prototype.render,this.refresh=c.prototype.refresh,this.selectAll=c.prototype.selectAll,this.deselectAll=c.prototype.deselectAll,this.init()};c.prototype={constructor:c,init:function(){this.options.container?this.$element.css("visibility","hidden"):this.$element.hide(),this.multiple=this.$element.prop("multiple");var d=this.$element.attr("id");if(b=this.$element.attr("class"),this.$newElement=this.createView(),this.$element.after(this.$newElement),this.options.container&&this.selectPosition(),this.button=this.$newElement.find("> button"),void 0!==d){var e=this;this.button.attr("data-id",d),a('label[for="'+d+'"]').click(function(){e.button.focus()})}this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker/gi,"")),this.multiple&&this.$newElement.addClass("show-tick"),this.button.addClass(this.options.style),this.checkDisabled(),this.checkTabIndex(),this.clickListener(),this.render(),this.setSize()},createDropdown:function(){var c="<div class='btn-group custom-select "+b+"'>"+"<div class='dropdown-toggle' data-toggle='dropdown'>"+"<div class='filter-option pull-left'></div>&nbsp;"+"<div class='add-on'><span>›</span></div>"+"</div>"+"<ul class='dropdown-menu' role='menu'>"+"</ul>"+"</div>";return a(c)},createView:function(){var a=this.createDropdown(),b=this.createLi();return a.find("ul").append(b),a},reloadLi:function(){this.destroyLi();var a=this.createLi();this.$newElement.find("ul").append(a)},destroyLi:function(){this.$newElement.find("li").remove()},createLi:function(){var b=this,c=[],d="";return this.$element.find("option").each(function(){var e=a(this),f=e.attr("class")||"",g=e.text(),h=void 0!==e.data("subtext")?'<small class="muted">'+e.data("subtext")+"</small>":"",i=void 0!==e.data("icon")?'<i class="'+e.data("icon")+'"></i> ':"";if(""!==i&&(e.is(":disabled")||e.parent().is(":disabled"))&&(i="<span>"+i+"</span>"),g=i+'<span class="text">'+g+h+"</span>",b.options.hideDisabled&&(e.is(":disabled")||e.parent().is(":disabled")))c.push('<a style="min-height: 0; padding: 0"></a>');else if(e.parent().is("optgroup")&&1!=e.data("divider"))if(0==e.index()){var j=e.parent().attr("label"),k=void 0!==e.parent().data("subtext")?'<small class="muted">'+e.parent().data("subtext")+"</small>":"",l=e.parent().data("icon")?'<i class="'+e.parent().data("icon")+'"></i> ':"";j=l+'<span class="text">'+j+k+"</span>",0!=e[0].index?c.push('<div class="div-contain"><div class="divider"></div></div><dt>'+j+"</dt>"+b.createA(g,"opt "+f)):c.push("<dt>"+j+"</dt>"+b.createA(g,"opt "+f))}else c.push(b.createA(g,"opt "+f));else 1==e.data("divider")?c.push('<div class="div-contain"><div class="divider"></div></div>'):1==a(this).data("hidden")?c.push(""):c.push(b.createA(g,f))}),a.each(c,function(a,b){d+="<li rel="+a+">"+b+"</li>"}),this.multiple||0!=this.$element.find("option:selected").length||b.options.title||this.$element.find("option").eq(0).prop("selected",!0).attr("selected","selected"),a(d)},createA:function(a,b){return'<a tabindex="0" class="'+b+'">'+a+"</a>"},render:function(){var b=this;this.$element.find("option").each(function(c){b.setDisabled(c,a(this).is(":disabled")||a(this).parent().is(":disabled")),b.setSelected(c,a(this).is(":selected"))});var c=this.$element.find("option:selected").map(function(){var e;return e=b.options.showSubtext&&a(this).attr("data-subtext")&&!b.multiple?' <small class="muted">'+a(this).data("subtext")+"</small>":"",void 0!=a(this).attr("title")?a(this).attr("title"):a(this).text()+e}).toArray(),d=this.multiple?c.join(", "):c[0];if(b.options.separatorText||b.options.defaultSeparatorText,b.options.selectedText||b.options.defaultSelectedText,b.multiple&&b.options.selectedTextFormat.indexOf("count")>-1){var g=b.options.selectedTextFormat.split(">"),h=this.options.hideDisabled?":not([disabled])":"";(g.length>1&&c.length>g[1]||1==g.length&&c.length>=2)&&(d=b.options.countSelectedText.replace("{0}",c.length).replace("{1}",this.$element.find('option:not([data-divider="true"]):not([data-hidden="true"])'+h).length))}d||(d=void 0!=b.options.title?b.options.title:b.options.noneSelectedText);var i;i=this.options.showSubtext&&this.$element.find("option:selected").attr("data-subtext")?' <small class="muted">'+this.$element.find("option:selected").data("subtext")+"</small>":"";var j=this.$element.find("option:selected").data("icon")||"";j.length&&(j='<i class="'+j+'"></i> '),b.$newElement.find(".filter-option").html(j+d+i)},setSize:function(){this.options.container&&this.$newElement.toggle(this.$element.parent().is(":visible"));var b=this,c=this.$newElement.find(".dropdown-menu");c.find("li > a");var e=this.$newElement.addClass("open").find(".dropdown-menu li > a").outerHeight();this.$newElement.removeClass("open");var k,f=c.find("li .divider").outerHeight(!0),g=this.$newElement.offset().top,h=this.$newElement.outerHeight(),i=parseInt(c.css("padding-top"))+parseInt(c.css("padding-bottom"))+parseInt(c.css("border-top-width"))+parseInt(c.css("border-bottom-width")),j=this.options.hideDisabled?":not(.disabled)":"";if("auto"==this.options.size){var l=function(){var m,d=g-a(window).scrollTop(),f=window.innerHeight,j=i+parseInt(c.css("margin-top"))+parseInt(c.css("margin-bottom"))+2,l=f-d-h-j;k=l,b.$newElement.hasClass("dropup")&&(k=d-j),m=c.find("li").length+c.find("dt").length>3?3*e+j-2:0,c.css({"max-height":k+"px","overflow-y":"auto","min-height":m+"px"})};l(),a(window).resize(l),a(window).scroll(l)}else if(this.options.size&&"auto"!=this.options.size&&c.find("li"+j).length>this.options.size){var m=c.find("li"+j+" > *").filter(":not(.div-contain)").slice(0,this.options.size).last().parent().index(),n=c.find("li").slice(0,m+1).find(".div-contain").length;k=e*this.options.size+n*f+i,c.css({"max-height":k+"px","overflow-y":"auto"})}if("auto"==this.options.width){this.$newElement.find(".dropdown-menu").css("min-width","0");var o=this.$newElement.find(".dropdown-menu").css("width");this.$newElement.css("width",o),this.options.container&&this.$element.css("width",o)}else this.options.width?this.options.container?(this.$element.css("width",this.options.width),this.$newElement.width(this.$element.outerWidth())):this.$newElement.css("width",this.options.width):this.options.container&&this.$newElement.width(this.$element.outerWidth())},selectPosition:function(){var b=a(this.options.container).offset(),c=this.$element.offset();if(b&&c){var d=c.top-b.top,e=c.left-b.left;this.$newElement.appendTo(this.options.container),this.$newElement.css({position:"absolute",top:d+"px",left:e+"px"})}},refresh:function(){this.reloadLi(),this.render(),this.setSize(),this.checkDisabled(),this.options.container&&this.selectPosition()},setSelected:function(a,b){b?this.$newElement.find("li").eq(a).addClass("selected"):this.$newElement.find("li").eq(a).removeClass("selected")},setDisabled:function(a,b){b?this.$newElement.find("li").eq(a).addClass("disabled").find("a").attr("href","#").attr("tabindex",-1):this.$newElement.find("li").eq(a).removeClass("disabled").find("a").removeAttr("href").attr("tabindex",0)},isDisabled:function(){return this.$element.is(":disabled")||this.$element.attr("readonly")},checkDisabled:function(){this.isDisabled()?(this.button.addClass("disabled"),this.button.click(function(a){a.preventDefault()}),this.button.attr("tabindex","-1")):!this.isDisabled()&&this.button.hasClass("disabled")&&(this.button.removeClass("disabled"),this.button.click(function(){return!0}),this.button.removeAttr("tabindex"))},checkTabIndex:function(){if(this.$element.is("[tabindex]")){var a=this.$element.attr("tabindex");this.button.attr("tabindex",a)}},clickListener:function(){var b=this;a("body").on("touchstart.dropdown",".dropdown-menu",function(a){a.stopPropagation()}),this.$newElement.on("click","li a",function(c){var d=a(this).parent().index(),e=a(this).parent(),f=e.parents(".custom-select"),g=b.$element.val();if(b.multiple&&c.stopPropagation(),c.preventDefault(),b.$element.not(":disabled")&&!a(this).parent().hasClass("disabled")){if(b.multiple){var h=b.$element.find("option").eq(d).prop("selected");h?b.$element.find("option").eq(d).prop("selected",!1):b.$element.find("option").eq(d).prop("selected",!0)}else b.$element.find("option").prop("selected",!1),b.$element.find("option").eq(d).prop("selected",!0);f.find("button").focus(),g!=b.$element.val()&&b.$element.trigger("change"),b.render()}}),this.$newElement.on("click","li.disabled a, li dt, li .div-contain",function(b){b.preventDefault(),b.stopPropagation();var c=a(this).parent().parents(".custom-select");c.find("button").focus()}),this.$element.on("change",function(){b.render()})},val:function(a){return void 0!=a?(this.$element.val(a),this.$element.trigger("change"),this.$element):this.$element.val()},selectAll:function(){this.$element.find("option").prop("selected",!0).attr("selected","selected"),this.render()},deselectAll:function(){this.$element.find("option").prop("selected",!1).removeAttr("selected"),this.render()},keydown:function(b){var c,d,e,f,g,h,i,j,k;if(c=a(this),e=c.parent(),d=a("[role=menu] li:not(.divider):visible a",e),d.length){if(/(38|40)/.test(b.keyCode))f=d.index(d.filter(":focus")),h=d.parent(":not(.disabled)").first().index(),i=d.parent(":not(.disabled)").last().index(),g=d.eq(f).parent().nextAll(":not(.disabled)").eq(0).index(),j=d.eq(f).parent().prevAll(":not(.disabled)").eq(0).index(),k=d.eq(g).parent().prevAll(":not(.disabled)").eq(0).index(),38==b.keyCode&&(f!=k&&f>j&&(f=j),h>f&&(f=h)),40==b.keyCode&&(f!=k&&g>f&&(f=g),f>i&&(f=i)),d.eq(f).focus();else{var l={48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"},m=[];d.each(function(){a(this).parent().is(":not(.disabled)")&&a.trim(a(this).text().toLowerCase()).substring(0,1)==l[b.keyCode]&&m.push(a(this).parent().index())});var n=a(document).data("keycount");n++,a(document).data("keycount",n);var o=a.trim(a(":focus").text().toLowerCase()).substring(0,1);o!=l[b.keyCode]?(n=1,a(document).data("keycount",n)):n>=m.length&&a(document).data("keycount",0),d.eq(m[n-1]).focus()}/(13)/.test(b.keyCode)&&(a(":focus").click(),e.addClass("open"),a(document).data("keycount",0))}}},a.fn.selectpicker=function(b,d){var f,e=arguments,g=this.each(function(){if(a(this).is("select")){var g=a(this),h=g.data("selectpicker"),i="object"==typeof b&&b;if(h){if(i)for(var j in i)h.options[j]=i[j]}else g.data("selectpicker",h=new c(this,i,d));if("string"==typeof b){var k=b;h[k]instanceof Function?([].shift.apply(e),f=h[k].apply(h,e)):f=h.options[k]}}});return void 0!=f?f:g},a.fn.selectpicker.defaults={style:null,size:"auto",title:null,selectedTextFormat:"values",noneSelectedText:"Nothing selected",countSelectedText:"{0} of {1} selected",width:null,container:!1,hideDisabled:!1,showSubtext:!1},a(document).data("keycount",0).on("keydown","[data-toggle=dropdown], [role=menu]",c.prototype.keydown)}(window.jQuery),$(function(){$("select").selectpicker()});

$(document).ready(function() {
    $(".flexslider.carrousel").flexslider({
        animation: "fade",
        animationLoop: true,
        slideshow: true,
        itemWidth: "100%",
        itemMargin: 0,
        controlNav: false,
        directionNav: false,
        animationSpeed: 1000
    });
});

$(window).load(function(){
    //$('.sticky-parent').stickit({scope: StickScope.Parent, top: 90, extraHeight: 1900});
    
    width = $(window).width();

    $(window).resize(function(){
        var diff =  $(this).width() - width;
        if (diff > 0) {
            width = $(this).width();
            sidebar_width = parseInt($('#sidebar').css('width').replace('px',''));
            new_width = sidebar_width + diff;
            new_width = new_width > 313 ? '313px' : (new_width + 'px');
            $('#sidebar').css('width', new_width)
        }
        else {
            width = $(window).width();
        }
    })

    if ($('.fixed-sidebar #main-content').height() > $('.fixed-sidebar #sidebar').height()){
        $.lockfixed('#sidebar', {
            offset: { 
                top: 120, 
                bottom: ($('.more').height() + $('#contact').height()) + 250
            }
        });
    }


    $('a[rel^="external"]').click( function() {
        window.open( $(this).attr('href') );
        return false;
    });
    // turn "external" classes into new window popups
    $('a.external').click( function() {
        window.open( $(this).attr('href') );
        return false;
    });

    $('a[rel^="external"]').click( function() {
        window.open( $j(this).attr('href') );
        return false;
    });
    // turn "external" classes into new window popups
    $('a.external').click( function() {
        window.open( $j(this).attr('href') );
        return false;
    });
    $("a[href^=#]").click(function(){
        var link = $(this).attr("href");
        var scroll = $(link).offset().top;
            scroll = scroll-60;
        $("html, body").animate({scrollTop:scroll},{duration:500});
        return false;
    });
    $('input').each(function(){
        var currentValue = $(this).val();
        if(($(this).attr('type') != "submit")){
            $(this).focus(function(){
                if( $(this).val() == currentValue ) {
                    $(this).val('');
                    $(this).addClass("filled");
                }
            });
            $(this).blur(function(){
                if( $(this).val() === '' ) {
                    $(this).val(currentValue);
                    $(this).removeClass("filled");
                }
                else{
                   $(this).addClass("filled");
                }
            });
        }
    });
    $("#contact_form").submit(function(event) {
        var error = false;
        $(".error").hide();
        if($("#entry_601117224").val() == ""){
            $("#entry_601117224").parent().find(".error").css("display", "inline-block");
            error = true;
        }
        if($("#entry_1170097165").val() == "Un email"){
            $("#entry_1170097165").parent().find(".error").css("display", "inline-block");
            error = true;
        }
        if($("#entry_316693739").val() == ""){
            $("#entry_316693739").parent().find(".error").css("display", "inline-block");
            error = true;
        }
        if($("#entry_394094967").val() == ""){
            $("#entry_394094967").parent().find(".error").css("display", "inline-block");
            error = true;
        }
        if(error){
            return false;
        }
        else{
            $("#contact_form").hide();
            $("#contact").addClass("contacted");
        }
    });
});
