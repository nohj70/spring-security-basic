package com.security.basic.demo.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@Slf4j
public class MainController {

    @GetMapping("/login")
    public String login(){
        log.info(">>login");

        return "/web/index.html";
    }
}
