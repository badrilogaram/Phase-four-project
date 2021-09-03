package com.simplilearn.phase4.kitchenstory.dto;

import java.math.BigDecimal;

public class checkoutfoods 
{
	private long foodid;
	private String foodname;
	private BigDecimal price;
	private int quantity;
	
	public checkoutfoods()
	{
		
	}
	
	public checkoutfoods(long foodid, String foodname, BigDecimal price, int quantity) {
		super();
		this.foodid = foodid;
		this.foodname = foodname;
		this.price = price;
		this.quantity = quantity;
	}

	public long getFoodid() {
		return foodid;
	}

	public void setFoodid(long foodid) {
		this.foodid = foodid;
	}

	public String getFoodname() {
		return foodname;
	}

	public void setFoodname(String foodname) {
		this.foodname = foodname;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "checkoutfoods [foodid=" + foodid + ", foodname=" + foodname + ", price=" + price + ", quantity="
				+ quantity + "]";
	}

}
