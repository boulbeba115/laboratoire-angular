package tn.iit.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.iit.entities.Evenement;

public interface EvenementRepo extends JpaRepository<Evenement, Long> {

	List<Evenement> findByMembreId(long id);

}
