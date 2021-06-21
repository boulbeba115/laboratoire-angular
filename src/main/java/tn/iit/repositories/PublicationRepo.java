package tn.iit.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.iit.entities.Publication;

public interface PublicationRepo extends JpaRepository<Publication, Long> {

	List<Publication> findByMembreId(long id);

}
