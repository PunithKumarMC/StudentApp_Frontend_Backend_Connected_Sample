package com.niit.project1.studentApp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Student {
    @Id
    @Generated
    private int studentid;
    private String studentname;
    private String studentemail;
    private String password;
    private String confirmpassword;
}
