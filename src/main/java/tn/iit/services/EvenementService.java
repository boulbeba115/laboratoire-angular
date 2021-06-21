package tn.iit.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.iit.entities.Evenement;
import tn.iit.repositories.EvenementRepo;

@Service
public class EvenementService {
	
	@Autowired
	private EvenementRepo evenementRepo;

	// GetLists
	public List<Evenement> getAllEvents() {
		return evenementRepo.findAll();
	}

	public List<Evenement> getMemberEvents(long id) {
		return evenementRepo.findByMembreId(id);
	}

	// find
	public Optional<Evenement> getEventById(long id) {
		return evenementRepo.findById(id);
	}

	// save
	public Evenement saveEvent(Evenement event) {
		return evenementRepo.save(event);
	}

	// delete
	public void deleteEvent(long id) {
		evenementRepo.deleteById(id);
	}
}
