package com.movieFlix.dto;

import java.io.Serializable;

import com.movieFlix.entities.Review;

public class ReviewDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String text;
	private UserDTO user;
	private Long movieId;
	
	public ReviewDTO() {
		
	}

	public ReviewDTO(Long id, String text, UserDTO user, MovieDTO movie) {
		this.id = id;
		this.text = text;
		this.user = user;
		movieId = movie.getId();
	}
	
	public ReviewDTO(Review entity) {
		id = entity.getId();
		text = entity.getText();
		user = new UserDTO(entity.getUser());
		movieId = entity.getId();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

}
