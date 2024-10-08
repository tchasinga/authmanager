import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTamplate.js";
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
    const response = await MailTrapClient.send({
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
    console.log("Welcome email goodly", response);
  } catch (error) {
    console.log("Not sent really badly now...", error);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [{ email }];

  try {
    await MailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Password Reset",
    });
  } catch (error) {
    console.error(`Error sending password reset email`, error);

    throw new Error(`Error sending password reset email: ${error}`);
  }
};

export const sendResetSuccessEmail = async (email) => {
    const recipient = [{ email }];

	try {
		const response = await MailTrapClient.send({
			from: sender,
			to: recipient,
			subject: "Password Reset Successful",
			html: PASSWORD_RESET_SUCCESS_TEMPLATE,
			category: "Password Reset",
		});

		console.log("Password reset email sent successfully", response);
	} catch (error) {
		console.error(`Error sending password reset success email`, error);

		throw new Error(`Error sending password reset success email: ${error}`);
	}
};
