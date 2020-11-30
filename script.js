const xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET","./doc.xml",false);

xmlHttp.onload= function(){
    xmlDoc = xmlHttp.responseXML;

    const table = document.getElementsByTagName("table")[0];
    const studentsData = xmlDoc.getElementsByTagName("gradeRecord")

    for (let i of studentsData) {
        const studentIdNode = document.createElement("td")
        const studentNameNode = document.createElement("td")
        const studentMarkNode = document.createElement("td")
        studentIdNode.innerHTML = i.id
        studentNameNode.innerHTML = i.getElementsByTagName('student')[0].innerHTML
        studentMarkNode.innerHTML = gradeNumToWord(i.getElementsByTagName('grade')[0].innerHTML)

        const row = document.createElement("tr")
        row.appendChild(studentIdNode)
        row.appendChild(studentNameNode)
        row.appendChild(studentMarkNode)
        table.appendChild(row)
    }
}

xmlHttp.send();

function gradeNumToWord(word){
    switch(word){
        case '5':
            return 'excellent';
        case '4':
            return 'good';
        case '3':
            return 'so-so'
    }
}
