// ==UserScript==
// @name         Dynamic Map Extension
// @namespace    http://www.nicovideo.jp/user/72302802
// @version      1.2
// @description  Add some useful function for Minecraft Dynamic Map
// @author       monatann
// @match        http://yukieijiserver.ddns.net:8123
// @require      https://monatann.azurewebsites.net/files/nicoaddon/script/jquery-3.2.1.js
// @require      https://monatann.azurewebsites.net/files/minecraft/GM_config.js
// @require      https://monatann.azurewebsites.net/files/minecraft/jquery.contextmenu.r2.packed.js
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        none
// ==/UserScript==

GM_config.init(
    {
        'id': 'MyConfig', // The id used for this instance of GM_config
        'title': 'Dynamic Map Extension v1.2 Setting', // Panel Title
        'fields': // Fields object
        {
            'text1': // This is the id of the field
            {
                'label': 'You need setting by each server ip.', // Appears next to field
                'type': 'text', // Makes this setting a text field
                'default': '' // Default value if user doesn't change it
            },
            'menu1': // This is the id of the field
            {
                'label': 'Right Menu Pin / true=pinned', // Appears next to field
                'type': 'text', // Makes this setting a text field
                'default': 'true' // Default value if user doesn't change it
            },
            'menu2': // This is the id of the field
            {
                'label': 'Dimention List Height(px)', // Appears next to field
                'type': 'text', // Makes this setting a text field
                'default': '350' // Default value if user doesn't change it
            },
            'menu3': // This is the id of the field
            {
                'label': 'Player List Height(px)', // Appears next to field
                'type': 'text', // Makes this setting a text field
                'default': '100' // Default value if user doesn't change it
            },
            'menu4': // This is the id of the field
            {
                'label': 'Chat Log Height(px)', // Appears next to field
                'type': 'text', // Makes this setting a text field
                'default': '200' // Default value if user doesn't change it
            },
            'menu5': // This is the id of the field
            {
                'label': 'Font Color', // Appears next to field
                'type': 'text', // Makes this setting a text field
                'default': 'white' // Default value if user doesn't change it
            },
            'menu6': // This is the id of the field
            {
                'label': 'Right Menu Background-color', // Appears next to field
                'type': 'text', // Makes this setting a text field
                'default': 'rgba(0,0,0,0.6)' // Default value if user doesn't change it
            },
            'menu7': // This is the id of the field
            {
                'label': 'Map Background-image(unstable)', // Appears next to field
                'type': 'text', // Makes this setting a text field
                'default': 'https://monatann.azurewebsites.net/img/voiceroid_bg.jpg' // Default value if user doesn't change it
            },
            'blank1': // This is the id of the field
            {
                'label': '', // Appears next to field
                'type': 'text', // Makes this setting a text field
                'default': '' // Default value if user doesn't change it
            },
            'kaihatusha': // This is the id of the field
            {
                'label': 'Developer: Monatann', // Appears next to field
                'type': 'text', // Makes this setting a text field
                'default': 'http://www.nicovideo.jp/user/72302802  https://monatann.azurewebsites.net/ https://twitter.com/monatannzunzun2' // Default value if user doesn't change it
            },
            'update': // This is the id of the field
            {
                'label': "Update/Suggestion/Report Bugs/Complaint ( I'm sorry if I reply too late. ): Here→", // Appears next to field
                'type': 'text', // Makes this setting a text field
                'default': 'http://ch.nicovideo.jp/monatann/blomaga/ar1648374 Twitter→ https://twitter.com/monatannzunzun2' // Default value if user doesn't change it
            },
            'picture': // This is the id of the field
            {
                'label': 'Picture: blueberry-san', // Appears next to field
                'type': 'text', // Makes this setting a text field
                'default': 'http://www.nicovideo.jp/user/1584023　Thank you very much!' // Default value if user doesn't change it
            },
            'blank2': // This is the id of the field
            {
                'label': '', // Appears next to field
                'type': 'text', // Makes this setting a text field
                'default': '' // Default value if user doesn't change it
            },
            'announce': // This is the id of the field
            {
                'label': 'Important Announce', // Appears next to field
                'type': 'textarea', // Makes this setting a text field
                'default': "1. It's not my business if you catch any harm.\n2.Use this script by your own lisk.\n3.Don't re-upload this script.\n4.You may edit this source code, but you may not share the file.\n(But I might give you a permission if you ask me.)\n\nSercret Option: Push F12 key:)"
            },
            'memo': // This is the id of the field
            {
                'label': 'Memo space', // Appears next to field
                'type': 'textarea', // Makes this setting a text field
                'default': '' // Default value if user doesn't change it
            }
        },
        'css': '#MyConfig{background:none;}input:not(#MyConfig_field_blank1):not(#MyConfig_field_blank2):not(#MyConfig_field_kaihatusha):not(#MyConfig_field_text1):not(#MyConfig_field_update):not(#MyConfig_field_picture):not(#MyConfig_field_menu7){width:200px;background-color:#f0ffffa6;}#MyConfig_field_blank1{width:500px;border:none!important;background:none;border:none!important;}#MyConfig_field_blank2{width:500px;border:none!important;background:none;border:none!important;}#MyConfig_field_kaihatusha{width:800px;border:none!important;background:none;}#MyConfig_field_text1{width:500px;border:none!important;background:none;border:none!important;}#MyConfig_field_update{width:650px;border:none!important;background:none;border:none!important;}#MyConfig_field_picture{width:500px;border:none!important;background:none;border:none!important;}#MyConfig_field_announce{width:500px;height:120px;border:none!important;background:none;border:none!important;}#MyConfig_field_memo{width:1000px;height:130px;background-color:#f0ffffa6;} #MyConfig_field_menu7{width:600px;background-color:#f0ffffa6;}'
    });

//load script setting
var rightMenuPin = GM_config.get('menu1');
var dimHeight = GM_config.get('menu2');
var playerHeight = GM_config.get('menu3');
var chatHeight = GM_config.get('menu4');
var fontColor = GM_config.get('menu5');
var rightMenuBg = GM_config.get('menu6');
var mapBg = GM_config.get('menu7');

//open script setting
jQuery(document).on("click", "#open_config", function(){
    if(jQuery('#MyConfig').length){
        var result = confirm("If you continue before clicking 'Save' button, this setting will dissapear. Are you ok?");
        if(result) {
            GM_config.close();
        } else {
            return false;
        }
    }else{
        GM_config.open();
        jQuery("#MyConfig").css({"background-image":"url('https://monatann.azurewebsites.net/img/settingbg.png'","background-size":"cover"});
    }
});

//version
var version = '<textarea id="location_copyarea" style="width:0px;height:0px;"></textarea>';

//jQuery Conflict
jQuery.noConflict();

//start after 2s
setTimeout(function(){
    //apply setting
    jQuery("#mcmap > div.sidebar").css("background-color",rightMenuBg);
    jQuery("body").css("background-color","#00000000");
    jQuery("#mcmap > div.leaflet-container").css({"background-image":"url('" + mapBg + "'","background-size":"cover"});

    //chat log div
    jQuery("#mcmap > div.sidebar > div > fieldset:nth-child(3)").after('<hr>Chat Log<br><div id="backlog" style="border:solid 1px black;height:' + chatHeight + 'px;overflow:auto;"></div>');

    //setting
    jQuery("#mcmap > div.map.leaflet-container.leaflet-fade-anim > div.leaflet-control-container > div.leaflet-top.leaflet-left").prepend('<button class="leaflet-control" id="open_config">Setting</button>');

    var html = "";
    var temp;
    //If someone chat
    jQuery('#mcmap > div.chat > div').on('DOMSubtreeModified propertychange', function() {
        temp = jQuery(this).html();
        if(temp.indexOf('><img src="') != -1){
            html = html + temp;
            jQuery("#backlog").html(html);
        }
    });

    //version
    jQuery("#backlog").after(version);

    //click pin
    if(rightMenuPin == "true"){
        jQuery("#mcmap > div.sidebar > div > div.pin").click();
    }

    //copy location
    jQuery("body").prepend('<div class="contextMenu" id="menuID" style="display: none;"><ul><li><a id="copy_location">Copy Location</a></li></ul></div>');

    var location;
    jQuery('body').mousemove(function(e) {
        if(jQuery("#mcmap > div.map.leaflet-container.leaflet-fade-anim > div.leaflet-control-container > div.leaflet-top.leaflet-left > div.coord-control.leaflet-control > span.coord-control-value").text() != "---,---,---"){
            location = jQuery("#mcmap > div.map.leaflet-container.leaflet-fade-anim > div.leaflet-control-container > div.leaflet-top.leaflet-left > div.coord-control.leaflet-control > span.coord-control-value").text();
            jQuery("#location_copyarea").text(location);
        }
    });

    jQuery('#mcmap > div.map.leaflet-container.leaflet-fade-anim > div.leaflet-map-pane').contextMenu('menuID', {
        bindings: {
            'copy_location': function(t) {
                jQuery("#jqContextMenu").hide();
                jQuery("#location_copyarea").select();
                document.execCommand('copy');
            }
        }
    });

    //can sleep
    jQuery("#mcmap > div.largeclock.timeofday > div > div").html('<center><span id="sleepable" style="color:yellow;font-size:20px;display:none;">You can sleep.</span><center>');

    var hour;
    var min;
    jQuery('#mcmap > div.largeclock.timeofday > div').on('DOMSubtreeModified propertychange', function() {
        if(jQuery(this).text() != ""){
            hour = jQuery(this).text().substring(2, 0);
            min = jQuery(this).text().substring(5, 3);
            if(hour < 6 || hour > 18){
                jQuery("#sleepable").css("display","block");
            }else if(hour == 18){
                if(min > 30){
                    jQuery("#sleepable").css("display","block");
                }
            }else{
                jQuery("#sleepable").css("display","none");
            }
        }
    });

    //compass
    jQuery("#mcmap > div.compass.compass_S.compass_flat").css("right","270px");

    setInterval(function(){
        //player menu height
        jQuery("#mcmap > div.sidebar.pinned > div > fieldset:nth-child(3) > ul").css("height",playerHeight);
        //dimention menu height
        jQuery("#mcmap > div.sidebar.pinned > div > fieldset:nth-child(2) > ul").css("height",dimHeight);
    },1000);

    //serch DIMs
    jQuery("#mcmap > div.sidebar > div > fieldset:nth-child(2) > legend").after('<input type="text" id="searchDIM" placeholder="Search Dimention(ID/Name)"><br><br>');

    //If you write text in serch box
    jQuery(document).on('keyup', '#searchDIM' , function() {
        //get value
        var name = jQuery("#searchDIM").val();
        name = name.toLowerCase();

        //display and not display
        var html;
        jQuery('#mcmap > div.sidebar.pinned > div > fieldset:nth-child(2) > ul > li').each(function() {
            //all hide
            jQuery(this).css("display","none");
            //get html
            html = jQuery(this).text();
            html = html.toLowerCase();
            //If html contains serch box value,display
            if(html.match(name)){
                jQuery(this).css("display","table-row");
            }
        });
    });

},2000);

console.log("-----------------------------------------------------------------------------");
console.log("loooooooooooooooooo/..............................................-::/+oooool");
console.log("loooooooooooooooooo/                  .... ..-.-..              .-:. :+oooool");
console.log("looooooooooooooooyy:  `-:+osyshys+syhmmmdddddddddmmdhs+:`    .-::/+: -ooooool");
console.log("looooooooooooooohso++hyo:`-dhhyyyyhhddhhhhhhhddddddddmmmmh+-+oo+//+: -+oooool");
console.log("los+/::::::::::+hyho.`  .oyyyhhhhhhhhhhhhhhdddddddddddddysossso///+- :+oooool");
console.log("loy`/o:-.`    `oddddhyoyhyhhyyyhhhhhhhhhhhhhdddddddddhsoooosss+////` :+oooool");
console.log("lo+--yoo++//:-+/.....hhyyyyyyhhhhhhhhhhhhhhdddddddddhysoooosso///:. : +oooool");
console.log("lo/- /so++++oooo+/::oyyhhhhhhhhhhhhhhhhdhddddddddddddddyoooss+/:-`.-` +oooool");
console.log("lo/`: :oo+++ooooosooyhhhhddhhhhhhhhhhhhddddddmddddddddddhsoso:.`:yms. +oooool");
console.log("lo/ `-`.////+ooososhhhhhdhhhhhhhhhhhhdddddddddddddddddddddo-.:ohddmmy-+oooool");
console.log("lo/   --:.-::oosoyhhhhhddhhhhhhhhhdddddddddddddddddddddddddyddhddddmmysoooool");
console.log("lo/     `---:.-+sydddddmddhdddddddddddddddmdddddmddddddddddmmdddddddNdyyooool");
console.log("lo+:::::::::yho+syhhdddmdddhhdddddddddhdddmdsdhddmddshhdddddNmdddddmmNydsoool");
console.log("loooooooooooss/yo+sshhmdydd+ydshydhdddhddddmshdddmmdddddddddmNmddmmmmNdmmoool");
console.log("looooooooooooooyysyhhhmdhmdoyddddddddddddmmmdddddmNmdddddddddNNmdmmmmmNmmhool");
console.log("looooooooooooohyhdddddmhdmdddddddddddddddmdmdddddmmNmmmmmddddmNNmmmmmmmmmdool");
console.log("looooooooooosodddmdmmdmodmmdddddddddddmmmmoNmmmmmm+mmmmmmdddddNNNmmmmmmmmhyol");
console.log("looooooooooosomdmmmmNdmssmmdmmdmmmmmmmmmmmommmmmmm/oNmmmdddddddNNNmmmmmmmhyol");
console.log("loooooooooooyymmmmNmNhmm+smymmmmmmmmmmmmNd:hmmmmhy--smmmddddddsyNNmmNmmmmyhol");
console.log("looooooooooshhmmmmNmNh/hy.+dsmNmmmmmmmddhs:ohhhhyssoommmdddddmoyNNNNmmmmmsyol");
console.log("loooooooooohosmNmmNNmN+.:o+yhhho//::-...`.ohdmNNmNNmsmmdddddmm/dNNmdmmmmdysol");
console.log("loooooooooyoooyNNmmNNmm/shymdmmm+``````````.:+mdddyh:dNhhdddmmoNmddmmmmmyyool");
console.log("loooooooooooooooyNNNNNNm+..-sdddy``````````` /++///.ommhdddmNmdddddmmmmhssool");
console.log("loooooooooooooooosdmmNNNNs. -++/+`````````````.--...yhmmmmmmNmddddmmmmdohoool");
console.log("loooooooooooooooooohhmmNNNy.```.`````````````......:.dmmmNmmNddddmmmmdshsoool");
console.log("looooooooooooooooooyhNdmNNNo..``````````````````````:mNmmNNmddddmmmmdshsooool");
console.log("loooooooooooooooooosdhmmmNNm+``````````````````````/dNmmNmddddmmmmdhyyooooool");
console.log("loooooooooooooooooohsosNmNNNNh/```````-::-.`````-+hmmmmmddddmNNmdyhdyoooooool");
console.log("loooooooooooooooooooooodhmNNNmmmyo:.````````.:oyysoooyhdddmNmmdyydhoooooooool");
console.log("looooooooooooooooooooooooosddddddmNmyooo++oo:::::::/hddmmNdhysoyyoooooooooool");
console.log("loooooooooooooooooooooooooooshdhdmmdsooosyhy::::+shdmmdhhsooooooooooooooooool");
console.log("loooooooooooooooooooooooooooohmddmmyho+hmmo/:+ydmmmho/:::/ossoooooooooooooool");
console.log("looooooooooooooooooooooooooooymddmy/:/hdd++sddddo/.``  `::::/sooooooooooooool");
console.log("looooooooooooooooooooooooooooysoyh-``yddyhddds:`      `-::::::+oooooooooooool");
console.log("loooooooooooooooooooooooooooooo+:`  odddddy/`         --`     .oooooooooooool");
console.log("-----------------------------------------------------------------------------");