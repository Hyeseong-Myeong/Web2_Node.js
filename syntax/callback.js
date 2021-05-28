/*
function a()    {
    console.log('A');

}
*/

//function is variable in JS;

var a = function()  {
    console.log('A');
}

function slowfunc(callback){
    callback();
}

slowfunc(a);