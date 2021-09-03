package com.simplilearn.phase4.kitchenstory.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.phase4.kitchenstory.entity.fooditem;

@Repository
public interface foodItemRepository extends JpaRepository<fooditem, Long> , CrudRepository<fooditem, Long>
{

}
