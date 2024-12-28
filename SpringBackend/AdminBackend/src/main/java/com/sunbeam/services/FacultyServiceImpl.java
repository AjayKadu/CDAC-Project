package com.sunbeam.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.daos.FacultyDao;
import com.sunbeam.entities.Faculty;

@Service
public class FacultyServiceImpl implements FacultyService {
	
	@Autowired
	private FacultyDao facultyDao;
	
	public List<Faculty> AllFaculty(){
	List<Faculty> allFaculty = facultyDao.findAll();
	return allFaculty;
	}

	@Override
	public Faculty addFaculty(Faculty fact) {
		Faculty faculty = facultyDao.save(fact);
		return faculty;
	}

}
