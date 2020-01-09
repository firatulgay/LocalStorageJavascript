var personList = [];
var kaydetButton=document.getElementById("kaydet")
kaydetButton.onclick=function(){
    var ad = document.getElementById("name").value;
    var telefon = document.getElementById("telefon").value;
    var Email = document.getElementById("email").value;
    var personObject = {ad, telefon, Email};
    personList.push(JSON.stringify(personObject));
    localStorage.setItem("user",personList)

        var table = document.getElementById("myTable");
        var row = table.insertRow(1);

        var nameCell = row.insertCell(0);
        nameCell.innerHTML = ad;

        var telefonCell = row.insertCell(1);
        telefonCell.innerHTML = telefon;

        var emailCell = row.insertCell(2);
        emailCell.innerHTML = Email;

}

    