function setBinding(div,obj){
    let len = $("#"+div+" [d-model]").length;
    for(let i = 0;i<len;i++){
        let control =  $("#"+div+" [d-model]")[i];
        let propiedad = control.getAttribute("d-model");
        let type = control.getAttribute("type");
        if(typeof obj[propiedad] != "undefined"){
            if(type == "radio"){
                if(control.value == obj[propiedad])
                    control.checked = true; 
            }else{
                control.value = obj[propiedad];
            }
        }
    }     
}
function getBinding(div){
    let len = $("#"+div+" [d-model]").length;
    let obj = {};
    for(let i = 0;i<len;i++){
        let control = $("#"+div+" [d-model]")[i];
        let type = control.getAttribute("type");
        if(type=="radio"){
            if(control.checked){
                let propiedad = control.getAttribute("d-model");
                console.log(propiedad);
                obj[propiedad] = true;
            }
        }else{
            let propiedad = control.getAttribute("d-model");
            let value = control.value;
            obj[propiedad] = value;
        }
    }  
   return JSON.stringify(obj);
}