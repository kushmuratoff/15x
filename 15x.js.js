var ulcham = 4;
var xod = 0;
var mas = new Array(ulcham);
for(var i=0;i<ulcham;i++)
{
    mas[i]=new Array(ulcham);
}
var mas1 = new Array(ulcham);
for (var i = 0; i < ulcham; i++) {
    mas1[i] = new Array(ulcham);
}

var son = [];



function Boshlash() {
    var blok = document.getElementById("ma");

    while (blok.hasChildNodes()) {
        blok.removeChild(blok.lastChild);
    }
    for (i = 0; i < ulcham; i++) {
        for (j = 0; j < ulcham; j++) {
            // Append a node with a random text
            //container.appendChild(document.createTextNode("Member " + (i + 1)+(j+1)));
            // Create an <input> element, set its type and name attributes
            var input = document.createElement("input");
            input.type = "button";
            input.name = "member" + i + j;
            input.value = " ";
            //mas[i, j] = input.value;
            input.id = "idd" + i + j;
            input.width = 80;
            input.height = 80;
            //input.onclick = on(i, j);
           // input.addEventListener("click", on);
            input.onclick=function()
            {
                
                chop(i, j);
            }
            blok.appendChild(input);
            // Append a line break 

        }
        blok.appendChild(document.createElement("br"));
               
    }
    qiymat();
}
function asd() { alert("asd"); }
function on(p1, p2) {
    var id
    alert(i + "____" + j);

}
function chop(p1, p2) {
    var id
    alert(i + "____" + j);

}
function bir(p1,p2)
{
    
    var t;
    var q1 = Number(p1);
    var q2 = Number(p2);
  
   
    if(p2==0&&p1==0)
    {
        if (mas[p1][p2 + 1] == 0) { mas[p1][p2 + 1] = mas[p1][p2]; mas[p1][p2] = 0; }
        else if (mas[p1+1][p2] == 0) { mas[p1+1][p2] = mas[p1][p2]; mas[p1][p2] = 0; }
        
    }
    else if (p1 == 3 && p2 == 0)
    {
        if (mas[p1][p2 + 1] == 0) { mas[p1][p2 + 1] = mas[p1][p2]; mas[p1][p2] = 0; }
        else if (mas[p1 - 1][p2] == 0) { mas[p1 - 1][p2] = mas[p1][p2]; mas[p1][p2] = 0; }
    }
    else if (p1 == 3 && p2 == 3) {
        if (mas[p1][p2 -1] == 0) { mas[p1][p2 - 1] = mas[p1][p2]; mas[p1][p2] = 0; }
        else if (mas[p1 - 1][p2] == 0) { mas[p1 - 1][p2] = mas[p1][p2]; mas[p1][p2] = 0; }
    }
    else if (p1 == 0 && p2 == 3) {
        if (mas[p1][p2 - 1] == 0) { mas[p1][p2 - 1] = mas[p1][p2]; mas[p1][p2] = 0; }
        else if (mas[p1 + 1][p2] == 0) { mas[p1 + 1][p2] = mas[p1][p2]; mas[p1][p2] = 0; }
    }
    else if (p1 != 0 && p1!=3&& p2 == 0) {
        if (mas[p1-1][p2] == 0) { mas[p1-1][p2] = mas[p1][p2]; mas[p1][p2] = 0; }
        else if (mas[p1 + 1][p2] == 0) { mas[p1 + 1][p2] = mas[p1][p2]; mas[p1][p2] = 0; }
        else if (mas[p1 ][p2+1] == 0) { mas[p1][p2+1] = mas[p1][p2]; mas[p1][p2] = 0; }

    }
    else if (p1 == 3 && p2 != 0 && p2!=3) {
        if (mas[p1][p2 + 1] == 0) { mas[p1][p2 + 1] = mas[p1][p2]; mas[p1][p2] = 0; }
        else if (mas[p1 - 1][p2] == 0) { mas[p1 - 1][p2] = mas[p1][p2]; mas[p1][p2] = 0; }
         else if (mas[p1][p2 - 1] == 0) { mas[p1][p2 - 1] = mas[p1][p2]; mas[p1][p2] = 0; }

    }
    else if (p1 != 3 && p1!=0 && p2 == 3) {
        if (mas[p1][p2 - 1] == 0) { mas[p1][p2 - 1] = mas[p1][p2]; mas[p1][p2] = 0; }
        else if (mas[p1 - 1][p2] == 0) { mas[p1 - 1][p2] = mas[p1][p2]; mas[p1][p2] = 0; }
        else if (mas[p1 + 1][p2] == 0) { mas[p1 +1][p2] = mas[p1][p2]; mas[p1][p2] = 0; }

    }
    else if (p1 == 0 && p2 != 3 && p2!=0) {
        if (mas[p1][p2 - 1] == 0) { mas[p1][p2 - 1] = mas[p1][p2]; mas[p1][p2] = 0; }
        else if (mas[p1 + 1][p2] == 0) { mas[p1 + 1][p2] = mas[p1][p2]; mas[p1][p2] = 0; }
        else if (mas[p1][p2+1] == 0) { mas[p1][p2+1] = mas[p1][p2]; mas[p1][p2] = 0; }

    }
    else
    {
        if (mas[p1][p2 + 1] == 0) { mas[p1][p2 + 1] = mas[p1][p2]; mas[p1][p2] = 0; }
        else if (mas[p1][p2 - 1] == 0) { mas[p1][p2 - 1] = mas[p1][p2]; mas[p1][p2] = 0; }
        else if (mas[p1+1][p2] == 0) { mas[p1+1][p2] = mas[p1][p2]; mas[p1][p2] = 0; }
        else if (mas[p1-1][p2] == 0) { mas[p1-1][p2] = mas[p1][p2]; mas[p1][p2] = 0; }



    }
    ekranga();
}
function ekranga()
{
    var s = 0;
    for (var i = 0; i < ulcham; i++) {
        for (var j = 0; j < ulcham; j++) {
            if (mas[i][j] == mas1[i][j]) {
                s++;
            }

        }
    }
    if (s < 16)
    {
        xod++;
        document.getElementById("xodi").innerHTML = xod;
        document.getElementById("xodi").style.color = "red";

    }
    for (var i = 0; i < ulcham; i++) {
        for (var j = 0; j < ulcham; j++) {
            mas1[i][j] = mas[i][j];
            if (mas[i][j] != 0)
            {
                document.getElementById("id" + i + j).innerHTML = mas[i][j];
                document.getElementById("id" + i + j).style.backgroundColor = "greenyellow";

            }
            else {
                document.getElementById("id" + i + j).innerHTML = "&nbsp;";
                document.getElementById("id" + i + j).style.backgroundColor = "pink";

            }
            //alert(i * ulcham + j);
        }
    }
    

}
function tugash()
{
    var summ = 0;
    for (var i = 0; i < ulcham; i++) {
        for (var j = 0; j < ulcham; j++) {
            var k = i * ulcham + j + 1;
            if (i == 3 && j == 3) continue;
            if(mas[i][j]==k)
            { summ++;}
            
        }
    }
    if(summ==15)
    {
        alert("O'yin tugadi. Yutdingiz!!!");
qiymat();
    }
}

   
    function qiymat()
{
        xod = 0;
        document.getElementById("xodi").innerHTML = xod;
        document.getElementById("xodi").style.color = "red";


        while (1) {
            var b = 0;
            var k = Math.floor(Math.random() * 16);

            //alert(son);
            // break;
            for (var i = 0; i < son.length; i++) {
                if (son[i] == k) { b = 1; break; }
            }
            if (b == 0) {
                son.push(k);
            }
            if (son.length == 16) {
               // alert(son);

                break;
            }
        }
        for(var i=0;i<ulcham;i++)
        {
            for(var j=0;j<ulcham;j++)
            {
                mas[i][j] = son[i * ulcham + j];
                mas1[i][j] = mas[i][j];
                if (mas[i][j]!=0)
                {
                    document.getElementById("id" + i + j).innerHTML = mas[i][j];
                    document.getElementById("id" + i + j).style.backgroundColor = "greenyellow";

                }
                else {
                    document.getElementById("id" + i + j).innerHTML = "&nbsp;";
                    document.getElementById("id" + i + j).style.backgroundColor = "pink";

                }
                //alert(i * ulcham + j);
            }
        }
       

    }


