package com.niit.project1.studentApp.service;

import com.niit.project1.studentApp.exception.StudentAlreadyExistException;
import com.niit.project1.studentApp.model.Student;
import com.niit.project1.studentApp.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {
    private StudentRepository studentRepository;

    @Autowired
    public StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public boolean insertStudentDetails(Student student) throws StudentAlreadyExistException {
        boolean flag = true;
        Optional<Student> s1=(Optional<Student>)studentRepository.findById(student.getStudentid());
        if (s1.isPresent()) {
            flag=false;
            throw new StudentAlreadyExistException();
        }
        studentRepository.save(student);
        return flag;
    }

    @Override
    public List<Student> getAllStudentsDetails() {
        return studentRepository.findAll();
    }
}
