package tn.iit.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.iit.entities.Etudiant;

public interface EtudiantRepo extends JpaRepository<Etudiant, Long> {

	Optional<Etudiant> findByCin(String cin);

}
