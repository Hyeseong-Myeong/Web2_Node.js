var members = ['hyeseong', 'mhs', 'dev'];
//console.log(members[1]);
var i = 0;
while(i < members.length) {
    console.log(members[i]);
    i = i + 1;
}

var rolse = {
    'programmer' : 'hyeseong', 
    'initial' : 'mhs',
    'role': 'dev'
}

console.log(rolse.programmer);
for(var name in rolse){
    console.log('object => ', name, 'value => ', rolse[name]);
}