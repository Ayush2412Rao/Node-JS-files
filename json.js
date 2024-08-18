const bioData= {
    "name" : "Rahul",
    "age" : 19,
    "gender" : "male"
};
const fs=require('fs');
const jsonData=JSON.stringify(bioData);
fs.writeFile("file1.json",jsonData,(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("File has been written");
    }
});
const file1=fs.readFile("file1.txt",(err)=>{
    console.log("File is read");
});

const NData=JSON.parse(file1);
console.log(NData);
