package com.simplilearn.phase4.kitchenstory.repository;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.simplilearn.phase4.kitchenstory.dto.checkoutfoods;
import com.simplilearn.phase4.kitchenstory.entity.fooditem;
import com.simplilearn.phase4.kitchenstory.entity.orderedfoods;
import com.simplilearn.phase4.kitchenstory.entity.orders;
import com.simplilearn.phase4.kitchenstory.entity.payment;

@Repository
@Transactional
public class foodorderRepository 
{
	@Autowired
	EntityManager em;
	
	public void saveOrderedFood(checkoutfoods orderedfood,orders ord,fooditem fditem)
	{
		orderedfoods ordfood = new orderedfoods();
		ordfood.setOrder(ord);
		ordfood.setFditem(fditem);
		//ordfood.getPrimaryKey().getFood().setFoodId(orderedfood.getfooditem().getFordoodId());
		
		ordfood.setFoodname(orderedfood.getFoodname());
		
		ordfood.setPrice(orderedfood.getPrice());
		
		ordfood.setQuantity(orderedfood.getQuantity());
		
		em.persist(ordfood);
	}
	
	public void savePayment(payment pay,orders ord)
	{
		pay.setOrderpayment(ord);
		em.persist(pay);
	}
	
}
