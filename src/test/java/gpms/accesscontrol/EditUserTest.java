package gpms.accesscontrol;

public class EditUserTest {
	/**
	 * @param args
	 * @throws Exception 
	 */
	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
		Accesscontrol ac = new Accesscontrol();
		Accesscontrol.initBalana();
		String decision = ac.getXACMLdecision("ADMIN", "userProfile","edit");
		System.out.println(decision);
		if(decision.equals("Permit"))
		{
			System.out.println("Action permitted");
		}
		else
		{
			System.out.println("Action denied");
		}
	}

}
