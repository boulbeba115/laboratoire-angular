package tn.iit.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.iit.entities.Membre;

public interface MembreRepo extends JpaRepository<Membre, Long> {

}
