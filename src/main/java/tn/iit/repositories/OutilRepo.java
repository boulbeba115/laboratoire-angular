package tn.iit.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.iit.entities.Outil;

public interface OutilRepo extends JpaRepository<Outil, Long> {

	List<Outil> findByMembreId(long id);

}
