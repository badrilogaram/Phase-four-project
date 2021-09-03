package com.simplilearn.phase4.kitchenstory.entity;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="fooditem")
public class fooditem {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "foodid")
	private long foodId;
	
	@Column(name = "foodname")
	private String foodname;
	
	@Column(name = "price")
	private BigDecimal price;
	
	@Column(name = "image")
	private String image;
	
	@Column(name = "foodstatus")
	private String foodstatus;
	
	public fooditem()
	{
		
	}

	public fooditem(String foodname, BigDecimal price, String image, String foodstatus) {
		super();
		this.foodname = foodname;
		this.price = price;
		this.image = image;
		this.foodstatus = foodstatus;
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

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getFoodstatus() {
		return foodstatus;
	}

	public void setFoodstatus(String foodstatus) {
		this.foodstatus = foodstatus;
	}

	public long getFoodId() {
		return foodId;
	}

	
	public void setFoodId(long foodId) {
		this.foodId = foodId;
	}

	@Override
	public String toString() {
		return "fooditem [foodId=" + foodId + ", foodname=" + foodname + ", price=" + price + ", image=" + image
				+ ", foodstatus=" + foodstatus + "]";
	}
}
