function mostraForm(){
    
    var form = document.getElementById("add_form");
    if(form.style.display=="block"){
        form.style.display = "none";
        form.reset();
    }else
        form.style.display="block";

};

function cambiaMax(){
    if(document.getElementById("maxAmount").readOnly == true)
        document.getElementById("maxAmount").readOnly = false;
    else
        document.getElementById("maxAmount").readOnly = true;
};

function setOrdine(){
    
    var maxAmount = document.getElementById("maxAmount").value;
    nomi = document.getElementById("table").rows[0].cells;
    quant = document.getElementById("table").rows[1].cells;
    var count = 0;
    for(var i=0; i < nomi.length; i++){
        if(nomi[i].innerHTML == document.getElementById("it_name").value){
            var numqtà = parseInt(quant[i].innerHTML,10);
            numqtà += +document.getElementById("it_qty").value;
            quant[i].innerHTML = numqtà;
            count++;
            if(numqtà > maxAmount){
                alert("Non puoi ordinare così tanti oggetti di un solo tipo");
                quant[i].innerHTML = maxAmount;
            }
        }
    }
    if(count == 0){
        var tmp_it = document.getElementById("itemx").insertCell(0);
        tmp_it.innerHTML = document.getElementById("it_name").value;
        var tmp_qty = document.getElementById("qtyx").insertCell(0);
        if(Number(document.getElementById("it_qty").value)>maxAmount){
            tmp_qty.innerHTML = maxAmount;  
             alert("too many items ordered");
        }else
            tmp_qty.innerHTML = document.getElementById("it_qty").value; 
    }
    
    
    showForm();
    
};

