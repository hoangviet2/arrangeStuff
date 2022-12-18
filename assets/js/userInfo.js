
export var tasks = {
    end : undefined,
    title : undefined,
    description : undefined,
    isDone : null
}
export var  LocalUser = {
    email: undefined,
	full_name : undefined,
	last_login : undefined,
    task : []
}
export var triples = {
    reds : 0,
    greens : 0,
    yellows : 0
}
export function UploadProfileLocal(email,full_name,last_login,task){
    LocalUser.email = email;
    LocalUser.full_name = full_name;
    LocalUser.last_login = last_login;
    LocalUser.task = task;
    AnaylizeData();
}

var red = 0;
var yellow = 0;
var green = 0;

function myFunction(item) {
    const diff = item.end - Date.now()
    if(diff <= 86400000){
        red++;
    }else if(diff <= 604800000){
        yellow++;
    }else{
        green++;
    }
    //const triple = String(red) + ' ' + String(yellow) + ' ' + String(green);
}

export function AnaylizeData(){
    LocalUser.task.forEach(myFunction);
    triples = {
        reds : red,
        greens : green,
        yellows : yellow
    }
}

export function isEmpty(){
    if(LocalUser.email == undefined){
        return true;
    }
    return false;
}