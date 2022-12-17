
export var tasks = {
    end : undefined,
    description : undefined,
    isDone : null
}
export var  LocalUser = {
    email: undefined,
	full_name : undefined,
	last_login : undefined,
    task : []
}

export function UploadProfileLocal(email,full_name,last_login,task){
    LocalUser.email = email;
    LocalUser.full_name = full_name;
    LocalUser.last_login = last_login;
    LocalUser.task = task;
    AnaylizeData();
}

function myFunction(item) {
    const diff = item.end - Date.now()
    var red,yellow,green = 0;
    if(diff <= 86400){
        red++;
    }else if(604800){
        yellow++;
    }else{
        green++;
    }
    const triple = String(red) + ' ' + String(yellow) + ' ' + String(green);
    document.cookie = triple;
}

export function AnaylizeData(){
    LocalUser.forEach(myFunction());
}

export function isEmpty(){
    if(LocalUser.email == undefined){
        return true;
    }
    return false;
}