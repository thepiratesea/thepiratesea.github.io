var ircurl = "/social_network/widget";
var IRCHTML = '<span id="controls"><a href="javascript:toggleIRC();" style="float:right">+/-</a>'+
              ' <iframe height="25px" width="200px" style="float:right" scrolling="no" src="/social_network/new-messages.php" frameborder="0" name="new_messages"></iframe>'+
//            ' <a href="javascript:getURL();" style="float:left">Get Page URL</a>'+ 
              ' <a href="javascript:reloadIframe();">Refresh Page</a>'+
			  ' |'+
			  ' <a href="."">Close Widget</a></span>'+
              '<span id="irc"><iframe src="'+ircurl+'" width="99%" height=450px"></iframe></span>';
function getURL () {
         alert(ltdev('WEBSITE').contentWindow.location.href);
};
function reloadIframe () {
         ltdev('WEBSITE').contentWindow.location.reload();
};
function toggleIRC () {
         if (ltdev('irc').style.display !== 'none') {
            ltdev('irc').style.display = 'none';
          } else {
            ltdev('irc').style.display = 'block';
         };
};
function ltdev (id,x) {
         return (!x?document.getElementById(id):document.createElement(id));
};
function appendIRC (init) {
         if (!parent.hasIRC) {
            var style = "position:fixed;left:0px;bottom:0px;height:auto;width:70%;background-color:black;";
            var irctab = ltdev('div',1);
            irctab.setAttribute('id','ircfooter');
            irctab.setAttribute('style',style);

            if (init) {
               irctab.innerHTML = '<a href="javascript:;" onclick="appendIRC(); color:white">Widget</a> | <a href="/social_network/">Social Network</a>    <iframe height="25px" width="200px" style="float:right" scrolling="no" src="/social_network/new-messages.php" frameborder="0" name="new_messages"></iframe>';
             } else {
               parent.hasIRC = true;
               irctab.innerHTML = IRCHTML;

               document.getElementsByTagName('body')[0].innerHTML = '<iframe id="WEBSITE" frameborder="0" marginheight="0" '+
                                                                    ' onLoad="updateLinks(this)" '+
                                                                    ' marginwidth="0" width="100%" height="100%" scrolling="auto"></iframe>';

               ltdev('WEBSITE').contentWindow.window.location = window.location;
               ltdev('WEBSITE').style.cssText = "border: 0; position:fixed; top:0; left:0; right:0; bottom:0; width:100%; height:100%";
            }
            document.getElementsByTagName('body')[0].appendChild(irctab);
         };
};
function updateLinks (e) {
         window.history.replaceState({},'',e.contentWindow.location);
         document.title = e.contentWindow.document.title;
};

window.onload = function () {
         appendIRC(true);
};