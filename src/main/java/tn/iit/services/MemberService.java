package tn.iit.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.iit.entities.EnseignantChercheur;
import tn.iit.entities.Etudiant;
import tn.iit.entities.Membre;
import tn.iit.repositories.EnsCherchRepo;
import tn.iit.repositories.EtudiantRepo;
import tn.iit.repositories.MembreRepo;

@Service
public class MemberService {

	@Autowired
	private MembreRepo memberRepo;
	@Autowired
	private EnsCherchRepo ensCherchRepo;
	@Autowired
	private EtudiantRepo etudiantRepo;

	// Get Lists
	public List<Membre> getAllMembers() {
		return memberRepo.findAll();
	}

	public List<Etudiant> getAllStudents() {
		return etudiantRepo.findAll();
	}

	public List<EnseignantChercheur> getAllEnsChercheur() {
		return ensCherchRepo.findAll();
	}

	// Saving and Updates
	public Etudiant saveEtudiant(Etudiant etud) {
		return etudiantRepo.save(etud);
	}

	public EnseignantChercheur saveEnseignant(EnseignantChercheur ens) {
		return ensCherchRepo.save(ens);
	}

	// find

	public Optional<Etudiant> findEtudiantByCin(String cin) {
		return etudiantRepo.findByCin(cin);
	}

	public Optional<Etudiant> findEtudiantById(long id) {
		return etudiantRepo.findById(id);
	}

	public Optional<EnseignantChercheur> findEnsByCin(String cin) {
		return ensCherchRepo.findByCin(cin);
	}

	public Optional<EnseignantChercheur> findEnsById(long id) {
		return ensCherchRepo.findById(id);
	}

	// delete

	public void DeleteEns(long id) {
		ensCherchRepo.deleteById(id);
	}

	public void DeleteEtudiant(long id) {
		etudiantRepo.deleteById(id);
	}

	public void DeleteMember(long id) {
		memberRepo.deleteById(id);	
	}

	public Optional<Membre> findMemberById(long id) {
		return memberRepo.findById(id);
	}

}
