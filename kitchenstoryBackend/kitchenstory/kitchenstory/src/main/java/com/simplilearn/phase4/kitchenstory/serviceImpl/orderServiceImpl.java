package com.simplilearn.phase4.kitchenstory.serviceImpl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.phase4.kitchenstory.dto.Purchase;
import com.simplilearn.phase4.kitchenstory.dto.PurchaseResponse;
import com.simplilearn.phase4.kitchenstory.dto.checkoutfoods;
import com.simplilearn.phase4.kitchenstory.entity.fooditem;
import com.simplilearn.phase4.kitchenstory.entity.orders;
import com.simplilearn.phase4.kitchenstory.entity.payment;
import com.simplilearn.phase4.kitchenstory.repository.foodItemRepository;
import com.simplilearn.phase4.kitchenstory.repository.foodorderRepository;
import com.simplilearn.phase4.kitchenstory.repository.orderRepository;
import com.simplilearn.phase4.kitchenstory.service.orderService;

@Service
public class orderServiceImpl implements orderService
{

	@Autowired
	private orderRepository orderRepo;
	
	@Autowired
	private foodorderRepository foodorderRepo;
	
	@Autowired
	private foodItemRepository foodItemRepo;
	
	@Override
	public PurchaseResponse placeOrder(Purchase purchase) 
	{
		LocalDateTime today = java.time.LocalDateTime.now();
		orders ords = purchase.getOrder();
		
		//orders order = new orders();
		String orderTrackingNumber = generateOrderTrackingNumber();
		ords.setOrderTrackingNo(orderTrackingNumber);
		
		ords.setOrderDate(today);
		
		ords.setOrderStatus("placed");
		 
		orders ord = orderRepo.save(ords);
		 
	
		/*
		 * order.setFirstname(ords.getFirstname());
		 * 
		 * order.setLastname(ords.getLastname());
		 * 
		 * order.setContactNo(ords.);
		 */
		
		
		/*
		 * List<orderedfoods> foodorders = purchase.getFoodorders(); for(orderedfoods
		 * orderedfood : foodorders) { //long id = orderedfood.getFditem().getFoodId();
		 * 
		 * //fooditem fitem = foodItemRepo.getById(id);
		 * 
		 * foodorderRepo.saveOrderedFood(orderedfood, ord); }
		 */
		 
		List<checkoutfoods> foodorders = purchase.getCheckoutfood();
		for(checkoutfoods orderfood : foodorders)
		{
			long id = orderfood.getFoodid();
			fooditem fitem = foodItemRepo.getById(id);
			foodorderRepo.saveOrderedFood(orderfood, ord,fitem);
		}
		payment pay = purchase.getOrderpayments();
		
		if(!(Objects.isNull(pay)))
		{
			foodorderRepo.savePayment(pay, ord);
		}
		
		return new PurchaseResponse(orderTrackingNumber);
	}
	
	private String generateOrderTrackingNumber() {

        return UUID.randomUUID().toString().replace("-", "").substring(0, 10);
    }
	
}
