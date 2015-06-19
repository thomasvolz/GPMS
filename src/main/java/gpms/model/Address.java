package gpms.model;

import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.Embedded;

@Embedded
public class Address {
	private String street;
	private String city;
	private String state;
	private String zipcode;
	private String country;

	public Address() {
		street = "";
		city = "";
		state = "";
		zipcode = "";
		country = "";
	}

	public Address(String setStreet, String setCity, String setState,
			String setZipcode, String setCountry) {
		street = setStreet;
		city = setCity;
		state = setState;
		zipcode = setZipcode;
		country = setCountry;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String setCountry) {
		country = setCountry;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}
}
