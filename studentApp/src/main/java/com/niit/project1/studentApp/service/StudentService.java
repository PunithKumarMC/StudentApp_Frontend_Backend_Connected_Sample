package com.niit.project1.studentApp.service;

import com.niit.project1.studentApp.exception.StudentAlreadyExistException;
import com.niit.project1.studentApp.model.Student;
import com.niit.project1.studentApp.repository.StudentRepository;

import java.util.List;

public interface StudentService {
    boolean insertStudentDetails(Student student) throws StudentAlreadyExistException;
    List<Student> getAllStudentsDetails();
}
