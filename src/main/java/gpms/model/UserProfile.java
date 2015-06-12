//Edited by: Hector C. Ortiz
/**
 * @author Thomas Volz
 */

package gpms.model;

import gpms.dao.BaseEntity;
import gpms.dao.UserProfileDAO;

import java.util.ArrayList;
import java.util.List;

import org.mongodb.morphia.annotations.Embedded;
import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Property;
import org.mongodb.morphia.annotations.Reference;

@Entity(value = UserProfileDAO.COLLECTION_NAME)
public class UserProfile extends BaseEntity {
	@Property("first name")
	private String firstName = new String();

	@Property("middle name")
	private String middleName = new String();

	@Property("last name")
	private String lastName = new String();

	@Embedded("details")
	private List<PositionDetails> details = new ArrayList<PositionDetails>();

	@Property("office number")
	private List<String> officeNumbers = new ArrayList<String>();

	@Property("mobile number")
	private List<String> mobileNumbers = new ArrayList<String>();

	@Property("home number")
	private List<String> homeNumbers = new ArrayList<String>();

	@Property("additional numbers")
	private List<String> additionalNumbers = new ArrayList<String>();

	@Property("address")
	private Address address;

	@Property("emails")
	private List<String> emails = new ArrayList<String>();

	@Reference("user id")
	private UserAccount userAccount = new UserAccount();

	/**
	 * Overloaded constructor
	 * 
	 * @param firstName
	 *            First Name of the User
	 * @param middleName
	 *            Middle Name of the User
	 * @param lastName
	 *            Last Name of the User
	 * @param details
	 *            List of Job Type / Position
	 * @param phoneNumbers
	 *            Phone Numbers of the User
	 * @param emails
	 *            Emails of the user
	 */
	public UserProfile(String firstName, String middleName, String lastName,
			ArrayList<PositionDetails> details,
			ArrayList<String> setOfficeNumbers,
			ArrayList<String> setHomeNumbers,
			ArrayList<String> setMobileNumbers, ArrayList<String> emails,
			UserAccount userAccount) {
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.details = details;
		officeNumbers = setOfficeNumbers;
		homeNumbers = setHomeNumbers;
		mobileNumbers = setMobileNumbers;

		this.emails = emails;
		this.userAccount = userAccount;
	}

	/**
	 * Constructor for creating user profile with name only
	 * 
	 * @param firstName
	 *            First name of the user
	 * @param middleName
	 *            Middle name of the user
	 * @param lastName
	 *            Last name of the user
	 */
	public UserProfile(String firstName, String middleName, String lastName) {
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		details = null;
		emails = null;
	}

	/**
	 * Non-Parameterized constructor, needed for @id assignment
	 */
	public UserProfile() {
		firstName = null;
		middleName = null;
		lastName = null;
		details = null;
		emails = null;
	}

	/**
	 * 
	 * @return First name of the user
	 */
	public String getFirstName() {
		return firstName;

	}

	/**
	 * Changes the first name of the user
	 * 
	 * @param newName
	 *            the new first name
	 * 
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	/**
	 * 
	 * @return the middle name of the user
	 */
	public String getMiddleName() {
		return middleName;
	}

	/**
	 * Changes the middle name of the user
	 * 
	 * @param newName
	 *            the new middle name
	 */
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	/**
	 * 
	 * @return the last name of the user
	 */
	public String getLastName() {
		return lastName;
	}

	/**
	 * Changes the last name of the user
	 * 
	 * @param newName
	 *            the new last name
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	/**
	 * 
	 * @return the array list of details
	 */
	public List<PositionDetails> getDetails() {
		return details;
	}

	/**
	 * Should not be used
	 * 
	 * @param details
	 */
	public void setDetails(List<PositionDetails> details) {
		this.details = details;
	}

	/**
	 * Add a collection of position details to the existing array list
	 * 
	 * @param positionDetails
	 */
	public void addDetails(PositionDetails positionDetails) {
		details.add(positionDetails);
	}

	/**
	 * Adds a new office number to the arraylist
	 * 
	 * @param officeNumber
	 *            Office Number to be added
	 */
	public void addOfficeNumber(String officeNumber) {
		officeNumbers.add(officeNumber);
	}

	/**
	 * Adds a new office number with an EXT: to the arraylist
	 * 
	 * @param officeNumber
	 *            Office Number to be added
	 */
	public void addOfficeNumber(String officeNumber, String extention) {
		officeNumber = officeNumber + " ext: " + extention;
		officeNumbers.add(officeNumber);
	}

	/**
	 * Will delete the number from a list
	 * 
	 * @param deleteNumber
	 *            the number to be deleted
	 */
	public void deleteOfficeNumber(String deleteNumber) {
		deleteNumber(officeNumbers, deleteNumber);
	}

	/**
	 * 
	 * @return the list of office numbers
	 */
	public List<String> getOfficeNumbers() {
		return officeNumbers;
	}

	/**
	 * Used for changing the mobile number
	 * 
	 * @param oldNumber
	 *            number to change
	 * @param newNumber
	 *            number to become
	 */
	public void setOfficeNumber(String oldNumber, String newNumber) {
		setNumber(officeNumbers, oldNumber, newNumber);
	}

	/**
	 * Adds a new mobile number to the arraylist
	 * 
	 * @param mobileNumber
	 *            mobile Number to be added
	 */
	public void addMobileNumber(String mobileNumber) {
		mobileNumbers.add(mobileNumber);
	}

	/**
	 * 
	 * @return the list of office numbers
	 */
	public List<String> getMobileNumbers() {
		return mobileNumbers;
	}

	/**
	 * Used for changing the mobile number
	 * 
	 * @param oldNumber
	 *            number to change
	 * @param newNumber
	 *            number to become
	 */
	public void setMobileNumber(String oldNumber, String newNumber) {
		setNumber(mobileNumbers, oldNumber, newNumber);
	}

	/**
	 * Adds a new home number to the arraylist
	 * 
	 * @param homeNumber
	 *            Home Number to be added
	 */
	public void addHomeNumber(String homeNumber) {
		homeNumbers.add(homeNumber);
	}

	/**
	 * Used for changing the home number
	 * 
	 * @param oldNumber
	 *            number to change
	 * @param newNumber
	 *            number to become
	 */
	public void setHomeNumber(String oldNumber, String newNumber) {
		setNumber(homeNumbers, oldNumber, newNumber);
	}

	/**
	 * Will delete the number from a list
	 * 
	 * @param deleteNumber
	 *            the number to be deleted
	 */
	public void deleteHomeNumber(String deleteNumber) {
		deleteNumber(homeNumbers, deleteNumber);
	}

	/**
	 * 
	 * @return the list of home numbers
	 */
	public List<String> getHomeNumbers() {
		return homeNumbers;
	}

	/**
	 * 
	 * Change an existing number to a new one
	 * 
	 * @param numberString
	 *            the list of either office, home, mobile, etc
	 * @param newNumber
	 *            number to change the old number to
	 */
	private void setNumber(List<String> numberString, String oldNumber,
			String newNumber) {
		int index = numberString.indexOf(oldNumber);
		numberString.set(index, newNumber);
	}

	/**
	 * 
	 * Will delete a number from a list
	 * 
	 * @param numberString
	 *            number list to delete from
	 * @param deleteNumber
	 *            number to delete
	 */
	private void deleteNumber(List<String> numberString, String deleteNumber) {
		int index = numberString.indexOf(deleteNumber);
		numberString.remove(index);
	}

	/**
	 * Set the address for the user
	 * 
	 * @param setAddress
	 *            address obj to add
	 */
	public void setAddress(Address setAddress) {
		address = setAddress;
	}

	/**
	 * Returns the address for use
	 * 
	 * @return the address object
	 */
	public Address getAddress() {
		return address;
	}

	/**
	 * 
	 * @return the array list of email addresses
	 */

	public List<String> getEmails() {
		return emails;
	}

	/**
	 * Add an email string to the email array list
	 * 
	 * @param addEmail
	 *            the new email to add
	 */
	public void addEmail(String addEmail) {
		emails.add(addEmail);
	}

	public UserAccount getUserAccount() {
		return userAccount;
	}

	public void setUserId(UserAccount newUserAccount) {
		userAccount = newUserAccount;
	}

	/**
	 * toString returns full user name
	 * 
	 * @return full name of the user
	 */
	@Override
	public String toString() {
		return this.getFirstName() + " " + this.getMiddleName() + " "
				+ this.getLastName() + " " + this.userAccount.getUserName();
	}

	public boolean equals(UserProfile up) {
		return this.userAccount.equals(up.getUserAccount())
				&& this.firstName.equals(up.firstName)
				&& this.middleName.equals(up.middleName)
				&& this.lastName.equals(up.lastName)
				&& this.details.equals(up.details)
				// && this.phoneNumbers.equals(up.phoneNumbers)
				&& this.emails.equals(up.emails);
	}
}
