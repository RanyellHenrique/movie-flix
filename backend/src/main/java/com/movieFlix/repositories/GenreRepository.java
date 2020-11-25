package com.movieFlix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movieFlix.entities.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long> {

}
