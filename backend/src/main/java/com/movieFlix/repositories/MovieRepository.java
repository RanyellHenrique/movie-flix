package com.movieFlix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movieFlix.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
