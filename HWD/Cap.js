
function toCapitalCase (one, two, three, four, five)
{
    var str = 'one, two, three, four, five';
    var arr = str.split(', ');
    for (var i = 0; i < arr.length; i++)
    {
        arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
    }
    console.log(arr);
}