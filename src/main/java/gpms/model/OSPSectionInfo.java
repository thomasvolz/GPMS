package gpms.model;

import org.mongodb.morphia.annotations.Embedded;
import org.mongodb.morphia.annotations.Property;

@Embedded
public class OSPSectionInfo {
	@Property("list agency")
	private String listAgency = new String();

	@Embedded("funding source")
	private FundingSource fundingSource = new FundingSource();

	@Property("CFDA no")
	private String CFDANo = new String();

	@Property("program no")
	private String programNo = new String();

	@Property("program title")
	private String programTitle = new String();

	@Embedded("recovery")
	private Recovery recovery = new Recovery();

	@Embedded("base")
	private Base base = new Base();

	@Property("is PI salary included")
	private boolean isPISalaryIncluded;

	@Property("PI salary")
	private double PISalary;

	@Property("PI fringe")
	private double PIFringe;

	@Property("department id")
	private String departmentId = new String();

	@Embedded("institutional cost share documented")
	private BaseOptions institutionalCostDocumented = new BaseOptions();

	@Embedded("third party cost share documented")
	private BaseOptions thirdPartyCostDocumented = new BaseOptions();

	@Property("is anticipated subrecipients")
	private boolean isAnticipatedSubRecipients;

	@Property("anticipated subrecipients names")
	private boolean anticipatedSubRecipientsNames;

	@Embedded("PI eligibility waiver on file")
	private BasePIEligibilityOptions PIEligibilityWaiver = new BasePIEligibilityOptions();

	@Embedded("conflict of interest forms on file")
	private BaseOptions conflictOfInterestForms = new BaseOptions();

	@Embedded("excluded party list checked")
	private BaseOptions excludedPartyListChecked = new BaseOptions();

	@Property("proposal notes")
	private String proposalNotes = new String();

	@Embedded("research administrator")
	private ResearchAdministrator researchAdministrator = new ResearchAdministrator();

	public OSPSectionInfo() {
	}

	public String getListAgency() {
		return listAgency;
	}

	public void setListAgency(String listAgency) {
		this.listAgency = listAgency;
	}

	public FundingSource getFundingSource() {
		return fundingSource;
	}

	public void setFundingSource(FundingSource fundingSource) {
		this.fundingSource = fundingSource;
	}

	public String getCFDANo() {
		return CFDANo;
	}

	public void setCFDANo(String cFDANo) {
		CFDANo = cFDANo;
	}

	public String getProgramNo() {
		return programNo;
	}

	public void setProgramNo(String programNo) {
		this.programNo = programNo;
	}

	public String getProgramTitle() {
		return programTitle;
	}

	public void setProgramTitle(String programTitle) {
		this.programTitle = programTitle;
	}

	public Recovery getRecovery() {
		return recovery;
	}

	public void setRecovery(Recovery recovery) {
		this.recovery = recovery;
	}

	public Base getBase() {
		return base;
	}

	public void setBase(Base base) {
		this.base = base;
	}

	public boolean isPISalaryIncluded() {
		return isPISalaryIncluded;
	}

	public void setPISalaryIncluded(boolean isPISalaryIncluded) {
		this.isPISalaryIncluded = isPISalaryIncluded;
	}

	public double getPISalary() {
		return PISalary;
	}

	public void setPISalary(double pISalary) {
		PISalary = pISalary;
	}

	public double getPIFringe() {
		return PIFringe;
	}

	public void setPIFringe(double pIFringe) {
		PIFringe = pIFringe;
	}

	public String getDepartmentId() {
		return departmentId;
	}

	public void setDepartmentId(String departmentId) {
		this.departmentId = departmentId;
	}

	public BaseOptions getInstitutionalCostDocumented() {
		return institutionalCostDocumented;
	}

	public void setInstitutionalCostDocumented(
			BaseOptions institutionalCostDocumented) {
		this.institutionalCostDocumented = institutionalCostDocumented;
	}

	public BaseOptions getThirdPartyCostDocumented() {
		return thirdPartyCostDocumented;
	}

	public void setThirdPartyCostDocumented(BaseOptions thirdPartyCostDocumented) {
		this.thirdPartyCostDocumented = thirdPartyCostDocumented;
	}

	public boolean isAnticipatedSubRecipients() {
		return isAnticipatedSubRecipients;
	}

	public void setAnticipatedSubRecipients(boolean isAnticipatedSubRecipients) {
		this.isAnticipatedSubRecipients = isAnticipatedSubRecipients;
	}

	public boolean isAnticipatedSubRecipientsNames() {
		return anticipatedSubRecipientsNames;
	}

	public void setAnticipatedSubRecipientsNames(
			boolean anticipatedSubRecipientsNames) {
		this.anticipatedSubRecipientsNames = anticipatedSubRecipientsNames;
	}

	public BasePIEligibilityOptions getPIEligibilityWaiver() {
		return PIEligibilityWaiver;
	}

	public void setPIEligibilityWaiver(
			BasePIEligibilityOptions pIEligibilityWaiver) {
		PIEligibilityWaiver = pIEligibilityWaiver;
	}

	public BaseOptions getConflictOfInterestForms() {
		return conflictOfInterestForms;
	}

	public void setConflictOfInterestForms(BaseOptions conflictOfInterestForms) {
		this.conflictOfInterestForms = conflictOfInterestForms;
	}

	public BaseOptions getExcludedPartyListChecked() {
		return excludedPartyListChecked;
	}

	public void setExcludedPartyListChecked(BaseOptions excludedPartyListChecked) {
		this.excludedPartyListChecked = excludedPartyListChecked;
	}

	public String getProposalNotes() {
		return proposalNotes;
	}

	public void setProposalNotes(String proposalNotes) {
		this.proposalNotes = proposalNotes;
	}

	public ResearchAdministrator getResearchAdministrator() {
		return researchAdministrator;
	}

	public void setResearchAdministrator(
			ResearchAdministrator researchAdministrator) {
		this.researchAdministrator = researchAdministrator;
	}

	@Override
	public String toString() {
		return "OSPSectionInfo [listAgency=" + listAgency + ", fundingSource="
				+ fundingSource + ", CFDANo=" + CFDANo + ", programNo="
				+ programNo + ", programTitle=" + programTitle + ", recovery="
				+ recovery + ", base=" + base + ", isPISalaryIncluded="
				+ isPISalaryIncluded + ", PISalary=" + PISalary + ", PIFringe="
				+ PIFringe + ", departmentId=" + departmentId
				+ ", institutionalCostDocumented="
				+ institutionalCostDocumented + ", thirdPartyCostDocumented="
				+ thirdPartyCostDocumented + ", isAnticipatedSubRecipients="
				+ isAnticipatedSubRecipients
				+ ", anticipatedSubRecipientsNames="
				+ anticipatedSubRecipientsNames + ", PIEligibilityWaiver="
				+ PIEligibilityWaiver + ", conflictOfInterestForms="
				+ conflictOfInterestForms + ", excludedPartyListChecked="
				+ excludedPartyListChecked + ", proposalNotes=" + proposalNotes
				+ ", researchAdministrator=" + researchAdministrator + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((CFDANo == null) ? 0 : CFDANo.hashCode());
		result = prime
				* result
				+ ((PIEligibilityWaiver == null) ? 0 : PIEligibilityWaiver
						.hashCode());
		long temp;
		temp = Double.doubleToLongBits(PIFringe);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		temp = Double.doubleToLongBits(PISalary);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + (anticipatedSubRecipientsNames ? 1231 : 1237);
		result = prime * result + ((base == null) ? 0 : base.hashCode());
		result = prime
				* result
				+ ((conflictOfInterestForms == null) ? 0
						: conflictOfInterestForms.hashCode());
		result = prime * result
				+ ((departmentId == null) ? 0 : departmentId.hashCode());
		result = prime
				* result
				+ ((excludedPartyListChecked == null) ? 0
						: excludedPartyListChecked.hashCode());
		result = prime * result
				+ ((fundingSource == null) ? 0 : fundingSource.hashCode());
		result = prime
				* result
				+ ((institutionalCostDocumented == null) ? 0
						: institutionalCostDocumented.hashCode());
		result = prime * result + (isAnticipatedSubRecipients ? 1231 : 1237);
		result = prime * result + (isPISalaryIncluded ? 1231 : 1237);
		result = prime * result
				+ ((listAgency == null) ? 0 : listAgency.hashCode());
		result = prime * result
				+ ((programNo == null) ? 0 : programNo.hashCode());
		result = prime * result
				+ ((programTitle == null) ? 0 : programTitle.hashCode());
		result = prime * result
				+ ((proposalNotes == null) ? 0 : proposalNotes.hashCode());
		result = prime * result
				+ ((recovery == null) ? 0 : recovery.hashCode());
		result = prime
				* result
				+ ((researchAdministrator == null) ? 0 : researchAdministrator
						.hashCode());
		result = prime
				* result
				+ ((thirdPartyCostDocumented == null) ? 0
						: thirdPartyCostDocumented.hashCode());
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
		OSPSectionInfo other = (OSPSectionInfo) obj;
		if (CFDANo == null) {
			if (other.CFDANo != null)
				return false;
		} else if (!CFDANo.equals(other.CFDANo))
			return false;
		if (PIEligibilityWaiver == null) {
			if (other.PIEligibilityWaiver != null)
				return false;
		} else if (!PIEligibilityWaiver.equals(other.PIEligibilityWaiver))
			return false;
		if (Double.doubleToLongBits(PIFringe) != Double
				.doubleToLongBits(other.PIFringe))
			return false;
		if (Double.doubleToLongBits(PISalary) != Double
				.doubleToLongBits(other.PISalary))
			return false;
		if (anticipatedSubRecipientsNames != other.anticipatedSubRecipientsNames)
			return false;
		if (base == null) {
			if (other.base != null)
				return false;
		} else if (!base.equals(other.base))
			return false;
		if (conflictOfInterestForms == null) {
			if (other.conflictOfInterestForms != null)
				return false;
		} else if (!conflictOfInterestForms
				.equals(other.conflictOfInterestForms))
			return false;
		if (departmentId == null) {
			if (other.departmentId != null)
				return false;
		} else if (!departmentId.equals(other.departmentId))
			return false;
		if (excludedPartyListChecked == null) {
			if (other.excludedPartyListChecked != null)
				return false;
		} else if (!excludedPartyListChecked
				.equals(other.excludedPartyListChecked))
			return false;
		if (fundingSource == null) {
			if (other.fundingSource != null)
				return false;
		} else if (!fundingSource.equals(other.fundingSource))
			return false;
		if (institutionalCostDocumented == null) {
			if (other.institutionalCostDocumented != null)
				return false;
		} else if (!institutionalCostDocumented
				.equals(other.institutionalCostDocumented))
			return false;
		if (isAnticipatedSubRecipients != other.isAnticipatedSubRecipients)
			return false;
		if (isPISalaryIncluded != other.isPISalaryIncluded)
			return false;
		if (listAgency == null) {
			if (other.listAgency != null)
				return false;
		} else if (!listAgency.equals(other.listAgency))
			return false;
		if (programNo == null) {
			if (other.programNo != null)
				return false;
		} else if (!programNo.equals(other.programNo))
			return false;
		if (programTitle == null) {
			if (other.programTitle != null)
				return false;
		} else if (!programTitle.equals(other.programTitle))
			return false;
		if (proposalNotes == null) {
			if (other.proposalNotes != null)
				return false;
		} else if (!proposalNotes.equals(other.proposalNotes))
			return false;
		if (recovery == null) {
			if (other.recovery != null)
				return false;
		} else if (!recovery.equals(other.recovery))
			return false;
		if (researchAdministrator == null) {
			if (other.researchAdministrator != null)
				return false;
		} else if (!researchAdministrator.equals(other.researchAdministrator))
			return false;
		if (thirdPartyCostDocumented == null) {
			if (other.thirdPartyCostDocumented != null)
				return false;
		} else if (!thirdPartyCostDocumented
				.equals(other.thirdPartyCostDocumented))
			return false;
		return true;
	}
	
}
