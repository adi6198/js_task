class user{
	constructor(uid,passwd,name,isAdmin){
		this.uid=uid;
		this.passwd=passwd;
		this.name=name;
		this.isAdmin=+isAdmin;
	}
}

class admin extends user{
	constructor(uid,passwd,name,isAdmin){
		super(uid,passwd,name,isAdmin);
		this.course=[];
		this.assigned_course=[];
	}
	
	async function showUsers() {
        const api_URL="https://api.myjson.com/bins/rx93a";
            const response= await fetch(api_URL);
            const json= await response.json();
            let table=document.getElementById("tbl");

            loop:for(let i in json)
            {
            	console.log(json[i]);
                if(json[i].isAdmin === 1)
                {
                    continue loop;    
                }
                let tr=document.createElement("TR");
                let tr1=document.createElement("TR");
                let td1=document.createElement("TD");
                let td2=document.createElement("TD");
                let td3=document.createElement("BUTTON")
                let unametxt=document.createTextNode(json[i].name);
                let uidtxt=document.createTextNode(json[i].uid);
                let btn=document.createTextNode("DELETE");
                td1.appendChild(unametxt);
                td2.appendChild(uidtxt);
                td3.appendChild(btn);

                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                table.appendChild(tr);
                table.appendChild(tr1);
                  
            }
	}

}

class studnt extends user{
	constructor(uid,passwd,name,isAdmin){
		super(uid,passwd,name,isAdmin);
		this a_course=[];
		this c_course=[];
	}


} 