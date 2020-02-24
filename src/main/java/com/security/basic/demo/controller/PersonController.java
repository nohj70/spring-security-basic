package com.security.basic.demo.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class PersonController {

    @GetMapping("greet")
    public String greet(){
        log.info(">>greet");

        return "index";
    }
}
