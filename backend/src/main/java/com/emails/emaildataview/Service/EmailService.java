package com.emails.emaildataview.Service;

import com.emails.emaildataview.Dto.EmailRequest;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${app.mail.to}")
    private String adminEmail;

    @Value("${app.mail.from}")
    private String fromEmail;



    public void sendEmail(EmailRequest request) {
        try {
            // 1. Send email to Admin (Wedson)
            sendToAdmin(request);
            System.out.println("Admin email sent successfully");
            // 2. Send acknowledgment to User
            sendAcknowledgment(request);
            System.out.println("User acknowledgment sent successfully");
        } catch (Exception e) {
            System.err.println("CRITICAL ERROR: Failed to send email!");
            e.printStackTrace();
            throw new RuntimeException("Email sending failed: " + e.getMessage());
        }
    }

    private void sendToAdmin(EmailRequest request) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setFrom(fromEmail);
        helper.setTo(adminEmail);
        helper.setSubject("New Contact Form Submission from " + request.getName());
        helper.setReplyTo(request.getEmail());

        String content = String.format(
                "<div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;'>"
                        +
                        "<h2 style='color: #2563eb; text-align: center;'>New Message Received</h2>" +
                        "<p style='color: #4b5563; font-size: 16px;'>You have a new contact form submission from thumbeja.com:</p>"
                        +
                        "<table style='width: 100%%; border-collapse: collapse; margin: 20px 0;'>" +
                        "<tr><td style='padding: 8px 0; font-weight: bold; color: #374151; width: 120px;'>Name:</td><td style='padding: 8px 0; color: #4b5563;'>%s</td></tr>"
                        +
                        "<tr><td style='padding: 8px 0; font-weight: bold; color: #374151;'>Email:</td><td style='padding: 8px 0; color: #4b5563;'>%s</td></tr>"
                        +
                        "<tr><td style='padding: 8px 0; font-weight: bold; color: #374151;'>Business:</td><td style='padding: 8px 0; color: #4b5563;'>%s</td></tr>"
                        +
                        "<tr><td style='padding: 8px 0; font-weight: bold; color: #374151;'>Contact:</td><td style='padding: 8px 0; color: #4b5563;'>%s</td></tr>"
                        +
                        "</table>" +
                        "<div style='background-color: #f9fafb; padding: 15px; border-radius: 5px; border-left: 4px solid #2563eb;'>"
                        +
                        "<p style='margin: 0; font-weight: bold; color: #374151;'>Message:</p>" +
                        "<p style='margin-top: 10px; color: #4b5563; line-height: 1.5;'>%s</p>" +
                        "</div>" +
                        "<p style='margin-top: 20px; font-size: 12px; color: #9ca3af; text-align: center;'>&copy; 2026 thumbeja.com. All rights reserved.</p>"
                        +
                        "</div>",
                request.getName(), request.getEmail(), request.getBusiness(), request.getContact(),
                request.getMessage());

        helper.setText(content, true);
        System.out.println(" " + message.toString());
        mailSender.send(message);
    }

    private void sendAcknowledgment(EmailRequest request) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setFrom(fromEmail);
        helper.setTo(request.getEmail());
        helper.setSubject("Thank you for contacting us - thumbeja.com");

        String content = String.format(
                "<div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;'>"
                        +
                        "<div style='text-align: center; margin-bottom: 20px;'>" +
                        "<h2 style='color: #2563eb; margin-bottom: 5px;'>Thank You!</h2>" +
                        "<p style='color: #6b7280; font-size: 14px;'>We've received your message</p>" +
                        "</div>" +
                        "<p style='color: #374151; font-size: 16px;'>Hello <strong>%s</strong>,</p>" +
                        "<p style='color: #4b5563; line-height: 1.6;'>Thank you for reaching out to us. We have successfully received your inquiry and our team will get back to you as soon as possible.</p>"
                        +
                        "<div style='background-color: #eff6ff; padding: 15px; border-radius: 5px; margin: 20px 0;'>" +
                        "<p style='margin: 0; font-weight: bold; color: #1e40af;'>Summary of your message:</p>" +
                        "<p style='margin-top: 10px; color: #374151; font-style: italic;'>\"%s\"</p>" +
                        "</div>" +
                        "<p style='color: #4b5563;'>Best regards,</p>" +
                        "<p style='color: #2563eb; font-weight: bold; margin: 0;'>Thumbeja Team</p>" +
                        "<p style='color: #6b7280; font-size: 12px; margin: 0;'>www.thumbeja.com</p>" +
                        "<div style='margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;'>"
                        +
                        "<p style='font-size: 12px; color: #9ca3af;'>This is an automated acknowledgment. Please do not reply to this email.</p>"
                        +
                        "</div>" +
                        "</div>",
                request.getName(), request.getMessage());

        helper.setText(content, true);
        mailSender.send(message);
    }
}
