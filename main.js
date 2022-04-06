$(document).ready(function(){
    Bersihkan();
});

function ilang() {
    document.getElementById("kali").value = "";
    document.getElementById("kali_u").innerHTML = "-";
    document.getElementById("h_tokenisasi").innerHTML = "";
	document.getElementById("detek").innerHTML = "";
    document.getElementById("hasil").style.display = "none";
}

function Tokenisasi() {
    var kalimat = document.getElementById("kali").value;
    document.getElementById("hasil").style.display = "block";
    document.getElementById("kali_u").innerHTML = kalimat;

    var ptrn = /[a-zA-Z_][a-zA-Z0-9_]*|[a-zA-Z_][a-zA-Z0-9_]*\d+|\d+|[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g;
    var res_array = kalimat.match(ptrn);
    var text = "";
    var i;
    for (i = 0; i < res_array.length; i++) {
        text += '"' + res_array[i] + '"';
      }
	document.getElementById("detek").innerHTML = "Terdeteksi ada " + i + " kata";
    document.getElementById("h_tokenisasi").innerHTML = text.replace(/""/g, '", "');
}
