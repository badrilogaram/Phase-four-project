package com.simplilearn.phase4.kitchenstory.service;

import com.simplilearn.phase4.kitchenstory.entity.admincredentials;

public interface adminLoginService 
{
    admincredentials loginValidate(admincredentials adminCreds);
    
    admincredentials updateCredentials(long id,admincredentials adminCreds);
}
