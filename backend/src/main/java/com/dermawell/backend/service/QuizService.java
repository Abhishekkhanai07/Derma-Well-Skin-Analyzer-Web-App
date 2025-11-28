package com.dermawell.backend.service;

import com.dermawell.backend.payload.QuizRequest;
import org.springframework.stereotype.Service;

@Service
public class QuizService {

    public String predictSkin(QuizRequest req) {

        // Basic logic — can be improved later
        if (req.getSkinFeel().equalsIgnoreCase("Oily") ||
                req.getOilyMidday().equalsIgnoreCase("Yes")) {
            return "oily";
        }

        if (req.getSkinFeel().equalsIgnoreCase("Dry") ||
                req.getRedness().equalsIgnoreCase("Always")) {
            return "dry";
        }

        return "normal";
    }
}
