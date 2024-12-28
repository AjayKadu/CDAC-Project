package com.sunbeam.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name ="faculty")
public class Faculty {
    
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int facultyId;
	
	@Column(nullable = false)
	private String firstName;
	
	@Column(nullable = false)
	private String lastName;
	
	@Column(unique = true, nullable = false)
	private String email;
	
	@Column(nullable=false)
	private String password;
	
	@ManyToOne
	@JoinColumn(name="courseId")
	private Courses courses;
	
	private String address;
	
	private String photoImageName;
	
	private Date birthDate;
	
	private char gender;
	
	@ManyToOne
	@JoinColumn(name = "roleId", nullable=false)
	private Role role;
	
	
	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public int getFacultyId() {
		return facultyId;
	}
	
	public void setFacultyId(int facultyId) {
		this.facultyId = facultyId;
	}
	
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	@Override
	public String toString() {
		return "Faculty [facultyId=" + facultyId + ", firstName=" + firstName + ", lastName=" + lastName + ", email="
				+ email + ", password=" + password + ", courses=" + courses + ", address=" + address
				+ ", photoImageName=" + photoImageName + ", birthDate=" + birthDate + ", gender=" + gender + ", role="
				+ role + "]";
	}

	public Courses getCourses() {
		return courses;
	}

	public void setCourses(Courses courses) {
		this.courses = courses;
	}

	public String getAddress() {
		return address;
	}
	
	public void setAddress(String address) {
		this.address = address;
	}
	
	public String getPhotoImageName() {
		return photoImageName;
	}
	
	public void setPhotoImageName(String photoImageName) {
		this.photoImageName = photoImageName;
	}
	
	public Date getBirthDate() {
		return birthDate;
	}
	
	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}
	
	public char getGender() {
		return gender;
	}
	
	public void setGender(char gender) {
		this.gender = gender;
	}

	
	
	
}
