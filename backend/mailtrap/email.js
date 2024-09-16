import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTamplate"
import { MailTrapClient, sender } from "./mailtrap.config.js"

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{email}]
    try {
        const response = await MailTrapClient.send({
            from: sender,
            to: recipient,
            subject : "Verify your email",
            html : VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Verification Email",
        })
        console.log("Email sent successfully", response);
    } catch (error) {
        console.error("Error sending email", error);
    }
} 