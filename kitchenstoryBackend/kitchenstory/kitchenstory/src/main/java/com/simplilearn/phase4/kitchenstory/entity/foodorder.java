package com.simplilearn.phase4.kitchenstory.entity;

import javax.persistence.Embeddable;
import javax.persistence.ManyToOne;

@Embeddable
public class foodorder implements java.io.Serializable
{
	private static final long serialVersionUID = 1L;
	
	@ManyToOne
	private orders order;
	@ManyToOne
    private fooditem food;
	public orders getOrder() {
		return order;
	}
	public void setOrder(orders order) {
		this.order = order;
	}
	public fooditem getFood() {
		return food;
	}
	public void setFood(fooditem food) {
		this.food = food;
	}
}
