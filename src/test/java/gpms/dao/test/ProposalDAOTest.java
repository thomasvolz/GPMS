package gpms.dao.test;

import gpms.DAL.MongoDBConnector;
import gpms.dao.ProposalDAO;
import gpms.dao.UserProfileDAO;
import gpms.model.InvestigatorInfo;
import gpms.model.PositionDetails;
import gpms.model.ProjectInfo;
import gpms.model.ProjectLocation;
import gpms.model.ProjectPeriod;
import gpms.model.ProjectType;
import gpms.model.Proposal;
import gpms.model.SponsorAndBudgetInfo;
import gpms.model.Status;
import gpms.model.TypeOfRequest;
import gpms.model.UserProfile;

import java.net.UnknownHostException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Scanner;

import org.junit.Before;
import org.junit.Test;
import org.mongodb.morphia.Morphia;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.mongodb.MongoClient;
import com.mongodb.MongoException;

public class ProposalDAOTest {

	private final static Logger logger = LoggerFactory
			.getLogger(MongoDBConnector.class);

	private MongoClient mongo;
	private Morphia morphia;
	private ProposalDAO pdao;
	private final String dbName = "GPMS";

	// Datastore datastore;

	private static final int MAX_CO_PI_NUM = 4;
	private static final int MAX_SENIOR_PERSONNEL_NUM = 10;

	@Before
	public void initiate() throws UnknownHostException, MongoException {
		mongo = MongoDBConnector.getMongo();
		morphia = new Morphia();
		morphia.map(Proposal.class).map(InvestigatorInfo.class)
				.map(ProjectType.class);
		morphia.map(TypeOfRequest.class).map(ProjectPeriod.class)
				.map(SponsorAndBudgetInfo.class);
		morphia.map(UserProfile.class).map(PositionDetails.class)
				.map(ProjectInfo.class);
		pdao = new ProposalDAO(mongo, morphia, dbName);
		// datastore = morphia.createDatastore(mongo, dbName);
	}
	
	@Test
	public void testCreatingEditingProposal() throws UnknownHostException
	{
		Proposal prop;
		Scanner scan = new Scanner(System.in);
		int index = -1;
		int count = 0;
		String input = "";
		
		do
		{
			System.out.println("To update existing proposal enter \"E\", ");
			System.out.println("To create new proposal enter \"N\", ");
			input = scan.nextLine();
			input.toUpperCase();
		}while(input.charAt(0) != 'E' || input.charAt(0) != 'N');
		
		if(input.charAt(0) == 'N')
		{
			prop = new Proposal();
		}
		else
		{
			List<Proposal> pList = pdao.findAll();
			for(Proposal p : pList)
			{
				System.out.println("Proposal numnber : " + count);
				System.out.println(p.toString());
			}
			
			do
			{
				System.out.println("Please chose a proposal : ");
				index = scan.nextInt();
			}while(index < 0 || index > pList.size());
			prop = pList.get(index);
		}
		
		//proposal number set\edit		
		System.out.println("Proposal number is : " + prop.getProposalNo());
		System.out.println("Enter a new number : ");
		input = scan.nextLine();
		prop.setProposalNo(input);
		System.out.println("New proposal number is : " + prop.getProposalNo());
		
		//proposal date received set\edit
		System.out.println("Proposal date received is : " + prop.getDateReceived().toString());
		System.out.println("Whant to update the date to today? (Y or N) : ");
		do
		{
			input = scan.nextLine();
			input.toUpperCase();
		}while(input.charAt(0)!= 'Y' || input.charAt(0) != 'N');
		
		if(input.charAt(0) == 'Y')
		{
			prop.setDateReceived(new Date());
		}
		System.out.println("Proposal date received is : " + prop.getDateReceived().toString());
		
		//Investigator Information set\edit
		System.out.println("Investigator Information is : ");
		System.out.println(prop.getInvestigatorInfo().toString());
	}
	
//	@Test
//	public void testRemoveInvestogatorsFromProposal() throws UnknownHostException {
//		long counter = pdao.count();
//		logger.debug("The count is [" + counter + "]");
//
//		List<Proposal> pList = pdao.findAll();
//		int count = 0;
//		Scanner scan = new Scanner(System.in);
//		int index = -1;
//		System.out.println("Select a proposals by index before we start.");
//
//		for (Proposal p : pList) {
//			System.out.println(count + " " + p.toString());
//		}
//		
//		do
//		{
//			System.out.println("Please enter index: ");
//			index = scan.nextInt();
//		}while(index < 0 || index > pList.size());
//		
//		Proposal prop = pList.get(index);
//		
//		System.out.println("Geting investigator info...");
//		InvestigatorInfo invInf = prop.getInvestigatorInfo();
//		
//		System.out.println("Geting Co-Pi list...");
//		
//		ArrayList<UserProfile> coPiList = invInf.getCo_pi();
//		
//		System.out.println("Generating Co-Pi list...");
//		
//		count = 0;
//		
//		for(UserProfile userProfile : coPiList)
//		{
//			System.out.println(count + " " + userProfile.toString());
//			count++;
//		}
//		
//		do
//		{
//			System.out.println("Select the one to delete.");
//			index = scan.nextInt();
//		}while(index < 0 || index > coPiList.size());
//		
//		pdao.removeCoPi(prop, index);
//		
//		System.out.println("Geting Senior Personnel list...");
//		
//		ArrayList<UserProfile> seniorPersonnelList = invInf.getSeniorPersonnel();
//		
//		System.out.println("Generating Senior Personnel list...");
//		
//		count = 0;
//		
//		for(UserProfile userProfile : seniorPersonnelList)
//		{
//			System.out.println(count + " " + userProfile.toString());
//			count++;
//		}
//		
//		do
//		{
//			System.out.println("Select the one to delete.");
//			index = scan.nextInt();
//		}while(index < 0 || index > coPiList.size());
//		
//		pdao.removeSeniorPersonnel(prop, index);
//		
//		System.out.println("Geting updated Proposal...");
//		
//		prop = pdao.proposalById(prop.getId());
//		
//		System.out.println("Geting investigator info...");
//		invInf = prop.getInvestigatorInfo();
//		
//		System.out.println("Geting Co-Pi list...");
//		
//		coPiList = invInf.getCo_pi();
//		
//		System.out.println("Generating Co-Pi list...");
//		
//		for(UserProfile userProfile : coPiList)
//		{
//			System.out.println(userProfile.toString());
//		}
//		
//		System.out.println("Geting Senior Personnel list...");
//		
//		seniorPersonnelList = invInf.getSeniorPersonnel();
//		
//		System.out.println("Generating Senior Personnel list...");
//		
//		for(UserProfile userProfile : seniorPersonnelList)
//		{
//			System.out.println(userProfile.toString());
//		}
//
//		//scan.close();
//		
//		System.out.println("Done!");
//	}
	
//	@Test
//	public void testUpdateInvestigatorInProposal() throws UnknownHostException {
//		long counter = pdao.count();
//		logger.debug("The count is [" + counter + "]");
//
//		List<Proposal> pList = pdao.findAll();
//		int count = 0;
//		Scanner scan = new Scanner(System.in);
//		int index = -1;
//		String input = "";
//		System.out.println("Select a proposals by index before we start.");
//
//		for (Proposal p : pList) {
//			System.out.println(count + " " + p.toString());
//		}
//		
//		do
//		{
//			System.out.println("Please enter index: ");
//			index = scan.nextInt();
//		}while(index < 0 || index > pList.size());
//		
//		Proposal prop = pList.get(index);
//		
//		System.out.println("Geting investigator info...");
//		InvestigatorInfo invInf = prop.getInvestigatorInfo();
//		
//		System.out.println("Geting Co-Pi list...");
//		
//		ArrayList<UserProfile> coPiList = invInf.getCo_pi();
//		
//		System.out.println("Generating Co-Pi list...");
//		
//		count = 0;
//		
//		for(UserProfile userProfile : coPiList)
//		{
//			System.out.println(count + " " + userProfile.toString());
//			count++;
//		}
//		
//		do
//		{
//			System.out.println("Select the one to update.");
//			index = scan.nextInt();
//		}while(index < 0 || index > coPiList.size());
//		
//		UserProfile coPi = coPiList.get(index);
//		
//		System.out.println("Selected " + coPi.toString());
//		//System.out.println("Please enter a new first name: ");
//		//input = scan.nextLine();
//		
//		coPi.setFirstName("Jose");
//		
//		pdao.updateCoPi(prop, index, coPi);
//		
//		System.out.println("Geting Senior Personnel list...");
//		
//		ArrayList<UserProfile> seniorPersonnelList = invInf.getSeniorPersonnel();
//		
//		System.out.println("Generating Senior Personnel list...");
//		
//		count = 0;
//		
//		for(UserProfile userProfile : seniorPersonnelList)
//		{
//			System.out.println("This Line");
//			System.out.println(count + " " + userProfile.toString());
//			count++;
//		}
//		
//		do
//		{
//			System.out.println("Select the one to update.");
//			index = scan.nextInt();
//		}while(index < 0 || index > coPiList.size());
//		
//		UserProfile seniorPersonnel = coPiList.get(index);
//		
//		System.out.println("Selected " + seniorPersonnel.toString());
//		//System.out.println("Please enter a new first name: ");
//		//input = scan.nextLine();
//		
//		seniorPersonnel.setFirstName("Pepe");
//		
//		pdao.updateSeniorPersonnel(prop, index, seniorPersonnel);
//		
//		System.out.println("Geting updated Proposal...");
//		
//		prop = pdao.proposalById(prop.getId());
//		
//		System.out.println("Geting investigator info...");
//		invInf = prop.getInvestigatorInfo();
//		
//		System.out.println("Geting Co-Pi list...");
//		
//		coPiList = invInf.getCo_pi();
//		
//		System.out.println("Generating Co-Pi list...");
//		
//		for(UserProfile userProfile : coPiList)
//		{
//			System.out.println(userProfile.toString());
//		}
//		
//		System.out.println("Geting Senior Personnel list...");
//		
//		seniorPersonnelList = invInf.getSeniorPersonnel();
//		
//		System.out.println("Generating Senior Personnel list...");
//		
//		for(UserProfile userProfile : seniorPersonnelList)
//		{
//			System.out.println(userProfile.toString());
//		}
//
//		scan.close();
//		
//		System.out.println("Done!");
//	}
	
//	@Test
//	public void TestAddProposal() throws UnknownHostException {
//		long counter = pdao.count();
//		logger.debug("The count is [" + counter + "]");
//
//		List<Proposal> pList = pdao.findAll();
//
//		System.out.println("Proposals before we start.");
//
//		for (Proposal p : pList) {
//			System.out.println(p.toString());
//		}
//
//		System.out.println("Now creating proposal...");
//
//		Proposal prop = new Proposal();
//		
//		UserProfileDAO upDAO = new UserProfileDAO(mongo, morphia, dbName);
//		
//		ArrayList<UserProfile> coPiList = new ArrayList<UserProfile>();
//		ArrayList<UserProfile> seniorPersonnelList = new ArrayList<UserProfile>();
//		List<UserProfile> upList = upDAO.findAll();
//		for (UserProfile up : upList) {
//			System.out.println("Existing UserProfile: " + up.toString());
//		}
//		System.out.println("Adding Investigator Info from Data Base...");
//
//		for (UserProfile up : upList) {
//			// TODO: check the PI is the user who is adding the Proposal and
//			// Co-PI/ Senior Personnel can be more than 1
//			// Co-PI/ Senior Personnel need to be IN Array
//			// I think we need to separate this part as different method cause
//			// Addin User to the Proposal can happen after the proposal has been
//			// already added?
//			// Also don't add the condition to check hard coded 4 and 10 here we
//			// already checked that in Info class while adding
//
//			if (up.getUserAccount().getUserName().equals("sWalsh")) {
//				pdao.addPi(prop, up);
//			} else if (coPiList.size() < MAX_CO_PI_NUM) {
//				coPiList.add(up);
//				System.out.println("The amount of co pi is " + coPiList.size());
//			} else if (seniorPersonnelList.size() < MAX_SENIOR_PERSONNEL_NUM) {
//				System.out.println("Adding senior personel");
//				seniorPersonnelList.add(up);
//			}
//		}
//		
//		pdao.addCoPiList(prop, coPiList);
//		pdao.addSeniorPersonelList(prop, seniorPersonnelList);
//
//		System.out.println("Adding project type info...");
//
//		ProjectType projType = new ProjectType();
//		projType.setIsResearchApplied(Boolean.TRUE);
//
//		System.out.println("Adding type of requiest info...");
//
//		TypeOfRequest tor = new TypeOfRequest();
//		tor.setPreProposal(Boolean.TRUE);
//
//		System.out.println("Adding project period info...");
//
//		ProjectPeriod pp = new ProjectPeriod();
//		pp.setFrom(new Date());
//		Date to = new Date();
//		pp.setTo(to);
//
//		System.out.println("Configuring all project information...");
//
//		ProjectInfo projInf = new ProjectInfo();
//		projInf.setProjectTitle("Software Security");
//		projInf.setProjectType(projType);
//		projInf.setTypeOfRequest(tor);
//		projInf.setDueDate(new Date());
//		projInf.setProjectPeriod(pp);
//
//		ProjectLocation pl = new ProjectLocation();
//		pl.setOffCampus(Boolean.TRUE);
//		pl.setOnCampus(Boolean.FALSE);
//		projInf.setProjectLocation(pl);
//
//		System.out.println("Adding sponsor and budget info...");
//
//		SponsorAndBudgetInfo sabi = new SponsorAndBudgetInfo();
//		sabi.addGrantingAgency("NFS");
//		sabi.addGrantingAgency("Orocovis");
//		sabi.setDirectCosts(1500000.00);
//		sabi.setFACosts(100000.00);
//		sabi.setTotalCosts(sabi.getDirectCosts() + sabi.getFACosts());
//		sabi.setFARate(12);
//
//		prop.setProposalNo("12");
//
//		// TODO: add the enum Status here
//		prop.setProposalStatus(Status.NEW);
//
//		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
//		Date recievedDate = new Date();
//		try {
//			recievedDate = dateFormat.parse("2015-6-9");
//		} catch (ParseException e) {
//			e.printStackTrace();
//		}
//		prop.setDateReceived(recievedDate);
//
//		//prop.setInvestigatorInfo(invInf);
//		prop.setProjectInfo(projInf);
//		prop.setSponsorAndBudgetInfo(sabi);
//
//		pdao.save(prop);
//
//		pList = pdao.findAll();
//
//		System.out.println("Proposals after adding new proposal...");
//
//		for (Proposal p : pList) {
//			System.out.println(p.toString());
//		}
//	}
}
