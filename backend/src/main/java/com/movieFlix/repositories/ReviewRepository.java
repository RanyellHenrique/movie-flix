package com.movieFlix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movieFlix.entities.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {

}
