package tn.iit.web;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.iit.entities.Publication;
import tn.iit.services.PublicationService;
import tn.iit.utils.MapValidationErrorService;

@RestController
@CrossOrigin
@RequestMapping("/api/publication")
public class PublicationController {

	@Autowired
	private PublicationService publicationService;
	@Autowired
	private MapValidationErrorService MapErrors;

	// GetLists
	@GetMapping()
	public List<Publication> getAllPublication() {
		return publicationService.getAllPublication();
	}

	@GetMapping("/member/{id}")
	public List<Publication> getMemberPublication(@PathVariable long id) {
		return publicationService.getMemberPublication(id);
	}

	// find
	@GetMapping("/{id}")
	public Publication getPublicationById(@PathVariable long id) {
		return publicationService.getPublicationById(id).get();
	}

	// save
	@PostMapping("")
	public ResponseEntity<?> savePublication(@Valid @RequestBody Publication pub, BindingResult result) {
		ResponseEntity<?> errorMap = MapErrors.MapValidationService(result);
		if (errorMap != null)
			return errorMap;
		return new ResponseEntity<Publication>(publicationService.savePublication(pub), HttpStatus.CREATED);
	}

	@DeleteMapping("/{id}")
	public void deletePublication(@PathVariable long id) {
		publicationService.deletePublication(id);
	}
}
