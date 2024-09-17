import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTamplate.js";
import { MailTrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];
  try {
    const response = await MailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Verification Email",
    });
    console.log("Email sent successfully", response);
  } catch (error) {
    console.error("Error sending email", error);
  }
};

export const sendWelcomEmails = async (email, name) => {
  const recipient = [{ email }];
  try {
    await MailTrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "afd56a0b-aed4-4c01-a2ba-8f97f348d2fc",
      template_variables: {
        name: name,
        company_info_name: "lEARNER CODE",
        company_info_address: "Goma/RDC",
        company_info_city: "Gisenyi",
        company_info_zip_code: "495045",
        company_info_country: "Congo (DRC)",
      },
    });
  } catch (error) {}
};
