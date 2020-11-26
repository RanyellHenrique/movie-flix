package com.movieFlix.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.movieFlix.entities.Genre;
import com.movieFlix.entities.Movie;
import com.movieFlix.entities.Review;

public class MovieDTO  implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String title;
	private String subTitle;
	private Integer year;
	private String imgUri;
	private String synopsis;
	private GenreDTO genre;
	private List<ReviewDTO> reviews = new ArrayList<>();
	
	public MovieDTO () {
		
	}

	public MovieDTO(Long id, String title, String subTitle, Integer year, String imgUri, String synopsis, Genre genre) {
		this.id = id;
		this.title = title;
		this.subTitle = subTitle;
		this.year = year;
		this.imgUri = imgUri;
		this.synopsis = synopsis;
		this.genre = new GenreDTO(genre);
	}
	
	public MovieDTO(Movie entity) {
		this.id = entity.getId();
		this.title = entity.getTitle();
		this.subTitle = entity.getSubTitle();
		this.year = entity.getYear();
		this.imgUri = entity.getImgUri();
		this.synopsis = entity.getSynopsis();
		this.genre = new GenreDTO(entity.getGenre());
	}
	
	public MovieDTO(Movie entity, Set<Review> reviews) {
		this(entity);
		reviews.forEach(x -> this.reviews.add(new ReviewDTO(x)));
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getSubTitle() {
		return subTitle;
	}

	public void setSubTitle(String subTitle) {
		this.subTitle = subTitle;
	}

	public Integer getYear() {
		return year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}

	public String getImgUri() {
		return imgUri;
	}

	public void setImgUri(String imgUri) {
		this.imgUri = imgUri;
	}

	public String getSynopsis() {
		return synopsis;
	}

	public void setSynopsis(String synopsis) {
		this.synopsis = synopsis;
	}

	public GenreDTO getGenre() {
		return genre;
	}

	public void setGenre(GenreDTO genre) {
		this.genre = genre;
	}

	public List<ReviewDTO> getReviews() {
		return reviews;
	}
	
}
