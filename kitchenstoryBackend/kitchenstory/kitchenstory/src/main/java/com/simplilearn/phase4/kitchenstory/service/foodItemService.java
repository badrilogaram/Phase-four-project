package com.simplilearn.phase4.kitchenstory.service;

import java.util.List;

import com.simplilearn.phase4.kitchenstory.entity.fooditem;

public interface foodItemService 
{
	List<fooditem> getAllFoodItems();
	fooditem saveFoodItem(fooditem fitem);
	fooditem removeFoodItem(long foodId);
}
