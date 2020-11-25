package com.movieFlix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.movieFlix.entities.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

}
