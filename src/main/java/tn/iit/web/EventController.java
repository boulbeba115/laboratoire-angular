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

import tn.iit.entities.Evenement;
import tn.iit.services.EvenementService;
import tn.iit.utils.MapValidationErrorService;

@RestController
@CrossOrigin
@RequestMapping("/api/event")
public class EventController {

	@Autowired
	private EvenementService evenementService;
	@Autowired
	private MapValidationErrorService MapErrors;

	// GetLists
	@GetMapping("")
	public List<Evenement> getAllEvents() {
		return evenementService.getAllEvents();
	}
	
	@GetMapping("/member/{id}")
	public List<Evenement> getMemberEvents(@PathVariable long id) {
		return evenementService.getMemberEvents(id);
	}

	// find
	@GetMapping("/{id}")
	public Evenement getEventById(@PathVariable long id) {
		return evenementService.getEventById(id).get();
	}

	// save
	@PostMapping("")
	public ResponseEntity<?> saveEvent(@Valid @RequestBody  Evenement event , BindingResult result) {
		ResponseEntity<?> errorMap = MapErrors.MapValidationService(result);
		if (errorMap != null)
			return errorMap;
		return new ResponseEntity<Evenement>(evenementService.saveEvent(event), HttpStatus.CREATED);
	}

	// delete
	@DeleteMapping("/{id}")
	public void deleteEvent(@PathVariable long id) {
		evenementService.deleteEvent(id);
	}
	
}
