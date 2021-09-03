package com.simplilearn.phase4.kitchenstory.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.phase4.kitchenstory.dto.Purchase;
import com.simplilearn.phase4.kitchenstory.dto.PurchaseResponse;
import com.simplilearn.phase4.kitchenstory.service.orderService;

@RestController
@CrossOrigin(origins="http://localhost:4200")  
@RequestMapping(value="/api")  
public class orderController 
{
	@Autowired
	private orderService orderservice;
	
	@PostMapping("/purchase")
    public PurchaseResponse placeOrder(@RequestBody Purchase purchase) {

        PurchaseResponse purchaseResponse = orderservice.placeOrder(purchase);

        return purchaseResponse;
    }
}
