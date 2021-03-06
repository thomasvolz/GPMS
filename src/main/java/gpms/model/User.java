package gpms.model;




import org.mongodb.morphia.annotations.Embedded;
import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Property;

/**
 * Represents a User object
 * 
 * @author shaines
 */
@Entity
public class User extends BaseEntity {
	@Property("first Name")
	private String firstName;
	@Property("last Name")
	private String lastName;
	@Property("Age")
	private int age;

	@Embedded("Address Info")
	private Address address;

	public User() {
	}

	public User(String firstName, String lastName, int age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	/**
	 * Create a user with only the first and last name
	 * 
	 * @param first
	 *            first name of user
	 * @param last
	 *            last name of user
	 */
	public User(String first, String last) {
		firstName = first;
		lastName = last;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return firstName + " " + lastName + " is " + age + " years old";
	}
}
