const Email=require('nodemailer')


let transporter = Email.createTransport({
    host: "smtp.qq.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: '704076828@qq.com', // generated ethereal user
        pass: 'cwsqpsdcglscbeig'// smtp 验证码
    }
});
// 邮件的内容
let  info={
  from: '"Fred Foo 👻" <704076828@qq.com>', // sender address
  to: '704076828@qq.com', // list of receivers
  subject: '呵呵哒', // Subject line
  // text: , // plain text body
  html: '<h3>欢迎注册您的验证码是：呵呵不告诉你   </h3>' // html body
}

  transporter.sendMail(info,(err,result)=>{
    console.log(err,result)
  });