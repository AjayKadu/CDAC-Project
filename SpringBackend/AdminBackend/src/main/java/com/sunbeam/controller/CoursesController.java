package com.sunbeam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.entities.Courses;
import com.sunbeam.services.CoursesService;

@RestController
public class CoursesController {

	@Autowired
	private CoursesService coursesService;

	@GetMapping("/courses/active")
	public ResponseEntity<List<Courses>> getAll() {
		List<Courses> list = coursesService.getAllCourses();
		return ResponseEntity.ok(list);
	}

	@PostMapping("/course")
	public ResponseEntity<Courses> addCourse(@RequestBody Courses cour) {
		Courses courses = coursesService.addCourse(cour);
		return ResponseEntity.ok(courses);
	}
	
	@DeleteMapping("/course/{id}")
	public ResponseEntity<String> deleteCourse(@PathVariable("id") int id) {
	 String message = coursesService.deleteCourse(id);
	 return ResponseEntity.ok(message);  
	}

}
