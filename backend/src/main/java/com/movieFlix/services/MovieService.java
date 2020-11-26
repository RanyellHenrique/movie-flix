package com.movieFlix.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.movieFlix.dto.MovieDTO;
import com.movieFlix.entities.Genre;
import com.movieFlix.entities.Movie;
import com.movieFlix.repositories.GenreRepository;
import com.movieFlix.repositories.MovieRepository;
import com.movieFlix.services.exceptions.ResourceNotFoundException;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository;
	
	@Autowired
	private GenreRepository genreRepository;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findMoviesByGenre(Long genreId, Pageable pageable){
		Genre genre = genreId == 0 ? null : genreRepository.getOne(genreId);
		Page<Movie> page = repository.find(genre, pageable);
		return page.map(x -> new MovieDTO(x));
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Optional<Movie> obj = repository.findById(id);
		Movie movie = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found " + id));
		return new MovieDTO(movie, movie.getReviews());
	}

}
