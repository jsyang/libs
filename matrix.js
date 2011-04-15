/*
    Matrix operations on 2D arrays.
    jsyang.ca@gmail.com
    Breakout from yang.js.    
*/
var matrix=
{
    add:function(m1,m2,subtract)
    // m1 += a*m2 + b
    {
        if(m1.length-m2.length) return; // simple check        
        for(var i=m1.length; i--;) m1[i]-=subtract? m2[i]:m2[i];
    },
    
    dot:function(m1,m2)
    {
    
    
    },
    
    cross:function(m1,m2)
    {
    
    }
};