//对于文件夹的增删改查
const fs=require('fs')
//增加
// fs.mkdir('aaa',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('创建成功')
//     }
// })

//重命名
// fs.rename('aaa','bbb',(err)=>{
//     if(err){
//       console.log(err)  
//     }else{
//         console.log('重命名成功')
//     }
// })

//读取
// fs.readdir('../day01',(err,msg)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(msg)
//     }
// })

//删除
// fs.rmdir('bbb',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('删除成功')
//     }
// })