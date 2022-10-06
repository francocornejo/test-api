import dotenv from 'dotenv'
dotenv.config()
import nodemailer from 'nodemailer'


export let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: "fedec.fb@gmail.com", 
      pass: process.env.MAILER_PASS, 
    },
  });

  transporter.verify().then(()=>{
    console.log("ready")
  })


