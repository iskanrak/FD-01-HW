function drawTriangle(symbol, height)
{var i = 0, j = 0;
    while (i < height)
    {
        if (height >= 3)
        {
            a = symbol;
            for (j = 0; j < i; j++)
                {
                a += symbol;
                }
            console.log(a);
            i++;
        }
        else height = 3;
    }
}