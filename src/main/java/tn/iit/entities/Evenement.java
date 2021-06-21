package tn.iit.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Entity
@Data
public class Evenement {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", updatable = false, nullable = false)
	private long id;
	
	@NotBlank(message = "Title is required ")
	private String titre;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@NotBlank(message = "Date is required ")
	private Date date;
	
	@NotBlank(message = "Lieu is required ")
	private String lieu;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column(updatable = false)
	private Date createdAt;

	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date updatedAt;
	
	@ManyToOne
	private Membre membre;
	
	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}

	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}
}
