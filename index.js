
var currvalue=0;
 const input=document.getElementById('input');
 const plus=document.getElementById('inc');
 const minus=document.getElementById('dec');
function add()
{
    currvalue=parseInt(input.value);
    currvalue++;
    if(currvalue<10 && currvalue>0)
    {
    document.getElementById('input').value=currvalue;
}
}
function sub()
{
    currvalue=parseInt(input.value);
    currvalue--;
    if(currvalue<10 && currvalue>0)
    {
    document.getElementById('input').value=currvalue;
}
}
 plus.addEventListener('click',add);
 minus.addEventListener('click',sub);
 