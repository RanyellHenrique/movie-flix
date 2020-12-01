package com.movieFlix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.movieFlix.dto.ReviewDTO;
import com.movieFlix.entities.Movie;
import com.movieFlix.entities.Review;
import com.movieFlix.entities.User;
import com.movieFlix.repositories.MovieRepository;
import com.movieFlix.repositories.ReviewRepository;

@Service
public class ReviewService {
	
	@Autowired
	private ReviewRepository repository;
	
	@Autowired
	private AuthService authService;
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Transactional
	public ReviewDTO insert(ReviewDTO dto) {
		User user = authService.authenticated();
		Movie movie = movieRepository.getOne(dto.getMovieId());
		Review entity = new Review(null, dto.getText(), user, movie);
		entity = repository.save(entity);
		return new ReviewDTO(entity);
	}

}

