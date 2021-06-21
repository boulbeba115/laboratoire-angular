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

import tn.iit.entities.Outil;
import tn.iit.services.OutilService;
import tn.iit.utils.MapValidationErrorService;
@CrossOrigin
@RestController
@RequestMapping("/api/outil")
public class OutilController {
	
	@Autowired 
	private OutilService outilService;
	@Autowired
	private MapValidationErrorService MapErrors;

	// GetLists
	@GetMapping("")
	public List<Outil> getAllOutils() {
		return outilService.getAllOutils();
	}
	
	@GetMapping("/member/{id}")
	public List<Outil> getMemberOutils(@PathVariable long id) {
		return outilService.getMemberOutils(id);
	}

	// find
	@GetMapping("/{id]")
	public Outil getOutilById(@PathVariable long id) {
		return outilService.getOutilById(id).get();
	}

	// save
	@PostMapping("")
	public ResponseEntity<?> saveOutil(@Valid @RequestBody Outil outil , BindingResult result) {
		ResponseEntity<?> errorMap = MapErrors.MapValidationService(result);
		if (errorMap != null)
			return errorMap;
		return new ResponseEntity<Outil>(outilService.saveOutil(outil), HttpStatus.CREATED);
	}

	// delete
	@DeleteMapping("/{id}")
	public void deleteOutil(@PathVariable long id) {
		outilService.deleteOutil(id);
	}
}
