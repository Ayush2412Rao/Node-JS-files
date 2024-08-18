const json1={
    "name":"Ayush",
    "age":17,
    "gender":"male"
};

const fs=require("fs");

const jsonObj=JSON.stringify(json1);

fs.writeFile("text1.json",jsonObj,(err)=>{
    if(err)
    {
        console.log(err);
    }
});

const read1=fs.readFile("text1.json","utf-8",(err,data)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(data);
    }
});
// const json2=JSON.parse(read1);

// console.log(read1);


