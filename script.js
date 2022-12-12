fetch('https://github.com/metapercept/CodeExcercise/blob/master/Excercise-1/data/class.json').then((data)=>{
    return data.json();
}).then((objectData)=>{
    let abc = "";
    objectData.map((values)=>{
        abc += `<tr>
        <td> ${values.ID}</td>
        <td><img scr = "${values.ImageUrl}"/></td>
        <td> ${values.Name}</td>
        <td> ${values.ShortDesc}</td>
  
        </tr>`;
    });
    document.getElementById("table_body").innerHTML=abc;
})