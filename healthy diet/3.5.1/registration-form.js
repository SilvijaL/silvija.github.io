function formValidation()
{
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var umpol = document.registration.mpol;
    var ufpol = document.registration.fpol;
    if (userid_validation(uid,5,12)){
        if(passid_validation(passid,7,12)){
            if(allLetter(uname)){
                if(alphanumeric(uadd)){
                    if(countryselect(ucountry)){
                        if(allnumeric(uzip)){
                            if(ValidateEmail(uemail)){
                                if(validpol(umpol,ufpol)){}
                            }
                        }
                    }
                }
            }
        }
    }
}
return false;
}
//---
function userid_validation(uid,mx,my){
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
    alert ("User Id schould not be empty / length be between "+mx+" to "+my);
    uid.focus();
    return false;}
    return true;}
//---
function passid_validation(passid,mx,my) {
    var passid_len = passid.value.length;
    if (passid_len == 0 || passid_len >= my || passid_len < my)
{
    alert ("Password should not be empty / length be between  "+mx+" to "+my);
    passid.focus();
    return false;
}
    return true;
}
function allLetter(uname)
{
    var letters = /^[A-Za-z]+$/;
    if(uname.value.match(letters))
    {return true;}
    else{alert ('Username must have alphabet characters only');
    uname.focus();
    return false;
}
}