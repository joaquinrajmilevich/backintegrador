package com.example.backintegrador.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

    public static final String home_PATH = "home.html";
    public static final String somos_PATH = "somos.html";
    public static final String proyecto_PATH = "proyecto.html";
    public static final String actividades_PATH = "actividades.html";
    public static final String colabora_PATH = "colabora.html";
    public static final String inscripciones_PATH = "inscripciones.html";
    @GetMapping("/")
    public String index() {
        return "index.html"; // Return the name of your Next.js index page (e.g., "index.html")
    }
    @GetMapping("/home")
    public String home() {
        return home_PATH;
    }
    @GetMapping("/somos")
    public String somos() {
        return somos_PATH;
    }
    @GetMapping("/proyecto")
    public String proyecto() {
        return proyecto_PATH;
    }
    @GetMapping("/actividades")
    public String actividades() {
        return actividades_PATH;
    }
    @GetMapping("/colabora")
    public String colabora() {
        return colabora_PATH;
    }
    @GetMapping("/inscripciones")
    public String inscripciones() {
        return inscripciones_PATH;
    }

}