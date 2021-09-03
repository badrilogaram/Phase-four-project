package com.simplilearn.phase4.kitchenstory.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.phase4.kitchenstory.entity.fooditem;
import com.simplilearn.phase4.kitchenstory.service.foodItemService;

@RestController
@CrossOrigin(origins="http://localhost:4200")  
@RequestMapping(value="/api")  
public class foodItemController 
{
	@Autowired
	private foodItemService fooditemservice;
	
	@GetMapping("/foodlist")  
    public List<fooditem> getAllFoodItems() {  
         return fooditemservice.getAllFoodItems();
    }
    
    @PostMapping("/addfooditem")
    public fooditem saveFoodItem(@RequestBody fooditem fitem) {  
        return fooditemservice.saveFoodItem(fitem);
   }
    
   @DeleteMapping("/removefooditem/{id}")
   public fooditem removeFoodItem(@PathVariable("id") long id)
   {
	   return fooditemservice.removeFoodItem(id);
   }
   
	
}
