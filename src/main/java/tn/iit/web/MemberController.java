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

import tn.iit.entities.EnseignantChercheur;
import tn.iit.entities.Etudiant;
import tn.iit.entities.Membre;
import tn.iit.services.MemberService;
import tn.iit.utils.MapValidationErrorService;

@RestController
@CrossOrigin
@RequestMapping("/api/members")
public class MemberController {

	@Autowired
	private MemberService memberService;
	@Autowired
	private MapValidationErrorService MapErrors;

	@GetMapping("/all")
	public List<Membre> getAllMembers() {
		return memberService.getAllMembers();
	}

	@GetMapping("/teacher/all")
	public List<EnseignantChercheur> getAllEnsChercheur() {
		return memberService.getAllEnsChercheur();
	}

	@GetMapping("/student/all")
	public List<Etudiant> getAllStudents() {
		return memberService.getAllStudents();
	}

	@PostMapping("/student")
	public ResponseEntity<?> saveEtudiant(@Valid @RequestBody Etudiant etud, BindingResult result) {
		ResponseEntity<?> errorMap = MapErrors.MapValidationService(result);
		if (errorMap != null)
			return errorMap;
		return new ResponseEntity<Etudiant>(memberService.saveEtudiant(etud), HttpStatus.CREATED);
	}

	@PostMapping("/teacher")
	public ResponseEntity<?> saveTeachers(@Valid @RequestBody EnseignantChercheur ens, BindingResult result) {
		ResponseEntity<?> errorMap = MapErrors.MapValidationService(result);
		if (errorMap != null)
			return errorMap;
		return new ResponseEntity<EnseignantChercheur>(memberService.saveEnseignant(ens), HttpStatus.CREATED);
	}

	// find
	@GetMapping("/{id}")
	public Membre findMemberById(@PathVariable long id) {
		return memberService.findMemberById(id).get();
	}

	@GetMapping("/student/{cin}")
	public Etudiant findEtudiantByCin(@PathVariable String cin) {
		return memberService.findEtudiantByCin(cin).get();
	}

	@GetMapping("/student/{id}")
	public Etudiant findEtudiantById(@PathVariable long id) {
		return memberService.findEtudiantById(id).get();
	}

	@GetMapping("/teacher/{cin}")
	public EnseignantChercheur findEnsByCin(@PathVariable String cin) {
		return memberService.findEnsByCin(cin).get();
	}

	@GetMapping("/teacher/{id}")
	public EnseignantChercheur findEnsById(@PathVariable long id) {
		return memberService.findEnsById(id).get();
	}

	// delete

	@DeleteMapping("/teacher/{id}")
	public ResponseEntity<String> DeleteEns(@PathVariable long id) {
		if (id == 1)
			return new ResponseEntity<String>("tu ne peut pas effacé votre compte", HttpStatus.BAD_GATEWAY);
		memberService.DeleteEns(id);
		return new ResponseEntity<String>("deleted", HttpStatus.OK);
	}

	@DeleteMapping("/student/{id}")
	public ResponseEntity<String> DeleteEtudiant(@PathVariable long id) {
		if (id == 1)
			return new ResponseEntity<String>("tu ne peut pas effacé votre compte", HttpStatus.BAD_GATEWAY);
		memberService.DeleteEtudiant(id);
		return new ResponseEntity<String>("deleted", HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> DeleteMember(@PathVariable long id) {
		if (id == 1)
			return new ResponseEntity<String>("tu ne peut pas effacé votre compte", HttpStatus.BAD_GATEWAY);
		memberService.DeleteMember(id);
		return new ResponseEntity<String>("deleted", HttpStatus.OK);
	}
}
