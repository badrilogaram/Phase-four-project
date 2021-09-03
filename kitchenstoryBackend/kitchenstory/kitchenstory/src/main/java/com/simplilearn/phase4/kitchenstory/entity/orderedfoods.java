package com.simplilearn.phase4.kitchenstory.entity;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name="orderedfooditems")
/*
 * @AssociationOverrides({
 * 
 * @AssociationOverride(name = "primaryKey.order", joinColumns
 * = @JoinColumn(name = "orderid")),
 * 
 * @AssociationOverride(name = "primaryKey.food", joinColumns = @JoinColumn(name
 * = "foodid"))})
 */
public class orderedfoods 
{
	/*
	 * @EmbeddedId private foodorder primaryKey = new foodorder();
	 */
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "id")
	private long id;
	
	@Column(name = "foodname")
	private String foodname;
	
	@Column(name = "price")
	private BigDecimal price;
	
	@Column(name = "qty")
	private int quantity;
	
	@ManyToOne
    @JoinColumn(name = "orderid")
    private orders order;

	@ManyToOne
    @JoinColumn(name = "foodid")
    private fooditem fditem;

	public orderedfoods()
	{
		
	}
	
	
	public orderedfoods(long id, String foodname, BigDecimal price, int quantity, orders order, fooditem fditem) {
		super();
		this.id = id;
		this.foodname = foodname;
		this.price = price;
		this.quantity = quantity;
		this.order = order;
		this.fditem = fditem;
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
	public orders getOrder() {
		return order;
	}
	public void setOrder(orders order) {
		this.order = order;
	}


	public fooditem getFditem() {
		return fditem;
	}


	public void setFditem(fooditem fditem) {
		this.fditem = fditem;
	}


	@Override
	public String toString() {
		return "orderedfoods [id=" + id + ", foodname=" + foodname + ", price=" + price + ", quantity=" + quantity
				+ ", order=" + order + ", fditem=" + fditem + "]";
	}

	
}
