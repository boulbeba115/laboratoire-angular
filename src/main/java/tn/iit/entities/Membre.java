package tn.iit.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SelectBeforeUpdate;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Entity
@DynamicUpdate(value=true)
@SelectBeforeUpdate(value=true)
@Inheritance(strategy =InheritanceType.JOINED)
@Data
public class Membre {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", updatable = false, nullable = false)
	private long id;

	@NotBlank(message = "Cin is required")
	@Column(unique = true, nullable = false)
	private String cin;

	@NotBlank(message = "Firstname is required ")
	private String nom;

	@NotBlank(message = "Lastname is required ")
	private String prenom;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@NotBlank(message = "date is required ")
	private Date date;
	
	@NotBlank(message = "Email is required")
	@Column(unique = true, nullable = false)
	private String email;
	
	@NotBlank(message = "Password is required ")
	private String password;

	private String photo;

	private String cv;
	
	@OneToMany
	private List<Evenement> listEvenement;
	
	@OneToMany
	private List<Publication> lisPublication;
	
	@OneToMany
	private List<Outil> listOutil;

	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column(updatable = false)
	private Date createdAt;

	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date updatedAt;

	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}

	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}

}
