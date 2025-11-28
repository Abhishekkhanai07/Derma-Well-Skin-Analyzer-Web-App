package com.dermawell.backend.controller;

import com.dermawell.backend.payload.QuizRequest;
import com.dermawell.backend.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/quiz")
public class QuizController {

    @Autowired
    private QuizService quizService;

    @PostMapping("/result")
    public Map<String, String> getSkinAnalysis(@RequestBody QuizRequest req) {
        String skinType = quizService.predictSkin(req);
        return Map.of("skinType", skinType);
    }
}
