var y = document.getElementsByClassName("radio");
for(var i = 0;i < y.length;i++)
{
    y[i].style.display = "block";
}
document.body.onselectstart = "return true;"
document.body.oncontextmenu= "return true;"

