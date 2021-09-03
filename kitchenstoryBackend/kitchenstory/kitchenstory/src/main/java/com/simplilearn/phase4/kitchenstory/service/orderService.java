package com.simplilearn.phase4.kitchenstory.service;

import com.simplilearn.phase4.kitchenstory.dto.Purchase;
import com.simplilearn.phase4.kitchenstory.dto.PurchaseResponse;

public interface orderService 
{
	PurchaseResponse placeOrder(Purchase purchase);
}
