package com.simplilearn.phase4.kitchenstory.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.phase4.kitchenstory.entity.admincredentials;
import com.simplilearn.phase4.kitchenstory.repository.adminLoginRepository;
import com.simplilearn.phase4.kitchenstory.service.adminLoginService;

@Service
public class adminLoginServiceImpl implements adminLoginService{

	@Autowired
	private adminLoginRepository loginRepo;
	
	@Override
	public admincredentials loginValidate(admincredentials adminCreds) {
		String username = adminCreds.getUsername();
		String pword = adminCreds.getPword();
		String accstatus = "active";
		return loginRepo.findAdminByCredentials(username, pword, accstatus);
	}

	@Override
	public admincredentials updateCredentials(long id, admincredentials adminCreds) {
		
		admincredentials cred = loginRepo.getById(id);
		cred.setUsername(adminCreds.getUsername());
		cred.setPword(adminCreds.getPword());
		return loginRepo.save(cred);
	}

}
