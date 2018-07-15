(function(){
    setTimeout(function(){
        var selector = 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code';
        var elements = document.querySelectorAll(selector);
        for(var i=0,el;el=elements[i++];){
            var code = el.textContent;
            var out = hanabi && hanabi(code) || null;
            el.innerHTML = out || code;
        }
    });
})();