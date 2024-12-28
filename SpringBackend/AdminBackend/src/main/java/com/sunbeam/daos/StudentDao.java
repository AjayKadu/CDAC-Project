package com.sunbeam.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sunbeam.entities.Student;

@Repository
public interface StudentDao extends JpaRepository<Student, Integer> {

}
