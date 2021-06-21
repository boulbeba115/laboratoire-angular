package tn.iit.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.iit.entities.Publication;
import tn.iit.repositories.PublicationRepo;

@Service
public class PublicationService {

	@Autowired
	private PublicationRepo publicationRepo;

	// GetLists
	public List<Publication> getAllPublication() {
		return publicationRepo.findAll();
	}

	public List<Publication> getMemberPublication(long id) {
		return publicationRepo.findByMembreId(id);
	}

	// find
	public Optional<Publication> getPublicationById(long id) {
		return publicationRepo.findById(id);
	}

	// save
	public Publication savePublication(Publication pub) {
		return publicationRepo.save(pub);
	}

	// delete
	public void deletePublication(long id) {
		publicationRepo.deleteById(id);
	}

}
