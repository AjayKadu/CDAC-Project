package com.sunbeam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.entities.Faculty;
import com.sunbeam.services.FacultyService;

@RestController
public class FacultyController {

	@Autowired
	private FacultyService facultyService;

	@GetMapping("/faculty")
	public ResponseEntity<List<Faculty>> getAll() {
		List<Faculty> allFaculty = facultyService.AllFaculty();
		return ResponseEntity.ok(allFaculty);

	}

	@PostMapping("/faculty")
	public ResponseEntity<Faculty> addFaculty(@RequestBody Faculty fact) {
		Faculty faculty = facultyService.addFaculty(fact);
		return ResponseEntity.ok(faculty);
	}

}
