package com.simplilearn.phase4.kitchenstory.dto;

import java.util.List;

import com.simplilearn.phase4.kitchenstory.entity.orders;
import com.simplilearn.phase4.kitchenstory.entity.payment;

public class Purchase 
{
	private orders order;
	//private List<orderedfoods> foodorders;
	private List<checkoutfoods> checkoutfood;
	private payment orderpayments;
	
	public Purchase()
	{
		
	}
	
	public Purchase(orders order, List<checkoutfoods> checkoutfood, payment orderpayments) {
		super();
		this.order = order;
		this.checkoutfood = checkoutfood;
		this.orderpayments = orderpayments;
	}

	public orders getOrder() {
		return order;
	}
	public void setOrder(orders order) {
		this.order = order;
	}
	
	public payment getOrderpayments() {
		return orderpayments;
	}
	public void setOrderpayments(payment orderpayments) {
		this.orderpayments = orderpayments;
	}

	public List<checkoutfoods> getCheckoutfood() {
		return checkoutfood;
	}

	public void setCheckoutfood(List<checkoutfoods> checkoutfood) {
		this.checkoutfood = checkoutfood;
	}

	@Override
	public String toString() {
		return "Purchase [order=" + order + ", checkoutfood=" + checkoutfood + ", orderpayments=" + orderpayments + "]";
	}
	
}
