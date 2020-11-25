package com.movieFlix.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.movieFlix.dto.MovieDTO;
import com.movieFlix.services.MovieService;

@RestController
@RequestMapping(value = "movies")
public class MovieResource {
	
	@Autowired
	private MovieService service;
	
	@GetMapping
	public ResponseEntity<Page<MovieDTO>> findPaged(
			@RequestParam(value = "genreId", defaultValue = "0") Long genreId,
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "size", defaultValue = "3") Integer size 
			){
		PageRequest pageRequest = PageRequest.of(page, size);
		Page<MovieDTO> list = service.findMoviesByGenre(genreId, pageRequest);
		return ResponseEntity.ok().body(list);
		
	}

}
