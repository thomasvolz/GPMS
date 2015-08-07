package gpms.model;

import gpms.dao.ProposalDAO;

import java.util.Date;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import org.mongodb.morphia.annotations.Embedded;
import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Indexed;
import org.mongodb.morphia.annotations.Property;
import org.mongodb.morphia.utils.IndexDirection;

@Entity(value = ProposalDAO.COLLECTION_NAME, noClassnameStored = true)
public class Proposal extends BaseEntity {
	@Property("proposal no")
	@Indexed(value = IndexDirection.ASC, name = "proposalNoIndex", unique = true)
	private String proposalNo = new String();

	@Property("date received")
	private Date dateReceived = new Date();

	@Property("proposal status")
	@Enumerated(EnumType.STRING)
	private Status proposalStatus = Status.NEW;

	@Embedded("investigator info")
	private InvestigatorInfo investigatorInfo = new InvestigatorInfo();

	@Embedded("project info")
	private ProjectInfo projectInfo = new ProjectInfo();

	@Embedded("sponsor and budget info")
	private SponsorAndBudgetInfo sponsorAndBudgetInfo = new SponsorAndBudgetInfo();

	@Embedded("cost share info")
	private CostShareInfo costShareInfo = new CostShareInfo();

	@Embedded("university commitments")
	private UniversityCommitments universityCommitments = new UniversityCommitments();

	@Embedded("conflict of interest and commitment info")
	private ConflictOfInterest conflicOfInterest = new ConflictOfInterest();

	@Embedded("compliance info")
	private ComplianceInfo complianceInfo = new ComplianceInfo();

	@Embedded("additional info")
	private AdditionalInfo additionalInfo = new AdditionalInfo();

	@Embedded("collaboration info")
	private CollaborationInfo collaborationInfo = new CollaborationInfo();

	@Embedded("proprietary/confidential info")
	private ConfidentialInfo confidentialInfo = new ConfidentialInfo();

	@Embedded("OSPSection info")
	private OSPSectionInfo oSPSectionInfo = new OSPSectionInfo();

	@Embedded("signature info")
	private SignatureInfo signatureInfo = new SignatureInfo();

	@Embedded("delegation info")
	private DelegationInfo delegationInfo = new DelegationInfo();

	public Proposal() {
	}

	public Proposal(String proposalNo, Date dateReceived,
			Status proposalStatus, InvestigatorInfo investigatorInfo,
			ProjectInfo projectInfo, SponsorAndBudgetInfo sponsorAndBudgetInfo,
			CostShareInfo costShareInfo) {
		this.proposalNo = proposalNo;
		this.dateReceived = dateReceived;
		this.proposalStatus = proposalStatus;

		// TODO:: need to do in loop of the list object
		this.investigatorInfo = investigatorInfo;
		this.projectInfo = projectInfo;
		this.sponsorAndBudgetInfo = sponsorAndBudgetInfo;
		this.costShareInfo = new CostShareInfo();
		this.universityCommitments = new UniversityCommitments();
		this.conflicOfInterest = new ConflictOfInterest();
		this.complianceInfo = new ComplianceInfo();
	}

	public Proposal(String proposalNo, Date dateReceived, Status proposalStatus) {
		this.proposalNo = proposalNo;
		this.dateReceived = dateReceived;
		this.proposalStatus = proposalStatus;
		investigatorInfo = new InvestigatorInfo();
		projectInfo = new ProjectInfo();
		sponsorAndBudgetInfo = new SponsorAndBudgetInfo();
		costShareInfo = new CostShareInfo();
		universityCommitments = new UniversityCommitments();
		conflicOfInterest = new ConflictOfInterest();
		complianceInfo = new ComplianceInfo();
	}

	public String getProposalNo() {
		return proposalNo;
	}

	public void setProposalNo(String proposalNo) {
		this.proposalNo = proposalNo;
	}

	public Date getDateReceived() {
		return dateReceived;
	}

	public void setDateReceived(Date dateReceived) {
		Date currDate = new Date();
		if (dateReceived.equals(currDate) || dateReceived.after(currDate)) {
			this.dateReceived = dateReceived;
		}
	}

	public Status getProposalStatus() {
		return proposalStatus;
	}

	public void setProposalStatus(Status status) {
		this.proposalStatus = status;
	}

	public InvestigatorInfo getInvestigatorInfo() {
		return investigatorInfo;
	}

	/**
	 * When Investigator info is set, we will add a uniquely generated id to
	 * everyone involved at the creation of the proposal this id is the
	 * proposalKey, which is an ObjectId object, but we run the toString to make
	 * it more manageable for our purposes.
	 * 
	 * @param investigatorInfo
	 */
	public void setInvestigatorInfo(InvestigatorInfo investigatorInfo) {
		this.investigatorInfo = investigatorInfo;
	}

	public ProjectInfo getProjectInfo() {
		return projectInfo;
	}

	public void setProjectInfo(ProjectInfo projectInfo) {
		this.projectInfo = projectInfo;
	}

	public SponsorAndBudgetInfo getSponsorAndBudgetInfo() {
		return sponsorAndBudgetInfo;
	}

	public void setSponsorAndBudgetInfo(
			SponsorAndBudgetInfo sponsorAndBudgetInfo) {
		this.sponsorAndBudgetInfo = sponsorAndBudgetInfo;
	}

	public CostShareInfo getCostShareInfo() {
		return costShareInfo;
	}

	public void setCostShareInfo(CostShareInfo costShareInfo) {
		this.costShareInfo = costShareInfo;
	}

	public UniversityCommitments getUniversityCommitments() {
		return universityCommitments;
	}

	public void setUniversityCommitments(
			UniversityCommitments universityCommitments) {
		this.universityCommitments = universityCommitments;
	}

	public ConflictOfInterest getConflicOfInterest() {
		return conflicOfInterest;
	}

	public void setConflicOfInterest(ConflictOfInterest conflicOfInterest) {
		this.conflicOfInterest = conflicOfInterest;
	}

	public ComplianceInfo getComplianceInfo() {
		return complianceInfo;
	}

	public void setComplianceInfo(ComplianceInfo complianceInfo) {
		this.complianceInfo = complianceInfo;
	}

	public AdditionalInfo getAdditionalInfo() {
		return additionalInfo;
	}

	public void setAdditionalInfo(AdditionalInfo additionalInfo) {
		this.additionalInfo = additionalInfo;
	}

	public CollaborationInfo getCollaborationInfo() {
		return collaborationInfo;
	}

	public void setCollaborationInfo(CollaborationInfo collaborationInfo) {
		this.collaborationInfo = collaborationInfo;
	}

	public ConfidentialInfo getConfidentialInfo() {
		return confidentialInfo;
	}

	public void setConfidentialInfo(ConfidentialInfo confidentialInfo) {
		this.confidentialInfo = confidentialInfo;
	}

	public OSPSectionInfo getoSPSectionInfo() {
		return oSPSectionInfo;
	}

	public void setoSPSectionInfo(OSPSectionInfo oSPSectionInfo) {
		this.oSPSectionInfo = oSPSectionInfo;
	}

	public SignatureInfo getSignatureInfo() {
		return signatureInfo;
	}

	public void setSignatureInfo(SignatureInfo signatureInfo) {
		this.signatureInfo = signatureInfo;
	}

	public DelegationInfo getDelegationInfo() {
		return delegationInfo;
	}

	public void setDelegationInfo(DelegationInfo delegationInfo) {
		this.delegationInfo = delegationInfo;
	}

	@Override
	public String toString() {
		return new StringBuffer(" Proposal Number : ")
				.append(this.getProposalNo()).append(" Date Received : ")
				.append(this.getDateReceived()).append(" Proposal Status : ")
				.append(this.getProposalStatus()).toString();
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result
				+ ((additionalInfo == null) ? 0 : additionalInfo.hashCode());
		result = prime
				* result
				+ ((collaborationInfo == null) ? 0 : collaborationInfo
						.hashCode());
		result = prime * result
				+ ((complianceInfo == null) ? 0 : complianceInfo.hashCode());
		result = prime
				* result
				+ ((confidentialInfo == null) ? 0 : confidentialInfo.hashCode());
		result = prime
				* result
				+ ((conflicOfInterest == null) ? 0 : conflicOfInterest
						.hashCode());
		result = prime * result
				+ ((costShareInfo == null) ? 0 : costShareInfo.hashCode());
		result = prime * result
				+ ((dateReceived == null) ? 0 : dateReceived.hashCode());
		result = prime * result
				+ ((delegationInfo == null) ? 0 : delegationInfo.hashCode());
		result = prime
				* result
				+ ((investigatorInfo == null) ? 0 : investigatorInfo.hashCode());
		result = prime * result
				+ ((oSPSectionInfo == null) ? 0 : oSPSectionInfo.hashCode());
		result = prime * result
				+ ((projectInfo == null) ? 0 : projectInfo.hashCode());
		result = prime * result
				+ ((proposalNo == null) ? 0 : proposalNo.hashCode());
		result = prime * result
				+ ((proposalStatus == null) ? 0 : proposalStatus.hashCode());
		result = prime * result
				+ ((signatureInfo == null) ? 0 : signatureInfo.hashCode());
		result = prime
				* result
				+ ((sponsorAndBudgetInfo == null) ? 0 : sponsorAndBudgetInfo
						.hashCode());
		result = prime
				* result
				+ ((universityCommitments == null) ? 0 : universityCommitments
						.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Proposal other = (Proposal) obj;
		if (additionalInfo == null) {
			if (other.additionalInfo != null)
				return false;
		} else if (!additionalInfo.equals(other.additionalInfo))
			return false;
		if (collaborationInfo == null) {
			if (other.collaborationInfo != null)
				return false;
		} else if (!collaborationInfo.equals(other.collaborationInfo))
			return false;
		if (complianceInfo == null) {
			if (other.complianceInfo != null)
				return false;
		} else if (!complianceInfo.equals(other.complianceInfo))
			return false;
		if (confidentialInfo == null) {
			if (other.confidentialInfo != null)
				return false;
		} else if (!confidentialInfo.equals(other.confidentialInfo))
			return false;
		if (conflicOfInterest == null) {
			if (other.conflicOfInterest != null)
				return false;
		} else if (!conflicOfInterest.equals(other.conflicOfInterest))
			return false;
		if (costShareInfo == null) {
			if (other.costShareInfo != null)
				return false;
		} else if (!costShareInfo.equals(other.costShareInfo))
			return false;
		if (dateReceived == null) {
			if (other.dateReceived != null)
				return false;
		} else if (!dateReceived.equals(other.dateReceived))
			return false;
		if (delegationInfo == null) {
			if (other.delegationInfo != null)
				return false;
		} else if (!delegationInfo.equals(other.delegationInfo))
			return false;
		if (investigatorInfo == null) {
			if (other.investigatorInfo != null)
				return false;
		} else if (!investigatorInfo.equals(other.investigatorInfo))
			return false;
		if (oSPSectionInfo == null) {
			if (other.oSPSectionInfo != null)
				return false;
		} else if (!oSPSectionInfo.equals(other.oSPSectionInfo))
			return false;
		if (projectInfo == null) {
			if (other.projectInfo != null)
				return false;
		} else if (!projectInfo.equals(other.projectInfo))
			return false;
		if (proposalNo == null) {
			if (other.proposalNo != null)
				return false;
		} else if (!proposalNo.equals(other.proposalNo))
			return false;
		if (proposalStatus != other.proposalStatus)
			return false;
		if (signatureInfo == null) {
			if (other.signatureInfo != null)
				return false;
		} else if (!signatureInfo.equals(other.signatureInfo))
			return false;
		if (sponsorAndBudgetInfo == null) {
			if (other.sponsorAndBudgetInfo != null)
				return false;
		} else if (!sponsorAndBudgetInfo.equals(other.sponsorAndBudgetInfo))
			return false;
		if (universityCommitments == null) {
			if (other.universityCommitments != null)
				return false;
		} else if (!universityCommitments.equals(other.universityCommitments))
			return false;
		return true;
	}

}
