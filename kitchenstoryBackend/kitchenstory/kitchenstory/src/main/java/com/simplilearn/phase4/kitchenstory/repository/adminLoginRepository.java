package com.simplilearn.phase4.kitchenstory.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.phase4.kitchenstory.entity.admincredentials;

@Repository
public interface adminLoginRepository extends JpaRepository<admincredentials, Long> , CrudRepository<admincredentials, Long>
{
	@Query("SELECT c FROM admincredentials c WHERE c.username = ?1 and c.pword = ?2 and c.accountstatus =?3") 
	admincredentials findAdminByCredentials(String username,String password,String accStatus);
}
