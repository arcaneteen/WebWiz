function run(){
    let html=document.getElementById('html').value;
    let css=document.getElementById('css').value;
    let js=document.getElementById('js').value;
    let result=document.getElementById('result');

    result.contentDocument.body.innerHTML=
    html + "<style>" + css + "</style>";

    result.contentWindow.eval(js);
}

