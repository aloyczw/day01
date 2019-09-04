//利用递归  查出目录树
const fs=require('fs')
const path=require('path')

function tree(param){
    var param=path.resolve(param);
    fs.stat(param,function(err,stats){
        if(stats.isDirectory()){
            fs.readdir(param,function(err,file){
                file.forEach(function(item){
                    var absolutePath=path.resolve(path.join(param,item))
                    tree(absolutePath)
                })
            })
        }else{
            console.log(param)
        }
    })
}
tree('../san')