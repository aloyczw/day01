//  对于文件的增删改查
const fs=require('fs')

//  增加
// fs.writeFile('aaa.js','var a=1',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('创建成功')
//     }
// })

// 累加
// fs.appendFile('aaa.js','var str=abckder',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('雷加成功')
//     }
// })

//  读取
// fs.readFile('aaa.js',(err,msg)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(msg)
//     }
// })

//  删除
// fs.unlink('aaa.js',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('删除成功')
//     }
// })