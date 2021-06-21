package tn.iit.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.iit.entities.Outil;
import tn.iit.repositories.OutilRepo;

@Service
public class OutilService {
	
	@Autowired 
	private OutilRepo outilRepo;

	// GetLists
	public List<Outil> getAllOutils() {
		return outilRepo.findAll();
	}

	public List<Outil> getMemberOutils(long id) {
		return outilRepo.findByMembreId(id);
	}

	// find
	public Optional<Outil> getOutilById(long id) {
		return outilRepo.findById(id);
	}

	// save
	public Outil saveOutil(Outil outil) {
		return outilRepo.save(outil);
	}

	// delete
	public void deleteOutil(long id) {
		outilRepo.deleteById(id);
	}
}
