package tn.iit.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.iit.entities.Stats;
import tn.iit.repositories.EvenementRepo;
import tn.iit.repositories.MembreRepo;
import tn.iit.repositories.OutilRepo;
import tn.iit.repositories.PublicationRepo;

@Service
public class StatService {
	@Autowired
	private EvenementRepo evenementRepo;
	@Autowired
	private MembreRepo membreRepo;
	@Autowired
	private PublicationRepo publicationRepo;
	@Autowired
	private OutilRepo outilRepo;
	
	public Stats getStats() {
		Stats s = new  Stats();
		s.setNbEvent(evenementRepo.count());
		s.setNbMember(membreRepo.count());
		s.setNbPublication(publicationRepo.count());
		s.setNbOutil(outilRepo.count());
		return s;
	}
}
