


export const loginfun = ()=>{
    closeErrors();
    // var info = { username : document.getElementById('loginUser').value , key : document.getElementById('loginKey').value };
    // const response = await fetch('/login', { 
    //     method: 'POST',
    //     body:    JSON.stringify(info),
    //     headers: { 'Content-Type': 'application/json' },
    // });
    // const data = await response.json();
    // console.log(data);
    // .then(res => res.json())
    // .then(json => {
    //     if( json.valid === false )
    //     {
    //         document.getElementById('loginerror').innerHTML = "Invalid Username / Password ";
    //         return 'NULL';
    //     }
    //     else
    //     {
    //         document.getElementById("hideModal").click();
    //         console.log('retru');
    //         return 'Chal gaya';
    //     }
    // }); 
}

export const regfun = (e)=>{
    e.preventDefault();
    closeErrors();
    var info = { username : document.getElementById('rUser').value , key : document.getElementById('rKey').value , email : document.getElementById('rEmail').value };
    fetch('/register', { 
        method: 'POST',
        body:    JSON.stringify(info),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => {
        if( json.response === '1' )
            document.getElementById('uerror').innerHTML = "Username already taken";
        else if( json.response === '2' )
            document.getElementById('merror').innerHTML = "Email exists with another account";
        else 
        {
            document.getElementById("hideModal").click();
            console.log("SUCCESS");
        }
    });
}
function closeErrors()
{
    document.getElementById('uerror').innerHTML = "";
    document.getElementById('merror').innerHTML = "";
    document.getElementById('loginerror').innerHTML = "";
}