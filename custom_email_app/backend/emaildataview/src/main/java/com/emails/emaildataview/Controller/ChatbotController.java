package com.emails.emaildataview.Controller;

import com.emails.emaildataview.DataSkeleton.ChatRequest;
import com.emails.emaildataview.DataSkeleton.ChatResponse;
import com.emails.emaildataview.Service.WatsonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/chat/api")
public class ChatbotController {

    @Autowired
    private WatsonService watsonService;

    @PostMapping("/ask")
    public ResponseEntity<ChatResponse> chatresponse(@RequestBody ChatRequest request) {
        String userMessage = request.getMessage();
        
        if (userMessage == null || userMessage.trim().isEmpty()) {
            return ResponseEntity.badRequest()
                .body(new ChatResponse("Please provide a message."));
        }

        String reply = watsonService.getChatResponse(userMessage);
        return ResponseEntity.ok(new ChatResponse(reply));
    }
}
