
let concernType = document.getElementById("concernType");
let voc_inq = document.getElementById("voc-inq");
let voc_ffup = document.getElementById("voc-ffup");
let voc_comp = document.getElementById("voc-comp");
let voc_others = document.getElementById("voc-others");
let buttonDiv = document.getElementById("buttonDiv");
let ticketCreation = document.getElementById("ticketCreation");

let = resultDivABCA = document.getElementById("resultDivABCA");
let = resultDivNote1 = document.getElementById("resultDivNote1");
let = resultDivSI = document.getElementById("resultDivSI");

let CEPbtn = document.getElementById("CEPbtn");
let cepBTNoptDiv = document.getElementById("cepBTNoptDiv");

let resABCAbtn = document.getElementById("resABCAbtn");
let cepNoteBtn = document.getElementById("cepNoteBtn");
let siBtn = document.getElementById("siBtn");
let showDiv = document.getElementById("showDiv");

let vocD_inq = document.getElementById("vocD_inq");
let vocD_ffup = document.getElementById("vocD_ffup");
let vocD_comp = document.getElementById("vocD_comp");
let vocD_others = document.getElementById("vocD_others");

let closeBTN = document.querySelectorAll(".closeBTN");

concernType.addEventListener("change",()=>{
    console.log(concernType.value)

    if (concernType.value == "Inquiry"){
    voc_inq.style.display = "block";
    voc_ffup.style.display = "none";
    voc_comp.style.display = "none";
    voc_others.style.display = "none";
    }
    else if (concernType.value == "Complaint"){
    voc_inq.style.display = "none";
    voc_ffup.style.display = "none";
    voc_comp.style.display = "block";
    voc_others.style.display = "none";
    }
    else if (concernType.value == "Follow-up"){
    voc_inq.style.display = "none";
    voc_ffup.style.display = "block";
    voc_comp.style.display = "none";
    voc_others.style.display = "none";
    }
    else if (concernType.value == "Aftersales"){
    voc_inq.style.display = "block";
    voc_ffup.style.display = "none";
    voc_comp.style.display = "none";
    voc_others.style.display = "none";
    }
})

vocD_comp.addEventListener("change", ()=>{
    console.log(vocD_comp.value)

    if(vocD_comp.value == "complaint_NDT/NIC"){
        ticketCreation.style.display = "block";
        buttonDiv.style.display = "grid";
    }
})


CEPbtn.addEventListener("click",()=>{
    cepBTNoptDiv.classList.toggle("toogleoff");
})





let abcatxtfield = document.getElementById("abcatxtfield");

// abca text field values
// Show buttons


function getIfVisible(){
    let voc = document.querySelectorAll(".concern");

    for(let x of voc){
        if (x.offsetParent !== null){
            return x.value;
        }
    }

    return "";
}

resABCAbtn.addEventListener("click",()=>{

    let ani = document.getElementById("ani").value;
    let account = document.getElementById("account").value
    let concern = getIfVisible();
    let actionTaken = document.getElementById("actionTaken").value;

    showDiv.style.display = "flex";
    
    resultDivABCA.style.display = "flex";
    resultDivNote1.style.display = "none";
    resultDivSI.style.display = "none";

    abcatxtfield.value =`Ani: ${ani}
Billing Account Number: ${account}
concern: ${concern}
action Taken: ${actionTaken}
    `;
})

cepNoteBtn.addEventListener("click",()=>{

    let sfdc = document.getElementById("sfdcCase").value;
    let cName = document.getElementById("cName").value;
    let cnum = document.getElementById("cnum").value;
    let cmail = document.getElementById("cmail").value;
    let wpermit = document.getElementById("wpermit").value;
    let adt = document.getElementById("adt").value;
    let cvResult = document.getElementById("cvResult").value;
    let wocastxtarea = document.getElementById("wocastxtarea").value;
    let actionTaken = document.getElementById("actionTaken").value;
    let serial = document.getElementById("serial").value;
    let lightStatus = document.getElementById("lightStatus").value;


    showDiv.style.display = "flex";
    
    resultDivABCA.style.display = "none";
    resultDivNote1.style.display = "flex";
    resultDivSI.style.display = "none";

    cepnote1txtfield.value =`Contact Channel Vendor: Hotline - CND
SFDC Case Number: ${sfdc}
Contact Name: ${cName}
Contact Number: ${cnum}
Contact Email: ${cmail}
Working Permit: ${wpermit}
Availability Date and Time: ${adt}
Clearview Test Result: ${cvResult}
Serial number: ${serial}
lightStatus: ${lightStatus}
Complaint Remarks / WOCAS: ${wocastxtarea}
action Taken: ${actionTaken}
    `
})

siBtn.addEventListener("click",()=>{

    let phone = document.getElementById("phone").value;
    let callerName = document.getElementById("callerName").value;
    let cName = document.getElementById("cName").value;
    let cnum = document.getElementById("cnum").value;
    let cmail = document.getElementById("cmail").value;
    let wpermit = document.getElementById("wpermit").value;
    let adt = document.getElementById("adt").value;


    showDiv.style.display = "flex";
    
    resultDivABCA.style.display = "none";
    resultDivNote1.style.display = "none";
    resultDivSI.style.display = "flex";

    sitxtfield.value = `Phone Number: ${phone}
Caller Name: ${callerName}
Contact Name: ${cName}
Contact Number: ${cnum}
Contact Email: ${cmail}
Working Permit: ${wpermit}
Availability Date and Time: ${adt}
    `
})



closeBTN.forEach((e)=>
    e.addEventListener("click",()=>{
        showDiv.style.display = "none";  
    })
)


