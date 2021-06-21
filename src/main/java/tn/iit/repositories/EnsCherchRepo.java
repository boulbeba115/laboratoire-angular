package tn.iit.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.iit.entities.EnseignantChercheur;

public interface EnsCherchRepo extends JpaRepository<EnseignantChercheur, Long> {

	Optional<EnseignantChercheur> findByCin(String cin);

}
