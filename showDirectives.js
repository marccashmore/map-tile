javascript:(function()
            {var script=document.createElement("SCRIPT");
             script.src='https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
             script.type='text/javascript';
             document.getElementsByTagName("head")[0].appendChild(script);
             var checkReady=function(callback){if(window.jQuery){callback(jQuery)}else{window.setTimeout
               (function(){checkReady(callback)},100)}};
             
             checkReady
               (function($){$('primo-explore').find('*[parent-ctrl="ctrl"]').each(function(){$(this).append('<a href="#" title="'+$(this)[0].outerHTML.replace(/</g,'').replace(/>/g,'').replace(/\//g,'').replace(/"/g,'').replace(/parent-ctrl.*/g,'').replace(/-([a-z])/g,function(m,w){return w.toUpperCase()})+'" style="display:block;height:auto;color:black;">
                                                                                                                    Hover for id</a>')})})})();