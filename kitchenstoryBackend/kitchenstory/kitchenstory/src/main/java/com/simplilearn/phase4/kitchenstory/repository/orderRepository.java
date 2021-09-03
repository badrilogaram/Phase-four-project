package com.simplilearn.phase4.kitchenstory.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


import com.simplilearn.phase4.kitchenstory.entity.orders;

@Repository
public interface orderRepository extends CrudRepository<orders, Long>
{

}
