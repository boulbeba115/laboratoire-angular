package tn.iit.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.iit.entities.Stats;
import tn.iit.services.StatService;

@RestController
@CrossOrigin
@RequestMapping("/api/stats")
public class StatsController {
	@Autowired
	private StatService statServ;
	
	@GetMapping("")
	private Stats getAll() {
		return statServ.getStats();
	}

}
