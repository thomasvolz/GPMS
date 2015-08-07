//Edited by: Hector C. Ortiz

package gpms.model;

import java.util.Date;

//import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.Embedded;
import org.mongodb.morphia.annotations.Property;

//import org.mongodb.morphia.annotations.Id;

@Embedded
public class ProjectInfo {

	@Property("project title")
	// @Indexed(value = IndexDirection.ASC, name = "proposalTitleIndex", unique
	// = true)
	private String projectTitle = new String();

	@Embedded("project type")
	private ProjectType projectType = new ProjectType();

	@Embedded("type of request")
	private TypeOfRequest typeOfRequest = new TypeOfRequest();

	@Property("due date")
	private Date dueDate = new Date();

	@Embedded("project period")
	private ProjectPeriod projectPeriod = new ProjectPeriod();

	@Embedded("location of project")
	private ProjectLocation projectLocation = new ProjectLocation();

	public ProjectInfo() {
	}

	public String getProjectTitle() {
		return projectTitle;
	}

	public void setProjectTitle(String projectTitle) {
		this.projectTitle = projectTitle;
	}

	public ProjectType getProjectType() {
		return projectType;
	}

	public void setProjectType(ProjectType projectType) {
		this.projectType = projectType;
	}

	public TypeOfRequest getTypeOfRequest() {
		return typeOfRequest;
	}

	public void setTypeOfRequest(TypeOfRequest typeOfRequest) {
		this.typeOfRequest = typeOfRequest;
	}

	public Date getDueDate() {
		return dueDate;
	}

	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}

	public ProjectPeriod getProjectPeriod() {
		return projectPeriod;
	}

	public void setProjectPeriod(ProjectPeriod projectPeriod) {
		this.projectPeriod = projectPeriod;
	}

	public ProjectLocation getProjectLocation() {
		return projectLocation;
	}

	public void setProjectLocation(ProjectLocation projectLocation) {
		this.projectLocation = projectLocation;
	}

	@Override
	public String toString() {
		String outPut = "";
		outPut += "Project Title       : " + projectTitle + "\n";
		outPut += "Project Type        : " + "\n";
		outPut += projectType.toString() + "\n";
		outPut += "Type Of Request     : " + "\n";
		outPut += typeOfRequest.toString() + "\n";
		outPut += "Due Date            : " + "\n";
		outPut += dueDate.toString() + "\n";
		outPut += "Project Period      : " + "\n";
		outPut += projectPeriod.toString() + "\n";
		outPut += "Location of Project : " + "\n";
		outPut += projectLocation.toString();
		return outPut;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((dueDate == null) ? 0 : dueDate.hashCode());
		result = prime * result
				+ ((projectLocation == null) ? 0 : projectLocation.hashCode());
		result = prime * result
				+ ((projectPeriod == null) ? 0 : projectPeriod.hashCode());
		result = prime * result
				+ ((projectTitle == null) ? 0 : projectTitle.hashCode());
		result = prime * result
				+ ((projectType == null) ? 0 : projectType.hashCode());
		result = prime * result
				+ ((typeOfRequest == null) ? 0 : typeOfRequest.hashCode());
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
		ProjectInfo other = (ProjectInfo) obj;
		if (dueDate == null) {
			if (other.dueDate != null)
				return false;
		} else if (!dueDate.equals(other.dueDate))
			return false;
		if (projectLocation == null) {
			if (other.projectLocation != null)
				return false;
		} else if (!projectLocation.equals(other.projectLocation))
			return false;
		if (projectPeriod == null) {
			if (other.projectPeriod != null)
				return false;
		} else if (!projectPeriod.equals(other.projectPeriod))
			return false;
		if (projectTitle == null) {
			if (other.projectTitle != null)
				return false;
		} else if (!projectTitle.equals(other.projectTitle))
			return false;
		if (projectType == null) {
			if (other.projectType != null)
				return false;
		} else if (!projectType.equals(other.projectType))
			return false;
		if (typeOfRequest == null) {
			if (other.typeOfRequest != null)
				return false;
		} else if (!typeOfRequest.equals(other.typeOfRequest))
			return false;
		return true;
	}

	@Override
	public ProjectInfo clone() throws CloneNotSupportedException {
		ProjectInfo copy = new ProjectInfo();

		copy.setProjectTitle(this.projectTitle);
		copy.setProjectType(this.projectType.clone());
		copy.setTypeOfRequest(this.typeOfRequest.clone());
		copy.setDueDate(new Date(this.dueDate.getTime()));
		copy.setProjectPeriod(this.projectPeriod.clone());
		copy.setProjectLocation(this.projectLocation.clone());

		return copy;
	}

}
