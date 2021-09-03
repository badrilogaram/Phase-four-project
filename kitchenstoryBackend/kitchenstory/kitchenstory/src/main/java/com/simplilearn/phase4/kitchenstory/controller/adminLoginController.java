package com.simplilearn.phase4.kitchenstory.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.phase4.kitchenstory.entity.admincredentials;
import com.simplilearn.phase4.kitchenstory.service.adminLoginService;


@RestController
@CrossOrigin(origins="http://localhost:4200")  
@RequestMapping(value="/api") 
public class adminLoginController 
{
	@Autowired
	private adminLoginService loginservice;
	
	 @PostMapping("/loginvalidate")
	 public admincredentials loginValidate(@RequestBody admincredentials adminCreds) 
	 {  
		 return loginservice.loginValidate(adminCreds);
	 }
	 
	 @PutMapping("/updatecredentials/{id}")
	 public admincredentials updateCredentials(@PathVariable("id") long id, @RequestBody admincredentials adminCreds)
	 {
		 return loginservice.updateCredentials(id, adminCreds);
	 }
	
}
