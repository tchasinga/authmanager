import { MailtrapClient } from "mailtrap";

const TOKEN = "1948b13dc28d3ffcded06f7fec4506d3";

export const client = new MailtrapClient({
  token: TOKEN,
});

 export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Mailtrap Test",
};

// const recipients = [
//   {
//     email: "tchasingajacques@gmail.com",
//   }
// ];
// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);