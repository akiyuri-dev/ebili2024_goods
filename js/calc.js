$('input[type="number"]').bind('input', function () { 
    
    var All = 0;

    var stars = document.getElementsByClassName('form-control');
    
    var Allnum = 0;
    for(let i = 0; i < stars.length; i++){
        Allnum += Number(stars[i].value);
    }

    var photo = document.getElementsByName('photo');
    for(let i = 0; i < photo.length; i++){
        var a = Number(photo[i].value);
        All += 1000*a;
    }

    var t_shirts = document.getElementsByName('t-shirts');
    for(let i = 0; i < t_shirts.length; i++){
        var a = Number(t_shirts[i].value);
        All += 3600*a;
    }

    var towel = document.getElementsByName('towel');
    for(let i = 0; i < towel.length; i++){
        var a = Number(towel[i].value);
        All += 2100*a;
    }

    var light_bracelet = document.getElementsByName('light_bracelet');
    for(let i = 0; i < light_bracelet.length; i++){
        var a = Number(light_bracelet[i].value);
        All += 2700*a;
    }

    var pvc_sb = document.getElementsByName('pvc_sb');
    for(let i = 0; i < pvc_sb.length; i++){
        var a = Number(pvc_sb[i].value);
        All += 2800*a;
    }

    var uchiwa = document.getElementsByName('uchiwa');
    for(let i = 0; i < uchiwa.length; i++){
        var a = Number(uchiwa[i].value);
        All += 1000*a;
    }

    var rlk = document.getElementsByName('rlk');
    for(let i = 0; i < rlk.length; i++){
        var a = Number(rlk[i].value);
        All += 800*a;
    }

    var ak = document.getElementsByName('ak');
    for(let i = 0; i < ak.length; i++){
        var a = Number(ak[i].value);
        All += 600*a;
    }

    var rmas = document.getElementsByName('rmas');
    for(let i = 0; i < rmas.length; i++){
        var a = Number(rmas[i].value);
        All += 700*a;
    }

    var rpss = document.getElementsByName('rpss');
    for(let i = 0; i < rpss.length; i++){
        var a = Number(rpss[i].value);
        All += 600*a;
    }

    document.getElementById("result-erea").innerHTML = "<h3 class='text-white'>合計" + Allnum + "点</h3>" + "<h3 class='text-white'>" + All + "円</h3>";
    document.getElementById("result").innerHTML = "<h3 class='dxtn'>合計" + Allnum + "点</h3>" + "<h3 class='dxtn'>" + All + "円</h3>";
});

function capture() {
    html2canvas(document.querySelector("#capture")).then(canvas => {
        //document.body.appendChild(canvas)
        var imgData = canvas.toDataURL();
        document.getElementById("sshot").href = imgData;
        document.getElementById("imgmk").innerHTML = "画像を再作成";
    });
}