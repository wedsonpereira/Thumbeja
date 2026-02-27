package com.emails.emaildataview.Controller;

import com.emails.emaildataview.Dto.EmailRequest;
import com.emails.emaildataview.Service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@CrossOrigin(origins = {"https://thumbeja.com", "https://www.thumbeja.com" })
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send")
    public ResponseEntity<String> sendEmail(@RequestBody EmailRequest request) {
        System.out.println("I got the request" + request);
        try {
            emailService.sendEmail(request);
            return ResponseEntity.ok("Email sent successfully and acknowledgment sent to user.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to send email: " + e.getMessage());
        }
    }
}
