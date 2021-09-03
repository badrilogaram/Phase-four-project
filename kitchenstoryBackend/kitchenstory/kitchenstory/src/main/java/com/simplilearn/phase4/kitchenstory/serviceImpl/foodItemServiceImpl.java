package com.simplilearn.phase4.kitchenstory.serviceImpl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.phase4.kitchenstory.entity.fooditem;
import com.simplilearn.phase4.kitchenstory.repository.foodItemRepository;
import com.simplilearn.phase4.kitchenstory.service.foodItemService;

@Service
public class foodItemServiceImpl implements foodItemService 
{

	@Autowired
	private foodItemRepository foodItemRepo;
	
	@Override
	public fooditem saveFoodItem(fooditem fitem) 
	{
		return foodItemRepo.save(fitem);
	}
	@Override
	public List<fooditem> getAllFoodItems() {
		
		return foodItemRepo.findAll();
	}
	
	@Override
	public fooditem removeFoodItem(long foodId) {
		
		fooditem fitem = foodItemRepo.getById(foodId);
		fitem.setFoodstatus("removed");
		return foodItemRepo.save(fitem);
	}

}
