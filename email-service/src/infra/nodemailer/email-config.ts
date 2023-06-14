import nodemailer from 'nodemailer'

const emailConfig = {
    host: 'smt.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'eixeiro.dev@gmail.com"',
      pass: 'didis1212.',
    },
};
  
 const transporter = nodemailer.createTransport(emailConfig);
  
export default transporter 