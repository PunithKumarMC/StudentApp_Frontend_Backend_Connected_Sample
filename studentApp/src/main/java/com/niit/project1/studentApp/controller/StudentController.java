package com.niit.project1.studentApp.controller;

import com.niit.project1.studentApp.exception.StudentAlreadyExistException;
import com.niit.project1.studentApp.model.Student;
import com.niit.project1.studentApp.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/s1/")
public class StudentController {
    private StudentService studentService;
    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping("insertstudent")
    public ResponseEntity<?> insertStudentDetails(@RequestBody Student student) throws StudentAlreadyExistException {
        System.out.println("check1");
        return new ResponseEntity<>(studentService.insertStudentDetails(student), HttpStatus.CREATED);
    }
    @GetMapping("getsllstudents")
    public ResponseEntity<?> getAllStudents(){
        return new ResponseEntity<>(studentService.getAllStudentsDetails(),HttpStatus.OK);
    }
}
