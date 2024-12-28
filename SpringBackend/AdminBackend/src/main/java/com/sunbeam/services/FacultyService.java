package com.sunbeam.services;

import java.util.List;

import com.sunbeam.entities.Faculty;

public interface FacultyService {
      
	List<Faculty> AllFaculty();

	Faculty addFaculty(Faculty fact);
}
